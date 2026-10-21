import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as Check, s as Plus, u as Minus } from "../_libs/lucide-react.mjs";
import { f as PillButton, g as Section, h as RichText, m as Reveal, p as PillLink } from "./sections-BoYk-BZc.mjs";
import { c as useCart, m as getProduct, n as Route, p as formatPrice } from "./router-B6psyTwW.mjs";
import { t as ProductCard } from "./ProductCard-CWGgUMZP.mjs";
// node_modules/.nitro/vite/services/ssr/assets/product._slug.index-BNYroHhd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { product } = Route.useLoaderData();
	const { add } = useCart();
	const [quantity, setQuantity] = (0, import_react.useState)(1);
	const [added, setAdded] = (0, import_react.useState)(false);
	const onSale = product.regularPriceCents > product.priceCents;
	const related = product.related.map((s) => getProduct(s)).filter((p) => Boolean(p));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid aspect-square place-items-center overflow-hidden rounded-[2rem] bg-deep p-10 shadow-[0_20px_60px_-20px_rgba(20,20,30,0.45)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.images[0],
						alt: product.name,
						className: "size-full object-contain"
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .1,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-4xl font-semibold sm:text-5xl",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-2xl font-bold",
							children: onSale ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("del", {
									className: "mr-3 font-medium text-muted-foreground",
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
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-8 flex flex-wrap items-center gap-4",
							onSubmit: (e) => {
								e.preventDefault();
								add(product.slug, quantity);
								setAdded(true);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center rounded-full border border-border bg-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Decrease quantity",
										onClick: () => setQuantity((q) => Math.max(1, q - 1)),
										className: "grid size-11 place-items-center rounded-full hover:bg-secondary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
											className: "size-4",
											"aria-hidden": "true"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "sr-only",
										htmlFor: "qty",
										children: [product.name, " quantity"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "qty",
										type: "number",
										min: 1,
										max: 20,
										value: quantity,
										onChange: (e) => setQuantity(Math.min(20, Math.max(1, Number(e.target.value) || 1))),
										className: "w-12 bg-transparent text-center text-sm font-semibold [appearance:textfield] focus-visible:outline-none [&::-webkit-inner-spin-button]:appearance-none"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Increase quantity",
										onClick: () => setQuantity((q) => Math.min(20, q + 1)),
										className: "grid size-11 place-items-center rounded-full hover:bg-secondary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
											className: "size-4",
											"aria-hidden": "true"
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
								type: "submit",
								variant: "accent",
								children: "Add to cart"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"aria-live": "polite",
							className: "mt-4 min-h-6 text-sm",
							children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 font-semibold text-accent",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "size-4",
										"aria-hidden": "true"
									}),
									"Added.",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/cart/",
										className: "underline underline-offset-4",
										children: "View cart"
									})
								]
							}) : null
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl font-semibold",
					children: "Product Details"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, {
					html: product.description,
					className: "mt-4 space-y-4 text-base leading-relaxed text-muted-foreground"
				})]
			})
		}),
		related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "cream",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-center text-4xl font-semibold sm:text-5xl",
					children: "Related products"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-8",
					children: related.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						product: p,
						delay: i * .06
					}) }, p.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillLink, {
						to: "/ourstore/",
						variant: "outline",
						children: "Back to store"
					})
				})
			]
		}) : null
	] });
}
export { ProductPage as component };
