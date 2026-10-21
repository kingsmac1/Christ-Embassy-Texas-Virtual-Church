// Layout/console check: every page at 1440px and 390px must have no horizontal overflow, no broken images, no console errors.
import { chromium } from "playwright";
import fs from "fs";
const base = process.argv[2] ?? "http://localhost:5200";
const paths = ["/", ...fs.readFileSync("my-site-reference/sitemap-page.txt", "utf8").split("\n").filter(Boolean).concat(fs.readFileSync("my-site-reference/sitemap-product.txt", "utf8").split("\n").filter(Boolean)).map((u) => new URL(u).pathname), "/checkout/success/", "/checkout/cancelled/", "/2023/10/", "/category/uncategorized/"].filter((x, i, a) => a.indexOf(x) === i);
const b = await chromium.launch();
let bad = 0;
for (const w of [1440, 390]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 844 } });
  for (const path of paths) {
    const p = await ctx.newPage();
    const errors = [];
    p.on("console", (m) => { if (m.type() === "error" && !/youtube|googleapis|ERR_BLOCKED|Failed to load resource.*(youtube|google)/i.test(m.text())) errors.push(m.text().slice(0, 140)); });
    p.on("pageerror", (e) => errors.push("pageerror: " + e.message.slice(0, 140)));
    await p.goto(base + path, { waitUntil: "load" }); await p.waitForTimeout(1500);
    await p.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 500) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } });
    await p.waitForTimeout(600);
    const r = await p.evaluate(() => ({
      overflow: document.documentElement.scrollWidth - window.innerWidth,
      broken: [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src.slice(-60)),
      h1: document.querySelectorAll("h1").length,
    }));
    const issues = [];
    if (r.overflow > 1) issues.push(`horizontal overflow ${r.overflow}px`);
    if (r.broken.length) issues.push(`broken images: ${r.broken.join(", ")}`);
    if (r.h1 !== 1) issues.push(`${r.h1} <h1> elements`);
    if (errors.length) issues.push(`console: ${errors.join(" | ")}`);
    if (issues.length) { bad++; console.log(`✗ ${w}px ${path}\n    ${issues.join("\n    ")}`); }
    await p.close();
  }
  await ctx.close();
}
await b.close();
console.log(bad ? `\n${bad} page/width combinations with issues` : `\nall ${paths.length} pages × 2 widths clean`);
