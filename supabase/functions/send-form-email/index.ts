// Supabase Edge Function: send-form-email
// Every website form posts here. Sends two emails through Resend:
//   1. to the church (OWNER_EMAIL) with all details, reply-to = submitter
//   2. a branded confirmation to the submitter
// Secrets: RESEND_API_KEY, OWNER_EMAIL, FROM_EMAIL (and optional SITE_URL for the logo).
import { corsHeaders, json } from "./shared/cors.ts";
import { requireEnv, sendEmail } from "./shared/resend.ts";
import { churchFormEmail } from "./shared/email-templates/form-church.ts";
import { submitterConfirmationEmail } from "./shared/email-templates/form-submitter.ts";
import { FORMS, type FieldSpec } from "./forms.ts";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(spec: FieldSpec, raw: unknown): { value: string; error?: string } {
  const value = typeof raw === "string" ? raw.trim() : "";
  if (spec.required && !value) return { value, error: `${spec.label} is required.` };
  if (!value) return { value };
  if (spec.max && value.length > spec.max) return { value, error: `${spec.label} is too long.` };
  if (spec.type === "email" && !EMAIL_RE.test(value)) return { value, error: `${spec.label} must be a valid email address.` };
  if (spec.type === "tel" && !/^[0-9+()\-.\s]{6,40}$/.test(value)) return { value, error: `${spec.label} must be a valid phone number.` };
  if (spec.type === "choice" && !spec.choices?.includes(value)) return { value, error: `${spec.label} has an invalid choice.` };
  return { value };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  let body: { form?: string; fields?: Record<string, unknown>; website?: string };
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Honeypot: real visitors never see or fill this field. Pretend success to bots.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ ok: true });
  }

  const spec = body.form ? FORMS[body.form] : undefined;
  if (!spec) return json({ error: "Unknown form." }, 400);

  const errors: Record<string, string> = {};
  const rows: { label: string; value: string }[] = [];
  const values: Record<string, string> = {};
  for (const field of spec.fields) {
    const result = validate(field, body.fields?.[field.name]);
    if (result.error) errors[field.name] = result.error;
    values[field.name] = result.value;
    rows.push({ label: field.label, value: result.value });
  }
  if (Object.keys(errors).length) return json({ error: "Please check the form and try again.", errors }, 400);

  const submitterEmail = values["email"] ?? "";
  const submitterName = spec.nameFields.map((n) => values[n]).filter(Boolean).join(" ");

  try {
    const owner = requireEnv("OWNER_EMAIL");
    const church = churchFormEmail(spec.label, rows);
    await sendEmail({ to: owner, ...(submitterEmail ? { replyTo: submitterEmail } : {}), ...church });
    // Some forms (Back to School) make email optional: only confirm when we have an address.
    if (submitterEmail) {
      const confirmation = submitterConfirmationEmail({ formLabel: spec.label, name: submitterName, thanks: spec.thanks, rows });
      await sendEmail({ to: submitterEmail, ...confirmation });
    }
  } catch (err) {
    console.error("send-form-email failed:", err);
    return json({ error: "We could not send your message right now. Please try again shortly." }, 502);
  }

  return json({ ok: true });
});
