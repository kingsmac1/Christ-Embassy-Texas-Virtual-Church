import { createFileRoute } from "@tanstack/react-router";
import { ArchivePage } from "./2023.10.index";

export const Route = createFileRoute("/category/$slug/")({
  head: () => ({ meta: [{ title: "Uncategorized - Christ Embassy Texas Virtual Church" }] }),
  component: () => <ArchivePage title="Uncategorized" />,
});
