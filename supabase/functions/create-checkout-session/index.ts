// Supabase Edge Function: create-checkout-session
// The browser sends only { items: [{ slug, quantity, variation? }], origin }.
// Prices are looked up HERE from the server-side catalog, never from the browser.
// Secret: STRIPE_SECRET_KEY (use a Stripe TEST key: sk_test_...)
import Stripe from "https://esm.sh/stripe@17.7.0?target=denonext";
import { corsHeaders, json } from "./shared/cors.ts";
import { CATALOG } from "./catalog.ts";

const MAX_QTY = 20;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const secret = Deno.env.get("STRIPE_SECRET_KEY");
  if (!secret) return json({ error: "Checkout is not configured yet." }, 503);
  if (!secret.startsWith("sk_test_")) {
    return json({ error: "Only Stripe TEST keys (sk_test_...) are allowed until the site is switched to live mode on purpose." }, 503);
  }

  let body: { items?: { slug?: string; quantity?: number; variation?: string }[]; origin?: string };
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const items = Array.isArray(body.items) ? body.items : [];
  if (!items.length || items.length > 50) return json({ error: "Your cart is empty." }, 400);

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  const metadata: Record<string, string> = {};
  for (const [i, item] of items.entries()) {
    const product = CATALOG[String(item.slug)];
    const quantity = Math.floor(Number(item.quantity));
    if (!product || !Number.isFinite(quantity) || quantity < 1 || quantity > MAX_QTY) {
      return json({ error: "One of the items in your cart is no longer available." }, 400);
    }
    if (product.stripePriceId) {
      lineItems.push({ price: product.stripePriceId, quantity });
    } else {
      lineItems.push({
        quantity,
        price_data: {
          currency: "usd",
          unit_amount: product.priceCents,
          product_data: { name: product.name },
        },
      });
    }
    metadata[`item_${i}`] = `${product.slug} x${quantity}`;
  }

  // Only allow redirects back to the site that called us.
  const origin = typeof body.origin === "string" && /^https?:\/\/[^\s/]+$/.test(body.origin) ? body.origin : "";
  if (!origin) return json({ error: "Missing origin." }, 400);

  try {
    const stripe = new Stripe(secret, { httpClient: Stripe.createFetchHttpClient() });
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      shipping_address_collection: { allowed_countries: ["US", "CA", "GB", "NG"] },
      phone_number_collection: { enabled: true },
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancelled`,
      metadata,
    });
    return json({ url: session.url });
  } catch (err) {
    console.error("create-checkout-session failed:", err);
    return json({ error: "We could not start checkout. Please try again." }, 502);
  }
});
