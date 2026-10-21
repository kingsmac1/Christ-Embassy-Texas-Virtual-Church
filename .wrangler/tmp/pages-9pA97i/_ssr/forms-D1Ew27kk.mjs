import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as PillButton, y as cn } from "./sections-BoYk-BZc.mjs";
import { a as submitForm, i as SuccessModal, o as validateFields } from "./router-B6psyTwW.mjs";
// node_modules/.nitro/vite/services/ssr/assets/forms-D1Ew27kk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fieldClass = "mt-2 w-full rounded-2xl border border-border bg-secondary px-4 py-3 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-accent aria-[invalid=true]:border-destructive";
/**
* Generic form used by every form on the site. Validates in the browser, posts to the
* `send-form-email` Edge Function (which validates again and sends both emails), and
* includes a hidden honeypot field that real visitors never fill in.
*/
function SiteForm({ form, fields, submitLabel, tone = "light", twoColumns = false, wideFields = [], successTitle = "Thank you!", successMessage = "Your submission has been received.", className }) {
	const [values, setValues] = (0, import_react.useState)({});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [formError, setFormError] = (0, import_react.useState)(null);
	const [showSuccess, setShowSuccess] = (0, import_react.useState)(false);
	const dark = tone === "dark";
	async function onSubmit(e) {
		e.preventDefault();
		const honeypot = String(new FormData(e.currentTarget).get("website") ?? "");
		const found = validateFields(fields, values);
		setErrors(found);
		setFormError(null);
		if (Object.keys(found).length) return;
		setSubmitting(true);
		const result = await submitForm(form, values, honeypot);
		setSubmitting(false);
		if (result.error) {
			setFormError(result.error);
			if (result.fieldErrors) setErrors(result.fieldErrors);
			return;
		}
		setValues({});
		setShowSuccess(true);
	}
	const set = (name, value) => setValues((v) => ({
		...v,
		[name]: value
	}));
	const labelClass = cn("block text-sm font-semibold", dark && "text-deep-foreground");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		noValidate: true,
		onSubmit,
		"aria-label": form,
		className: cn(twoColumns && "grid gap-5 sm:grid-cols-2", !twoColumns && "grid gap-5", className),
		children: [
			fields.map((f) => {
				const wide = twoColumns && (f.type === "textarea" || f.type === "radio" || wideFields.includes(f.name));
				const id = `${form}-${f.name}`;
				const err = errors[f.name];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn(wide && "sm:col-span-2"),
					children: [f.type === "radio" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
						className: labelClass,
						children: [f.label, f.required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: " *"
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-3",
						children: f.choices?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: cn("inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors", values[f.name] === c ? "border-accent bg-accent text-accent-foreground" : dark ? "border-deep-foreground/30 text-deep-foreground hover:bg-deep-foreground/10" : "border-border bg-secondary hover:border-accent"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "radio",
								name: f.name,
								value: c,
								checked: values[f.name] === c,
								onChange: () => set(f.name, c),
								className: "sr-only"
							}), c]
						}, c))
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: id,
						className: labelClass,
						children: [
							f.label,
							f.required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: " *"
							}) : null,
							f.type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id,
								name: f.name,
								rows: 5,
								placeholder: f.placeholder,
								value: values[f.name] ?? "",
								onChange: (e) => set(f.name, e.target.value),
								"aria-invalid": err ? true : void 0,
								className: fieldClass
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id,
								name: f.name,
								type: f.type ?? "text",
								placeholder: f.placeholder,
								autoComplete: f.type === "email" ? "email" : f.type === "tel" ? "tel" : void 0,
								value: values[f.name] ?? "",
								onChange: (e) => set(f.name, e.target.value),
								"aria-invalid": err ? true : void 0,
								className: fieldClass
							})
						]
					}), err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "alert",
						className: cn("mt-1.5 text-xs", dark ? "text-red-300" : "text-destructive"),
						children: err
					}) : null]
				}, f.name);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute -left-[9999px] h-0 w-0 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Website", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					name: "website",
					tabIndex: -1,
					autoComplete: "off",
					defaultValue: ""
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn(twoColumns && "sm:col-span-2"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
						type: "submit",
						variant: "accent",
						disabled: submitting,
						children: submitting ? "Sending…" : submitLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"aria-live": "polite",
						className: "sr-only",
						children: submitting ? "Sending" : ""
					}),
					formError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "alert",
						className: cn("mt-3 rounded-2xl px-4 py-3 text-sm", dark ? "bg-red-500/15 text-red-200" : "bg-destructive/10 text-destructive"),
						children: formError
					}) : null
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessModal, {
		open: showSuccess,
		onOpenChange: setShowSuccess,
		title: successTitle,
		message: successMessage
	})] });
}
/** Field lists copied from the WordPress forms (labels, placeholders, required fields). */
var CONTACT_FIELDS = [
	{
		name: "name",
		label: "Name",
		placeholder: "Name",
		required: true
	},
	{
		name: "phone",
		label: "Phone Number",
		placeholder: "Phone Number",
		type: "tel",
		required: true
	},
	{
		name: "email",
		label: "Email Address",
		placeholder: "Email Address",
		type: "email",
		required: true
	},
	{
		name: "message",
		label: "Message",
		placeholder: "Message",
		type: "textarea",
		required: true
	}
];
var SALVATION_FIELDS = [
	{
		name: "name",
		label: "Name",
		placeholder: "Name",
		required: true
	},
	{
		name: "phone",
		label: "Phone No.",
		placeholder: "Phone No.",
		type: "tel",
		required: true
	},
	{
		name: "email",
		label: "Email Address",
		placeholder: "Email Address",
		type: "email",
		required: true
	}
];
var SUNDAY_SPECIAL_FIELDS = [
	{
		name: "firstName",
		label: "First Name",
		placeholder: "First Name",
		required: true
	},
	{
		name: "lastName",
		label: "Last Name",
		placeholder: "Last Name",
		required: true
	},
	{
		name: "mobile",
		label: "Mobile Number",
		placeholder: "Mobile Number",
		type: "tel",
		required: true
	},
	{
		name: "invitedBy",
		label: "Who invited you? (Type the person's name here)",
		placeholder: "Who invited you? (Type the person's name here)",
		required: true
	},
	{
		name: "member",
		label: "Are you a member of Christ Embassy Texas Virtual Church?",
		placeholder: "Are you a member of Christ Embassy Texas Virtual Church?",
		required: true
	},
	{
		name: "email",
		label: "Email Address",
		placeholder: "Email Address",
		type: "email",
		required: true
	},
	{
		name: "prayerRequest",
		label: "Prayer Request",
		placeholder: "Prayer Request",
		type: "textarea",
		required: true
	}
];
var BACK_TO_SCHOOL_FIELDS = [
	{
		name: "first",
		label: "First",
		required: true
	},
	{
		name: "last",
		label: "Last",
		required: true
	},
	{
		name: "phone",
		label: "Phone",
		type: "tel",
		required: true
	},
	{
		name: "email",
		label: "Email",
		type: "email"
	},
	{
		name: "level",
		label: "Select Category",
		type: "radio",
		required: true,
		choices: [
			"Elementary",
			"Middle",
			"High School"
		]
	},
	{
		name: "heardAbout",
		label: "How did you hear about us?"
	},
	{
		name: "prayerRequest",
		label: "Prayer Request",
		type: "textarea"
	}
];
export { SiteForm as a, SUNDAY_SPECIAL_FIELDS as i, CONTACT_FIELDS as n, SALVATION_FIELDS as r, BACK_TO_SCHOOL_FIELDS as t };
