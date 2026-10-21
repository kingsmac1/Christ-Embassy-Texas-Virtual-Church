import { createFileRoute } from "@tanstack/react-router";
import { Bokeh } from "@/components/site/Bokeh";
import { Reveal } from "@/components/site/motion";
import { EventsCarousel, Gallery, MinistryApps, RichText, ClosingBand } from "@/components/site/sections";
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

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-deep text-deep-foreground">
        {heroBg ? <img src={heroBg.src} alt="" className="absolute inset-0 -z-20 size-full object-cover opacity-30" /> : null}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/70 to-deep/30" />
        <Bokeh />
        <div className="container-site relative grid items-end gap-6 pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:pt-24">
          <Reveal className="pb-16 lg:pb-28">
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] font-semibold sm:text-7xl">
              <span className="block">{titleLines[0]}</span>
              <span className="block italic text-accent">{titleLines[1]}</span>
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-4">
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
            </div>
          </Reveal>
          {heroImage ? (
            <Reveal delay={0.15} className="mx-auto w-full max-w-sm self-end lg:max-w-none">
              <img src={heroImage.src} alt={heroImage.alt} className="mx-auto max-h-[34rem] w-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]" />
            </Reveal>
          ) : null}
        </div>
      </section>

      {/* A CHURCH FOR YOU: editorial welcome */}
      <Section tone="cream">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-sm font-bold tracking-wide text-accent uppercase">{welcomeHeadings[0]?.html}</h2>
          <h2 className="mt-6 font-display text-2xl leading-snug font-semibold sm:text-3xl">{welcomeHeadings[1]?.html}</h2>
        </Reveal>
      </Section>

      {/* UPCOMING EVENTS */}
      <Section tone="white">
        <Reveal>
          <h2 className="text-center text-4xl font-semibold sm:text-5xl">{eventHeading?.html}</h2>
        </Reveal>
        <div className="mt-12">
          <EventsCarousel items={events} />
        </div>
      </Section>

      {/* HEALING STREAMS TV / PRAYATHON / UNENDING PRAISE */}
      {mediaGroups(mediaSec!).map((g, i) => (
        <Section key={g.title} tone={i % 2 === 0 ? "cream" : "white"}>
          <div className={cn("grid items-center gap-10 lg:grid-cols-2", i % 2 === 1 && "lg:[&>*:first-child]:order-2")}>
            <Reveal>
              <div className="overflow-hidden rounded-[1.75rem] bg-deep shadow-[0_20px_60px_-20px_rgba(20,20,30,0.35)]">
                <iframe
                  className="aspect-video w-full border-0"
                  src={g.iframe}
                  title={g.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-semibold sm:text-4xl">{g.title}</h2>
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

      {/* GALLERY */}
      <Section tone="cream">
        <Reveal>
          <h2 className="text-center text-4xl font-semibold sm:text-5xl">{galleryHeading?.html}</h2>
        </Reveal>
        <div className="mt-12">
          <Gallery images={galleryImages} />
        </div>
      </Section>

      {/* OUR MINISTRY APPS */}
      <MinistryApps heading={appsHeading.html} viewMore={{ text: viewMore.text, href: viewMore.href }} />

      {/* SALVATION */}
      <ClosingBand heading={closingHeading.html} buttonLabel={closingButton.text} to={closingButton.href} />
    </>
  );
}

