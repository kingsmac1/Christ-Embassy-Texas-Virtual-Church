import { r as __toESM } from "../_runtime.mjs";
import { r as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { _ as require_jsx_runtime, a as AccordionTrigger$1, i as AccordionItem$1, m as Slot, n as AccordionContent$1, r as AccordionHeader, t as Accordion$1, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as useRouterState, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as ArrowLeft, a as Search, b as ChevronLeft, w as ArrowRight, x as ChevronDown, y as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/sections-BoYk-BZc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/** Fade + rise entrance animation, triggered when the element scrolls into view. */
function Reveal({ children, delay = 0, y = 28, className, as = "div" }) {
	const reduce = useReducedMotion();
	const Tag = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		className,
		initial: reduce ? false : {
			opacity: 0,
			y
		},
		whileInView: reduce ? {} : {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .2,
			margin: "0px 0px -60px 0px"
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
/** Page-hero entrance: eyebrow → heading → body, each staggered upward. */
function HeroReveal({ eyebrow, heading, body, headingClassName }) {
	const reduce = useReducedMotion();
	const fadeUp = {
		initial: reduce ? {} : {
			opacity: 0,
			y: 22
		},
		animate: reduce ? {} : {
			opacity: 1,
			y: 0
		}
	};
	const ease = [
		.22,
		1,
		.36,
		1
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
			...fadeUp,
			transition: {
				duration: .5,
				ease
			},
			className: "text-xs font-semibold tracking-wide uppercase text-accent",
			children: eyebrow
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			...fadeUp,
			transition: {
				duration: .7,
				delay: .1,
				ease
			},
			className: headingClassName,
			children: heading
		}),
		body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			...fadeUp,
			transition: {
				duration: .6,
				delay: .25,
				ease
			},
			children: body
		})
	] });
}
/** Fades + rises the outgoing/incoming route on every navigation, keyed by pathname. */
function PageTransition({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	if (useReducedMotion()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		mode: "wait",
		initial: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 16
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -12
			},
			transition: {
				duration: .35,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			children
		}, pathname)
	});
}
/** Enables Lenis smooth scrolling for the whole document. */
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let raf = 0;
		let lenis = null;
		let cancelled = false;
		import("../_libs/lenis.mjs").then((n) => n.t).then(({ default: Lenis }) => {
			if (cancelled) return;
			lenis = new Lenis({
				duration: 1.1,
				smoothWheel: true
			});
			const loop = (time) => {
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
function Eyebrow({ children, tone = "dark" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase", tone === "dark" ? "bg-secondary text-primary" : "bg-deep-foreground/10 text-deep-foreground"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: "size-1.5 rounded-full bg-accent"
		}), children]
	});
}
var pillBase = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
var pillVariants = {
	primary: "bg-primary text-primary-foreground hover:bg-deep",
	accent: "bg-accent text-accent-foreground shadow-[0_8px_24px_-8px_var(--accent)] hover:brightness-95",
	outline: "border border-primary/30 bg-transparent text-primary hover:bg-secondary",
	light: "border border-deep-foreground/30 text-deep-foreground hover:bg-deep-foreground/10"
};
function PillLink({ variant = "primary", className, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		className: cn(pillBase, pillVariants[variant], className),
		...rest,
		children
	});
}
function PillButton({ variant = "primary", className, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(pillBase, pillVariants[variant], className),
		...rest,
		children
	});
}
function Section({ tone = "cream", className, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("overflow-x-hidden py-20 sm:py-28", tone === "cream" && "bg-cream text-foreground", tone === "white" && "bg-card text-foreground", tone === "deep" && "bg-deep text-deep-foreground", className),
		...rest,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-site min-w-0",
			children
		})
	});
}
/** Pill-styled external link (opens in the same way as the original: pass target="_blank" where it had one). */
function PillAnchor({ variant = "primary", className, children, ...rest }) {
	const external = rest.target === "_blank";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		className: cn(pillBase, pillVariants[variant], className),
		...external ? { rel: "noopener noreferrer" } : {},
		...rest,
		children
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
var Accordion = Accordion$1;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem$1, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger$1, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionTrigger$1.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent$1, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionContent$1.displayName;
/** "Our Ministry Apps" cards (image + expandable description), as on the WordPress home, about and ministry pages. */
var MINISTRY_APPS = [
	{
		title: "Rhapsody of Realities",
		image: "/images/2023__11__Rhapsody-Logo.png",
		html: `<a href="https://rhapsodyofrealities.org/">Rhapsody of Realities</a>&nbsp;is no ordinary book: It’s a classic love-note from God to you, with the message of life! Oftentimes, referred to as the “Messenger Angel,” the devotional is a life guide designed to enhance your spiritual growth and development by bringing you a fresh perspective from God’s Word every day.`
	},
	{
		title: "Loveworld USA",
		image: "/images/2023__11__Loveworld-USA.png",
		html: `Loveworld USA is an American Christian cable television network launched by Pastor Chris Oyakhilome and Pastor Benny Hinn in 2017.`
	},
	{
		title: "Kingschat",
		image: "/images/2023__11__Kingschat_edited.webp",
		html: `With KingsChat, you can send messages, make HD voice or video calls and share timeline stories.<br/>Visit&nbsp;iOS app store&nbsp;or&nbsp;Android&nbsp;Google play store&nbsp;to get it on your device today! — for FREE!`
	}
];
/** Soft floating light dots for dark sections — hero and closing CTA bands. */
var DOTS = [
	{
		top: "12%",
		left: "8%",
		size: 14,
		color: "var(--gold)",
		blur: 2,
		delay: 0
	},
	{
		top: "22%",
		left: "88%",
		size: 8,
		color: "var(--gold)",
		blur: 1,
		delay: .4
	},
	{
		top: "68%",
		left: "92%",
		size: 20,
		color: "var(--gold)",
		blur: 3,
		delay: .8
	},
	{
		top: "80%",
		left: "14%",
		size: 10,
		color: "var(--gold)",
		blur: 1,
		delay: 1.2
	},
	{
		top: "40%",
		left: "50%",
		size: 6,
		color: "var(--gold)",
		blur: 1,
		delay: 1.6
	},
	{
		top: "10%",
		left: "45%",
		size: 12,
		color: "#7d8fae",
		blur: 2,
		delay: .6
	},
	{
		top: "58%",
		left: "6%",
		size: 16,
		color: "#7d8fae",
		blur: 2,
		delay: 1
	},
	{
		top: "88%",
		left: "70%",
		size: 9,
		color: "#7d8fae",
		blur: 1,
		delay: 1.8
	},
	{
		top: "30%",
		left: "20%",
		size: 7,
		color: "var(--gold)",
		blur: 1,
		delay: 2
	},
	{
		top: "75%",
		left: "40%",
		size: 13,
		color: "#7d8fae",
		blur: 2,
		delay: .2
	}
];
function Bokeh({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: `pointer-events-none absolute inset-0 overflow-hidden ${className}`,
		children: DOTS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute animate-pulse rounded-full opacity-70",
			style: {
				top: d.top,
				left: d.left,
				width: d.size,
				height: d.size,
				background: d.color,
				filter: `blur(${d.blur}px)`,
				animationDuration: `${3.5 + i % 3}s`,
				animationDelay: `${d.delay}s`
			}
		}, i))
	});
}
/** Renders HTML that was written on the original WordPress page (bold, links, line breaks). */
function RichText({ html, className, tone = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rich-text", tone === "dark" && "rich-text-dark", className),
		dangerouslySetInnerHTML: { __html: html.replace(/(<a [^>]*target="_blank")/g, "$1 rel=\"noopener noreferrer\"") }
	});
}
/** Splits an HTML string on double <br/> into paragraph strings. */
function splitParagraphs(html) {
	return html.split(/(?:<br\/>\s*){2,}/).map((p) => p.trim()).filter(Boolean);
}
/** Dark page banner with the page title (the original pages' image banner with H1). */
function PageHero({ title, image = "/images/2023__10__Audience.png", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-deep py-24 text-deep-foreground sm:py-32",
		children: [
			image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "absolute inset-0 -z-20 size-full object-cover opacity-30"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/70 to-deep/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bokeh, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-site relative text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroReveal, {
					heading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mx-auto max-w-4xl text-4xl font-semibold sm:text-6xl",
						children: title
					}),
					body: children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-5 max-w-3xl text-base text-deep-foreground/80 sm:text-lg",
						children
					}) : void 0
				})
			})
		]
	});
}
/** Closing dark band with a heading and one button ("Find yourself in Christ today…"). */
function ClosingBand({ heading, buttonLabel, to }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-deep py-20 text-deep-foreground sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bokeh, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-site relative text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl leading-tight font-semibold sm:text-5xl",
					children: heading
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillLink, {
						to,
						variant: "accent",
						children: buttonLabel
					})
				})]
			})
		})]
	});
}
function PlusIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 [[data-state=open]_&]:rotate-45",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			width: "12",
			height: "12",
			viewBox: "0 0 12 12",
			fill: "none",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M6 0v12M0 6h12",
				stroke: "currentColor",
				strokeWidth: "1.6"
			})
		})
	});
}
/** "Our Ministry Apps": logo cards with an expandable description. */
function MinistryApps({ heading = "Our Ministry Apps", viewMore }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		tone: "cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-center text-4xl font-semibold sm:text-5xl",
				children: heading
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid items-start gap-6 md:grid-cols-3",
				children: MINISTRY_APPS.map((app, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[1.75rem] bg-card p-6 shadow-[0_1px_2px_rgba(20,20,30,0.04),0_12px_32px_-16px_rgba(20,20,30,0.16)] transition-shadow hover:shadow-[0_1px_2px_rgba(20,20,30,0.05),0_20px_40px_-16px_rgba(20,20,30,0.22)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: app.image,
							alt: "",
							loading: "lazy",
							className: "mx-auto size-40 object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: app.title,
								className: "overflow-hidden rounded-2xl border-none bg-secondary px-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "py-3 text-left font-display text-base font-semibold hover:no-underline [&>svg]:hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex flex-1 items-center justify-between gap-3",
										children: [app.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlusIcon, {})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
									className: "text-sm text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, { html: app.html })
								})]
							})
						})]
					})
				}, app.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillAnchor, {
						href: viewMore.href,
						target: "_blank",
						variant: "accent",
						children: viewMore.text
					})
				})
			})
		]
	});
}
/** Centre-focus peek carousel of image cards with the caption on the photo. */
function EventsCarousel({ items }) {
	const [api, setApi] = (0, import_react.useState)();
	const [selected, setSelected] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!api) return;
		const onSelect = () => setSelected(api.selectedScrollSnap());
		onSelect();
		api.on("select", onSelect);
		api.on("reInit", onSelect);
		return () => {
			api.off("select", onSelect);
			api.off("reInit", onSelect);
		};
	}, [api]);
	const distance = (i) => {
		const raw = Math.abs(i - selected);
		return Math.min(raw, items.length - raw);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {
				setApi,
				opts: {
					loop: true,
					align: "center"
				},
				className: "mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, { children: items.map((m, i) => {
					const d = distance(i);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
						className: "basis-[82%] sm:basis-1/2 lg:basis-1/3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: {
								opacity: d === 0 ? 1 : d === 1 ? .45 : .25,
								scale: d === 0 ? 1 : d === 1 ? .92 : .86,
								filter: d === 0 ? "blur(0px)" : d === 1 ? "blur(4px)" : "blur(7px)"
							},
							transition: {
								duration: .4,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative block h-[28rem] overflow-hidden rounded-[1.75rem] bg-deep",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: m.image,
										alt: "",
										loading: "lazy",
										className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute inset-x-0 bottom-0 p-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-display text-xl font-semibold text-white",
											children: m.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-sm text-white/75",
											children: m.meta
										})]
									})
								]
							})
						})
					}, m.title);
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => api?.scrollPrev(),
				"aria-label": "Previous event",
				className: "absolute top-1/2 left-[9%] z-10 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105 sm:left-[25%] lg:left-[33.333%]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: "size-4",
					"aria-hidden": "true"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => api?.scrollNext(),
				"aria-label": "Next event",
				className: "absolute top-1/2 right-[9%] z-10 grid size-11 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105 sm:right-[25%] lg:right-[33.333%]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: "size-4",
					"aria-hidden": "true"
				})
			})
		]
	});
}
/** Paged photo gallery (8 per page, numbered pagination with Prev/Next), styled as rounded photo tiles. */
function Gallery({ images, perPage = 8 }) {
	const [page, setPage] = (0, import_react.useState)(1);
	const pages = Math.ceil(images.length / perPage);
	const slice = images.slice((page - 1) * perPage, page * perPage);
	const pageBtn = "grid size-10 place-items-center rounded-full text-sm font-semibold transition-colors";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4",
		children: slice.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
			initial: {
				opacity: 0,
				y: 14
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: .45,
				delay: i * .04,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "group overflow-hidden rounded-[1.25rem] bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: "",
				loading: "lazy",
				className: "aspect-[10/7] size-full object-cover transition-transform duration-700 group-hover:scale-105"
			})
		}, src))
	}), pages > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		"aria-label": "Gallery pages",
		className: "mt-8 flex flex-wrap items-center justify-center gap-2",
		children: [
			page > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setPage(page - 1),
				className: "rounded-full px-4 py-2 text-sm font-semibold hover:bg-secondary",
				children: "Prev"
			}) : null,
			Array.from({ length: pages }, (_, i) => i + 1).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-current": n === page ? "page" : void 0,
				onClick: () => setPage(n),
				className: cn(pageBtn, n === page ? "bg-primary text-primary-foreground" : "hover:bg-secondary"),
				children: n
			}, n)),
			page < pages ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setPage(page + 1),
				className: "rounded-full px-4 py-2 text-sm font-semibold hover:bg-secondary",
				children: "Next"
			}) : null
		]
	}) : null] });
}
/** Day(s) : Hour(s) : Minute(s) : Second(s) tiles. Shows zeros once the target date has passed, like the original. */
function CountdownTiles({ target }) {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setNow(Date.now());
		const id = window.setInterval(() => setNow(Date.now()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	const ms = Math.max(0, target.getTime() - (now ?? target.getTime()));
	const units = [
		{
			label: "Day(s)",
			value: Math.floor(ms / 864e5),
			pad: 3
		},
		{
			label: "Hour(s)",
			value: Math.floor(ms / 36e5 % 24),
			pad: 2
		},
		{
			label: "Minute(s)",
			value: Math.floor(ms / 6e4 % 60),
			pad: 2
		},
		{
			label: "Second(s)",
			value: Math.floor(ms / 1e3 % 60),
			pad: 2
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "grid grid-cols-2 gap-4 sm:grid-cols-4",
		"aria-label": "Countdown",
		children: units.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "rounded-3xl border border-deep-foreground/20 bg-deep-foreground/5 p-4 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-display text-4xl font-black tabular-nums text-accent sm:text-5xl",
				children: String(u.value).padStart(u.pad, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs uppercase text-deep-foreground/70",
				children: u.label
			})]
		}, u.label))
	});
}
/** Google Maps embed in a rounded card. */
function MapEmbed({ src, title = "Map" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden rounded-[1.75rem] border border-border bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			title,
			src,
			loading: "lazy",
			referrerPolicy: "no-referrer-when-downgrade",
			allowFullScreen: true,
			className: "h-96 w-full border-0"
		})
	});
}
/** The widget column that the original utility pages show: search, recent posts, comments, archives, categories. */
function WpSidebar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "grid gap-8 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				action: "/",
				method: "get",
				role: "search",
				className: "flex gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "sidebar-search",
						className: "sr-only",
						children: "Search"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "sidebar-search",
						type: "search",
						name: "s",
						required: true,
						className: "min-h-11 w-full rounded-full border border-border bg-secondary px-4 text-sm focus-visible:outline-2 focus-visible:outline-accent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-deep",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Search"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold",
				children: "Recent Posts"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/hello-world/",
					className: "hover:text-accent",
					children: "Hello world!"
				}) })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold",
				children: "Recent Comments"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://wordpress.org/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-accent",
						children: "A WordPress Commenter"
					}),
					" on",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/hello-world/",
						hash: "comment-1",
						className: "hover:text-accent",
						children: "Hello world!"
					})
				] })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold",
				children: "Archives"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/2023/10/",
					className: "hover:text-accent",
					children: "October 2023"
				}) })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold",
				children: "Categories"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/category/$slug/",
					params: { slug: "uncategorized" },
					className: "hover:text-accent",
					children: "Uncategorized"
				}) })
			})] })
		]
	});
}
export { SmoothScroll as _, Eyebrow as a, splitParagraphs as b, MinistryApps as c, PillAnchor as d, PillButton as f, Section as g, RichText as h, EventsCarousel as i, PageHero as l, Reveal as m, ClosingBand as n, Gallery as o, PillLink as p, CountdownTiles as r, MapEmbed as s, Bokeh as t, PageTransition as u, WpSidebar as v, cn as y };
