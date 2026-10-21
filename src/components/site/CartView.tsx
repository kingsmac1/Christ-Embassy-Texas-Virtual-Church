import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { formatPrice, getProduct } from "@/data/products";
import { useCart } from "@/lib/cart";
import { callFunction } from "@/lib/supabase";
import { PageHero } from "./sections";
import { PillButton, Section } from "./ui";

/** Shared by /cart/ and /checkout/. Checkout sends only slugs + quantities; the server looks up prices. */
export function CartView({ title, returnLabel }: { title: string; returnLabel: string }) {
  const { items, subtotalCents, setQuantity, remove, ready } = useCart();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function checkout() {
    setBusy(true);
    setError(null);
    const { data, error: err } = await callFunction<{ url?: string }>("create-checkout-session", {
      items: items.map((i) => ({ slug: i.slug, quantity: i.quantity })),
      origin: window.location.origin,
    });
    if (err || !data?.url) {
      setBusy(false);
      setError(err ?? "We could not start checkout. Please try again.");
      return;
    }
    window.location.href = data.url;
  }

  return (
    <>
      <PageHero title={title} />
      <Section tone="cream">
        <div className="mx-auto max-w-4xl">
          <Link to="/ourstore/" className="text-sm font-semibold text-accent underline underline-offset-4 hover:brightness-90">
            {returnLabel}
          </Link>

          {!ready ? null : items.length === 0 ? (
            <p className="mt-8 rounded-[1.75rem] border border-border bg-card p-8 text-center text-muted-foreground">Your cart is currently empty.</p>
          ) : (
            <>
              <ul className="mt-8 grid gap-4" aria-label="Cart items">
                {items.map((item) => {
                  const p = getProduct(item.slug);
                  if (!p) return null;
                  return (
                    <li key={item.slug} className="grid grid-cols-[5rem_1fr] items-center gap-4 rounded-[1.75rem] border border-border bg-card p-4 sm:grid-cols-[6rem_1fr_auto_auto] sm:gap-6 sm:p-5">
                      <Link to="/product/$slug/" params={{ slug: p.slug }} className="grid size-20 place-items-center overflow-hidden rounded-2xl bg-deep p-2 sm:size-24">
                        <img src={p.images[0]} alt={p.name} className="size-full object-contain" />
                      </Link>
                      <div className="min-w-0">
                        <Link to="/product/$slug/" params={{ slug: p.slug }} className="font-display text-base font-semibold uppercase hover:text-accent">
                          {p.name}
                        </Link>
                        <p className="mt-1 text-sm text-muted-foreground">{formatPrice(p.priceCents)}</p>
                      </div>
                      <div className="col-span-2 flex items-center justify-between gap-4 sm:col-span-1 sm:justify-end">
                        <div className="inline-flex items-center rounded-full border border-border">
                          <button type="button" aria-label={`Decrease quantity of ${p.name}`} onClick={() => setQuantity(item.slug, item.quantity - 1)} className="grid size-10 place-items-center rounded-full hover:bg-secondary">
                            <Minus className="size-4" aria-hidden="true" />
                          </button>
                          <span aria-live="polite" className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                          <button type="button" aria-label={`Increase quantity of ${p.name}`} onClick={() => setQuantity(item.slug, item.quantity + 1)} className="grid size-10 place-items-center rounded-full hover:bg-secondary">
                            <Plus className="size-4" aria-hidden="true" />
                          </button>
                        </div>
                        <p className="w-20 text-right font-bold sm:hidden">{formatPrice(p.priceCents * item.quantity)}</p>
                      </div>
                      <div className="col-span-2 flex items-center justify-between sm:col-span-1 sm:justify-end sm:gap-4">
                        <p className="hidden w-20 text-right font-bold sm:block">{formatPrice(p.priceCents * item.quantity)}</p>
                        <button type="button" onClick={() => remove(item.slug)} aria-label={`Remove ${p.name} from cart`} className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground hover:bg-secondary hover:text-destructive">
                          <Trash2 className="size-4" aria-hidden="true" />
                          Remove
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 rounded-[1.75rem] bg-deep p-6 text-deep-foreground sm:p-8">
                <div className="flex items-center justify-between text-lg">
                  <span className="font-display font-semibold">Subtotal</span>
                  <span className="font-bold">{formatPrice(subtotalCents)}</span>
                </div>
                <PillButton type="button" variant="accent" className="mt-6 w-full sm:w-auto" disabled={busy} onClick={checkout}>
                  {busy ? "Redirecting…" : "Proceed to checkout"}
                </PillButton>
                {error ? (
                  <p role="alert" className="mt-4 rounded-2xl bg-red-500/15 px-4 py-3 text-sm text-red-200">
                    {error}
                  </p>
                ) : null}
              </div>
            </>
          )}
        </div>
      </Section>
    </>
  );
}
