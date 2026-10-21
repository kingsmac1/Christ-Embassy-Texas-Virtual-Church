// Run with: deno run -A --no-check scripts/test-functions.ts
// Loads each Edge Function handler in-process with fake secrets and a stubbed fetch (no real Resend/Stripe calls).
import { createHmac } from "node:crypto";

Deno.env.set("RESEND_API_KEY", "re_test");
Deno.env.set("OWNER_EMAIL", "church@example.test");
Deno.env.set("FROM_EMAIL", "site@example.test");
Deno.env.set("SITE_URL", "https://site.example.test");
Deno.env.set("STRIPE_SECRET_KEY", "sk_test_123");
Deno.env.set("STRIPE_WEBHOOK_SECRET", "whsec_test");

const sent: { to: string[]; subject: string; reply_to?: string }[] = [];
const stripeBodies: string[] = [];
const realFetch = globalThis.fetch;
globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = String(input instanceof Request ? input.url : input);
  if (url.startsWith("https://api.resend.com/emails")) {
    sent.push(JSON.parse(String(init?.body)));
    return new Response(JSON.stringify({ id: "x" }), { status: 200 });
  }
  if (url.includes("api.stripe.com/v1/checkout/sessions/")) {
    return new Response(
      JSON.stringify({
        id: "cs_test_ABCDEFGHIJ",
        object: "checkout.session",
        amount_total: 4400,
        customer_details: {
          email: "buyer@example.test",
          name: "Buyer",
          address: { line1: "1 Main", city: "Houston", state: "TX", postal_code: "77072", country: "US" },
        },
        line_items: { data: [{ description: "HOW TO PRAY EFFECTIVELY", quantity: 2, price: { unit_amount: 2200 }, amount_total: 4400 }] },
      }),
      { status: 200, headers: { "content-type": "application/json" } },
    );
  }
  if (url.includes("api.stripe.com/v1/checkout/sessions")) {
    stripeBodies.push(String(init?.body));
    return new Response(JSON.stringify({ id: "cs_test_x", object: "checkout.session", url: "https://checkout.stripe.test/c/pay" }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }
  return realFetch(input, init);
}) as typeof fetch;

let handler: (req: Request) => Promise<Response> | Response = () => new Response("unset");
// deno-lint-ignore no-explicit-any
(Deno as any).serve = (h: (req: Request) => Promise<Response> | Response) => {
  handler = h;
  return {};
};

let failed = 0;
const check = (name: string, pass: boolean, detail = "") => {
  console.log(`${pass ? "✓" : "✗"} ${name}${detail ? " — " + detail : ""}`);
  if (!pass) failed++;
};
const post = (body: unknown, headers: Record<string, string> = {}) =>
  new Request("http://localhost/fn", { method: "POST", headers: { "content-type": "application/json", ...headers }, body: JSON.stringify(body) });

// ---------- send-form-email ----------
await import("../supabase/functions/send-form-email/index.ts");
const form = handler;
let r = await form(post({ form: "contact", fields: { name: "Ann", phone: "281-965-8970", email: "ann@example.test", message: "Hi" }, website: "" }));
check("send-form-email: valid contact -> 200", r.status === 200);
check("send-form-email: sends exactly 2 emails", sent.length === 2, `${sent.length}`);
check(
  "send-form-email: church email has form name in subject, reply-to = submitter",
  !!sent[0]?.subject.includes("Contact") && sent[0]?.reply_to === "ann@example.test" && sent[0]?.to[0] === "church@example.test",
);
check("send-form-email: confirmation goes to submitter", sent[1]?.to[0] === "ann@example.test");
sent.length = 0;
r = await form(post({ form: "contact", fields: { name: "", phone: "x", email: "bad", message: "" }, website: "" }));
const j = await r.json();
check("send-form-email: invalid input -> 400 with 4 field errors", r.status === 400 && Object.keys(j.errors ?? {}).length === 4, JSON.stringify(j.errors));
check("send-form-email: nothing sent on invalid input", sent.length === 0);
r = await form(post({ form: "contact", fields: { name: "Bot", phone: "281-965-8970", email: "bot@example.test", message: "buy" }, website: "http://spam" }));
check("send-form-email: honeypot -> pretends success but sends nothing", r.status === 200 && sent.length === 0);
r = await form(post({ form: "nope", fields: {} }));
check("send-form-email: unknown form -> 400", r.status === 400);
r = await form(post({ form: "back-to-school", fields: { first: "A", last: "B", phone: "2815550100", level: "Middle" } }));
check("send-form-email: back-to-school without email -> church email only", r.status === 200 && sent.length === 1);
sent.length = 0;
r = await form(post({ form: "newsletter", fields: { email: "n@example.test" } }));
check("send-form-email: newsletter sends 2 emails", r.status === 200 && sent.length === 2);
sent.length = 0;

// ---------- create-checkout-session ----------
await import("../supabase/functions/create-checkout-session/index.ts");
const checkout = handler;
r = await checkout(post({ items: [{ slug: "how-to-pray-effectively", quantity: 2, price: 1, priceCents: 1 }], origin: "http://localhost:5173" }));
const cj = await r.json();
check("create-checkout-session: valid cart -> Stripe url", r.status === 200 && cj.url === "https://checkout.stripe.test/c/pay", JSON.stringify(cj));
const sentToStripe = decodeURIComponent(stripeBodies[0] ?? "");
check("create-checkout-session: price taken from server catalog (2200), not the browser's 1", sentToStripe.includes("unit_amount]=2200") && !sentToStripe.includes("unit_amount]=1&"), sentToStripe.slice(0, 200));
r = await checkout(post({ items: [{ slug: "does-not-exist", quantity: 1 }], origin: "http://localhost:5173" }));
check("create-checkout-session: unknown product -> 400", r.status === 400);
r = await checkout(post({ items: [{ slug: "how-to-pray-effectively", quantity: 999 }], origin: "http://localhost:5173" }));
check("create-checkout-session: absurd quantity -> 400", r.status === 400);
r = await checkout(post({ items: [], origin: "http://localhost:5173" }));
check("create-checkout-session: empty cart -> 400", r.status === 400);
Deno.env.set("STRIPE_SECRET_KEY", "sk_live_nope");
r = await checkout(post({ items: [{ slug: "how-to-pray-effectively", quantity: 1 }], origin: "http://localhost:5173" }));
check("create-checkout-session: live key refused (test mode only)", r.status === 503);
Deno.env.set("STRIPE_SECRET_KEY", "sk_test_123");

// ---------- stripe-webhook ----------
await import("../supabase/functions/stripe-webhook/index.ts");
const hook = handler;
const payload = JSON.stringify({
  id: "evt_1",
  object: "event",
  type: "checkout.session.completed",
  data: { object: { id: "cs_test_ABCDEFGHIJ", object: "checkout.session" } },
});
const sign = (body: string, secret: string) => {
  const t = Math.floor(Date.now() / 1000);
  return `t=${t},v1=${createHmac("sha256", secret).update(`${t}.${body}`).digest("hex")}`;
};
r = await hook(new Request("http://localhost/hook", { method: "POST", headers: { "stripe-signature": sign(payload, "whsec_wrong") }, body: payload }));
check("stripe-webhook: bad signature -> 400, no emails", r.status === 400 && sent.length === 0);
r = await hook(new Request("http://localhost/hook", { method: "POST", body: payload }));
check("stripe-webhook: missing signature -> 400", r.status === 400);
r = await hook(new Request("http://localhost/hook", { method: "POST", headers: { "stripe-signature": sign(payload, "whsec_test") }, body: payload }));
check("stripe-webhook: valid signature -> 200", r.status === 200, String(r.status));
check(
  "stripe-webhook: emails the church AND the customer",
  sent.length === 2 && sent[0]?.to[0] === "church@example.test" && sent[1]?.to[0] === "buyer@example.test",
  JSON.stringify(sent.map((s) => s.to)),
);

console.log(failed ? `\n${failed} FAILED` : "\nall function checks passed");
Deno.exit(failed ? 1 : 0);
