// CONTENT CHECK: compares every page of the new site against the WordPress content export.
// Usage: node scripts/check-content.mjs http://localhost:5200
import { chromium } from "playwright";
import fs from "fs";

const base = process.argv[2] ?? "http://localhost:5200";
const R = "my-site-reference/content-json";
const norm = (s) => s.replace(/ /g, " ").replace(/[​]/g, "").replace(/\s+/g, " ").trim();
const plain = (html) => norm(html.replace(/<br\s*\/?>/g, " ").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&#39;/g, "'").replace(/&quot;/g, '"'));
const pathOf = (slug) => (slug === "home" ? "/" : slug.startsWith("product__") ? `/product/${slug.slice(9)}/` : `/${slug}/`);
const rel = (v) => v.replace(/https?:\/\/(www\.)?christembassytexasvirtualchurch\.com(\/[^"]*)?/g, (_m, _w, p) => p || "/");
const imgFile = (src) => (src.split("/").pop() ?? "").replace(/\.\w+$/, "");

// Text blocks that are rebuilt as UI (not copied verbatim) or intentionally replaced:
const SKIP_TEXT = new Set(["000", "00", ":", "Day(s)", "Hour(s)", "Minute(s)", "Second(s)"]);

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
let problems = 0, checked = 0;
const report = [];
for (const f of fs.readdirSync(R).sort()) {
  const slug = f.replace(".json", "");
  const path = pathOf(slug);
  const blocks = JSON.parse(fs.readFileSync(`${R}/${f}`, "utf8")).map((b) => ({ ...b, ...(b.html ? { html: rel(b.html) } : {}), ...(b.href ? { href: rel(b.href) } : {}) }));
  const page = await ctx.newPage();
  await page.goto(base + path, { waitUntil: "networkidle" }).catch(() => {});
  await page.waitForTimeout(500);
  let extraHtml = "";
  const pagers = page.locator('nav[aria-label="Gallery pages"] button');
  const nPagers = await pagers.count();
  for (let i = 0; i < nPagers; i++) {
    const label = (await pagers.nth(i).textContent())?.trim() ?? "";
    if (/^\d+$/.test(label)) { await pagers.nth(i).click(); await page.waitForTimeout(150); extraHtml += await page.locator("ul.grid").first().innerHTML(); }
  }
  const dom = await page.evaluate(() => ({
    text: document.body.textContent ?? "",
    html: document.documentElement.outerHTML,
    hrefs: [...document.querySelectorAll("a")].map((a) => ({ t: (a.textContent ?? "").replace(/\s+/g, " ").trim(), h: a.getAttribute("href") ?? "" })),
  }));
  const text = norm(dom.text).replace(/\s/g, "");
  const missing = [];
  for (const b of blocks) {
    if (b.type === "heading" || b.type === "p" || b.type === "li") {
      const t = plain(b.html);
      if (!t || SKIP_TEXT.has(t)) continue;
      // Footer variants (wide logo, "Give" link, address) and price lines are covered by the shared footer / product data.
      if (/^Christ Embassy Wilcrest 6111A/.test(t) || t === "Give" || /^\$\d+\.\d\d( Original price)?/.test(t)) continue;
      // product listing rows and WP-only widgets are rebuilt from data; check the key text only
      if (b.type === "li" && slug === "ourstore") continue;
      if (b.type === "li" && /Sale!/.test(t)) continue;
      // Live Stream was an empty WordPress page with only sidebar widgets; it is replaced by the new live-stream page.
      if (slug === "live-stream") continue;
      if (slug === "home" && (t === "Prev" || t === "Next")) continue;
      checked++;
      if (!text.includes(t.replace(/\s/g, ""))) missing.push(`${b.type}: ${t.slice(0, 90)}`);
    } else if (b.type === "button") {
      checked++;
      const ok = dom.hrefs.some((a) => a.t === norm(b.text) && (a.h === b.href || a.h === b.href.replace(/^https:\/\/christembassytexasvirtualchurch\.com/, "")));
      if (!ok) missing.push(`button: ${b.text} -> ${b.href}`);
    } else if (b.type === "image" || b.type === "bg" || b.type === "sectionbg") {
      if (/CETVC-LOGO\.png$/.test(b.src)) continue; // product-page footer logo variant
      checked++;
      if (!(dom.html + extraHtml).includes(imgFile(b.src))) missing.push(`image: ${b.src}`);
    } else if (b.type === "iframe") {
      checked++;
      if (!dom.html.includes(b.src.replace(/&/g, "&amp;")) && !dom.html.includes(b.src)) missing.push(`iframe: ${b.src.slice(0, 80)}`);
    }
  }
  // links inside paragraphs
  for (const b of blocks) {
    if ((b.type === "p" || b.type === "heading") && b.html.includes("<a ")) {
      for (const m of b.html.matchAll(/<a href="([^"]*)"/g)) {
        if (slug.startsWith("product__") && /^(\/our-ministry|\/contact|\/give|https:\/\/live\.|Tel:)/i.test(m[1])) continue; // footer variant
        if (m[1] === "https://christembassytexasvirtualchurch.com/wp-admin/" || m[1] === "/wp-admin/") continue;
        checked++;
        if (!dom.hrefs.some((a) => a.h.toLowerCase() === m[1].toLowerCase() || a.h === m[1].replace(/&amp;/g, "&"))) missing.push(`link: ${m[1]}`);
      }
    }
  }
  problems += missing.length;
  report.push({ slug, path, missing });
  console.log(missing.length ? `✗ ${path}  (${missing.length} missing)` : `✓ ${path}`);
  missing.forEach((m) => console.log("     - " + m));
  await page.close();
}
await browser.close();
console.log(`\nChecked ${checked} items, ${problems} problems.`);
fs.writeFileSync("my-site-reference/content-check-report.json", JSON.stringify(report, null, 1));
process.exit(problems ? 1 : 0);
