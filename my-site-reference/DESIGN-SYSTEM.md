# Grace and Light design system (STYLE reference only, read-only)

Source: `/Users/macbook/Documents/Website Codes/grace-and-light-demo` (the folder is named `grace-and-light-demo`; there is no folder starting with `graceandlightchurch`; its README says it is graceandlightchurch.co.uk).
Run copy: `reference-copies/grace-and-light-demo` (dev server on :5191, home page data stubbed in the COPY only so sections render).
Screenshots: `my-site-reference/grace-and-light-screenshots/*-1440.png|*-390.png`.

Stack: TanStack Start + React 19 + Vite + Tailwind v4 (CSS-first `@theme inline`, no tailwind.config), shadcn/Radix primitives, `motion` (framer-motion successor), `lenis` smooth scroll, lucide icons, Embla carousel. Nitro preset `cloudflare-pages`.

## Colours (all oklch, `src/styles.css`)
| token | value | role |
|---|---|---|
| background | oklch(0.975 0.008 80) | warm off-white page |
| cream | oklch(0.96 0.014 80) | alt section tone |
| card / popover | oklch(1 0 0) | white cards, "white" sections |
| foreground | oklch(0.2 0.02 260) | body text |
| primary | oklch(0.22 0.03 260) | navy buttons / headings |
| deep | oklch(0.16 0.025 260) | header, footer, dark sections |
| deep-foreground | oklch(0.98 0.006 90) | text on dark |
| secondary / muted | oklch(0.955 0.012 80) | chips, inputs, blockquote bg |
| muted-foreground | oklch(0.5 0.02 260) | secondary text |
| accent / gold | oklch(0.55 0.21 258) | electric blue accent (CTAs, eyebrow dots, links on dark) |
| border / input | oklch(0.9 0.012 250) | hairlines |
| ring | oklch(0.36 0.11 256) | focus |
| destructive | oklch(0.577 0.245 27.325) | errors |
Bokeh dots use `var(--gold)` and `#7d8fae`.

## Fonts
Display (h1–h4, weight 600, tracking -0.01em, line-height 1.05): **Lora** (400/500/600/700, italic 500/600). Body: **Manrope** (400–800). Loaded from Google Fonts in `__root.tsx`.

## Sizes / spacing / shape
- `container-flc`: max-width 80rem, padding-inline 1.25rem.
- Section: `py-20 sm:py-28`, alternating tones cream → white → cream, dark `deep` bands between.
- Headings: page/section h2 `text-4xl sm:text-5xl font-semibold`; hero h1 `text-5xl sm:text-7xl`; card titles `font-display text-xl`.
- Radius: base 1.25rem; cards `rounded-[1.75rem]`, big feature cards `rounded-[2rem]`, stat cards `rounded-3xl`, inputs `rounded-2xl`, buttons/chips fully round (pill).
- Shadows: Card `0 1px 2px rgba(20,20,30,.04), 0 12px 32px -16px rgba(20,20,30,.16)` (hover → .22 at 40px); accent button `0 8px 24px -8px var(--accent)`; spotlight card `0 20px 60px -20px rgba(20,20,30,.35)`; dropdown `shadow-xl shadow-black/20`.

## Buttons (`src/components/site/ui.tsx`)
`PillLink` / `PillButton`: `min-h-11 rounded-full px-6 py-3 text-sm font-semibold`. Variants: `primary` (navy → deep on hover), `accent` (blue, blue glow, `hover:brightness-95`), `outline` (navy 30% border, secondary bg on hover), `light` (white 30% border for dark bands). Focus: 2px accent outline offset 2.
Secondary icon-CTA: 48px round outlined play icon + label (hero "Watch Live").
Circular arrow buttons: `size-11 rounded-full bg-accent`, hover `scale-105`.

## Section types and where the code lives
| section | file |
|---|---|
| Eyebrow chip (dot + uppercase label) / Section / Card / StatCard / SectionHeading | `components/site/ui.tsx` |
| Hero (full-bleed image, 30% opacity, gradient scrim, Bokeh, centered Reveal, accent italic word) | `routes/index.tsx` (top) |
| Page hero (dark `deep` band + Bokeh + animated eyebrow/h1/intro) | `routes/about.tsx`, `contact.tsx` via `SectionHeading animated` + `HeroReveal` |
| Editorial welcome (narrow centred column) | `routes/index.tsx` |
| CollageGrid (3 offset overlapping photo cards) | `HomeSections.tsx` |
| SpotlightFeature (big image + floating overlay card) | `HomeSections.tsx` |
| EventCountdown (dark band, 4 digit tiles) / ServiceCountdownCard | `EventCountdown.tsx` |
| OverlayCard (photo with caption on gradient) – events | `HomeSections.tsx` |
| MinistryCarousel (centre-focus peek carousel, blur on neighbours) | `HomeSections.tsx` |
| StoryFeature (image + dark excerpt card) | `HomeSections.tsx` |
| FAQ accordion (plus icon rotates 45°) | `HomeSections.tsx` `FaqSection` |
| Numbered editorial list (beliefs) | `routes/about.tsx` |
| Final CTA band (deep + Bokeh) / CtaBand (2 cards: icon, eyebrow, title, body, pill) | `routes/index.tsx`, `CtaBand.tsx` |
| Forms (card, rounded-2xl secondary-bg inputs, pill submit, success modal) | `routes/contact.tsx`, `salvation.tsx`, footer newsletter |
| Success modal (animated SVG check, draws circle then tick) | `SuccessModal.tsx` + `success-check-*` utilities in styles.css |
| Livestream (player card, Bible panel, comments, give widget, countdown) | `routes/livestream.tsx`, `LivestreamPlayer.tsx`, `BiblePanel.tsx`, `CommentFeed.tsx`, `GiveWidget.tsx` |
| Books store grid | `routes/books.tsx` |
| Preloader (breathing logo, progress bar, wipes up) | `Preloader.tsx` |

## Header / nav / mobile menu / footer
- Header (`SiteHeader.tsx`): sticky, `bg-deep`, 3-col grid [logo | centred nav | actions]. Logo mark 40px + Lora wordmark. Nav links `rounded-full px-3 py-2 text-sm font-medium`, 75% white, hover/active `bg-deep-foreground/10`. Dropdowns appear on hover/focus (translate-y + fade, white rounded-2xl panel). Right: accent pill "Watch Live" with small arrow circle; hamburger (44px circle outline) below `xl`.
- Mobile menu: full-screen `fixed inset-0 bg-deep` overlay, slides from -4% with staggered link fade-up (0.045s), huge Lora links (`text-3xl/4xl`), accent active colour, bottom block with pill buttons, phone/email, social labels. Escape closes, body scroll locked.
- Footer (`SiteFooter.tsx`): `bg-deep`; left brand + tagline + newsletter pill form; right link columns with accent uppercase Lora headings (`text-sm font-bold tracking-wide uppercase text-accent`); bottom bar hairline + © `new Date().getFullYear()`.

## Animations / motion (`components/site/motion.tsx`)
- `Reveal`: opacity 0→1, y 28→0, 0.7s, ease [0.22,1,0.36,1], once, in-view (stagger via `delay`).
- `HeroReveal`: eyebrow → heading → body (0.5/0.7/0.6s).
- `Parallax` (strength 40–60, damped to 12 on touch), `PageTransition` (fade/rise 0.35s, keyed on path), `SmoothScroll` (Lenis, 1.1s), Preloader wipe (0.9s cubic-bezier(.76,0,.24,1)), `animate-breathe` logo, Bokeh `animate-pulse` dots, card image `group-hover:scale-105` over 700ms, accordion plus rotation, countdown ticking, all respect `prefers-reduced-motion`.

## Hover / focus
Links: `hover:text-accent`; nav pills get tint; cards lift via shadow; images zoom 5%; buttons `hover:brightness-95` / colour swap. Inputs `focus-visible:outline-2 outline-accent`.

## Forms
Label text `text-sm font-semibold`, input `mt-2 w-full rounded-2xl border border-border bg-secondary px-4 py-3 text-sm`; select uses custom chevron (styles.css). Footer newsletter: dark pill input (`bg-deep-foreground/5`, 25% border) + accent pill button. Status text `text-xs`, `aria-live="polite"`, errors `text-destructive`.

## FLC USA (livestream structure only)
Used `/Users/macbook/Documents/Website Codes/flcusa-new` (identical to `flcusa-2`; `flc-usa-website` is a longer later variant). Livestream page = deep heading band → grid [1.6fr player | 1fr Bible panel] → grid [comment feed | give widget] → countdown band; player is a rounded-3xl bordered card with 16:9 area, offline overlay (image + Offline chip + CTA) and a title/status footer row.
