import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/motion";
import { RichText } from "@/components/site/sections";
import { PillButton, PillLink, Section } from "@/components/site/ui";
import { formatPrice, getProduct } from "@/data/products";
import { seoHead } from "@/data/seo";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/product/$slug/")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params }) => seoHead(`/product/${params.slug}/`),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const onSale = product.regularPriceCents > product.priceCents;
  const related = product.related.map((s) => getProduct(s)).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <Section tone="cream">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="grid aspect-square place-items-center overflow-hidden rounded-[2rem] bg-deep p-10 shadow-[0_20px_60px_-20px_rgba(20,20,30,0.45)]">
              <img src={product.images[0]} alt={product.name} className="size-full object-contain" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl font-semibold sm:text-5xl">{product.name}</h1>
            <p className="mt-4 text-2xl font-bold">
              {onSale ? (
                <>
                  <del className="mr-3 font-medium text-muted-foreground" aria-hidden="true">{formatPrice(product.regularPriceCents)}</del>
                  <span className="sr-only">Original price was: {formatPrice(product.regularPriceCents)}. Current price is: </span>
                  <ins className="no-underline">{formatPrice(product.priceCents)}</ins>
                </>
              ) : (
                formatPrice(product.priceCents)
              )}
            </p>
            <form
              className="mt-8 flex flex-wrap items-center gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                add(product.slug, quantity);
                setAdded(true);
              }}
            >
              <div className="inline-flex items-center rounded-full border border-border bg-card">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="grid size-11 place-items-center rounded-full hover:bg-secondary">
                  <Minus className="size-4" aria-hidden="true" />
                </button>
                <label className="sr-only" htmlFor="qty">{product.name} quantity</label>
                <input
                  id="qty"
                  type="number"
                  min={1}
                  max={20}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.min(20, Math.max(1, Number(e.target.value) || 1)))}
                  className="w-12 bg-transparent text-center text-sm font-semibold [appearance:textfield] focus-visible:outline-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((q) => Math.min(20, q + 1))} className="grid size-11 place-items-center rounded-full hover:bg-secondary">
                  <Plus className="size-4" aria-hidden="true" />
                </button>
              </div>
              <PillButton type="submit" variant="accent">Add to cart</PillButton>
            </form>
            <p aria-live="polite" className="mt-4 min-h-6 text-sm">
              {added ? (
                <span className="inline-flex items-center gap-2 font-semibold text-accent">
                  <Check className="size-4" aria-hidden="true" />
                  Added.{" "}
                  <Link to="/cart/" className="underline underline-offset-4">View cart</Link>
                </span>
              ) : null}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <Reveal className="mx-auto max-w-3xl">
          <h3 className="font-display text-2xl font-semibold">Product Details</h3>
          <RichText html={product.description} className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground" />
        </Reveal>
      </Section>

      {related.length ? (
        <Section tone="cream">
          <Reveal>
            <h2 className="text-center text-4xl font-semibold sm:text-5xl">Related products</h2>
          </Reveal>
          <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-8">
            {related.map((p, i) => (
              <li key={p.slug}>
                <ProductCard product={p} delay={i * 0.06} />
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <PillLink to="/ourstore/" variant="outline">Back to store</PillLink>
          </div>
        </Section>
      ) : null}
    </>
  );
}
