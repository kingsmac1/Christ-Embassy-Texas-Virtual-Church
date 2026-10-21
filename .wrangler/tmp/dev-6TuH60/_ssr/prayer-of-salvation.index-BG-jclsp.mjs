import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as Sparkles } from "../_libs/lucide-react.mjs";
import { g as Section, h as RichText, l as PageHero, m as Reveal } from "./sections-BoYk-BZc.mjs";
import { t as CONTENT } from "./content-BU7UtIss.mjs";
import { a as SiteForm, r as SALVATION_FIELDS } from "./forms-D1Ew27kk.mjs";
// node_modules/.nitro/vite/services/ssr/assets/prayer-of-salvation.index-BG-jclsp.js
var import_jsx_runtime = require_jsx_runtime();
var [heroSec, prayerSec, thanksSec] = CONTENT["prayer-of-salvation"];
var of = (blocks, type) => blocks.filter((b) => b.type === type);
function SalvationPage() {
	const title = of(heroSec, "heading")[0];
	const [lead, prayer] = of(prayerSec, "p");
	const [congrats, formTitle] = of(thanksSec, "heading");
	const thanksParagraphs = of(thanksSec, "p");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, { title: title.html }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				as: "article",
				className: "mx-auto max-w-3xl rounded-[2rem] border border-border bg-card p-8 sm:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
						className: "size-6 text-accent",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, {
						html: lead.html,
						className: "mt-4 text-xs font-bold tracking-wide text-accent uppercase"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mt-5 rounded-3xl bg-secondary p-6 sm:p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, {
							html: prayer.html,
							className: "font-display text-xl leading-relaxed sm:text-2xl"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-10 lg:grid-cols-[1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl font-semibold sm:text-5xl",
					children: congrats.html
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 space-y-3 text-base leading-relaxed text-muted-foreground",
					children: thanksParagraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, { html: p.html }, p.html.slice(0, 30)))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .1,
					className: "rounded-[2rem] border border-border bg-card p-7 sm:p-9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: formTitle.html
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteForm, {
						form: "salvation",
						fields: SALVATION_FIELDS,
						submitLabel: "Submit",
						className: "mt-6",
						successTitle: "Congratulations!",
						successMessage: "You are now a child of God. We have received your contact details."
					})]
				})]
			})
		})
	] });
}
export { SalvationPage as component };
