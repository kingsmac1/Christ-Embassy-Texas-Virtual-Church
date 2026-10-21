/** Soft floating light dots for dark sections — hero and closing CTA bands. */
const DOTS = [
  { top: "12%", left: "8%", size: 14, color: "var(--gold)", blur: 2, delay: 0 },
  { top: "22%", left: "88%", size: 8, color: "var(--gold)", blur: 1, delay: 0.4 },
  { top: "68%", left: "92%", size: 20, color: "var(--gold)", blur: 3, delay: 0.8 },
  { top: "80%", left: "14%", size: 10, color: "var(--gold)", blur: 1, delay: 1.2 },
  { top: "40%", left: "50%", size: 6, color: "var(--gold)", blur: 1, delay: 1.6 },
  { top: "10%", left: "45%", size: 12, color: "#7d8fae", blur: 2, delay: 0.6 },
  { top: "58%", left: "6%", size: 16, color: "#7d8fae", blur: 2, delay: 1 },
  { top: "88%", left: "70%", size: 9, color: "#7d8fae", blur: 1, delay: 1.8 },
  { top: "30%", left: "20%", size: 7, color: "var(--gold)", blur: 1, delay: 2 },
  { top: "75%", left: "40%", size: 13, color: "#7d8fae", blur: 2, delay: 0.2 },
];

export function Bokeh({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {DOTS.map((d, i) => (
        <span
          key={i}
          className="absolute animate-pulse rounded-full opacity-70"
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            background: d.color,
            filter: `blur(${d.blur}px)`,
            animationDuration: `${3.5 + (i % 3)}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
