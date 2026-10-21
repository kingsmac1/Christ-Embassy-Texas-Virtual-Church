import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/motion";
import { ClosingBand, MinistryApps, PageHero, RichText } from "@/components/site/sections";
import { PillAnchor, Section } from "@/components/site/ui";
import { CONTENT, type Block } from "@/data/content";
import { seoHead } from "@/data/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/our-ministry/")({
  head: () => seoHead("/our-ministry/"),
  component: MinistryPage,
});

const [heroSec, rowsSec, appsSec, closingSec] = CONTENT["our-ministry"]!;
const of = <T extends Block["type"]>(blocks: Block[], type: T) => blocks.filter((b): b is Extract<Block, { type: T }> => b.type === type);

type Row = { heading: string; paragraphs: string[]; buttons: { text: string; href: string; target: string }[] };

/** Each ministry is: heading, paragraphs, buttons, plus one photo (the photos are listed in page order). */
function buildRows(): Row[] {
  const rows: Row[] = [];
  let first = true;
  for (const b of rowsSec!) {
    if (b.type === "heading" && b.level === 2) rows.push({ heading: b.html, paragraphs: [], buttons: [] });
    else if (first && b.type === "p") {
      // The first ministry's title is a bold link paragraph rather than a heading.
      rows.push({ heading: b.html, paragraphs: [], buttons: [] });
      first = false;
    } else if (b.type === "p") rows[rows.length - 1]?.paragraphs.push(b.html);
    else if (b.type === "button") rows[rows.length - 1]?.buttons.push({ text: b.text, href: b.href, target: b.target });
  }
  return rows;
}

function MinistryPage() {
  const title = of(heroSec!, "heading")[0]!;
  const photos = of(rowsSec!, "bg").map((b) => b.src);
  const rows = buildRows();
  const apps = of(appsSec!, "heading")[0]!;
  const viewMore = of(appsSec!, "button")[0]!;
  const closingHeading = of(closingSec!, "heading")[0]!;
  const closingButton = of(closingSec!, "button")[0]!;

  return (
    <>
      <PageHero title={title.html} />

      {rows.map((row, i) => (
        <Section key={row.heading} tone={i % 2 === 0 ? "cream" : "white"}>
          <div className={cn("grid items-center gap-10 lg:grid-cols-2", i % 2 === 1 && "lg:[&>*:first-child]:order-2")}>
            <Reveal>
              <div className="overflow-hidden rounded-[2rem]">
                <img src={photos[i]} alt="" loading="lazy" className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[26rem]" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <RichText html={row.heading} className="font-display text-3xl leading-tight font-semibold sm:text-4xl [&_a]:text-primary [&_p]:m-0" />
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                {row.paragraphs.map((p) => (
                  <RichText key={p.slice(0, 40)} html={p} />
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {row.buttons.map((b, j) => (
                  <PillAnchor key={b.text + b.href} href={b.href} target={b.target} variant={j === 0 ? "accent" : "outline"}>
                    {b.text}
                  </PillAnchor>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>
      ))}

      <MinistryApps heading={apps.html} viewMore={{ text: viewMore.text, href: viewMore.href }} />
      <ClosingBand heading={closingHeading.html} buttonLabel={closingButton.text} to={closingButton.href} />
    </>
  );
}
