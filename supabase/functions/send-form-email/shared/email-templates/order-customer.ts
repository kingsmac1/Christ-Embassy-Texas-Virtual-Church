import { button, detailsTable, escapeHtml, layout, paragraph, siteUrl } from "./layout.ts";

export type OrderLine = { name: string; quantity: number; unitCents: number };

export const money = (cents: number) => `$${(cents / 100).toFixed(2)}`;

function lineRows(lines: OrderLine[], totalCents: number) {
  return [
    ...lines.map((l) => ({ label: `${l.name} × ${l.quantity}`, value: money(l.unitCents * l.quantity) })),
    { label: "Total", value: money(totalCents) },
  ];
}

// Order confirmation sent to the customer after a successful Stripe payment.
export function customerOrderEmail(opts: { name: string; orderId: string; lines: OrderLine[]; totalCents: number }) {
  const html = layout({
    heading: "Thank you for your order",
    preheader: "Your order has been received.",
    bodyHtml:
      paragraph(opts.name ? `Hello ${escapeHtml(opts.name)},` : "Hello,") +
      paragraph(`We have received your payment. Your order reference is <strong>${escapeHtml(opts.orderId)}</strong>.`) +
      detailsTable(lineRows(opts.lines, opts.totalCents)) +
      `<p style="margin:24px 0 0;">${button("Back to store", `${siteUrl()}/ourstore/`)}</p>`,
  });
  const text = `Thank you for your order (${opts.orderId})\n\n` + lineRows(opts.lines, opts.totalCents).map((r) => `${r.label}: ${r.value}`).join("\n");
  return { subject: `Your order ${opts.orderId}`, html, text };
}

export { lineRows };
