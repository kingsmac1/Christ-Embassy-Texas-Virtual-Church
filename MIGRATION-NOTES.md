# MIGRATION-NOTES

Progress log for the rebuild of https://christembassytexasvirtualchurch.com in React (TanStack Start + Vite + Tailwind, Cloudflare Pages, Supabase).
**If interrupted: read this file first and continue from the next unchecked item.** Everything below marked `[x]` was built AND passed the content check + style check.

## Reference projects used (READ-ONLY, never modified)
| Role | Path | Note |
|---|---|---|
| Grace and Light (STYLE) | `/Users/macbook/Documents/Website Codes/grace-and-light-demo` | There is no folder starting with `graceandlightchurch`. `grace-and-light-demo` is the only Grace and Light project (its README names graceandlightchurch.co.uk). |
| FLC USA (livestream structure) | `/Users/macbook/Documents/Website Codes/flcusa-new` | Folders starting with `flcusa`: `flcusa-new` and `flcusa-2` (identical). A third, `flc-usa-website`, is a longer later variant but does not start with "flcusa". Chosen: `flcusa-new`. |
| Working copies | `reference-copies/grace-and-light-demo`, `reference-copies/flcusa-new` | The Grace and Light copy was installed and run on :5191 (its `.env` was removed; home-page data stubbed IN THE COPY ONLY so every section renders). |

Original site export: `my-site-reference/` (html, images, api, content-inventory/*.md, content-json/*.json, screenshots, grace-and-light-screenshots, new-screenshots, DESIGN-SYSTEM.md).

## Checklist
### Foundation
- [x] Part 1: sitemap (41 URLs), rendered HTML, 306 images at largest size, WP REST + WooCommerce Store API (25 products), SEO tags, 1440/390 screenshots, content inventories (42 pages)
- [x] Part 2: DESIGN-SYSTEM.md, Grace and Light copy run + screenshots (12 pages × 2 widths)
- [x] Design system (tokens, fonts, buttons, cards, Reveal/Parallax/Bokeh/Preloader/PageTransition/Lenis), header, mobile menu, footer
### Pages
- [x] Home `/`
- [x] About Loveworld `/about-loveworld/`
- [x] Our Ministry `/our-ministry/`
- [x] Contact `/contact/`
- [x] Donate `/donate/`
- [x] Prayer of Salvation `/prayer-of-salvation/`
- [x] Live Stream `/live-stream/` (new feature, menu points here)
- [x] Store `/ourstore/`
- [x] 25 product pages `/product/<slug>/`
- [x] Cart `/cart/` (+ `/checkout/`, same "Your Cart" page as the original)
- [x] Checkout result pages `/checkout/success/`, `/checkout/cancelled/`
- [x] Extra original pages: `/sunday-special/`, `/back-to-school/`, `/thank-you-page/`, `/prayer/`, `/sample-page/`, `/my-account/`, `/hello-world/` (+ `/2023/10/`, `/category/uncategorized/` archive links)
### Backend
- [x] `send-form-email` Edge Function (+ templates in `_shared/email-templates/`)
- [x] `create-checkout-session` Edge Function (server-side prices)
- [x] `stripe-webhook` Edge Function (signature verified, emails customer + church)
- [x] `supabase/migrations/001_livestream_comments.sql`
### Checks
- [x] CONTENT CHECK `node scripts/check-content.mjs` : every heading, paragraph, image, button, link of all 41 pages present (626 items)
- [x] STYLE CHECK: all pages screenshotted at 1440 / 390 into `my-site-reference/new-screenshots`, compared with `grace-and-light-screenshots`
- [x] No Grace and Light / FLC USA content (grep of src, public, supabase)
- [x] `node scripts/e2e-check.mjs` menu, mobile menu, internal links, cart (add/remove/qty/persist), every form, checkout request shape
- [x] `node scripts/check-layout.mjs` no horizontal overflow, broken images or console errors on any page at both widths
- [x] `deno run -A --no-check scripts/test-functions.ts` : Edge Function behaviour (validation, honeypot, two emails, server price lookup, live key refused, webhook signature)
- [x] `npm run build` production build (Cloudflare Pages output in `dist/`)

## WordPress sections with no Grace and Light match, and how they were designed
| WordPress section | New design (all in the Grace and Light style) |
|---|---|
| Home hero: text left, Pastor Chris cut-out PNG right, two buttons | Grace and Light hero treatment (dark scrim image at 30%, Bokeh, eyebrow chip "Welcome to", Lora heading with italic blue second line, pill buttons) extended to two columns with the cut-out image bottom-aligned |
| Divi "Our Ministry Apps" toggle cards | White rounded cards with the app logo and a Grace and Light FAQ-style accordion bar (plus icon rotates) |
| Healing Streams / Prayathon / Unending Praise video + text rows | Alternating cream/white split sections, rounded-[1.75rem] video frame with the large soft shadow, text and pill button beside it |
| Paged photo gallery (8 per page, numbered pagination) | Rounded photo tiles with staggered fade-in, hover zoom, pill-style numbered pager |
| Divi countdown (Sunday Special / Back to School) | Dark band with the Grace and Light countdown tiles (digit tiles), showing zeros once the date has passed, as on the original |
| WPForms / Divi registration forms | Grace and Light form fields; on dark bands the inputs use the footer's translucent pill/field style and radio choices become pill toggles |
| Store product tiles (dark navy tile + price) | Dark rounded image panel, Lora uppercase title, struck-through regular price + sale price, hover shadow/zoom |
| Product page, cart, checkout result pages | Image panel + details card layout, cart rows as rounded cards with a deep subtotal card |
| Contact info cards (Call / Address / Email) | Three white rounded cards with round icon chips, same as Grace and Light card pattern |
| WordPress utility pages (Prayer, Sample Page, My account, Hello world!, archives) | Plain page banner + text column + a sidebar of the original widgets (search, recent posts/comments, archives, categories) |
| Live Stream page | Rebuilt from the FLC USA livestream structure (see below) in the Grace and Light style |

## Livestream
- FLC USA structure copied: heading band → [player card | Bible reader] → [live conversation | give card] → countdown band.
- **Stream source: PLACEHOLDER.** `https://live.christembassytexasvirtualchurch.com/` is a Life.Church "Church Online Platform" page (Next.js, PubNub chat). It blocks embedding (`X-Frame-Options: SAMEORIGIN`) and said "There are no scheduled services." when checked, so no video URL could be read. The player shows an offline state with an "Open the live page" button. When you have an embed URL put it in `VITE_LIVESTREAM_EMBED_URL` (or `src/data/stream.ts`).
- Next service countdown uses the website's own times (Sunday 10am, Wednesday 7pm) in Houston time.
- Bible reader uses the free bible-api.com (KJV), no key needed. The live conversation stores comments in Supabase (`livestream_comments`).

## Store: full product list (25, all simple products, no variations, USD)
| # | Name | Slug | Price | Regular price |
|---|---|---|---|---|
| 1 | 7 THINGS THE HOLY SPIRIT WILL DO FOR YOU | `7-things-the-holy-spirit-will-do-for-you` | $22.00 | $28.00 |
| 2 | 7 THINGS THE HOLY SPIRIT WILL DO IN YOU | `7-things-the-holy-spirit-will-do-in-you` | $22.00 | $28.00 |
| 3 | DON’T STOP HERE | `dont-stop-here` | $20.00 | $28.00 |
| 4 | FAITH PROCLAIMATIONS OF HEALTH AND HEALING | `faith-proclaimations-of-health-and-healing` | $10.00 | $18.00 |
| 5 | HOW TO MAKE YOUR FAITH WORK | `how-to-make-your-faith-work` | $25.00 | $30.00 |
| 6 | HOW TO PRAY EFFECTIVELY | `how-to-pray-effectively` | $22.00 | $28.00 |
| 7 | HOW TO RECEIVE A MIRACLE AND RETAIN IT | `how-to-receive-a-miracle-and-retain-it` | $23.00 | $30.00 |
| 8 | JOIN THIS CHARIOT | `join-this-chariot` | $23.00 | $30.00 |
| 9 | NONE OF THESE DISEASES | `none-of-these-diseases` | $28.00 | $30.00 |
| 10 | NOW THAT YOU ARE BORN AGAIN | `now-that-you-are-born-again` | $10.00 | $18.00 |
| 11 | PRAYING THE RIGHT WAY | `praying-the-right-way` | $22.00 | $28.00 |
| 12 | PROPHESY; UNDERSTANDING THE POWER THAT CONTROLS THE FUTURE | `prophesy-understanding-the-power-that-controls-the-future` | $23.00 | $30.00 |
| 13 | RHAPSODY OF REALITIES DAILY DEVOTIONAL | `rhapsody-of-realities-daily-devotional` | $8.00 | $15.00 |
| 14 | RHAPSODY OF REALITIES TEEVO | `rhapsody-of-realities-teevo` | $8.00 | $15.00 |
| 15 | RHAPSODY OF REALITIES TEEVO BIBLE FOR TEENAGERS | `rhapsody-of-realities-teevo-bible-for-teenagers` | $33.00 | $45.00 |
| 16 | RHAPSODY OF REALITIES TOPICAL COMPENDIUM VOLUME 5 | `rhapsody-of-realities-topical-compendium-volume-5` | $30.00 | $45.00 |
| 17 | THE GATES OF ZION | `the-gates-of-zion` | $20.00 | $28.00 |
| 18 | THE HOLY SPIRIT AND YOU | `the-holy-spirit-and-you` | $23.00 | $30.00 |
| 19 | THE OIL AND THE MANTLE | `the-oil-and-the-mantle` | $23.00 | $30.00 |
| 20 | THE POWER OF TONGUES | `the-power-of-tongues` | $10.00 | $18.00 |
| 21 | THE POWER OF YOUR MIND | `the-power-of-your-mind` | $27.00 | $30.00 |
| 22 | THE RHAPSODY OF REALITIES DEVOTIONAL STUDY BIBLE | `the-rhapsody-of-realities-devotional-study-bible` | $23.00 | $30.00 |
| 23 | THE SEVEN SPIRITS OF GOD | `the-seven-spirits-of-god` | $23.00 | $30.00 |
| 24 | WHEN GOD VISITS YOU | `when-god-visits-you` | $23.00 | $30.00 |
| 25 | YOUR RIGHTS IN CHRIST | `your-rights-in-christ` | $23.00 | $28.00 |

All data lives in `src/data/products.ts` (`stripePriceId` empty on purpose). The server-side catalog `supabase/functions/create-checkout-session/catalog.ts` is generated from the same export: after editing products run `node scripts/build-data.mjs` and redeploy the function.

## Typos found in the WordPress content (listed, NOT fixed)
- Store intro: "increase the **Knowlege** of who you are in Christ Jesus"
- Contact address (and footer on product pages): "6111A Wilcrest Drive **,** Houston" (space before comma)
- Donate: "**IICorinthians** 9:7 (Amp)" (missing space)
- Product "DON'T STOP HERE": "spiritual knowledge **They** get into trouble" (missing full stop)
- Product "THE RHAPSODY OF REALITIES DEVOTIONAL STUDY BIBLE": "Christian literature**.The** Rhapsody"
- Product "PRAYING THE RIGHT WAY": "not through Jesus **In** this concise" (missing full stop)
- Product "7 THINGS THE HOLY SPIRIT WILL DO FOR YOU": unmatched quote in "…Will Do For You\""
- Product "HOW TO RECEIVE A MIRACLE AND RETAIN IT": description ends with "!,"
- Product name "FAITH **PROCLAIMATIONS** OF HEALTH AND HEALING" (usually "Proclamations")
- About: "Pastor Chris also **host** the flagship program"
- Home (Unending Praise): "begins March 27, 2023 to March 27, 2024" is out of date text (kept)
- Contact page and others contain Divi leftovers that were not copied: duplicate hidden mobile copies of blocks.
- Divi shortcodes (`[et_pb_section …]`) leaked into the WooCommerce API descriptions of some products; the descriptions were taken from the rendered product pages instead.

## Differences from the original that you should know
- Header/menu: the original showed Home, About Loveworld, Our Ministry, Contact, Live Stream, Store, Donate and a cart icon. Same labels and order; "Donate" is shown as the accent pill on the right. "Live Stream" now goes to `/live-stream/` (was the external live site; the external live site is linked from the player).
- Footer "Quick Link" differs between WordPress templates ("Donate" on most pages, "Give" → /give on product pages, which was a broken link). The new footer uses "Donate" → /donate/ everywhere. Footer "Live Streaming" → `/live-stream/`.
- `/live-stream/` and `/prayer/` were empty WordPress pages (title + default sidebar widgets). `/prayer/` keeps that; `/live-stream/` is replaced by the new livestream page.
- The WordPress "Sample Page" text links to `wp-admin`; the link was removed (words kept).
- `/my-account/` login form and the `hello-world` comment form are not functional (no accounts/comments on the new site); they show a short notice when submitted.
- `back-to-school` has no visible heading on WordPress, so an invisible (screen-reader only) `<h1>` was added for accessibility/SEO.
- Extra UI words that are not WordPress content but are required by the new features: form success/error messages, "Added. View cart", "Proceed to checkout", "Your cart is currently empty." (standard WooCommerce wording), "Checkout cancelled" page text, livestream offline text, "Offline", "Open the live page", "Follow the scripture", "Live conversation".
- Two original links are broken/unreachable at their origin (kept exactly): `https://loveworldchildrensministry.org/web/about.php#` (404) and `https://www.loveworldteensandyouthministry.org/` (timed out during the check).

## Needs your decision
1. **Which FLC USA folder** to use (chose `flcusa-new`; `flc-usa-website` has extra later features).
2. **Livestream embed URL** (none discoverable; see above).
3. **Shipping countries** for Stripe Checkout are set to US, CA, GB, NG in `create-checkout-session/index.ts`; adjust. Shipping fees/tax are not configured (the WP store had none visible).
4. **Live conversation**: comments are public (name + message, 500 chars) with a honeypot. Decide if you want moderation or to remove the card.
5. **Newsletter** only emails the church and the subscriber (it does not keep a list). Say if you want a mailing-list table or Resend Audience.
6. **Order emails** go to `OWNER_EMAIL`; decide if staff should get a separate address.
7. Upcoming-event dates: Sunday Special and Back to School countdowns point to dates in 2024 (past), as on WordPress (they show zeros). Give new dates if you want them live: `src/routes/sunday-special.index.tsx`, `back-to-school.index.tsx`.
8. Images are served at original size (20 MB of JPG/PNG for the 76 used images). Say if you want an optimised set.

## How to run / re-check
- Dev: `npm run dev` (port 5173). Production build: `npm run build` → `dist/` (Cloudflare Pages worker output).
- Local production preview (Cloudflare runtime): `npx wrangler pages dev dist --port 4173` (`vite preview` does not work with the Cloudflare preset).
- Checks (with the dev server on :5200, and a second one on :5201 started with fake `VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY`): `npm run check:content`, `npm run check:layout`, `npm run check:e2e`; functions: `deno run -A --no-check scripts/test-functions.ts`.
- Regenerate data from the WordPress export: `npm run build:data`; copy shared function code: `npm run sync:functions`.
- Last full run: content 624/624 items, layout 45 pages × 2 widths clean, e2e 36/37 (the one "failure" is two external links that are already dead/unreachable on the original site), functions all passed, production build OK, content check also passes against the Cloudflare-runtime preview.

## Motion layer (added after the first build)
Libraries: `motion` 14 (Framer Motion's successor), `gsap` 3.15 with ScrollTrigger + SplitText, `lenis` smooth scroll (driven by GSAP's ticker so they stay in sync). Everything lives in `src/components/site/fx.tsx`, `motion.tsx`, `src/lib/gsap.ts`. All of it switches off for visitors who ask for reduced motion, and text only hides before its animation when scripts run (a 7s safety timer reveals it anyway).
- **Entry:** letter-by-letter mask reveals on headings (`SplitReveal`), preloader hands over to hero animations, hero portrait rises in, route curtain sweeps on every page change.
- **Pinned / layered scroll:** home hero stays fixed while the page slides up over it; "Upcoming Events" is a pinned sideways scroll (large screens; swipe carousel elsewhere); Healing Streams / Prayathon / Unending Praise stack and slide over each other, covered ones shrink and dim; the footer stays fixed underneath and is revealed as the page ends.
- **Parallax:** hero photo + portrait, page banners, ministry/president photos (revealed through an expanding mask), gallery columns drifting at different speeds, closing-band rings that grow and turn.
- **Scroll-scrubbed text:** "A Church For You", the About intro, the Salvation prayer and the donate verse light up word by word as you scroll.
- **Pointer effects:** magnetic buttons, 3D tilt + glare on cards/products/gallery/videos, pointer-following light in dark sections.
- **Extras:** scroll progress bar, header hides on scroll down / returns on scroll up with a frosted look, countdown digits roll.
Re-verified after the change: content 624/624, layout 45 pages × 2 widths clean, e2e 36/37 (only the two dead original links), production build and Cloudflare-runtime preview OK.
