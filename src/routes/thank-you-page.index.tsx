import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/sections";
import { PillLink, Section } from "@/components/site/ui";
import { CONTENT, type Block } from "@/data/content";
import { seoHead } from "@/data/seo";

export const Route = createFileRoute("/thank-you-page/")({
  head: () => seoHead("/thank-you-page/"),
  component: ThankYouPage,
});

const [sec] = CONTENT["thank-you-page"]!;

function ThankYouPage() {
  const title = sec!.find((b): b is Extract<Block, { type: "heading" }> => b.type === "heading")!;
  const text = sec!.find((b): b is Extract<Block, { type: "p" }> => b.type === "p")!;
  const button = sec!.find((b): b is Extract<Block, { type: "button" }> => b.type === "button")!;
  return (
    <>
      <PageHero title={title.html} />
      <Section tone="cream">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-lg text-muted-foreground">{text.html}</p>
          <div className="mt-8">
            <PillLink to={button.href as "/ourstore/"} variant="accent">{button.text}</PillLink>
          </div>
        </div>
      </Section>
    </>
  );
}
