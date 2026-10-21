import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as Section, l as PageHero, v as WpSidebar } from "./sections-BoYk-BZc.mjs";
// node_modules/.nitro/vite/services/ssr/assets/2023.10.index-PiicbSFx.js
var import_jsx_runtime = require_jsx_runtime();
function ArchivePage({ title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title,
		image: null
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		tone: "cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[1fr_20rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/hello-world/",
				className: "font-display text-2xl font-semibold hover:text-accent",
				children: "Hello world!"
			}) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WpSidebar, {})]
		})
	})] });
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchivePage, { title: "October 2023" });
export { ArchivePage, SplitComponent as component };
