import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as Reveal } from "./sections-BoYk-BZc.mjs";
import { p as formatPrice } from "./router-B6psyTwW.mjs";
// node_modules/.nitro/vite/services/ssr/assets/ProductCard-CWGgUMZP.js
var import_jsx_runtime = require_jsx_runtime();
/** Product tile: dark rounded image panel, uppercase title, struck-through regular price and sale price. */
function ProductCard({ product, delay = 0 }) {
	const onSale = product.regularPriceCents > product.priceCents;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/product/$slug/",
			params: { slug: product.slug },
			className: "group block text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid aspect-square place-items-center overflow-hidden rounded-[1.75rem] bg-deep p-6 shadow-[0_1px_2px_rgba(20,20,30,0.04),0_12px_32px_-16px_rgba(20,20,30,0.3)] transition-shadow group-hover:shadow-[0_20px_40px_-16px_rgba(20,20,30,0.45)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.images[0],
						alt: product.name,
						loading: "lazy",
						className: "size-full object-contain transition-transform duration-700 group-hover:scale-105"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-display text-base font-semibold tracking-tight uppercase group-hover:text-accent sm:text-lg",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-base font-bold",
					children: onSale ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("del", {
							className: "mr-2 font-medium text-muted-foreground",
							"aria-hidden": "true",
							children: formatPrice(product.regularPriceCents)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "sr-only",
							children: [
								"Original price was: ",
								formatPrice(product.regularPriceCents),
								". Current price is: "
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ins", {
							className: "no-underline",
							children: formatPrice(product.priceCents)
						})
					] }) : formatPrice(product.priceCents)
				})
			]
		})
	});
}
export { ProductCard as t };
