import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { l as Phone, m as Mail, p as MapPin } from "../_libs/lucide-react.mjs";
import { g as Section, l as PageHero, m as Reveal, n as ClosingBand, t as Bokeh } from "./sections-BoYk-BZc.mjs";
import { t as CONTENT } from "./content-BU7UtIss.mjs";
import { s as SITE } from "./router-B6psyTwW.mjs";
import { a as SiteForm, n as CONTACT_FIELDS } from "./forms-D1Ew27kk.mjs";
// node_modules/.nitro/vite/services/ssr/assets/contact.index-CtCzfTQ2.js
var import_jsx_runtime = require_jsx_runtime();
var [heroSec, infoSec, formSec, closingSec] = CONTENT["contact"];
var of = (blocks, type) => blocks.filter((b) => b.type === type);
function ContactPage() {
	const title = of(heroSec, "heading")[0];
	const [call, address, email] = of(infoSec, "heading");
	const formHeading = of(formSec, "heading")[0];
	const closingHeading = of(closingSec, "heading")[0];
	const closingButton = of(closingSec, "button")[0];
	const cards = [
		{
			icon: Phone,
			heading: call.html,
			body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: SITE.phoneHref,
				className: "font-semibold hover:text-accent",
				children: SITE.phone
			})
		},
		{
			icon: MapPin,
			heading: address.html,
			body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SITE.address })
		},
		{
			icon: Mail,
			heading: email.html,
			body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${SITE.email}`,
				className: "break-all hover:text-accent",
				children: SITE.email
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, { title: title.html }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: cards.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-[1.75rem] border border-border bg-card p-7 text-center shadow-[0_1px_2px_rgba(20,20,30,0.04),0_12px_32px_-16px_rgba(20,20,30,0.16)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-auto grid size-14 place-items-center rounded-full bg-secondary text-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
									className: "size-6",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-5 font-display text-xl font-semibold",
								children: c.heading
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: c.body
							})
						]
					})
				}, c.heading))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-deep py-20 text-deep-foreground sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bokeh, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site relative grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl font-semibold sm:text-5xl",
					children: formHeading.html
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					className: "rounded-[2rem] bg-card p-7 text-foreground sm:p-9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteForm, {
						form: "contact",
						fields: CONTACT_FIELDS,
						submitLabel: "Submit",
						successTitle: "Message sent!",
						successMessage: "Thank you for contacting us. Your message has been received."
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingBand, {
			heading: closingHeading.html,
			buttonLabel: closingButton.text,
			to: closingButton.href
		})
	] });
}
export { ContactPage as component };
