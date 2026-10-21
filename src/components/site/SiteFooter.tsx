import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { FOOTER_LINKS, SITE } from "@/data/site";
import { submitForm, validateFields } from "@/lib/forms";
import { PillButton } from "./ui";
import { SuccessModal } from "./SuccessModal";

export function SiteFooter() {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const found = validateFields([{ name: "email", label: "Email", type: "email", required: true }], { email });
    if (found["email"]) {
      setStatus("error");
      setMessage(found["email"]);
      return;
    }
    setStatus("sending");
    const result = await submitForm("newsletter", { email }, String(data.get("website") ?? ""));
    if (result.error) {
      setStatus("error");
      setMessage(result.error);
      return;
    }
    form.reset();
    setStatus("idle");
    setMessage("");
    setShowSuccess(true);
  }

  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1.2fr]">
        <div>
          <img src="/logo.png" alt="" className="size-24 object-contain" />
          <h2 className="mt-4 font-display text-lg font-bold">Address:</h2>
          <address className="mt-2 space-y-1 text-sm text-deep-foreground/80 not-italic">
            <p>{SITE.address}</p>
            <p>
              <a className="font-semibold hover:text-accent" href={SITE.phoneHref}>{SITE.phone}</a>
            </p>
          </address>
        </div>

        <nav aria-label="Quick Link">
          <h2 className="font-display text-sm font-bold tracking-wide uppercase text-accent">Quick Link</h2>
          <ul className="mt-4 space-y-2 text-sm text-deep-foreground/80">
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <form noValidate onSubmit={onSubmit} aria-label="Newsletter" className="max-w-sm">
          <h2 className="font-display text-sm font-bold tracking-wide uppercase text-accent">Newsletter</h2>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
            <label htmlFor="footer-newsletter" className="sr-only">Email</label>
            <input
              id="footer-newsletter"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="min-h-11 w-full rounded-full border border-deep-foreground/25 bg-deep-foreground/5 px-4 text-sm text-deep-foreground placeholder:text-deep-foreground/50 focus-visible:outline-2 focus-visible:outline-accent"
            />
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
            </div>
            <PillButton type="submit" variant="accent" className="shrink-0" disabled={status === "sending"}>
              {status === "sending" ? "Subscribing…" : "Subscribe"}
            </PillButton>
          </div>
          <p aria-live="polite" role={status === "error" ? "alert" : undefined} className="mt-2 text-xs text-red-300">
            {status === "error" ? message : ""}
          </p>
        </form>
      </div>

      <div className="border-t border-deep-foreground/15">
        <div className="container-site py-5 text-center text-xs text-deep-foreground/65">
          <p>Copyright © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.</p>
        </div>
      </div>

      <SuccessModal open={showSuccess} onOpenChange={setShowSuccess} title="Thank you!" message="Your email has been added to our newsletter." />
    </footer>
  );
}
