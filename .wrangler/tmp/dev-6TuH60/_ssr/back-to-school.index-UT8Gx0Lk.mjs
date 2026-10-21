import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as CONTENT } from "./content-BU7UtIss.mjs";
import { t as BACK_TO_SCHOOL_FIELDS } from "./forms-D1Ew27kk.mjs";
import { t as EventRegistration } from "./EventRegistration-DcnAK0y2.mjs";
// node_modules/.nitro/vite/services/ssr/assets/back-to-school.index-UT8Gx0Lk.js
var import_jsx_runtime = require_jsx_runtime();
var [bannerSec, , mapSec] = CONTENT["back-to-school"];
var first = (blocks, type) => blocks.find((b) => b.type === type);
function BackToSchoolPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventRegistration, {
		banner: first(bannerSec, "sectionbg").src,
		endsAt: /* @__PURE__ */ new Date(17233092e5),
		srTitle: "Back to School",
		form: "back-to-school",
		fields: BACK_TO_SCHOOL_FIELDS,
		mapSrc: first(mapSec, "iframe").src,
		mapTitle: "Christ Embassy Wilcrest on the map",
		successMessage: "Thank you for registering for Back to School."
	});
}
export { BackToSchoolPage as component };
