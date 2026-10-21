import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as CircleCheck } from "../_libs/lucide-react.mjs";
import { g as Section, l as PageHero, p as PillLink } from "./sections-BoYk-BZc.mjs";
import { t as CONTENT } from "./content-BU7UtIss.mjs";
import { c as useCart } from "./router-B6psyTwW.mjs";
// node_modules/.nitro/vite/services/ssr/assets/checkout.success.index-CF3QcbQS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var [sec] = CONTENT["thank-you-page"];
/** Stripe sends customers here after a paid checkout. The text is the original "Thank you page". */
function SuccessPage() {
	const { clear } = useCart();
	(0, import_react.useEffect)(() => {
		clear();
	}, [clear]);
	const title = sec.find((b) => b.type === "heading");
	const text = sec.find((b) => b.type === "p");
	const button = sec.find((b) => b.type === "button");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, { title: title.html }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		tone: "cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl rounded-[2rem] border border-border bg-card p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
					className: "mx-auto size-12 text-accent",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg text-muted-foreground",
					children: text.html
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillLink, {
						to: button.href,
						variant: "accent",
						children: button.text
					})
				})
			]
		})
	})] });
}
export { SuccessPage as component };
