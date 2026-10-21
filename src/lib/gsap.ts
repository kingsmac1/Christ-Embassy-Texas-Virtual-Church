import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

let registered = false;

/** Registers GSAP plugins once, in the browser only. Call at the start of any effect. */
export function registerGsap() {
  if (typeof window === "undefined" || registered) return;
  gsap.registerPlugin(ScrollTrigger, SplitText);
  registered = true;
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Runs `cb` once the preloader has wiped away (immediately on later client-side navigations). */
export function whenSiteReady(cb: () => void): () => void {
  if (typeof document === "undefined") return () => {};
  if (document.documentElement.dataset["ready"] === "1") {
    cb();
    return () => {};
  }
  const handler = () => {
    window.removeEventListener("site:ready", handler);
    cb();
  };
  window.addEventListener("site:ready", handler);
  return () => window.removeEventListener("site:ready", handler);
}

export { gsap, ScrollTrigger, SplitText };
