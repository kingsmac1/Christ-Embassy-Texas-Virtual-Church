import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/sections";
import { PillLink, Section } from "@/components/site/ui";
import { CONTENT, type Block } from "@/data/content";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/checkout/success/")({
  head: () => ({ meta: [{ title: "Thank you page - Christ Embassy Texas Virtual Church" }, { name: "robots", content: "noindex, follow" }] }),
  component: SuccessPage,
});

const [sec] = CONTENT["thank-you-page"]!;

/** Stripe sends customers here after a paid checkout. The text is the original "Thank you page". */
function SuccessPage() {
  const { clear } = useCart();
  useEffect(() => {
    clear();
  }, [clear]);
  const title = sec!.find((b): b is Extract<Block, { type: "heading" }> => b.type === "heading")!;
  const text = sec!.find((b): b is Extract<Block, { type: "p" }> => b.type === "p")!;
  const button = sec!.find((b): b is Extract<Block, { type: "button" }> => b.type === "button")!;
  return (
    <>
      <PageHero title={title.html} />
      <Section tone="cream">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-border bg-card p-10 text-center">
          <CheckCircle2 className="mx-auto size-12 text-accent" aria-hidden="true" />
          <p className="mt-5 text-lg text-muted-foreground">{text.html}</p>
          <div className="mt-8">
            <PillLink to={button.href as "/ourstore/"} variant="accent">{button.text}</PillLink>
          </div>
        </div>
      </Section>
    </>
  );
}
