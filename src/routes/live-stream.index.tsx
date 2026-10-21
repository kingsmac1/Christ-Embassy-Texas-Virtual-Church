import { createFileRoute } from "@tanstack/react-router";
import { BiblePanel, CommentFeed, DonateCard, LivestreamPlayer, ServiceCountdown } from "@/components/site/Livestream";
import { PageHero } from "@/components/site/sections";
import { Section } from "@/components/site/ui";
import { seoHead } from "@/data/seo";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/live-stream/")({
  head: () => seoHead("/live-stream/"),
  component: LiveStreamPage,
});

function LiveStreamPage() {
  return (
    <>
      <PageHero title="Live Stream">
        <ul className="flex flex-wrap items-center justify-center gap-3 text-sm">
          {SERVICES.map((s) => (
            <li key={s.title} className="rounded-full border border-deep-foreground/25 px-4 py-2">
              <strong className="font-semibold">{s.title}</strong> · {s.schedule}
            </li>
          ))}
        </ul>
      </PageHero>

      <Section tone="cream">
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <LivestreamPlayer />
          <BiblePanel />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <CommentFeed />
          <DonateCard />
        </div>
      </Section>

      <ServiceCountdown />
    </>
  );
}
