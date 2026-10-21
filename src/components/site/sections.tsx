import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MINISTRY_APPS } from "@/data/apps";
import { cn } from "@/lib/utils";
import { Bokeh } from "./Bokeh";
import { HeroReveal, Reveal } from "./motion";
import { Lightbox } from "./Lightbox";
import { ParallaxImage, PointerGlow, ScrollWords, SplitReveal, TiltCard, useScrollFx } from "./fx";
import { PillAnchor, PillLink, Section } from "./ui";

/** Renders HTML that was written on the original WordPress page (bold, links, line breaks). */
export function RichText({
  html,
  className,
  tone = "light",
}: {
  html: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn("rich-text", tone === "dark" && "rich-text-dark", className)}
      // Content is our own static export of the original site, not user input.
      dangerouslySetInnerHTML={{ __html: html.replace(/(<a [^>]*target="_blank")/g, '$1 rel="noopener noreferrer"') }}
    />
  );
}

/** Splits an HTML string on double <br/> into paragraph strings. */
export function splitParagraphs(html: string): string[] {
  return html.split(/(?:<br\/>\s*){2,}/).map((p) => p.trim()).filter(Boolean);
}

/** Dark page banner with the page title. The photo drifts and zooms as you scroll away, the title rises letter by letter. */
export function PageHero({
  title,
  image = "/images/2023__10__Audience.webp",
  children,
}: {
  title: ReactNode;
  image?: string | null;
  children?: ReactNode;
}) {
  const reduce = !useScrollFx();
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 700], [0, 220]);
  const imgScale = useTransform(scrollY, [0, 700], [1, 1.28]);
  const contentY = useTransform(scrollY, [0, 520], [0, -80]);
  const contentOpacity = useTransform(scrollY, [0, 440], [1, 0]);
  return (
    <section className="relative overflow-hidden bg-deep py-24 text-deep-foreground sm:py-32">
      {image ? (
        <motion.img
          src={image}
          alt=""
          className="absolute inset-0 -z-20 size-full object-cover opacity-30"
          {...(reduce ? {} : { style: { y: imgY, scale: imgScale } })}
        />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/70 to-deep/30" />
      <PointerGlow />
      <Bokeh />
      <motion.div className="container-site relative text-center" {...(reduce ? {} : { style: { y: contentY, opacity: contentOpacity } })}>
        <SplitReveal as="h1" waitForPreloader className="mx-auto max-w-4xl font-display text-4xl leading-[1.05] font-semibold sm:text-6xl">
          {title}
        </SplitReveal>
        {children ? (
          <Reveal delay={0.5} className="mx-auto mt-5 max-w-3xl text-base text-deep-foreground/80 sm:text-lg">
            {children}
          </Reveal>
        ) : null}
      </motion.div>
    </section>
  );
}

/** Closing dark band: two big rings expand and turn as it scrolls into view behind a letter-by-letter heading. */
export function ClosingBand({ heading, buttonLabel, to }: { heading: string; buttonLabel: string; to: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = !useScrollFx();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const ringScale = useTransform(scrollYProgress, [0, 1], [0.5, 1.6]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [-40, 140]);
  const ringScale2 = useTransform(scrollYProgress, [0, 1], [0.3, 1.2]);
  return (
    <section ref={ref} className="relative overflow-hidden bg-deep py-24 text-deep-foreground sm:py-32">
      <PointerGlow />
      <Bokeh />
      <motion.div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-deep-foreground/10 [border-style:dashed]" {...(reduce ? {} : { style: { scale: ringScale, rotate: ringRotate } })} />
      <motion.div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30" {...(reduce ? {} : { style: { scale: ringScale2, rotate: ringRotate } })} />
      <div className="container-site relative text-center">
        <div className="mx-auto max-w-3xl">
          <SplitReveal as="h2" by="words" className="font-display text-3xl leading-tight font-semibold sm:text-5xl">
            {heading}
          </SplitReveal>
          <Reveal delay={0.35} className="mt-8">
            <PillLink to={to as "/"} variant="accent">
              {buttonLabel}
            </PillLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 [[data-state=open]_&]:rotate-45">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    </span>
  );
}

/** "Our Ministry Apps": logo cards with an expandable description. */
export function MinistryApps({ heading = "Our Ministry Apps", viewMore }: { heading?: string; viewMore: { text: string; href: string } }) {
  return (
    <Section tone="cream">
      <Reveal>
        <SplitReveal as="h2" className="text-center text-4xl font-semibold sm:text-5xl">{heading}</SplitReveal>
      </Reveal>
      <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
        {MINISTRY_APPS.map((app, i) => (
          <Reveal key={app.title} delay={i * 0.08}>
            <TiltCard className="rounded-[1.75rem]">
            <div className="rounded-[1.75rem] bg-card p-6 shadow-[0_1px_2px_rgba(20,20,30,0.04),0_12px_32px_-16px_rgba(20,20,30,0.16)] transition-shadow hover:shadow-[0_1px_2px_rgba(20,20,30,0.05),0_20px_40px_-16px_rgba(20,20,30,0.22)]">
              <img src={app.image} alt="" loading="lazy" className="mx-auto size-40 object-contain" />
              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem value={app.title} className="overflow-hidden rounded-2xl border-none bg-secondary px-4">
                  <AccordionTrigger className="py-3 text-left font-display text-base font-semibold hover:no-underline [&>svg]:hidden">
                    <span className="flex flex-1 items-center justify-between gap-3">
                      {app.title}
                      <PlusIcon />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    <RichText html={app.html} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.15}>
        <div className="mt-10 text-center">
          <PillAnchor href={viewMore.href} target="_blank" variant="accent">
            {viewMore.text}
          </PillAnchor>
        </div>
      </Reveal>
    </Section>
  );
}

/** Centre-focus peek carousel of image cards with the caption on the photo. */
export function EventsCarousel({ items }: { items: { image: string; title: string; meta: string }[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const distance = (i: number) => {
    const raw = Math.abs(i - selected);
    return Math.min(raw, items.length - raw);
  };

  return (
    <div className="relative">
      <Carousel setApi={setApi} opts={{ loop: true, align: "center" }} className="mx-auto">
        <CarouselContent>
          {items.map((m, i) => {
            const d = distance(i);
            return (
              <CarouselItem key={m.title} className="basis-[82%] sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  animate={{
                    opacity: d === 0 ? 1 : d === 1 ? 0.45 : 0.25,
                    scale: d === 0 ? 1 : d === 1 ? 0.92 : 0.86,
                    filter: d === 0 ? "blur(0px)" : d === 1 ? "blur(4px)" : "blur(7px)",
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="group relative block h-[28rem] overflow-hidden rounded-[1.75rem] bg-deep">
                    <img src={m.image} alt="" loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h4 className="font-display text-xl font-semibold text-white">{m.title}</h4>
                      <p className="mt-1.5 text-sm text-white/75">{m.meta}</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <button
        type="button"
        onClick={() => api?.scrollPrev()}
        aria-label="Previous event"
        className="absolute top-1/2 left-[9%] z-10 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105 sm:left-[25%] lg:left-[33.333%]"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => api?.scrollNext()}
        aria-label="Next event"
        className="absolute top-1/2 right-[9%] z-10 grid size-11 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105 sm:right-[25%] lg:right-[33.333%]"
      >
        <ChevronRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}

/** Paged photo gallery (8 per page, numbered pagination). Columns drift at different speeds while scrolling; tiles tilt on hover. */
export function Gallery({ images, perPage = 8 }: { images: string[]; perPage?: number }) {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState<number | null>(null);
  const pages = Math.ceil(images.length / perPage);
  const slice = images.slice((page - 1) * perPage, page * perPage);
  const pageBtn = "grid size-10 place-items-center rounded-full text-sm font-semibold transition-colors";
  const listRef = useRef<HTMLUListElement>(null);
  const reduce = !useScrollFx();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start end", "end start"] });
  const drift = [
    useTransform(scrollYProgress, [0, 1], [50, -50]),
    useTransform(scrollYProgress, [0, 1], [-10, 10]),
    useTransform(scrollYProgress, [0, 1], [70, -70]),
    useTransform(scrollYProgress, [0, 1], [0, 20]),
  ];

  return (
    <div>
      <ul ref={listRef} className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {slice.map((src, i) => (
          <motion.li
            key={src}
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div {...(reduce ? {} : { style: { y: drift[i % 4]! } })}>
              <TiltCard className="group overflow-hidden rounded-[1.25rem] bg-secondary" max={6}>
                <button
                  type="button"
                  onClick={() => setOpen((page - 1) * perPage + i)}
                  aria-label={`Open photo ${(page - 1) * perPage + i + 1} of ${images.length}`}
                  className="block size-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <img src={src} alt="" loading="lazy" className="aspect-[10/7] size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </button>
              </TiltCard>
            </motion.div>
          </motion.li>
        ))}
      </ul>
      {pages > 1 ? (
        <nav aria-label="Gallery pages" className="mt-14 flex flex-wrap items-center justify-center gap-2">
          {page > 1 ? (
            <button type="button" onClick={() => setPage(page - 1)} className="rounded-full px-4 py-2 text-sm font-semibold hover:bg-secondary">
              Prev
            </button>
          ) : null}
          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              aria-current={n === page ? "page" : undefined}
              onClick={() => setPage(n)}
              className={cn(pageBtn, n === page ? "bg-primary text-primary-foreground" : "hover:bg-secondary")}
            >
              {n}
            </button>
          ))}
          {page < pages ? (
            <button type="button" onClick={() => setPage(page + 1)} className="rounded-full px-4 py-2 text-sm font-semibold hover:bg-secondary">
              Next
            </button>
          ) : null}
        </nav>
      ) : null}
      <Lightbox images={images} index={open} onIndexChange={setOpen} onClose={() => setOpen(null)} />
    </div>
  );
}

/** Day(s) : Hour(s) : Minute(s) : Second(s) tiles. Shows zeros once the target date has passed, like the original. */
export function CountdownTiles({ target }: { target: Date }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const ms = Math.max(0, target.getTime() - (now ?? target.getTime()));
  const units = [
    { label: "Day(s)", value: Math.floor(ms / 86400000), pad: 3 },
    { label: "Hour(s)", value: Math.floor((ms / 3600000) % 24), pad: 2 },
    { label: "Minute(s)", value: Math.floor((ms / 60000) % 60), pad: 2 },
    { label: "Second(s)", value: Math.floor((ms / 1000) % 60), pad: 2 },
  ];
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4" aria-label="Countdown">
      {units.map((u) => (
        <li key={u.label} className="rounded-3xl border border-deep-foreground/20 bg-deep-foreground/5 p-4 text-center">
          <span className="relative block h-[1.2em] overflow-hidden font-display text-4xl font-black tabular-nums text-accent sm:text-5xl">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={u.value}
                className="block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {String(u.value).padStart(u.pad, "0")}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="mt-1 block text-xs uppercase text-deep-foreground/70">{u.label}</span>
        </li>
      ))}
    </ul>
  );
}

/** Google Maps embed in a rounded card. */
export function MapEmbed({ src, title = "Map" }: { src: string; title?: string }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card">
      <iframe title={title} src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="h-96 w-full border-0" />
    </div>
  );
}

/** The widget column that the original utility pages show: search, recent posts, comments, archives, categories. */
export function WpSidebar() {
  return (
    <aside className="grid gap-8 text-sm">
      <form action="/" method="get" role="search" className="flex gap-2">
        <label htmlFor="sidebar-search" className="sr-only">Search</label>
        <input id="sidebar-search" type="search" name="s" required className="min-h-11 w-full rounded-full border border-border bg-secondary px-4 text-sm focus-visible:outline-2 focus-visible:outline-accent" />
        <button type="submit" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-deep">
          <Search className="size-4" aria-hidden="true" />
          Search
        </button>
      </form>
      <div>
        <h2 className="font-display text-xl font-semibold">Recent Posts</h2>
        <ul className="mt-3"><li><Link to="/hello-world/" className="hover:text-accent">Hello world!</Link></li></ul>
      </div>
      <div>
        <h2 className="font-display text-xl font-semibold">Recent Comments</h2>
        <ul className="mt-3 text-muted-foreground">
          <li>
            <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">A WordPress Commenter</a> on{" "}
            <Link to="/hello-world/" hash="comment-1" className="hover:text-accent">Hello world!</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-display text-xl font-semibold">Archives</h2>
        <ul className="mt-3"><li><Link to="/2023/10/" className="hover:text-accent">October 2023</Link></li></ul>
      </div>
      <div>
        <h2 className="font-display text-xl font-semibold">Categories</h2>
        <ul className="mt-3"><li><Link to="/category/$slug/" params={{ slug: "uncategorized" }} className="hover:text-accent">Uncategorized</Link></li></ul>
      </div>
    </aside>
  );
}
