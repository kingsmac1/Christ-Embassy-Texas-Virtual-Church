import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Bokeh } from "@/components/site/Bokeh";
import { Reveal } from "@/components/site/motion";
import { EventsCarousel, Gallery, MinistryApps, RichText, ClosingBand } from "@/components/site/sections";
import { HorizontalScroll, ParallaxImage, PointerGlow, ScrollWords, SplitReveal, StackGroup, TiltCard } from "@/components/site/fx";
import { Eyebrow, PillAnchor, PillLink, Section } from "@/components/site/ui";
import { CONTENT, type Block } from "@/data/content";
import { seoHead } from "@/data/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => seoHead("/"),
  component: HomePage,
});

const [heroSec, welcomeSec, eventsSec, mediaSec, gallerySec, appsSec, closingSec] = CONTENT["home"]!;

const pick = <T extends Block["type"]>(blocks: Block[], type: T) => blocks.filter((b): b is Extract<Block, { type: T }> => b.type === type);

/** Splits the "Healing Streams TV / Prayathon / Unending Praise" section into video + text groups. */
function mediaGroups(blocks: Block[]) {
  const groups: { iframe: string; title: string; paragraphs: string[]; button?: { text: string; href: string; target: string } }[] = [];
  for (const b of blocks) {
    if (b.type === "iframe") groups.push({ iframe: b.src, title: "", paragraphs: [] });
    const g = groups[groups.length - 1];
    if (!g) continue;
    if (b.type === "heading") g.title = b.html;
    if (b.type === "p") g.paragraphs.push(b.html);
    if (b.type === "button") g.button = { text: b.text, href: b.href, target: b.target };
  }
  return groups;
}

function HomePage() {
  const heroHeadings = pick(heroSec!, "heading");
  const heroButtons = pick(heroSec!, "button");
  const heroImage = pick(heroSec!, "image")[0];
  const heroBg = pick(heroSec!, "sectionbg")[0];
  const [eyebrow, ...titleLines] = heroHeadings.map((h) => h.html);
  const [contactBtn, donateBtn] = heroButtons;

  const welcomeHeadings = pick(welcomeSec!, "heading");

  const eventHeading = pick(eventsSec!, "heading").find((h) => h.level === 2);
  const events: { image: string; title: string; meta: string }[] = [];
  for (const b of eventsSec!) {
    if (b.type === "image") events.push({ image: b.src, title: "", meta: "" });
    const last = events[events.length - 1];
    if (!last) continue;
    if (b.type === "heading" && b.level === 4) last.title = b.html;
    if (b.type === "p") last.meta = b.html;
  }

  const galleryHeading = pick(gallerySec!, "heading")[0];
  const galleryImages = pick(gallerySec!, "image").map((i) => i.src);

  const viewMore = pick(appsSec!, "button")[0]!;
  const appsHeading = pick(appsSec!, "heading").find((h) => h.level === 1 || h.level === 2)!;
  const closingHeading = pick(closingSec!, "heading")[0]!;
  const closingButton = pick(closingSec!, "button")[0]!;

  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 240]);
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.3]);
  const textY = useTransform(scrollY, [0, 600], [0, -140]);
  const textOpacity = useTransform(scrollY, [0, 520], [1, 0]);
  const imgY = useTransform(scrollY, [0, 800], [0, -90]);
  const imgScale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const veil = useTransform(scrollY, [0, 700], [0, 0.85]);

  const eventCards = events.map((e) => (
    <div key={e.title} data-hcard className="group relative h-[30rem] w-[26rem] shrink-0 overflow-hidden rounded-[2rem] bg-deep shadow-[0_30px_60px_-24px_rgba(8,12,24,0.55)]">
      <img src={e.image} alt="" loading="lazy" className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7">
        <h4 className="font-display text-2xl font-semibold text-white">{e.title}</h4>
        <p className="mt-1.5 text-sm text-white/75">{e.meta}</p>
      </div>
    </div>
  ));

  return (
    <>
      {/* HERO: stays pinned while the rest of the page slides up over it */}
      <section className="sticky top-0 z-0 flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-deep text-deep-foreground">
        {heroBg ? (
          <motion.img
            src={heroBg.src}
            alt=""
            className="absolute inset-0 -z-20 size-full object-cover opacity-30"
            {...(reduce ? {} : { style: { y: bgY, scale: bgScale } })}
          />
        ) : null}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/70 to-deep/30" />
        <PointerGlow />
        <Bokeh />
        {/* turning rings behind the portrait */}
        <div aria-hidden="true" className="pointer-events-none absolute top-1/2 right-[-8rem] -z-[5] size-[38rem] -translate-y-1/2 animate-[spin_60s_linear_infinite] rounded-full border border-dashed border-deep-foreground/15 lg:right-[4%]" />
        <div aria-hidden="true" className="pointer-events-none absolute top-1/2 right-[-3rem] -z-[5] size-[28rem] -translate-y-1/2 animate-[spin_40s_linear_infinite_reverse] rounded-full border border-accent/30 lg:right-[9%]" />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[5] bg-deep"
          {...(reduce ? {} : { style: { opacity: veil } })}
        />
        <div className="container-site relative grid items-end gap-6 pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:pt-24">
          <motion.div className="pb-16 lg:pb-28" {...(reduce ? {} : { style: { y: textY, opacity: textOpacity } })}>
            <Reveal delay={1.5}>
              <Eyebrow tone="light">{eyebrow}</Eyebrow>
            </Reveal>
            <SplitReveal as="h1" waitForPreloader className="mt-5 font-display text-5xl leading-[1.02] font-semibold sm:text-7xl">
              <span className="block">{titleLines[0]}</span>
              <span className="block italic text-accent">{titleLines[1]}</span>
            </SplitReveal>
            <Reveal delay={1.9} y={20} className="mt-8 flex flex-wrap items-center gap-4">
              {contactBtn ? (
                <PillLink to={contactBtn.href as "/contact/"} variant="accent">
                  {contactBtn.text}
                </PillLink>
              ) : null}
              {donateBtn ? (
                <PillAnchor href={donateBtn.href} target={donateBtn.target} variant="light">
                  {donateBtn.text}
                </PillAnchor>
              ) : null}
            </Reveal>
          </motion.div>
          {heroImage ? (
            <motion.div
              className="mx-auto w-full max-w-sm self-end lg:max-w-none"
              initial={reduce ? false : { opacity: 0, y: 80, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.3, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.img
                src={heroImage.src}
                alt={heroImage.alt}
                className="mx-auto max-h-[34rem] w-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                {...(reduce ? {} : { style: { y: imgY, scale: imgScale } })}
              />
            </motion.div>
          ) : null}
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
          <span className="h-10 w-6 rounded-full border border-deep-foreground/40 p-1">
            <span className="block size-1.5 animate-bounce rounded-full bg-accent" />
          </span>
        </div>
      </section>

      {/* everything below slides over the pinned hero */}
      <div className="relative z-10 rounded-t-[2.5rem] bg-background shadow-[0_-30px_60px_-20px_rgba(8,12,24,0.55)]">
        {/* A CHURCH FOR YOU: words light up as you scroll */}
        <Section tone="cream" className="rounded-t-[2.5rem] lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <h2 className="font-display text-sm font-bold tracking-wide text-accent uppercase">{welcomeHeadings[0]?.html}</h2>
            </Reveal>
            <ScrollWords as="h2" className="mt-8 font-display text-3xl leading-snug font-semibold sm:text-5xl">
              {welcomeHeadings[1]?.html}
            </ScrollWords>
          </div>
        </Section>

        {/* UPCOMING EVENTS: pinned sideways scroll on large screens, swipe carousel elsewhere */}
        <HorizontalScroll
          heading={
            <SplitReveal as="h2" className="text-4xl font-semibold sm:text-6xl">
              {eventHeading?.html}
            </SplitReveal>
          }
          fallback={
            <Section tone="white">
              <Reveal>
                <h2 className="text-center text-4xl font-semibold sm:text-5xl">{eventHeading?.html}</h2>
              </Reveal>
              <div className="mt-12">
                <EventsCarousel items={events} />
              </div>
            </Section>
          }
        >
          {eventCards}
        </HorizontalScroll>

        {/* HEALING STREAMS TV / PRAYATHON / UNENDING PRAISE: each pins and the next one slides over it */}
        <StackGroup>
          {mediaGroups(mediaSec!).map((g, i) => (
            <Section key={g.title} tone={i % 2 === 0 ? "cream" : "white"} className="lg:flex lg:min-h-svh lg:items-center">
              <div className={cn("grid items-center gap-10 lg:grid-cols-2", i % 2 === 1 && "lg:[&>*:first-child]:order-2")}>
                <Reveal x={i % 2 === 0 ? -60 : 60} y={0}>
                  <TiltCard className="rounded-[1.75rem]" max={4} glare={false}>
                    <div className="overflow-hidden rounded-[1.75rem] bg-deep shadow-[0_30px_70px_-24px_rgba(20,20,30,0.55)]">
                      <iframe
                        className="aspect-video w-full border-0"
                        src={g.iframe}
                        title={g.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </TiltCard>
                </Reveal>
                <Reveal x={i % 2 === 0 ? 60 : -60} y={0} delay={0.1}>
                  <SplitReveal as="h2" by="words" className="text-3xl font-semibold sm:text-4xl">
                    {g.title}
                  </SplitReveal>
                  <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                    {g.paragraphs.map((p) => (
                      <RichText key={p.slice(0, 40)} html={p} />
                    ))}
                  </div>
                  {g.button ? (
                    <div className="mt-7">
                      <PillAnchor href={g.button.href} target={g.button.target} variant="accent">
                        {g.button.text}
                      </PillAnchor>
                    </div>
                  ) : null}
                </Reveal>
              </div>
            </Section>
          ))}
        </StackGroup>

        {/* GALLERY */}
        <Section tone="cream">
          <Reveal>
            <SplitReveal as="h2" className="text-center text-4xl font-semibold sm:text-5xl">
              {galleryHeading?.html}
            </SplitReveal>
          </Reveal>
          <div className="mt-12">
            <Gallery images={galleryImages} />
          </div>
        </Section>

        {/* OUR MINISTRY APPS */}
        <MinistryApps heading={appsHeading.html} viewMore={{ text: viewMore.text, href: viewMore.href }} />

        {/* SALVATION */}
        <ClosingBand heading={closingHeading.html} buttonLabel={closingButton.text} to={closingButton.href} />
      </div>
    </>
  );
}
