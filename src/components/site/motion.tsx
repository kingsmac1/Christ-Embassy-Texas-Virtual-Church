"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState, type ComponentProps, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/** Fade + rise entrance animation, triggered when the element scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

/** Staggered container — pair with <Reveal delay={i * 0.08}> children. */
export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

/** True on touch/coarse-pointer devices (phones, tablets) — used to tone down parallax there. */
function useIsCoarsePointer() {
  const [coarse, setCoarse] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    setCoarse(mq.matches);
    const onChange = () => setCoarse(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return coarse;
}

/** Vertical parallax wrapper: content drifts slower than the page scroll. */
export function Parallax({
  children,
  strength = 60,
  className,
  ...rest
}: { children: ReactNode; strength?: number } & ComponentProps<typeof motion.div>) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const coarsePointer = useIsCoarsePointer();
  // Touch devices keep only a faint drift — full-strength parallax there is a
  // common source of scroll jank and motion sickness on phones/tablets.
  const effectiveStrength = coarsePointer ? Math.min(strength, 12) : strength;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-effectiveStrength, effectiveStrength]);

  return (
    <motion.div ref={ref} className={cn("will-change-transform", className)} style={reduce ? {} : { y }} {...rest}>
      {children}
    </motion.div>
  );
}

/** Page-hero entrance: eyebrow → heading → body, each staggered upward. */
export function HeroReveal({
  eyebrow,
  heading,
  body,
  headingClassName,
}: {
  eyebrow?: ReactNode;
  heading: ReactNode;
  body?: ReactNode;
  headingClassName?: string;
}) {
  const reduce = useReducedMotion();

  const fadeUp = {
    initial: reduce ? {} : { opacity: 0, y: 22 },
    animate: reduce ? {} : { opacity: 1, y: 0 },
  };

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <>
      {eyebrow && (
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, ease }}
          className="text-xs font-semibold tracking-wide uppercase text-accent"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className={headingClassName}
      >
        {heading}
      </motion.div>
      {body && (
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.25, ease }}
        >
          {body}
        </motion.div>
      )}
    </>
  );
}

/** Fades + rises the outgoing/incoming route on every navigation, keyed by pathname. */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/** Enables Lenis smooth scrolling for the whole document. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return null;
}
