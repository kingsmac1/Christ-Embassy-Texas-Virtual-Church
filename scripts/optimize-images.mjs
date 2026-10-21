// Re-creates every site image from the full-size originals in my-site-reference/images as an
// optimised, resized WebP in public/images, and shrinks the logo/favicons.
// Run: node scripts/optimize-images.mjs   (then node scripts/build-content.mjs && node scripts/build-data.mjs)
import sharp from "sharp";
import fs from "fs";
import path from "path";

const SRC = "my-site-reference/images";
const OUT = "public/images";

// Names referenced by the site: collected from the generated data + components (extension-agnostic).
const used = new Set();
const scan = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) scan(p);
    else if (/\.(tsx?|css)$/.test(e.name)) for (const m of fs.readFileSync(p, "utf8").matchAll(/\/images\/([A-Za-z0-9_.%-]+)\.(png|jpe?g|webp)/g)) used.add(m[1]);
  }
};
scan("src");

const widthFor = (stem) => {
  if (/Pastorchris1/.test(stem)) return 900; // portrait cut-out in the hero
  if (/Rhapsody-Logo|Loveworld-USA|Kingschat/.test(stem)) return 450; // app logos shown at ~160px
  if (/Audience|Banner/.test(stem)) return 1920; // full-width banners
  if (/Pastorchris$|IMG_0791|a41a9609|WhatsApp-Image-2023-12-19|03729a65|rhap$/.test(stem)) return 1400; // ministry photos
  if (/0S2B|WhatsApp-Image-2024|IMG_5764|Reachout-USA-Today/.test(stem)) return 1100; // gallery tiles
  if (/e-card|E-card|Back-to-school|Reachout/.test(stem)) return 1000; // event cards
  return 900; // product covers etc. (originals are 200px, never enlarged)
};

let before = 0, after = 0, n = 0;
const files = fs.readdirSync(SRC);
for (const stem of [...used].sort()) {
  const file = files.find((f) => path.parse(f).name === stem);
  if (!file) { console.warn("missing original for", stem); continue; }
  const input = path.join(SRC, file);
  const hasAlpha = (await sharp(input).metadata()).hasAlpha;
  const buf = await sharp(input)
    .rotate()
    .resize({ width: widthFor(stem), withoutEnlargement: true })
    .webp({ quality: hasAlpha ? 88 : 76, alphaQuality: 92, effort: 6, smartSubsample: true })
    .toBuffer();
  fs.writeFileSync(path.join(OUT, `${stem}.webp`), buf);
  const old = path.join(OUT, file);
  before += fs.existsSync(old) ? fs.statSync(old).size : fs.statSync(input).size;
  after += buf.length; n++;
  if (fs.existsSync(old) && path.extname(file) !== ".webp") fs.unlinkSync(old);
}

// Logo (also used in emails, so it stays a PNG) and favicons
const png = (input, out, size) => sharp(input).resize(size, size, { fit: "inside" }).png({ palette: true, quality: 90, effort: 10, compressionLevel: 9 }).toFile(out);
const logoSrc = path.join(SRC, "2024__07__CETVC-Logo-New2-1.png");
const iconSrc = path.join(SRC, "2024__07__cropped-CETVC-Logo-New2-1.png");
await png(logoSrc, "public/logo.png", 288);
await png(iconSrc, "public/favicon-32.png", 32);
await png(iconSrc, "public/favicon-192.png", 192);
await png(iconSrc, "public/apple-touch-icon.png", 180);
await png(path.join(SRC, "2024__03__cropped-CETVC1-Logo-New-1.png"), "public/favicon-512.png", 512);

console.log(`${n} images: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`);
