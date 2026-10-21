import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Section, l as PageHero } from "./sections-BoYk-BZc.mjs";
import { t as CONTENT } from "./content-BU7UtIss.mjs";
import { f as PRODUCTS } from "./router-B6psyTwW.mjs";
import { t as ProductCard } from "./ProductCard-CWGgUMZP.mjs";
// node_modules/.nitro/vite/services/ssr/assets/ourstore.index-CnjowieD.js
var import_jsx_runtime = require_jsx_runtime();
var [heroSec] = CONTENT["ourstore"];
function StorePage() {
	const title = heroSec.find((b) => b.type === "heading");
	const intro = heroSec.find((b) => b.type === "p");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: title.html,
		children: intro.html
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		tone: "cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8",
			children: PRODUCTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
				product: p,
				delay: i % 4 * .06
			}) }, p.slug))
		})
	})] });
}
export { StorePage as component };
