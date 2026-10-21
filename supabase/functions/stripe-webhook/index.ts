// Supabase Edge Function: stripe-webhook
// Verifies Stripe's signature, then emails the customer and the church via Resend.
// Secrets: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, RESEND_API_KEY, OWNER_EMAIL, FROM_EMAIL
// Deploy with "Verify JWT" turned OFF (Stripe does not send a Supabase token).
import Stripe from "https://esm.sh/stripe@17.7.0?target=denonext";
import { requireEnv, sendEmail } from "./shared/resend.ts";
import { customerOrderEmail } from "./shared/email-templates/order-customer.ts";
import { churchOrderEmail } from "./shared/email-templates/order-church.ts";

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const signature = req.headers.get("stripe-signature");
  if (!signature) return new Response("Missing signature", { status: 400 });

  const stripe = new Stripe(requireEnv("STRIPE_SECRET_KEY"), { httpClient: Stripe.createFetchHttpClient() });
  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(
      rawBody,
      signature,
      requireEnv("STRIPE_WEBHOOK_SECRET"),
      undefined,
      Stripe.createSubtleCryptoProvider(),
    );
  } catch (err) {
    console.error("Invalid Stripe signature:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    try {
      const full = await stripe.checkout.sessions.retrieve(session.id, { expand: ["line_items"] });
      const lines = (full.line_items?.data ?? []).map((l: Stripe.LineItem) => ({
        name: l.description ?? "Item",
        quantity: l.quantity ?? 1,
        unitCents: l.price?.unit_amount ?? Math.round((l.amount_total ?? 0) / (l.quantity || 1)),
      }));
      const totalCents = full.amount_total ?? 0;
      const orderId = full.id.slice(-10).toUpperCase();
      const customerEmail = full.customer_details?.email ?? "";
      const customerName = full.customer_details?.name ?? "";
      const a = full.shipping_details?.address ?? full.customer_details?.address;
      const shipping = a
        ? [a.line1, a.line2, a.city, a.state, a.postal_code, a.country].filter(Boolean).join(", ")
        : "";

      await sendEmail({
        to: requireEnv("OWNER_EMAIL"),
        replyTo: customerEmail || undefined,
        ...churchOrderEmail({ orderId, customerName, customerEmail, shipping, lines, totalCents }),
      });
      if (customerEmail) {
        await sendEmail({ to: customerEmail, ...customerOrderEmail({ name: customerName, orderId, lines, totalCents }) });
      }
    } catch (err) {
      console.error("stripe-webhook email failed:", err);
      // Non-2xx makes Stripe retry the delivery.
      return new Response("Email failed", { status: 500 });
    }
  }

  return new Response(JSON.stringify({ received: true }), { headers: { "Content-Type": "application/json" } });
});
