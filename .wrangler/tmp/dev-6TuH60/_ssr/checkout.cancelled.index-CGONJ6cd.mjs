import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as CircleX } from "../_libs/lucide-react.mjs";
import { g as Section, l as PageHero, p as PillLink } from "./sections-BoYk-BZc.mjs";
// node_modules/.nitro/vite/services/ssr/assets/checkout.cancelled.index-CGONJ6cd.js
var import_jsx_runtime = require_jsx_runtime();
/** Stripe sends customers here when they leave checkout without paying. */
function CancelledPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, { title: "Checkout cancelled" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		tone: "cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl rounded-[2rem] border border-border bg-card p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {
					className: "mx-auto size-12 text-muted-foreground",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg text-muted-foreground",
					children: "Your payment was not completed and you have not been charged. Your cart is still saved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillLink, {
						to: "/cart/",
						variant: "accent",
						children: "Back to cart"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillLink, {
						to: "/ourstore/",
						variant: "outline",
						children: "Return to shop"
					})]
				})
			]
		})
	})] });
}
export { CancelledPage as component };
