import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as MinistryApps, d as PillAnchor, g as Section, h as RichText, l as PageHero, m as Reveal, n as ClosingBand, y as cn } from "./sections-BoYk-BZc.mjs";
import { t as CONTENT } from "./content-BU7UtIss.mjs";
// node_modules/.nitro/vite/services/ssr/assets/our-ministry.index-D4rMqAEw.js
var import_jsx_runtime = require_jsx_runtime();
var [heroSec, rowsSec, appsSec, closingSec] = CONTENT["our-ministry"];
var of = (blocks, type) => blocks.filter((b) => b.type === type);
/** Each ministry is: heading, paragraphs, buttons, plus one photo (the photos are listed in page order). */
function buildRows() {
	const rows = [];
	let first = true;
	for (const b of rowsSec) if (b.type === "heading" && b.level === 2) rows.push({
		heading: b.html,
		paragraphs: [],
		buttons: []
	});
	else if (first && b.type === "p") {
		rows.push({
			heading: b.html,
			paragraphs: [],
			buttons: []
		});
		first = false;
	} else if (b.type === "p") rows[rows.length - 1]?.paragraphs.push(b.html);
	else if (b.type === "button") rows[rows.length - 1]?.buttons.push({
		text: b.text,
		href: b.href,
		target: b.target
	});
	return rows;
}
function MinistryPage() {
	const title = of(heroSec, "heading")[0];
	const photos = of(rowsSec, "bg").map((b) => b.src);
	const rows = buildRows();
	const apps = of(appsSec, "heading")[0];
	const viewMore = of(appsSec, "button")[0];
	const closingHeading = of(closingSec, "heading")[0];
	const closingButton = of(closingSec, "button")[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, { title: title.html }),
		rows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: i % 2 === 0 ? "cream" : "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("grid items-center gap-10 lg:grid-cols-2", i % 2 === 1 && "lg:[&>*:first-child]:order-2"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-[2rem]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photos[i],
						alt: "",
						loading: "lazy",
						className: "h-80 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[26rem]"
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .1,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, {
							html: row.heading,
							className: "font-display text-3xl leading-tight font-semibold sm:text-4xl [&_a]:text-primary [&_p]:m-0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-4 text-base leading-relaxed text-muted-foreground",
							children: row.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, { html: p }, p.slice(0, 40)))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: row.buttons.map((b, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillAnchor, {
								href: b.href,
								target: b.target,
								variant: j === 0 ? "accent" : "outline",
								children: b.text
							}, b.text + b.href))
						})
					]
				})]
			})
		}, row.heading)),
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
export { MinistryPage as component };
