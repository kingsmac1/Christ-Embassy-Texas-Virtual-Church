import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Eyebrow, c as MinistryApps, d as PillAnchor, g as Section, h as RichText, i as EventsCarousel, m as Reveal, n as ClosingBand, o as Gallery, p as PillLink, t as Bokeh, y as cn } from "./sections-BoYk-BZc.mjs";
import { t as CONTENT } from "./content-BU7UtIss.mjs";
// node_modules/.nitro/vite/services/ssr/assets/routes-wDgsD9hP.js
var import_jsx_runtime = require_jsx_runtime();
var [heroSec, welcomeSec, eventsSec, mediaSec, gallerySec, appsSec, closingSec] = CONTENT["home"];
var pick = (blocks, type) => blocks.filter((b) => b.type === type);
/** Splits the "Healing Streams TV / Prayathon / Unending Praise" section into video + text groups. */
function mediaGroups(blocks) {
	const groups = [];
	for (const b of blocks) {
		if (b.type === "iframe") groups.push({
			iframe: b.src,
			title: "",
			paragraphs: []
		});
		const g = groups[groups.length - 1];
		if (!g) continue;
		if (b.type === "heading") g.title = b.html;
		if (b.type === "p") g.paragraphs.push(b.html);
		if (b.type === "button") g.button = {
			text: b.text,
			href: b.href,
			target: b.target
		};
	}
	return groups;
}
function HomePage() {
	const heroHeadings = pick(heroSec, "heading");
	const heroButtons = pick(heroSec, "button");
	const heroImage = pick(heroSec, "image")[0];
	const heroBg = pick(heroSec, "sectionbg")[0];
	const [eyebrow, ...titleLines] = heroHeadings.map((h) => h.html);
	const [contactBtn, donateBtn] = heroButtons;
	const welcomeHeadings = pick(welcomeSec, "heading");
	const eventHeading = pick(eventsSec, "heading").find((h) => h.level === 2);
	const events = [];
	for (const b of eventsSec) {
		if (b.type === "image") events.push({
			image: b.src,
			title: "",
			meta: ""
		});
		const last = events[events.length - 1];
		if (!last) continue;
		if (b.type === "heading" && b.level === 4) last.title = b.html;
		if (b.type === "p") last.meta = b.html;
	}
	const galleryHeading = pick(gallerySec, "heading")[0];
	const galleryImages = pick(gallerySec, "image").map((i) => i.src);
	const viewMore = pick(appsSec, "button")[0];
	const appsHeading = pick(appsSec, "heading").find((h) => h.level === 1 || h.level === 2);
	const closingHeading = pick(closingSec, "heading")[0];
	const closingButton = pick(closingSec, "button")[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-deep text-deep-foreground",
			children: [
				heroBg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: heroBg.src,
					alt: "",
					className: "absolute inset-0 -z-20 size-full object-cover opacity-30"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/70 to-deep/30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bokeh, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-site relative grid items-end gap-6 pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:pt-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "pb-16 lg:pb-28",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
								tone: "light",
								children: eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-5 font-display text-5xl leading-[1.02] font-semibold sm:text-7xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: titleLines[0]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block italic text-accent",
									children: titleLines[1]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-4",
								children: [contactBtn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillLink, {
									to: contactBtn.href,
									variant: "accent",
									children: contactBtn.text
								}) : null, donateBtn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillAnchor, {
									href: donateBtn.href,
									target: donateBtn.target,
									variant: "light",
									children: donateBtn.text
								}) : null]
							})
						]
					}), heroImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						className: "mx-auto w-full max-w-sm self-end lg:max-w-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: heroImage.src,
							alt: heroImage.alt,
							className: "mx-auto max-h-[34rem] w-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
						})
					}) : null]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-3xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-sm font-bold tracking-wide text-accent uppercase",
					children: welcomeHeadings[0]?.html
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-2xl leading-snug font-semibold sm:text-3xl",
					children: welcomeHeadings[1]?.html
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-center text-4xl font-semibold sm:text-5xl",
				children: eventHeading?.html
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsCarousel, { items: events })
			})]
		}),
		mediaGroups(mediaSec).map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: i % 2 === 0 ? "cream" : "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("grid items-center gap-10 lg:grid-cols-2", i % 2 === 1 && "lg:[&>*:first-child]:order-2"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-[1.75rem] bg-deep shadow-[0_20px_60px_-20px_rgba(20,20,30,0.35)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						className: "aspect-video w-full border-0",
						src: g.iframe,
						title: g.title,
						loading: "lazy",
						allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
						allowFullScreen: true
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .1,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-semibold sm:text-4xl",
							children: g.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-4 text-base leading-relaxed text-muted-foreground",
							children: g.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, { html: p }, p.slice(0, 40)))
						}),
						g.button ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillAnchor, {
								href: g.button.href,
								target: g.button.target,
								variant: "accent",
								children: g.button.text
							})
						}) : null
					]
				})]
			})
		}, g.title)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "cream",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-center text-4xl font-semibold sm:text-5xl",
				children: galleryHeading?.html
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, { images: galleryImages })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MinistryApps, {
			heading: appsHeading.html,
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
export { HomePage as component };
