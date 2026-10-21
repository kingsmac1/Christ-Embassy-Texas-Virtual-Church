import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { HeroReveal } from "./motion";
import { useMagnetic } from "./fx";

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase",
        tone === "dark"
          ? "bg-secondary text-primary"
          : "bg-deep-foreground/10 text-deep-foreground",
      )}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

type PillProps = {
  variant?: "primary" | "accent" | "outline" | "light";
  className?: string;
  children: ReactNode;
};

const pillBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const pillVariants = {
  primary: "bg-primary text-primary-foreground hover:bg-deep",
  accent: "bg-accent text-accent-foreground shadow-[0_8px_24px_-8px_var(--accent)] hover:brightness-95",
  outline: "border border-primary/30 bg-transparent text-primary hover:bg-secondary",
  light: "border border-deep-foreground/30 text-deep-foreground hover:bg-deep-foreground/10",
} as const;

export function PillLink({
  variant = "primary",
  className,
  children,
  ...rest
}: PillProps & ComponentProps<typeof Link>) {
  const ref = useMagnetic<HTMLAnchorElement>();
  return (
    <Link ref={ref} className={cn(pillBase, pillVariants[variant], className)} {...rest}>
      {children}
    </Link>
  );
}

export function PillButton({
  variant = "primary",
  className,
  children,
  ...rest
}: PillProps & ComponentProps<"button">) {
  const ref = useMagnetic<HTMLButtonElement>();
  return (
    <button ref={ref} className={cn(pillBase, pillVariants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function Section({
  tone = "cream",
  className,
  children,
  ...rest
}: { tone?: "cream" | "white" | "deep" } & ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "overflow-x-hidden py-20 sm:py-28",
        tone === "cream" && "bg-cream text-foreground",
        tone === "white" && "bg-card text-foreground",
        tone === "deep" && "bg-deep text-deep-foreground",
        className,
      )}
      {...rest}
    >
      <div className="container-site min-w-0">{children}</div>
    </section>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] bg-card p-6 shadow-[0_1px_2px_rgba(20,20,30,0.04),0_12px_32px_-16px_rgba(20,20,30,0.16)] transition-shadow hover:shadow-[0_1px_2px_rgba(20,20,30,0.05),0_20px_40px_-16px_rgba(20,20,30,0.22)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function StatCard({ value, label, tone = "light" }: { value: string; label: string; tone?: "light" | "accent" | "deep" }) {
  return (
    <div
      className={cn(
        "rounded-3xl p-6",
        tone === "light" && "border border-border bg-card",
        tone === "accent" && "bg-accent text-accent-foreground",
        tone === "deep" && "bg-deep text-deep-foreground",
      )}
    >
      <p className="font-display text-4xl font-black">{value}</p>
      <p className="mt-1 text-sm opacity-80">{label}</p>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  animated = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  tone?: "dark" | "light";
  animated?: boolean;
}) {
  if (animated) {
    return (
      <div>
        <HeroReveal
          eyebrow={<Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
          heading={
            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{title}</h1>
          }
          body={
            intro ? (
              <p className={cn("mt-4 text-sm sm:text-base", tone === "dark" ? "text-muted-foreground" : "text-deep-foreground/75")}>
                {intro}
              </p>
            ) : undefined
          }
        />
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
      <div>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">{title}</h2>
      </div>
      {intro ? <p className={cn("text-sm sm:text-base", tone === "dark" ? "text-muted-foreground" : "text-deep-foreground/75")}>{intro}</p> : null}
    </div>
  );
}
/** Pill-styled external link (opens in the same way as the original: pass target="_blank" where it had one). */
export function PillAnchor({
  variant = "primary",
  className,
  children,
  ...rest
}: PillProps & ComponentProps<"a">) {
  const external = rest.target === "_blank";
  const ref = useMagnetic<HTMLAnchorElement>();
  return (
    <a ref={ref} className={cn(pillBase, pillVariants[variant], className)} {...(external ? { rel: "noopener noreferrer" } : {})} {...rest}>
      {children}
    </a>
  );
}
