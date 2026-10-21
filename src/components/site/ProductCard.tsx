import { Link } from "@tanstack/react-router";
import { formatPrice, type Product } from "@/data/products";
import { Reveal } from "./motion";

/** Product tile: dark rounded image panel, uppercase title, struck-through regular price and sale price. */
export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  const onSale = product.regularPriceCents > product.priceCents;
  return (
    <Reveal delay={delay}>
      <Link to="/product/$slug/" params={{ slug: product.slug }} className="group block text-center">
        <div className="grid aspect-square place-items-center overflow-hidden rounded-[1.75rem] bg-deep p-6 shadow-[0_1px_2px_rgba(20,20,30,0.04),0_12px_32px_-16px_rgba(20,20,30,0.3)] transition-shadow group-hover:shadow-[0_20px_40px_-16px_rgba(20,20,30,0.45)]">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="size-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <h3 className="mt-4 font-display text-base font-semibold tracking-tight uppercase group-hover:text-accent sm:text-lg">{product.name}</h3>
        <p className="mt-1.5 text-base font-bold">
          {onSale ? (
            <>
              <del className="mr-2 font-medium text-muted-foreground" aria-hidden="true">{formatPrice(product.regularPriceCents)}</del>
              <span className="sr-only">Original price was: {formatPrice(product.regularPriceCents)}. Current price is: </span>
              <ins className="no-underline">{formatPrice(product.priceCents)}</ins>
            </>
          ) : (
            formatPrice(product.priceCents)
          )}
        </p>
      </Link>
    </Reveal>
  );
}
