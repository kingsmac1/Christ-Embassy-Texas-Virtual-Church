import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { m as Reveal, r as CountdownTiles, s as MapEmbed, t as Bokeh } from "./sections-BoYk-BZc.mjs";
import { a as SiteForm } from "./forms-D1Ew27kk.mjs";
// node_modules/.nitro/vite/services/ssr/assets/EventRegistration-DcnAK0y2.js
var import_jsx_runtime = require_jsx_runtime();
/** Shared layout for the Sunday Special and Back to School registration pages. */
function EventRegistration({ banner, endsAt, heading, srTitle, form, fields, mapSrc, mapTitle, successMessage, wideFields }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		srTitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "sr-only",
			children: srTitle
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-deep",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: banner,
				alt: "",
				className: "mx-auto max-h-[32rem] w-full object-cover"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-deep py-16 text-deep-foreground sm:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bokeh, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "mx-auto max-w-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownTiles, { target: endsAt })
					}),
					heading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "mx-auto mt-14 max-w-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-semibold sm:text-4xl",
							children: heading
						})
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						className: "mx-auto mt-8 max-w-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteForm, {
							form,
							fields,
							submitLabel: "Submit",
							tone: "dark",
							twoColumns: true,
							...wideFields ? { wideFields } : {},
							successTitle: "Thank you!",
							successMessage
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-site",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapEmbed, {
					src: mapSrc,
					title: mapTitle
				})
			})
		})
	] });
}
export { EventRegistration as t };
