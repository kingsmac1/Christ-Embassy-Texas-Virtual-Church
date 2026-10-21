// Shared branded wrapper for every email. Colours mirror the website theme
// (deep navy, electric-blue accent, cream background).
const COLORS = {
  deep: "#0b111d",
  primary: "#161d2e",
  accent: "#2b5fd9",
  cream: "#f6f1e8",
  card: "#ffffff",
  muted: "#667085",
  border: "#e4e7ec",
};

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function siteUrl(): string {
  return (Deno.env.get("SITE_URL") ?? "").replace(/\/$/, "");
}

export function layout(opts: { heading: string; bodyHtml: string; preheader?: string }): string {
  const logo = `${siteUrl()}/logo.png`;
  return `<!doctype html>
<html lang="en">
<body style="margin:0;padding:0;background:${COLORS.cream};font-family:Manrope,-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;color:${COLORS.primary};">
<span style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(opts.preheader ?? opts.heading)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.cream};padding:32px 12px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
  <tr><td style="background:${COLORS.deep};border-radius:24px 24px 0 0;padding:28px 32px;text-align:center;">
    <img src="${logo}" alt="Christ Embassy Texas Virtual Church" height="64" style="height:64px;display:inline-block;border:0;">
    <p style="margin:12px 0 0;font-family:Lora,Georgia,serif;font-size:18px;font-weight:600;color:#fbfaf6;">Christ Embassy <span style="color:${COLORS.accent};">Texas Virtual Church</span></p>
  </td></tr>
  <tr><td style="background:${COLORS.card};padding:36px 32px;border-left:1px solid ${COLORS.border};border-right:1px solid ${COLORS.border};">
    <h1 style="margin:0 0 16px;font-family:Lora,Georgia,serif;font-size:28px;line-height:1.15;font-weight:600;color:${COLORS.primary};">${escapeHtml(opts.heading)}</h1>
    ${opts.bodyHtml}
  </td></tr>
  <tr><td style="background:${COLORS.deep};border-radius:0 0 24px 24px;padding:20px 32px;text-align:center;font-size:12px;color:#b8c0d0;">
    &copy; ${new Date().getFullYear()} Christ Embassy Texas Virtual Church. All Rights Reserved.
  </td></tr>
</table>
</td></tr></table>
</body></html>`;
}

export function detailsTable(rows: { label: string; value: string }[]): string {
  const body = rows
    .map(
      (r) => `<tr>
  <td style="padding:10px 14px;border-bottom:1px solid ${COLORS.border};font-size:13px;font-weight:700;color:${COLORS.muted};width:38%;vertical-align:top;">${escapeHtml(r.label)}</td>
  <td style="padding:10px 14px;border-bottom:1px solid ${COLORS.border};font-size:14px;color:${COLORS.primary};white-space:pre-wrap;">${escapeHtml(r.value || "—")}</td>
</tr>`,
    )
    .join("");
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.cream};border-radius:16px;overflow:hidden;">${body}</table>`;
}

export function paragraph(text: string): string {
  return `<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:${COLORS.primary};">${text}</p>`;
}

export function button(label: string, href: string): string {
  return `<a href="${escapeHtml(href)}" style="display:inline-block;background:${COLORS.accent};color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:13px 26px;border-radius:999px;">${escapeHtml(label)}</a>`;
}
