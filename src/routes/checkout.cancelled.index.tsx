import { createFileRoute } from "@tanstack/react-router";
import { XCircle } from "lucide-react";
import { PageHero } from "@/components/site/sections";
import { PillLink, Section } from "@/components/site/ui";

export const Route = createFileRoute("/checkout/cancelled/")({
  head: () => ({ meta: [{ title: "Checkout cancelled - Christ Embassy Texas Virtual Church" }, { name: "robots", content: "noindex, follow" }] }),
  component: CancelledPage,
});

/** Stripe sends customers here when they leave checkout without paying. */
function CancelledPage() {
  return (
    <>
      <PageHero title="Checkout cancelled" />
      <Section tone="cream">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-border bg-card p-10 text-center">
          <XCircle className="mx-auto size-12 text-muted-foreground" aria-hidden="true" />
          <p className="mt-5 text-lg text-muted-foreground">Your payment was not completed and you have not been charged. Your cart is still saved.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PillLink to="/cart/" variant="accent">Back to cart</PillLink>
            <PillLink to="/ourstore/" variant="outline">Return to shop</PillLink>
          </div>
        </div>
      </Section>
    </>
  );
}
