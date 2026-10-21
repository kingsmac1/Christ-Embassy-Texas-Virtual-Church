import { detailsTable, escapeHtml, layout, paragraph } from "./layout.ts";

// Branded confirmation sent to the person who submitted a form.
export function submitterConfirmationEmail(opts: {
  formLabel: string;
  name: string;
  thanks: string;
  rows: { label: string; value: string }[];
}) {
  const greeting = opts.name ? `Hello ${escapeHtml(opts.name)},` : "Hello,";
  const html = layout({
    heading: "Thank you!",
    preheader: opts.thanks,
    bodyHtml:
      paragraph(greeting) +
      paragraph(escapeHtml(opts.thanks)) +
      paragraph("Here is a copy of what you sent us:") +
      detailsTable(opts.rows),
  });
  const text = `${opts.name ? `Hello ${opts.name},` : "Hello,"}\n\n${opts.thanks}\n\nWhat you sent us:\n` + opts.rows.map((r) => `${r.label}: ${r.value}`).join("\n");
  return { subject: `We received your ${opts.formLabel}`, html, text };
}
