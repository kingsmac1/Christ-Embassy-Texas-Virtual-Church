import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { NAV_LINKS, SITE } from "@/data/site";
import { useCart } from "@/lib/cart";
import { PillLink } from "./ui";

const logo = "/logo.png";

const overlayVariants = {
  hidden: { opacity: 0, y: "-4%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const, staggerChildren: 0.045, delayChildren: 0.08 },
  },
  exit: { opacity: 0, y: "-4%", transition: { duration: 0.3, ease: [0.4, 0, 1, 1] as const } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

function CartLink({ onClick, className }: { onClick?: () => void; className?: string }) {
  const { count } = useCart();
  return (
    <Link
      to="/cart/"
      onClick={onClick}
      aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
      className={
        "relative inline-flex size-11 items-center justify-center rounded-full border border-deep-foreground/25 text-deep-foreground transition-colors hover:bg-deep-foreground/10 " +
        (className ?? "")
      }
    >
      <ShoppingCart className="size-5" aria-hidden="true" />
      {count > 0 ? (
        <span className="absolute -right-1 -top-1 grid min-w-5 place-items-center rounded-full bg-accent px-1 text-[0.65rem] font-bold leading-5 text-accent-foreground">
          {count}
        </span>
      ) : null}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Slides away while reading down the page, comes back on the first scroll up; gets a frosted look once scrolled.
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > prev && y > 280 && !open);
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const mainLinks = NAV_LINKS.filter((l) => l.label !== "Donate");

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 text-deep-foreground transition-[background-color,backdrop-filter,box-shadow] duration-300 ${scrolled ? "bg-deep/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl" : "bg-deep"}`}
    >
      <div className="container-site grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3">
        <Link to="/" className="flex min-w-0 items-center" aria-label={`${SITE.name} home`}>
          <img src={logo} alt={SITE.name} className="size-12 shrink-0 object-contain" />
        </Link>

        <nav aria-label="Main" className="hidden justify-self-center xl:block">
          <ul className="flex items-center gap-1">
            {mainLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "bg-deep-foreground/10 text-deep-foreground" }}
                  className="rounded-full px-3 py-2 text-sm font-medium text-deep-foreground/75 transition-colors hover:bg-deep-foreground/10 hover:text-deep-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <CartLink />
          <PillLink to="/donate/" variant="accent" className="hidden sm:inline-flex">
            Donate
            <span className="grid size-5 place-items-center rounded-full bg-accent-foreground/15">
              <ArrowRight className="size-3" aria-hidden="true" />
            </span>
          </PillLink>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-deep-foreground/25 text-deep-foreground xl:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] flex flex-col bg-deep text-deep-foreground xl:hidden"
          >
            <div className="container-site flex items-center justify-between py-3">
              <Link to="/" onClick={close} className="flex items-center" aria-label={`${SITE.name} home`}>
                <img src={logo} alt={SITE.name} className="size-12 object-contain" />
              </Link>
              <div className="flex items-center gap-2">
                <CartLink onClick={close} />
                <button
                  type="button"
                  autoFocus
                  aria-label="Close menu"
                  onClick={close}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-deep-foreground/30"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <nav aria-label="Mobile" className="container-site flex-1 overflow-y-auto py-6">
              <ul className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
                {NAV_LINKS.map((link) => (
                  <motion.li key={link.to} variants={linkVariants}>
                    <Link
                      to={link.to}
                      onClick={close}
                      activeOptions={{ exact: link.to === "/" }}
                      activeProps={{ className: "text-accent" }}
                      className="block py-2.5 font-display text-3xl font-semibold tracking-tight text-deep-foreground hover:text-accent sm:text-4xl"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div variants={linkVariants} className="container-site border-t border-deep-foreground/15 py-6">
              <div className="flex flex-wrap gap-4 text-sm text-deep-foreground/75">
                <a className="hover:text-accent" href={SITE.phoneHref}>{SITE.phone}</a>
                <a className="hover:text-accent" href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
              <p className="mt-3 text-sm text-deep-foreground/60">{SITE.address}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
