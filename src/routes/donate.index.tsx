import { createFileRoute } from "@tanstack/react-router";
import { HandHeart } from "lucide-react";
import { Reveal } from "@/components/site/motion";
import { PageHero, RichText } from "@/components/site/sections";
import { PillAnchor, Section } from "@/components/site/ui";
import { CONTENT, type Block } from "@/data/content";
import { seoHead } from "@/data/seo";

export const Route = createFileRoute("/donate/")({
  head: () => seoHead("/donate/"),
  component: DonatePage,
});

const [sec] = CONTENT["donate"]!;
const of = <T extends Block["type"]>(blocks: Block[], type: T) => blocks.filter((b): b is Extract<Block, { type: T }> => b.type === type);

function DonatePage() {
  const title = of(sec!, "heading")[0]!;
  const [verse, ref] = of(sec!, "p");
  const button = of(sec!, "button")[0]!;
  return (
    <>
      <PageHero title={title.html} />
      <Section tone="cream">
        <Reveal className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-card p-8 text-center shadow-[0_20px_60px_-20px_rgba(20,20,30,0.2)] sm:p-12">
          <HandHeart className="mx-auto size-8 text-accent" aria-hidden="true" />
          <RichText html={verse!.html} className="mt-6 font-display text-xl leading-snug sm:text-2xl" />
          <RichText html={ref!.html} className="mt-5 text-sm text-muted-foreground" />
          <div className="mt-8">
            <PillAnchor href={button.href} target={button.target} variant="accent">
              {button.text}
            </PillAnchor>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
