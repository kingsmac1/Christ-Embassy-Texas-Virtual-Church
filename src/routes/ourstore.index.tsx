import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { PageHero } from "@/components/site/sections";
import { Section } from "@/components/site/ui";
import { CONTENT, type Block } from "@/data/content";
import { PRODUCTS } from "@/data/products";
import { seoHead } from "@/data/seo";

export const Route = createFileRoute("/ourstore/")({
  head: () => seoHead("/ourstore/"),
  component: StorePage,
});

const [heroSec] = CONTENT["ourstore"]!;

function StorePage() {
  const title = heroSec!.find((b): b is Extract<Block, { type: "heading" }> => b.type === "heading")!;
  const intro = heroSec!.find((b): b is Extract<Block, { type: "p" }> => b.type === "p")!;
  return (
    <>
      <PageHero title={title.html}>{intro.html}</PageHero>
      <Section tone="cream">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
          {PRODUCTS.map((p, i) => (
            <li key={p.slug}>
              <ProductCard product={p} delay={(i % 4) * 0.06} />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
