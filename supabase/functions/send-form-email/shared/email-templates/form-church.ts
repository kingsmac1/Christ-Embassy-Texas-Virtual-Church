import { detailsTable, escapeHtml, layout, paragraph } from "./layout.ts";

// Email sent to the church for every form submission.
export function churchFormEmail(formLabel: string, rows: { label: string; value: string }[]) {
  const html = layout({
    heading: `New ${formLabel} submission`,
    preheader: `Someone just submitted the ${formLabel} form.`,
    bodyHtml:
      paragraph(`A new submission arrived through the <strong>${escapeHtml(formLabel)}</strong> form on the website. Reply to this email to answer them directly.`) +
      detailsTable(rows),
  });
  const text = `New ${formLabel} submission\n\n` + rows.map((r) => `${r.label}: ${r.value}`).join("\n");
  return { subject: `New ${formLabel} submission`, html, text };
}
