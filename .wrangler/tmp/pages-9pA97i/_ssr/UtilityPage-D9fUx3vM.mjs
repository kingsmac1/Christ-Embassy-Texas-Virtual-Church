import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as PillButton, g as Section, h as RichText, l as PageHero, m as Reveal, v as WpSidebar } from "./sections-BoYk-BZc.mjs";
import { t as CONTENT } from "./content-BU7UtIss.mjs";
// node_modules/.nitro/vite/services/ssr/assets/UtilityPage-D9fUx3vM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fieldClass = "mt-2 w-full rounded-2xl border border-border bg-secondary px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-accent";
function NoticeForm({ children, notice, submitLabel }) {
	const [shown, setShown] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setShown(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "mt-6 grid gap-5 rounded-[1.75rem] border border-border bg-card p-6 sm:p-8",
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
			type: "submit",
			children: submitLabel
		}), shown ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			role: "status",
			className: "mt-3 text-sm text-muted-foreground",
			children: notice
		}) : null] })]
	});
}
/**
* Original WordPress utility pages (Sample Page, My account, Prayer, Hello world!): a title, the page text
* and the sidebar widgets, restyled. Content comes from the exported page content.
*/
function UtilityPage({ slug }) {
	const blocks = CONTENT[slug][0] ?? [];
	const title = blocks.find((b) => b.type === "heading" && b.level === 1);
	const widgetStart = blocks.findIndex((b) => b.type === "heading" && b.html === "Recent Posts");
	const main = blocks.slice(blocks.indexOf(title) + 1, widgetStart === -1 ? void 0 : widgetStart);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: title.html,
		image: null
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		tone: "cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[1fr_20rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 text-base leading-relaxed",
				children: [
					main.map((b, i) => {
						if (b.type === "p") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, {
							html: b.html,
							className: "text-muted-foreground"
						}, i);
						if (b.type === "li") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, {
							html: b.html,
							className: "rounded-2xl bg-card p-5 text-sm text-muted-foreground"
						}, i);
						if (b.type === "heading") return b.level === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "pt-6 font-display text-2xl font-semibold",
							dangerouslySetInnerHTML: { __html: b.html }
						}, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "pt-4 font-display text-2xl font-semibold",
							dangerouslySetInnerHTML: { __html: b.html }
						}, i);
						return null;
					}),
					slug === "my-account" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NoticeForm, {
						submitLabel: "Log in",
						notice: "Customer accounts are not available on this site.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-semibold",
								children: [
									"Username or email address ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "*"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "username",
										autoComplete: "username",
										className: fieldClass
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-semibold",
								children: [
									"Password ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "*"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "password",
										name: "password",
										autoComplete: "current-password",
										className: fieldClass
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "inline-flex items-center gap-2 text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									name: "rememberme"
								}), " Remember me"]
							})
						]
					}) : null,
					slug === "hello-world" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NoticeForm, {
						submitLabel: "Submit Comment",
						notice: "Comments are closed on this site.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Your email address will not be published. Required fields are marked *"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-semibold",
								children: [
									"Comment ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "*"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										required: true,
										name: "comment",
										rows: 5,
										className: fieldClass
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-semibold",
								children: [
									"Name ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "*"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "author",
										className: fieldClass
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-semibold",
								children: [
									"Email ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "*"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "email",
										name: "email",
										className: fieldClass
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-semibold",
								children: ["Website", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "url",
									className: fieldClass
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "inline-flex items-start gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									name: "cookies",
									className: "mt-1"
								}), " Save my name, email, and website in this browser for the next time I comment."]
							})
						]
					}) : null
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpSidebar, {})]
		})
	})] });
}
export { UtilityPage as t };
