import { createFileRoute } from "@tanstack/react-router";
import { UtilityPage } from "@/components/site/UtilityPage";
import { seoHead } from "@/data/seo";

export const Route = createFileRoute("/hello-world/")({
  head: () => seoHead("/hello-world/"),
  component: () => <UtilityPage slug="hello-world" />,
});
