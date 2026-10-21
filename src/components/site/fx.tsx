"use client";

import { useGSAP } from "@gsap/react";
import { useRouterState } from "@tanstack/react-router";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { createElement, useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { gsap, prefersReducedMotion, registerGsap, ScrollTrigger, SplitText, whenSiteReady } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Text                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Heading/paragraph whose letters rise out of a mask line by line when it scrolls into view
 * (GSAP SplitText + ScrollTrigger). The text itself is never changed.
 */
export function SplitReveal({
  as = "h2",
  children,
  className,
  by = "chars",
  delay = 0,
  start = "top 88%",
  waitForPreloader = false,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  by?: "chars" | "words";
  delay?: number;
  start?: string;
  waitForPreloader?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const show = () => el.classList.remove("fx-hide");
      if (prefersReducedMotion()) return show();
      registerGsap();
      let split: SplitText | undefined;
      const stop = (waitForPreloader ? whenSiteReady : (cb: () => void) => (cb(), () => {}))(() => {
        split = SplitText.create(el, {
          type: by === "chars" ? "lines,chars" : "lines,words",
          mask: "lines",
          autoSplit: true,
          onSplit(self) {
            show();
            const targets = by === "chars" ? self.chars : self.words;
            return gsap.from(targets, {
              yPercent: 115,
              rotate: by === "chars" ? 8 : 3,
              opacity: 0,
              duration: 1.05,
              delay,
              ease: "expo.out",
              stagger: by === "chars" ? 0.018 : 0.07,
              ...(waitForPreloader ? {} : { scrollTrigger: { trigger: el, start, once: true } }),
            });
          },
        });
      });
      return () => {
        stop();
        split?.revert();
      };
    },
    { scope: ref, dependencies: [by, delay, start, waitForPreloader] },
  );

  return createElement(as, { ref, className: cn("fx-hide", className) }, children);
}

/** Paragraph whose words light up one by one as you scroll through it (scrubbed to the scrollbar). */
export function ScrollWords({
  as = "p",
  children,
  className,
  from = 0.14,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  from?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) return el.classList.remove("fx-hide");
      registerGsap();
      const split = SplitText.create(el, {
        type: "words",
        autoSplit: true,
        onSplit(self) {
          el.classList.remove("fx-hide");
          return gsap.fromTo(
            self.words,
            { opacity: from },
            {
              opacity: 1,
              ease: "none",
              stagger: 0.12,
              scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 48%", scrub: true },
            },
          );
        },
      });
      return () => split.revert();
    },
    { scope: ref, dependencies: [from] },
  );

  return createElement(as, { ref, className: cn("fx-hide", className) }, children);
}

/* -------------------------------------------------------------------------- */
/*  Pointer effects                                                           */
/* -------------------------------------------------------------------------- */

const fineHover = "(hover: hover) and (pointer: fine)";

/**
 * Scroll-linked parallax is driven from JavaScript, which on phones runs a frame behind the browser's own
 * touch scrolling and makes elements visibly shake. So it is only used with a mouse/trackpad and when
 * reduced motion is not requested; on touch screens those elements stay still (entrance animations remain).
 */
export function useScrollFx() {
  const reduce = useReducedMotion();
  const fine = useMediaQuery(fineHover);
  return fine && !reduce;
}

/** Pulls its child toward the pointer (buttons). Disabled on touch and for reduced motion. */
export function useMagnetic<T extends HTMLElement>(strength = 0.3) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !window.matchMedia(fineHover).matches) return;
    registerGsap();
    const x = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.45)" });
    const y = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.45)" });
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - (r.left + r.width / 2)) * strength);
      y((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const leave = () => {
      x(0);
      y(0);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [strength]);
  return ref;
}

/** Card that tilts in 3D toward the pointer with a moving light glare. */
export function TiltCard({
  children,
  className,
  max = 9,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const reduce = useReducedMotion();
  const fine = useMediaQuery(fineHover);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 220, damping: 22 });
  const sy = useSpring(py, { stiffness: 220, damping: 22 });
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const gx = useTransform(sx, [0, 1], [0, 100]);
  const gy = useTransform(sy, [0, 1], [0, 100]);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.28), transparent 55%)`;
  const active = fine && !reduce;

  return (
    <motion.div
      className={cn("relative [transform-style:preserve-3d]", className)}
      {...(active ? { style: { rotateX, rotateY, transformPerspective: 900 } } : {})}
      onPointerMove={(e) => {
        if (!active) return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
    >
      {children}
      {active && glare ? (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 mix-blend-soft-light transition-opacity duration-300 [div:hover>&]:opacity-100"
          style={{ background: glareBg }}
        />
      ) : null}
    </motion.div>
  );
}

/** Soft spotlight that follows the pointer inside a dark section. */
export function PointerGlow({ className }: { className?: string }) {
  const fine = useMediaQuery(fineHover);
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const sx = useSpring(mx, { stiffness: 90, damping: 20 });
  const sy = useSpring(my, { stiffness: 90, damping: 20 });
  const bg = useMotionTemplate`radial-gradient(520px circle at ${sx}% ${sy}%, color-mix(in oklab, var(--accent) 38%, transparent), transparent 70%)`;

  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent || !fine) return;
    const move = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      mx.set(((e.clientX - r.left) / r.width) * 100);
      my.set(((e.clientY - r.top) / r.height) * 100);
    };
    parent.addEventListener("pointermove", move);
    return () => parent.removeEventListener("pointermove", move);
  }, [fine, mx, my]);

  if (!fine) return null;
  return <motion.div ref={ref} aria-hidden="true" className={cn("pointer-events-none absolute inset-0 -z-[5] opacity-70", className)} style={{ background: bg }} />;
}

/* -------------------------------------------------------------------------- */
/*  Scroll-linked media                                                       */
/* -------------------------------------------------------------------------- */

/** Image that is revealed through an expanding rounded mask and drifts inside its frame while scrolling. */
export function ParallaxImage({
  src,
  alt = "",
  className,
  imgClassName,
  strength = 9,
  reveal = true,
  loading = "lazy",
}: {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  strength?: number;
  reveal?: boolean;
  loading?: "lazy" | "eager";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const scrollFx = useScrollFx();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.22, 1.14, 1.22]);

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      initial={reduce || !reveal ? false : { clipPath: "inset(14% 10% 14% 10% round 2.5rem)" }}
      {...(reduce || !reveal ? {} : { whileInView: { clipPath: "inset(0% 0% 0% 0% round 2rem)" } })}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        className={cn("size-full object-cover", imgClassName)}
        {...(scrollFx ? { style: { y, scale } } : { style: { scale: 1.08 } })}
      />
    </motion.div>
  );
}

/** Thin accent bar at the very top that fills as you scroll the page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-accent shadow-[0_0_14px_var(--accent)]"
      style={{ scaleX }}
    />
  );
}

/**
 * Curtain that sweeps across the screen on every page change (it wipes up, then away),
 * hiding the content swap underneath.
 */
export function RouteCurtain() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduce = useReducedMotion();
  const first = useRef(true);
  const [run, setRun] = useState<string | null>(null);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (!reduce) setRun(pathname);
  }, [pathname, reduce]);

  return (
    <AnimatePresence>
      {run ? (
        <motion.div
          key={run}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[95] grid place-items-center bg-deep"
          initial={{ y: "100%", borderTopLeftRadius: "50% 12%", borderTopRightRadius: "50% 12%" }}
          animate={{ y: ["100%", "0%", "0%", "-100%"], borderTopLeftRadius: ["50% 12%", "0% 0%", "0% 0%", "0% 0%"], borderTopRightRadius: ["50% 12%", "0% 0%", "0% 0%", "0% 0%"], borderBottomLeftRadius: ["0% 0%", "0% 0%", "0% 0%", "50% 12%"], borderBottomRightRadius: ["0% 0%", "0% 0%", "0% 0%", "50% 12%"] }}
          transition={{ duration: 1.15, times: [0, 0.38, 0.52, 1], ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => setRun(null)}
        >
          <img src="/logo.png" alt="" className="size-20 animate-breathe object-contain" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/* -------------------------------------------------------------------------- */
/*  Layout effects                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Sections that pin to the top while the next one slides over them; the covered one
 * shrinks and dims. On small screens the sections just scroll normally.
 */
export function StackGroup({ children, className }: { children: ReactNode[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const items = Array.isArray(children) ? children : [children];
  return (
    <div ref={ref} className={cn("relative", className)}>
      {items.map((child, i) => (
        <StackCard key={i} index={i} total={items.length} progress={scrollYProgress}>
          {child}
        </StackCard>
      ))}
    </div>
  );
}

function StackCard({ index, total, progress, children }: { index: number; total: number; progress: MotionValue<number>; children: ReactNode }) {
  const reduce = useReducedMotion();
  const wide = useMediaQuery("(min-width: 1024px)");
  const span = Math.max(1, total - 1);
  const last = index === total - 1;
  const range: [number, number] = [index / span, Math.min(1, (index + 1) / span)];
  const scale = useTransform(progress, range, [1, last ? 1 : 0.9]);
  const dim = useTransform(progress, range, [1, last ? 1 : 0.55]);
  const filter = useMotionTemplate`brightness(${dim})`;
  const enabled = wide && !reduce;

  return (
    <div className={cn(enabled && "sticky top-0")} style={enabled ? { zIndex: index + 1 } : undefined}>
      <motion.div
        className={cn("origin-top overflow-hidden", enabled && index > 0 && "rounded-t-[2.5rem] shadow-[0_-30px_60px_-24px_rgba(8,12,24,0.45)]")}
        {...(enabled ? { style: { scale, filter } } : {})}
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Pinned horizontal scroll: while the section is pinned, vertical scrolling slides the cards sideways
 * (GSAP ScrollTrigger). Used on large screens only; pass `fallback` for touch/small screens.
 */
export function HorizontalScroll({ heading, children, fallback }: { heading: ReactNode; children: ReactNode; fallback: ReactNode }) {
  const wide = useMediaQuery("(min-width: 1024px)");
  const reduce = useReducedMotion();
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const enabled = wide && !reduce;

  useGSAP(
    () => {
      if (!enabled || !section.current || !track.current) return;
      registerGsap();
      const t = track.current;
      const distance = () => Math.max(0, t.scrollWidth - window.innerWidth + 96);
      const tween = gsap.to(t, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      // Cards lean and settle as they cross the middle of the screen.
      gsap.utils.toArray<HTMLElement>("[data-hcard]", t).forEach((card) => {
        gsap.fromTo(
          card,
          { rotate: 5, yPercent: 8, scale: 0.94 },
          {
            rotate: 0,
            yPercent: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: card, containerAnimation: tween, start: "left 95%", end: "left 45%", scrub: true },
          },
        );
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: section, dependencies: [enabled] },
  );

  if (!enabled) return <>{fallback}</>;
  return (
    <section ref={section} className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-card py-24 text-foreground">
      <div className="container-site">{heading}</div>
      <div ref={track} className="mt-12 flex w-max gap-8 pl-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))] pr-24 will-change-transform">
        {children}
      </div>
    </section>
  );
}

/** Keeps ScrollTrigger measurements right after route changes and late image loads. */
export function ScrollRefresh() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    registerGsap();
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 900);
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", onLoad);
    };
  }, [pathname]);
  return null;
}
