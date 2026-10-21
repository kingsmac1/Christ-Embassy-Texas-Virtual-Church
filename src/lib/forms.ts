import { callFunction } from "./supabase";

export type FormKey = "contact" | "newsletter" | "salvation" | "sunday-special" | "back-to-school";

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "radio";
  required?: boolean;
  choices?: string[];
  placeholder?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Browser-side validation. The Edge Function repeats these checks on the server. */
export function validateFields(fields: FieldDef[], values: Record<string, string>): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const f of fields) {
    const v = (values[f.name] ?? "").trim();
    if (f.required && !v) errors[f.name] = "This field is required.";
    else if (v && f.type === "email" && !EMAIL_RE.test(v)) errors[f.name] = "Please enter a valid email address.";
    else if (v && f.type === "tel" && !/^[0-9+()\-.\s]{6,40}$/.test(v)) errors[f.name] = "Please enter a valid phone number.";
  }
  return errors;
}

export async function submitForm(form: FormKey, values: Record<string, string>, honeypot: string) {
  return callFunction("send-form-email", { form, fields: values, website: honeypot });
}
