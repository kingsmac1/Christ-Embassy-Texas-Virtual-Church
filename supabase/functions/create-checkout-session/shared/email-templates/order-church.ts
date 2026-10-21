import { detailsTable, escapeHtml, layout, paragraph } from "./layout.ts";
import { lineRows, type OrderLine } from "./order-customer.ts";

// Notification sent to the church when a store order is paid.
export function churchOrderEmail(opts: {
  orderId: string;
  customerName: string;
  customerEmail: string;
  shipping: string;
  lines: OrderLine[];
  totalCents: number;
}) {
  const rows = [
    { label: "Order", value: opts.orderId },
    { label: "Customer", value: opts.customerName },
    { label: "Email", value: opts.customerEmail },
    { label: "Shipping address", value: opts.shipping },
    ...lineRows(opts.lines, opts.totalCents),
  ];
  const html = layout({
    heading: "New store order",
    preheader: `Order ${opts.orderId} has been paid.`,
    bodyHtml: paragraph(`A new order was paid through the store. <strong>${escapeHtml(opts.orderId)}</strong>`) + detailsTable(rows),
  });
  const text = "New store order\n\n" + rows.map((r) => `${r.label}: ${r.value}`).join("\n");
  return { subject: `New store order ${opts.orderId}`, html, text };
}
