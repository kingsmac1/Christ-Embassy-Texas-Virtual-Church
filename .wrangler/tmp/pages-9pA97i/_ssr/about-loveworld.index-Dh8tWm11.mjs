import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as splitParagraphs, c as MinistryApps, g as Section, h as RichText, l as PageHero, m as Reveal, n as ClosingBand } from "./sections-BoYk-BZc.mjs";
import { t as CONTENT } from "./content-BU7UtIss.mjs";
// node_modules/.nitro/vite/services/ssr/assets/about-loveworld.index-Dh8tWm11.js
var import_jsx_runtime = require_jsx_runtime();
var [heroSec, introSec, visionSec, presidentSec, appsSec, closingSec] = CONTENT["about-loveworld"];
var of = (blocks, type) => blocks.filter((b) => b.type === type);
function AboutPage() {
	const title = of(heroSec, "heading")[0];
	const intro = of(introSec, "p").flatMap((p) => splitParagraphs(p.html));
	const visionHeading = of(visionSec, "heading")[0];
	const visionItems = of(visionSec, "p");
	const presidentBg = of(presidentSec, "bg")[0];
	const presidentHeading = of(presidentSec, "heading")[0];
	const presidentBlocks = presidentSec.filter((b) => b.type === "heading" || b.type === "p");
	const firstSub = presidentBlocks.findIndex((b, i) => i > 0 && b.type === "heading");
	const presidentIntro = presidentBlocks.slice(1, firstSub).filter((b) => b.type === "p");
	const subSections = [];
	for (const b of presidentBlocks.slice(firstSub)) if (b.type === "heading") subSections.push({
		heading: b.html,
		paragraphs: []
	});
	else subSections[subSections.length - 1].paragraphs.push(b.html);
	const apps = of(appsSec, "heading")[0];
	const viewMore = of(appsSec, "button")[0];
	const closingHeading = of(closingSec, "heading")[0];
	const closingButton = of(closingSec, "button")[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, { title: title.html }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mx-auto max-w-3xl space-y-5 text-center text-base leading-relaxed text-muted-foreground",
				children: intro.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, {
					html: p,
					className: "[&_strong]:text-foreground"
				}, p.slice(0, 40)))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-center text-4xl font-semibold sm:text-5xl",
				dangerouslySetInnerHTML: { __html: visionHeading.html }
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mx-auto mt-12 max-w-3xl divide-y divide-border border-t border-border",
				children: visionItems.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 py-6 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl font-semibold text-accent",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, {
							html: p.html,
							className: "text-lg leading-relaxed [&_strong]:font-display [&_strong]:font-semibold"
						})]
					})
				}, p.html.slice(0, 30)))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "lg:sticky lg:top-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-[2rem]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: presidentBg.src,
							alt: "",
							loading: "lazy",
							className: "h-[28rem] w-full object-cover object-top sm:h-[38rem]"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .12,
					className: "rounded-[2rem] bg-deep p-8 text-deep-foreground sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl font-semibold sm:text-5xl",
							children: presidentHeading.html
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-4 text-sm leading-relaxed text-deep-foreground/80 sm:text-base",
							children: presidentIntro.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, {
								html: p.html,
								tone: "dark"
							}, p.html.slice(0, 30)))
						}),
						subSections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 border-t border-deep-foreground/15 pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-semibold text-accent",
								children: s.heading
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 space-y-4 text-sm leading-relaxed text-deep-foreground/80 sm:text-base",
								children: s.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, {
									html: p,
									tone: "dark"
								}, p.slice(0, 30)))
							})]
						}, s.heading))
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MinistryApps, {
			heading: apps.html,
			viewMore: {
				text: viewMore.text,
				href: viewMore.href
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingBand, {
			heading: closingHeading.html,
			buttonLabel: closingButton.text,
			to: closingButton.href
		})
	] });
}
export { AboutPage as component };
