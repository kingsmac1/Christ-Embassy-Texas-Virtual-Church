import { createFileRoute } from "@tanstack/react-router";
import { EventRegistration } from "@/components/site/EventRegistration";
import { CONTENT, type Block } from "@/data/content";
import { SUNDAY_SPECIAL_FIELDS } from "@/data/forms";
import { seoHead } from "@/data/seo";

export const Route = createFileRoute("/sunday-special/")({
  head: () => seoHead("/sunday-special/"),
  component: SundaySpecialPage,
});

const [bannerSec, formSec, mapSec] = CONTENT["sunday-special"]!;
const first = <T extends Block["type"]>(blocks: Block[], type: T) => blocks.find((b): b is Extract<Block, { type: T }> => b.type === type)!;

function SundaySpecialPage() {
  return (
    <EventRegistration
      banner={first(bannerSec!, "sectionbg").src}
      endsAt={new Date(1716742800 * 1000)}
      heading={first(formSec!, "heading").html}
      form="sunday-special"
      fields={SUNDAY_SPECIAL_FIELDS}
      mapSrc={first(mapSec!, "iframe").src}
      mapTitle="Christ Embassy Wilcrest on the map"
      successMessage="Thank you for registering for the Sunday Special."
    />
  );
}
