import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as HandHeart } from "../_libs/lucide-react.mjs";
import { d as PillAnchor, g as Section, h as RichText, l as PageHero, m as Reveal } from "./sections-BoYk-BZc.mjs";
import { t as CONTENT } from "./content-BU7UtIss.mjs";
// node_modules/.nitro/vite/services/ssr/assets/donate.index-CpUM50E7.js
var import_jsx_runtime = require_jsx_runtime();
var [sec] = CONTENT["donate"];
var of = (blocks, type) => blocks.filter((b) => b.type === type);
function DonatePage() {
	const title = of(sec, "heading")[0];
	const [verse, ref] = of(sec, "p");
	const button = of(sec, "button")[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, { title: title.html }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		tone: "cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-3xl rounded-[2rem] border border-border bg-card p-8 text-center shadow-[0_20px_60px_-20px_rgba(20,20,30,0.2)] sm:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, {
					className: "mx-auto size-8 text-accent",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, {
					html: verse.html,
					className: "mt-6 font-display text-xl leading-snug sm:text-2xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, {
					html: ref.html,
					className: "mt-5 text-sm text-muted-foreground"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillAnchor, {
						href: button.href,
						target: button.target,
						variant: "accent",
						children: button.text
					})
				})
			]
		})
	})] });
}
export { DonatePage as component };
