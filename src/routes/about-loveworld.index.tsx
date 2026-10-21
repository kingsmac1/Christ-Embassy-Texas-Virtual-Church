import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/motion";
import { ClosingBand, MinistryApps, PageHero, RichText, splitParagraphs } from "@/components/site/sections";
import { Section } from "@/components/site/ui";
import { CONTENT, type Block } from "@/data/content";
import { seoHead } from "@/data/seo";

export const Route = createFileRoute("/about-loveworld/")({
  head: () => seoHead("/about-loveworld/"),
  component: AboutPage,
});

const [heroSec, introSec, visionSec, presidentSec, appsSec, closingSec] = CONTENT["about-loveworld"]!;
const of = <T extends Block["type"]>(blocks: Block[], type: T) => blocks.filter((b): b is Extract<Block, { type: T }> => b.type === type);

function AboutPage() {
  const title = of(heroSec!, "heading")[0]!;
  const intro = of(introSec!, "p").flatMap((p) => splitParagraphs(p.html));
  const visionHeading = of(visionSec!, "heading")[0]!;
  const visionItems = of(visionSec!, "p");
  const presidentBg = of(presidentSec!, "bg")[0]!;
  const presidentHeading = of(presidentSec!, "heading")[0]!;

  // Intro paragraphs of the president block come before the first sub-heading.
  const presidentBlocks = presidentSec!.filter((b) => b.type === "heading" || b.type === "p");
  const firstSub = presidentBlocks.findIndex((b, i) => i > 0 && b.type === "heading");
  const presidentIntro = presidentBlocks.slice(1, firstSub).filter((b) => b.type === "p") as Extract<Block, { type: "p" }>[];
  const subSections: { heading: string; paragraphs: string[] }[] = [];
  for (const b of presidentBlocks.slice(firstSub)) {
    if (b.type === "heading") subSections.push({ heading: b.html, paragraphs: [] });
    else subSections[subSections.length - 1]!.paragraphs.push(b.html);
  }

  const apps = of(appsSec!, "heading")[0]!;
  const viewMore = of(appsSec!, "button")[0]!;
  const closingHeading = of(closingSec!, "heading")[0]!;
  const closingButton = of(closingSec!, "button")[0]!;

  return (
    <>
      <PageHero title={title.html} />

      <Section tone="cream">
        <Reveal className="mx-auto max-w-3xl space-y-5 text-center text-base leading-relaxed text-muted-foreground">
          {intro.map((p) => (
            <RichText key={p.slice(0, 40)} html={p} className="[&_strong]:text-foreground" />
          ))}
        </Reveal>
      </Section>

      {/* VISION, MISSION & PURPOSE: numbered editorial list */}
      <Section tone="white">
        <Reveal>
          <h2 className="text-center text-4xl font-semibold sm:text-5xl" dangerouslySetInnerHTML={{ __html: visionHeading.html }} />
        </Reveal>
        <ul className="mx-auto mt-12 max-w-3xl divide-y divide-border border-t border-border">
          {visionItems.map((p, i) => (
            <Reveal key={p.html.slice(0, 30)} as="li" delay={i * 0.06}>
              <div className="grid gap-2 py-6 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-8">
                <span className="font-display text-3xl font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <RichText html={p.html} className="text-lg leading-relaxed [&_strong]:font-display [&_strong]:font-semibold" />
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* MEET OUR PRESIDENT */}
      <Section tone="cream">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem]">
              <img src={presidentBg.src} alt="" loading="lazy" className="h-[28rem] w-full object-cover object-top sm:h-[38rem]" />
            </div>
          </Reveal>
          <Reveal delay={0.12} className="rounded-[2rem] bg-deep p-8 text-deep-foreground sm:p-10">
            <h2 className="text-4xl font-semibold sm:text-5xl">{presidentHeading.html}</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-deep-foreground/80 sm:text-base">
              {presidentIntro.map((p) => (
                <RichText key={p.html.slice(0, 30)} html={p.html} tone="dark" />
              ))}
            </div>
            {subSections.map((s) => (
              <div key={s.heading} className="mt-8 border-t border-deep-foreground/15 pt-6">
                <h3 className="text-2xl font-semibold text-accent">{s.heading}</h3>
                <div className="mt-3 space-y-4 text-sm leading-relaxed text-deep-foreground/80 sm:text-base">
                  {s.paragraphs.map((p) => (
                    <RichText key={p.slice(0, 30)} html={p} tone="dark" />
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      <MinistryApps heading={apps.html} viewMore={{ text: viewMore.text, href: viewMore.href }} />
      <ClosingBand heading={closingHeading.html} buttonLabel={closingButton.text} to={closingButton.href} />
    </>
  );
}
