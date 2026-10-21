import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Section, l as PageHero, p as PillLink } from "./sections-BoYk-BZc.mjs";
import { t as CONTENT } from "./content-BU7UtIss.mjs";
// node_modules/.nitro/vite/services/ssr/assets/thank-you-page.index-alna0yZT.js
var import_jsx_runtime = require_jsx_runtime();
var [sec] = CONTENT["thank-you-page"];
function ThankYouPage() {
	const title = sec.find((b) => b.type === "heading");
	const text = sec.find((b) => b.type === "p");
	const button = sec.find((b) => b.type === "button");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, { title: title.html }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		tone: "cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg text-muted-foreground",
				children: text.html
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillLink, {
					to: button.href,
					variant: "accent",
					children: button.text
				})
			})]
		})
	})] });
}
export { ThankYouPage as component };
