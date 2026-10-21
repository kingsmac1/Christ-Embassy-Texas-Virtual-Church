import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/motion";
import { PageHero, RichText } from "@/components/site/sections";
import { SiteForm } from "@/components/site/SiteForm";
import { ScrollWords, SplitReveal } from "@/components/site/fx";
import { Section } from "@/components/site/ui";
import { CONTENT, type Block } from "@/data/content";
import { SALVATION_FIELDS } from "@/data/forms";
import { seoHead } from "@/data/seo";

export const Route = createFileRoute("/prayer-of-salvation/")({
  head: () => seoHead("/prayer-of-salvation/"),
  component: SalvationPage,
});

const [heroSec, prayerSec, thanksSec] = CONTENT["prayer-of-salvation"]!;
const of = <T extends Block["type"]>(blocks: Block[], type: T) => blocks.filter((b): b is Extract<Block, { type: T }> => b.type === type);

function SalvationPage() {
  const title = of(heroSec!, "heading")[0]!;
  const [lead, prayer] = of(prayerSec!, "p");
  const [congrats, formTitle] = of(thanksSec!, "heading");
  const thanksParagraphs = of(thanksSec!, "p");

  return (
    <>
      <PageHero title={title.html} />

      <Section tone="cream">
        <Reveal as="article" className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-card p-8 sm:p-12">
          <Sparkles className="size-6 text-accent" aria-hidden="true" />
          <RichText html={lead!.html} className="mt-4 text-xs font-bold tracking-wide text-accent uppercase" />
          <blockquote className="mt-5 rounded-3xl bg-secondary p-6 sm:p-8">
            <ScrollWords as="p" from={0.2} className="font-display text-xl leading-relaxed sm:text-3xl">
              {prayer!.html.replace(/<[^>]+>/g, "")}
            </ScrollWords>
          </blockquote>
        </Reveal>
      </Section>

      <Section tone="white">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SplitReveal as="h2" className="text-4xl font-semibold sm:text-6xl">{congrats!.html}</SplitReveal>
            <div className="mt-5 space-y-3 text-base leading-relaxed text-muted-foreground">
              {thanksParagraphs.map((p) => (
                <RichText key={p.html.slice(0, 30)} html={p.html} />
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] border border-border bg-card p-7 sm:p-9">
            <h2 className="font-display text-2xl font-semibold">{formTitle!.html}</h2>
            <SiteForm
              form="salvation"
              fields={SALVATION_FIELDS}
              submitLabel="Submit"
              className="mt-6"
              successTitle="Congratulations!"
              successMessage="You are now a child of God. We have received your contact details."
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
