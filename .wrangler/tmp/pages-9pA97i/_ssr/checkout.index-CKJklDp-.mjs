import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as CONTENT } from "./content-BU7UtIss.mjs";
import { t as CartView } from "./CartView-5nUzVumv.mjs";
// node_modules/.nitro/vite/services/ssr/assets/checkout.index-CKJklDp-.js
var import_jsx_runtime = require_jsx_runtime();
var [sec] = CONTENT["checkout"];
function CheckoutPage() {
	const title = sec.find((b) => b.type === "heading");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartView, {
		title: title.html,
		returnLabel: "Return to shop"
	});
}
export { CheckoutPage as component };
