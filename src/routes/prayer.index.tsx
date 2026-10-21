import { createFileRoute } from "@tanstack/react-router";
import { UtilityPage } from "@/components/site/UtilityPage";
import { seoHead } from "@/data/seo";

export const Route = createFileRoute("/prayer/")({
  head: () => seoHead("/prayer/"),
  component: () => <UtilityPage slug="prayer" />,
});
