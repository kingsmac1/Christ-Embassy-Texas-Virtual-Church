import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, WpSidebar } from "@/components/site/sections";
import { Section } from "@/components/site/ui";

export const Route = createFileRoute("/2023/10/")({
  head: () => ({ meta: [{ title: "October 2023 - Christ Embassy Texas Virtual Church" }] }),
  component: () => <ArchivePage title="October 2023" />,
});

export function ArchivePage({ title }: { title: string }) {
  return (
    <>
      <PageHero title={title} image={null} />
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          <ul>
            <li>
              <Link to="/hello-world/" className="font-display text-2xl font-semibold hover:text-accent">Hello world!</Link>
            </li>
          </ul>
          <WpSidebar />
        </div>
      </Section>
    </>
  );
}
