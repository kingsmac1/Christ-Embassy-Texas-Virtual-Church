import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { submitForm, validateFields, type FieldDef, type FormKey } from "@/lib/forms";
import { PillButton } from "./ui";
import { SuccessModal } from "./SuccessModal";

const fieldClass =
  "mt-2 w-full rounded-2xl border border-border bg-secondary px-4 py-3 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-accent aria-[invalid=true]:border-destructive";

/**
 * Generic form used by every form on the site. Validates in the browser, posts to the
 * `send-form-email` Edge Function (which validates again and sends both emails), and
 * includes a hidden honeypot field that real visitors never fill in.
 */
export function SiteForm({
  form,
  fields,
  submitLabel,
  tone = "light",
  twoColumns = false,
  wideFields = [],
  successTitle = "Thank you!",
  successMessage = "Your submission has been received.",
  className,
}: {
  form: FormKey;
  fields: FieldDef[];
  submitLabel: string;
  tone?: "light" | "dark";
  twoColumns?: boolean;
  /** Field names that span both columns when twoColumns is on. */
  wideFields?: string[];
  successTitle?: string;
  successMessage?: string;
  className?: string;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const dark = tone === "dark";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const honeypot = String(new FormData(e.currentTarget).get("website") ?? "");
    const found = validateFields(fields, values);
    setErrors(found);
    setFormError(null);
    if (Object.keys(found).length) return;
    setSubmitting(true);
    const result = await submitForm(form, values, honeypot);
    setSubmitting(false);
    if (result.error) {
      setFormError(result.error);
      if (result.fieldErrors) setErrors(result.fieldErrors);
      return;
    }
    setValues({});
    setShowSuccess(true);
  }

  const set = (name: string, value: string) => setValues((v) => ({ ...v, [name]: value }));
  const labelClass = cn("block text-sm font-semibold", dark && "text-deep-foreground");

  return (
    <>
      <form noValidate onSubmit={onSubmit} aria-label={form} className={cn(twoColumns && "grid gap-5 sm:grid-cols-2", !twoColumns && "grid gap-5", className)}>
        {fields.map((f) => {
          const wide = twoColumns && (f.type === "textarea" || f.type === "radio" || wideFields.includes(f.name));
          const id = `${form}-${f.name}`;
          const err = errors[f.name];
          return (
            <div key={f.name} className={cn(wide && "sm:col-span-2")}>
              {f.type === "radio" ? (
                <fieldset>
                  <legend className={labelClass}>
                    {f.label}
                    {f.required ? <span aria-hidden="true"> *</span> : null}
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {f.choices?.map((c) => (
                      <label
                        key={c}
                        className={cn(
                          "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors",
                          values[f.name] === c
                            ? "border-accent bg-accent text-accent-foreground"
                            : dark
                              ? "border-deep-foreground/30 text-deep-foreground hover:bg-deep-foreground/10"
                              : "border-border bg-secondary hover:border-accent",
                        )}
                      >
                        <input
                          type="radio"
                          name={f.name}
                          value={c}
                          checked={values[f.name] === c}
                          onChange={() => set(f.name, c)}
                          className="sr-only"
                        />
                        {c}
                      </label>
                    ))}
                  </div>
                </fieldset>
              ) : (
                <label htmlFor={id} className={labelClass}>
                  {f.label}
                  {f.required ? <span aria-hidden="true"> *</span> : null}
                  {f.type === "textarea" ? (
                    <textarea
                      id={id}
                      name={f.name}
                      rows={5}
                      placeholder={f.placeholder}
                      value={values[f.name] ?? ""}
                      onChange={(e) => set(f.name, e.target.value)}
                      aria-invalid={err ? true : undefined}
                      className={fieldClass}
                    />
                  ) : (
                    <input
                      id={id}
                      name={f.name}
                      type={f.type ?? "text"}
                      placeholder={f.placeholder}
                      autoComplete={f.type === "email" ? "email" : f.type === "tel" ? "tel" : undefined}
                      value={values[f.name] ?? ""}
                      onChange={(e) => set(f.name, e.target.value)}
                      aria-invalid={err ? true : undefined}
                      className={fieldClass}
                    />
                  )}
                </label>
              )}
              {err ? (
                <p role="alert" className={cn("mt-1.5 text-xs", dark ? "text-red-300" : "text-destructive")}>
                  {err}
                </p>
              ) : null}
            </div>
          );
        })}

        {/* Honeypot: hidden from people, irresistible to bots. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
          </label>
        </div>

        <div className={cn(twoColumns && "sm:col-span-2")}>
          <PillButton type="submit" variant="accent" disabled={submitting}>
            {submitting ? "Sending…" : submitLabel}
          </PillButton>
          <p aria-live="polite" className="sr-only">
            {submitting ? "Sending" : ""}
          </p>
          {formError ? (
            <p role="alert" className={cn("mt-3 rounded-2xl px-4 py-3 text-sm", dark ? "bg-red-500/15 text-red-200" : "bg-destructive/10 text-destructive")}>
              {formError}
            </p>
          ) : null}
        </div>
      </form>

      <SuccessModal open={showSuccess} onOpenChange={setShowSuccess} title={successTitle} message={successMessage} />
    </>
  );
}
