// Behaviour checks: navigation, mobile menu, links, cart, forms and checkout request shape.
// Usage: node scripts/e2e-check.mjs http://localhost:5200 http://localhost:5201   (second server has mock Supabase env)
import { chromium } from "playwright";
import fs from "fs";

const [base, mockBase] = process.argv.slice(2);
const results = [];
const ok = (name, pass, detail = "") => {
  results.push({ name, pass, detail });
  console.log(`${pass ? "✓" : "✗"} ${name}${detail ? "  — " + detail : ""}`);
};
const browser = await chromium.launch();
const settle = async (p) => { await p.waitForLoadState("networkidle").catch(() => {}); await p.waitForTimeout(3300); };

// ---- 1. header menu (desktop) ----
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(base + "/", { waitUntil: "load" }); await settle(p);
  for (const [label, path] of [["About Loveworld", "/about-loveworld/"], ["Our Ministry", "/our-ministry/"], ["Contact", "/contact/"], ["Live Stream", "/live-stream/"], ["Store", "/ourstore/"], ["Home", "/"]]) {
    await p.locator("header nav[aria-label=Main]").getByRole("link", { name: label, exact: true }).click();
    await p.waitForTimeout(700);
    ok(`menu "${label}" -> ${path}`, new URL(p.url()).pathname === path, new URL(p.url()).pathname);
  }
  await p.locator("header").getByRole("link", { name: /Donate/ }).first().click(); await p.waitForTimeout(700);
  ok('header "Donate" -> /donate/', new URL(p.url()).pathname === "/donate/");
  await p.getByRole("link", { name: /^Cart/ }).first().click(); await p.waitForTimeout(700);
  ok("cart icon -> /cart/", new URL(p.url()).pathname === "/cart/");
  await ctx.close();
}

// ---- 2. mobile menu ----
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const p = await ctx.newPage();
  await p.goto(base + "/", { waitUntil: "load" }); await settle(p);
  await p.getByRole("button", { name: "Open menu" }).click(); await p.waitForTimeout(800);
  const links = await p.locator("[role=dialog] nav a").allTextContents();
  ok("mobile menu opens with all 7 links", links.length === 7, links.join(" | "));
  await p.keyboard.press("Escape"); await p.waitForTimeout(700);
  ok("mobile menu closes with Escape", (await p.locator("[role=dialog]").count()) === 0);
  await p.getByRole("button", { name: "Open menu" }).click(); await p.waitForTimeout(800);
  await p.locator("[role=dialog] nav").getByRole("link", { name: "Store" }).click(); await p.waitForTimeout(900);
  ok("mobile menu link navigates and closes", new URL(p.url()).pathname === "/ourstore/" && (await p.locator("[role=dialog]").count()) === 0);
  const overflow = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  ok("no horizontal scroll at 390px (store)", !overflow);
  await ctx.close();
}

// ---- 3. internal links all resolve ----
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  const paths = fs.readFileSync("my-site-reference/sitemap-page.txt", "utf8").split("\n").filter(Boolean)
    .concat(fs.readFileSync("my-site-reference/sitemap-product.txt", "utf8").split("\n").filter(Boolean))
    .map((u) => new URL(u).pathname).filter((x, i, a) => a.indexOf(x) === i);
  const internal = new Set(); const external = new Set(); const pageStatus = [];
  for (const path of paths) {
    const r = await p.goto(base + path, { waitUntil: "load" });
    pageStatus.push([path, r?.status()]);
    await p.waitForTimeout(300);
    const hrefs = await p.evaluate(() => [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")));
    for (const h of hrefs) {
      if (!h || h.startsWith("#") || h.startsWith("mailto:") || h.startsWith("tel:")) continue;
      if (h.startsWith("/")) internal.add(h.split("#")[0]); else external.add(h);
    }
  }
  const badPages = pageStatus.filter(([, s]) => s !== 200);
  ok(`all ${paths.length} original page URLs return 200`, badPages.length === 0, JSON.stringify(badPages));
  const bad = [];
  for (const h of internal) { const r = await p.request.get(base + h); if (r.status() >= 400) bad.push(`${h} (${r.status()})`); }
  ok(`${internal.size} distinct internal links resolve`, bad.length === 0, bad.join(", "));
  fs.writeFileSync("my-site-reference/external-links.txt", [...external].sort().join("\n"));
  // external links are checked with HEAD/GET where the host allows it
  const extBad = [];
  for (const h of external) {
    try { const r = await fetch(h, { method: "GET", redirect: "follow", signal: AbortSignal.timeout(15000), headers: { "user-agent": "Mozilla/5.0" } }); if (r.status >= 400 && r.status !== 403 && r.status !== 429) extBad.push(`${h} (${r.status})`); } catch (e) { extBad.push(`${h} (${e.cause?.code ?? e.message})`); }
  }
  ok(`${external.size} external links respond`, extBad.length === 0, extBad.join(" ; "));
  await ctx.close();
}

// ---- 4. cart ----
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(base + "/product/how-to-pray-effectively/", { waitUntil: "load" }); await settle(p);
  await p.getByRole("button", { name: "Increase quantity" }).click();
  await p.getByRole("button", { name: "Add to cart" }).click();
  await p.waitForTimeout(400);
  ok("add to cart shows confirmation", (await p.getByText("Added.").count()) > 0);
  await p.goto(base + "/product/the-power-of-tongues/", { waitUntil: "load" }); await p.waitForTimeout(1500);
  await p.getByRole("button", { name: "Add to cart" }).click(); await p.waitForTimeout(300);
  const badge = await p.locator("header a[aria-label^=Cart]").first().getAttribute("aria-label");
  ok("cart badge counts items (2 + 1 = 3)", /3 items/.test(badge ?? ""), badge ?? "");
  await p.goto(base + "/cart/", { waitUntil: "load" }); await p.waitForTimeout(1500);
  ok("cart lists both products", (await p.locator('ul[aria-label="Cart items"] li').count()) === 2);
  ok("subtotal is 2×$22.00 + $10.00 = $54.00", (await p.locator("text=$54.00").count()) > 0);
  await p.reload({ waitUntil: "load" }); await p.waitForTimeout(1800);
  ok("cart persists after refresh", (await p.locator('ul[aria-label="Cart items"] li').count()) === 2);
  await p.getByRole("button", { name: /Increase quantity of THE POWER OF TONGUES/i }).click(); await p.waitForTimeout(200);
  ok("quantity change updates subtotal ($64.00)", (await p.locator("text=$64.00").count()) > 0);
  await p.getByRole("button", { name: /Remove HOW TO PRAY EFFECTIVELY/i }).click(); await p.waitForTimeout(300);
  ok("remove item works", (await p.locator('ul[aria-label="Cart items"] li').count()) === 1);
  await p.goto(base + "/cart/", { waitUntil: "load" }); await p.waitForTimeout(1500);
  ok("removal persisted", (await p.locator('ul[aria-label="Cart items"] li').count()) === 1);
  await p.getByRole("button", { name: /Remove THE POWER OF TONGUES/i }).click(); await p.waitForTimeout(300);
  ok("empty cart message", (await p.getByText("Your cart is currently empty.").count()) === 1);
  await ctx.close();
}

// ---- 5. forms: validation + request shape with a mocked Supabase ----
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  const calls = [];
  await p.route("**/functions/v1/**", async (route) => {
    const req = route.request();
    if (req.method() === "OPTIONS") return route.fulfill({ status: 204, headers: { "access-control-allow-origin": "*", "access-control-allow-headers": "*", "access-control-allow-methods": "POST,OPTIONS" } });
    calls.push({ url: req.url(), body: req.postDataJSON() });
    const fn = req.url().split("/functions/v1/")[1];
    const body = fn.startsWith("create-checkout-session") ? { url: mockBase + "/checkout/success/?session_id=cs_test_mock" } : { ok: true };
    return route.fulfill({ status: 200, headers: { "access-control-allow-origin": "*", "content-type": "application/json" }, body: JSON.stringify(body) });
  });

  await p.goto(mockBase + "/contact/", { waitUntil: "load" }); await settle(p);
  await p.locator("form[aria-label=contact]").getByRole("button", { name: "Submit" }).click(); await p.waitForTimeout(300);
  ok("contact form: empty submit shows required errors", (await p.locator("form[aria-label=contact] [role=alert]").count()) === 4);
  await p.fill("#contact-name", "Test Person"); await p.fill("#contact-phone", "281-555-0100"); await p.fill("#contact-email", "not-an-email"); await p.fill("#contact-message", "Hello");
  await p.locator("form[aria-label=contact]").getByRole("button", { name: "Submit" }).click(); await p.waitForTimeout(300);
  ok("contact form: invalid email is rejected in the browser", (await p.getByText("valid email address").count()) > 0 && calls.length === 0);
  await p.fill("#contact-email", "test@example.com");
  await p.locator("form[aria-label=contact]").getByRole("button", { name: "Submit" }).click(); await p.waitForTimeout(900);
  const c = calls.find((x) => x.url.includes("send-form-email"));
  ok("contact form: posts to send-form-email with form + fields + honeypot", !!c && c.body.form === "contact" && c.body.fields.email === "test@example.com" && c.body.website === "", JSON.stringify(c?.body));
  ok("contact form: success modal appears", (await p.getByRole("dialog").count()) > 0);
  await p.keyboard.press("Escape");

  // honeypot filled by a bot is sent along so the server can drop it
  await p.goto(mockBase + "/prayer-of-salvation/", { waitUntil: "load" }); await p.waitForTimeout(1500);
  await p.fill("#salvation-name", "Bot"); await p.fill("#salvation-phone", "281-555-0100"); await p.fill("#salvation-email", "bot@example.com");
  await p.locator("form[aria-label=salvation] input[name=website]").evaluate((el) => { el.value = "spam"; });
  await p.locator("form[aria-label=salvation]").getByRole("button", { name: "Submit" }).click(); await p.waitForTimeout(700);
  const s = calls.filter((x) => x.url.includes("send-form-email")).at(-1);
  ok("salvation form: honeypot value reaches the server", s?.body.form === "salvation" && s?.body.website === "spam");

  // newsletter in the footer
  await p.goto(mockBase + "/donate/", { waitUntil: "load" }); await p.waitForTimeout(1500);
  await p.fill("#footer-newsletter", "news@example.com");
  await p.locator("form[aria-label=Newsletter]").getByRole("button", { name: "Subscribe" }).click(); await p.waitForTimeout(700);
  const n = calls.filter((x) => x.url.includes("send-form-email")).at(-1);
  ok("newsletter: posts form=newsletter", n?.body.form === "newsletter" && n?.body.fields.email === "news@example.com");

  // sunday special + back to school
  await p.goto(mockBase + "/sunday-special/", { waitUntil: "load" }); await p.waitForTimeout(1500);
  const sp = { firstName: "A", lastName: "B", mobile: "2815550100", invitedBy: "C", member: "Yes", email: "a@example.com", prayerRequest: "Pray" };
  for (const [k, v] of Object.entries(sp)) await p.fill(`#sunday-special-${k}`, v);
  await p.locator("form[aria-label=sunday-special]").getByRole("button", { name: "Submit" }).click(); await p.waitForTimeout(700);
  ok("sunday special: posts all 7 fields", Object.keys(calls.filter((x) => x.url.includes("send-form-email")).at(-1)?.body.fields ?? {}).length === 7);
  await p.goto(mockBase + "/back-to-school/", { waitUntil: "load" }); await p.waitForTimeout(1500);
  await p.fill("#back-to-school-first", "A"); await p.fill("#back-to-school-last", "B"); await p.fill("#back-to-school-phone", "2815550100");
  await p.locator("form[aria-label=back-to-school]").getByRole("button", { name: "Submit" }).click(); await p.waitForTimeout(300);
  ok("back to school: category radio is required", (await p.getByText("This field is required.").count()) === 1);
  await p.getByText("Middle", { exact: true }).click();
  await p.locator("form[aria-label=back-to-school]").getByRole("button", { name: "Submit" }).click(); await p.waitForTimeout(700);
  ok("back to school: submits with category", calls.filter((x) => x.url.includes("send-form-email")).at(-1)?.body.fields.level === "Middle");

  // checkout sends only slugs and quantities
  await p.goto(mockBase + "/product/the-gates-of-zion/", { waitUntil: "load" }); await p.waitForTimeout(1500);
  await p.getByRole("button", { name: "Add to cart" }).click();
  await p.goto(mockBase + "/cart/", { waitUntil: "load" }); await p.waitForTimeout(1500);
  await p.getByRole("button", { name: "Proceed to checkout" }).click(); await p.waitForTimeout(1500);
  const co = calls.find((x) => x.url.includes("create-checkout-session"));
  ok("checkout: request has only slug + quantity (no prices) and origin", !!co && JSON.stringify(Object.keys(co.body).sort()) === '["items","origin"]' && JSON.stringify(Object.keys(co.body.items[0]).sort()) === '["quantity","slug"]', JSON.stringify(co?.body));
  ok("checkout: redirects to the returned Stripe URL, then success page clears cart", new URL(p.url()).pathname === "/checkout/success/");
  await p.waitForTimeout(800);
  ok("cart cleared on success", (await p.locator("header a[aria-label^=Cart]").first().getAttribute("aria-label"))?.includes("0 items") ?? false);
  await ctx.close();
}

// ---- 6. unconfigured Supabase shows a friendly error ----
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(base + "/contact/", { waitUntil: "load" }); await settle(p);
  await p.fill("#contact-name", "T"); await p.fill("#contact-phone", "2815550100"); await p.fill("#contact-email", "t@example.com"); await p.fill("#contact-message", "m");
  await p.locator("form[aria-label=contact]").getByRole("button", { name: "Submit" }).click(); await p.waitForTimeout(500);
  ok("placeholder keys: form shows a friendly error (no crash)", (await p.getByText("not connected yet").count()) > 0);
  await ctx.close();
}

await browser.close();
const failed = results.filter((r) => !r.pass);
console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
fs.writeFileSync("my-site-reference/e2e-report.json", JSON.stringify(results, null, 1));
process.exit(failed.length ? 1 : 0);
