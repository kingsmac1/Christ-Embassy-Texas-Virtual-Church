import { createFileRoute } from "@tanstack/react-router";
import { EventRegistration } from "@/components/site/EventRegistration";
import { CONTENT, type Block } from "@/data/content";
import { BACK_TO_SCHOOL_FIELDS } from "@/data/forms";
import { seoHead } from "@/data/seo";

export const Route = createFileRoute("/back-to-school/")({
  head: () => seoHead("/back-to-school/"),
  component: BackToSchoolPage,
});

const [bannerSec, , mapSec] = CONTENT["back-to-school"]!;
const first = <T extends Block["type"]>(blocks: Block[], type: T) => blocks.find((b): b is Extract<Block, { type: T }> => b.type === type)!;

function BackToSchoolPage() {
  return (
    <EventRegistration
      banner={first(bannerSec!, "sectionbg").src}
      endsAt={new Date(1723309200 * 1000)}
      srTitle="Back to School"
      form="back-to-school"
      fields={BACK_TO_SCHOOL_FIELDS}
      mapSrc={first(mapSec!, "iframe").src}
      mapTitle="Christ Embassy Wilcrest on the map"
      successMessage="Thank you for registering for Back to School."
    />
  );
}
