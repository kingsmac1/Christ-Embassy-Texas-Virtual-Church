import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Trash2, s as Plus, u as Minus } from "../_libs/lucide-react.mjs";
import { f as PillButton, g as Section, l as PageHero } from "./sections-BoYk-BZc.mjs";
import { c as useCart, l as callFunction, m as getProduct, p as formatPrice } from "./router-B6psyTwW.mjs";
// node_modules/.nitro/vite/services/ssr/assets/CartView-5nUzVumv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Shared by /cart/ and /checkout/. Checkout sends only slugs + quantities; the server looks up prices. */
function CartView({ title, returnLabel }) {
	const { items, subtotalCents, setQuantity, remove, ready } = useCart();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	async function checkout() {
		setBusy(true);
		setError(null);
		const { data, error: err } = await callFunction("create-checkout-session", {
			items: items.map((i) => ({
				slug: i.slug,
				quantity: i.quantity
			})),
			origin: window.location.origin
		});
		if (err || !data?.url) {
			setBusy(false);
			setError(err ?? "We could not start checkout. Please try again.");
			return;
		}
		window.location.href = data.url;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, { title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		tone: "cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/ourstore/",
				className: "text-sm font-semibold text-accent underline underline-offset-4 hover:brightness-90",
				children: returnLabel
			}), !ready ? null : items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 rounded-[1.75rem] border border-border bg-card p-8 text-center text-muted-foreground",
				children: "Your cart is currently empty."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-4",
				"aria-label": "Cart items",
				children: items.map((item) => {
					const p = getProduct(item.slug);
					if (!p) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[5rem_1fr] items-center gap-4 rounded-[1.75rem] border border-border bg-card p-4 sm:grid-cols-[6rem_1fr_auto_auto] sm:gap-6 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$slug/",
								params: { slug: p.slug },
								className: "grid size-20 place-items-center overflow-hidden rounded-2xl bg-deep p-2 sm:size-24",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.images[0],
									alt: p.name,
									className: "size-full object-contain"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/product/$slug/",
									params: { slug: p.slug },
									className: "font-display text-base font-semibold uppercase hover:text-accent",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: formatPrice(p.priceCents)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-2 flex items-center justify-between gap-4 sm:col-span-1 sm:justify-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center rounded-full border border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": `Decrease quantity of ${p.name}`,
											onClick: () => setQuantity(item.slug, item.quantity - 1),
											className: "grid size-10 place-items-center rounded-full hover:bg-secondary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
												className: "size-4",
												"aria-hidden": "true"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-live": "polite",
											className: "w-8 text-center text-sm font-semibold",
											children: item.quantity
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": `Increase quantity of ${p.name}`,
											onClick: () => setQuantity(item.slug, item.quantity + 1),
											className: "grid size-10 place-items-center rounded-full hover:bg-secondary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
												className: "size-4",
												"aria-hidden": "true"
											})
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "w-20 text-right font-bold sm:hidden",
									children: formatPrice(p.priceCents * item.quantity)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-2 flex items-center justify-between sm:col-span-1 sm:justify-end sm:gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hidden w-20 text-right font-bold sm:block",
									children: formatPrice(p.priceCents * item.quantity)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => remove(item.slug),
									"aria-label": `Remove ${p.name} from cart`,
									className: "inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground hover:bg-secondary hover:text-destructive",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
										className: "size-4",
										"aria-hidden": "true"
									}), "Remove"]
								})]
							})
						]
					}, item.slug);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-[1.75rem] bg-deep p-6 text-deep-foreground sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-semibold",
							children: "Subtotal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold",
							children: formatPrice(subtotalCents)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
						type: "button",
						variant: "accent",
						className: "mt-6 w-full sm:w-auto",
						disabled: busy,
						onClick: checkout,
						children: busy ? "Redirecting…" : "Proceed to checkout"
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "alert",
						className: "mt-4 rounded-2xl bg-red-500/15 px-4 py-3 text-sm text-red-200",
						children: error
					}) : null
				]
			})] })]
		})
	})] });
}
export { CartView as t };
