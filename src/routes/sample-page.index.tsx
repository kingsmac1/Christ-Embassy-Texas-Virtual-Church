import { createFileRoute } from "@tanstack/react-router";
import { UtilityPage } from "@/components/site/UtilityPage";
import { seoHead } from "@/data/seo";

export const Route = createFileRoute("/sample-page/")({
  head: () => seoHead("/sample-page/"),
  component: () => <UtilityPage slug="sample-page" />,
});
