import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

/**
 * Full-screen photo viewer: arrows, keyboard (← → Esc), swipe on touch, and a counter.
 * `index` is the open photo (null = closed); it moves through all `images`, not just one gallery page.
 */
export function Lightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: {
  images: string[];
  index: number | null;
  onIndexChange: (i: number) => void;
  onClose: () => void;
}) {
  const open = index !== null;
  const [direction, setDirection] = useState(1);
  const count = images.length;

  const go = useCallback(
    (step: number) => {
      if (index === null) return;
      setDirection(step);
      onIndexChange((index + step + count) % count);
    },
    [index, count, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  // Warm the neighbouring photos so arrows feel instant.
  useEffect(() => {
    if (index === null) return;
    for (const i of [index + 1, index - 1]) {
      const src = images[(i + count) % count];
      if (src) new Image().src = src;
    }
  }, [index, images, count]);

  const btn =
    "grid size-12 place-items-center rounded-full bg-deep-foreground/10 text-deep-foreground backdrop-blur transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-accent";

  return (
    <DialogPrimitive.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogPrimitive.Portal forceMount>
        <AnimatePresence>
          {open && index !== null ? (
            <>
              <DialogPrimitive.Overlay asChild forceMount>
                <motion.div
                  className="fixed inset-0 z-[120] bg-deep/95 backdrop-blur-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </DialogPrimitive.Overlay>
              <DialogPrimitive.Content
                asChild
                forceMount
                aria-describedby={undefined}
                onOpenAutoFocus={(e) => e.preventDefault()}
              >
                <motion.div className="fixed inset-0 z-[121] flex flex-col outline-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                  <DialogPrimitive.Title className="sr-only">Photo gallery</DialogPrimitive.Title>
                  <div className="flex items-center justify-between p-4 text-deep-foreground">
                    <p className="rounded-full bg-deep-foreground/10 px-4 py-2 text-sm font-semibold tabular-nums backdrop-blur" aria-live="polite">
                      {index + 1} / {count}
                    </p>
                    <DialogPrimitive.Close className={btn} aria-label="Close photo">
                      <X className="size-5" aria-hidden="true" />
                    </DialogPrimitive.Close>
                  </div>

                  <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4 pb-6 sm:px-20" onClick={(e) => e.target === e.currentTarget && onClose()}>
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                      <motion.img
                        key={index}
                        src={images[index]}
                        alt=""
                        custom={direction}
                        className="max-h-full max-w-full cursor-grab touch-pan-y rounded-2xl object-contain shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] active:cursor-grabbing"
                        variants={{
                          enter: (d: number) => ({ opacity: 0, x: d * 120, scale: 0.94 }),
                          center: { opacity: 1, x: 0, scale: 1 },
                          exit: (d: number) => ({ opacity: 0, x: d * -120, scale: 0.94 }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.35}
                        onDragEnd={(_, info) => {
                          if (info.offset.x < -80 || info.velocity.x < -500) go(1);
                          else if (info.offset.x > 80 || info.velocity.x > 500) go(-1);
                        }}
                      />
                    </AnimatePresence>

                    <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className={`${btn} absolute left-3 top-1/2 -translate-y-1/2 sm:left-6`}>
                      <ChevronLeft className="size-6" aria-hidden="true" />
                    </button>
                    <button type="button" onClick={() => go(1)} aria-label="Next photo" className={`${btn} absolute right-3 top-1/2 -translate-y-1/2 sm:right-6`}>
                      <ChevronRight className="size-6" aria-hidden="true" />
                    </button>
                  </div>
                </motion.div>
              </DialogPrimitive.Content>
            </>
          ) : null}
        </AnimatePresence>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
