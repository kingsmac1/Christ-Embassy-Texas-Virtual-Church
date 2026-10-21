import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as CONTENT } from "./content-BU7UtIss.mjs";
import { i as SUNDAY_SPECIAL_FIELDS } from "./forms-D1Ew27kk.mjs";
import { t as EventRegistration } from "./EventRegistration-DcnAK0y2.mjs";
// node_modules/.nitro/vite/services/ssr/assets/sunday-special.index-Ca0Lw0YR.js
var import_jsx_runtime = require_jsx_runtime();
var [bannerSec, formSec, mapSec] = CONTENT["sunday-special"];
var first = (blocks, type) => blocks.find((b) => b.type === type);
function SundaySpecialPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventRegistration, {
		banner: first(bannerSec, "sectionbg").src,
		endsAt: /* @__PURE__ */ new Date(17167428e5),
		heading: first(formSec, "heading").html,
		form: "sunday-special",
		fields: SUNDAY_SPECIAL_FIELDS,
		mapSrc: first(mapSec, "iframe").src,
		mapTitle: "Christ Embassy Wilcrest on the map",
		successMessage: "Thank you for registering for the Sunday Special."
	});
}
export { SundaySpecialPage as component };
