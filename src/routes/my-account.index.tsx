import { createFileRoute } from "@tanstack/react-router";
import { UtilityPage } from "@/components/site/UtilityPage";
import { seoHead } from "@/data/seo";

export const Route = createFileRoute("/my-account/")({
  head: () => seoHead("/my-account/"),
  component: () => <UtilityPage slug="my-account" />,
});
