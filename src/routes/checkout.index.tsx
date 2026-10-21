import { createFileRoute } from "@tanstack/react-router";
import { CartView } from "@/components/site/CartView";
import { CONTENT, type Block } from "@/data/content";
import { seoHead } from "@/data/seo";

export const Route = createFileRoute("/checkout/")({
  head: () => seoHead("/checkout/"),
  component: CheckoutPage,
});

const [sec] = CONTENT["checkout"]!;

function CheckoutPage() {
  const title = sec!.find((b): b is Extract<Block, { type: "heading" }> => b.type === "heading")!;
  return <CartView title={title.html} returnLabel="Return to shop" />;
}
