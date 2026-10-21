import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as BookOpen, c as Play, d as MessageCircle, g as HandHeart, h as LoaderCircle, o as Radio } from "../_libs/lucide-react.mjs";
import { d as PillAnchor, f as PillButton, g as Section, l as PageHero, p as PillLink, r as CountdownTiles, t as Bokeh } from "./sections-BoYk-BZc.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { d as supabase, s as SITE, u as isSupabaseConfigured } from "./router-B6psyTwW.mjs";
// node_modules/.nitro/vite/services/ssr/assets/live-stream.index-CG7oJ0xm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* LIVESTREAM SOURCE
* The church's current live page (https://live.christembassytexasvirtualchurch.com/) runs on the
* Church Online Platform (Life.Church). That page refuses to be embedded in other sites
* (X-Frame-Options: SAMEORIGIN) and showed "There are no scheduled services." when checked, so no
* video embed URL could be discovered.
*
* PLACEHOLDER: when you have a stream embed URL (for example a YouTube live embed
* https://www.youtube.com/embed/VIDEO_ID), set VITE_LIVESTREAM_EMBED_URL in .env or paste it into
* `embedUrl` below. Until then the player shows its offline state and links to the live page.
*/
var STREAM = {
	embedUrl: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_STRIPE_PUBLISHABLE_KEY": "pk_test_your_stripe_test_publishable_key",
		"VITE_SUPABASE_ANON_KEY": "your-supabase-anon-key",
		"VITE_SUPABASE_URL": "https://YOUR-PROJECT-REF.supabase.co"
	}["VITE_LIVESTREAM_EMBED_URL"] ?? "",
	livePlatformUrl: "https://live.christembassytexasvirtualchurch.com/"
};
/**
* Service times from the website: Sunday Service "Every Sunday – 10am" and
* Midweek Service "Every Wednesday – 7pm". Church is in Houston, Texas (US Central time).
*/
var CHURCH_TIMEZONE = "America/Chicago";
var SERVICES = [{
	title: "Sunday Service",
	schedule: "Every Sunday – 10am",
	weekday: 0,
	hour: 10
}, {
	title: "Midweek Service",
	schedule: "Every Wednesday – 7pm",
	weekday: 3,
	hour: 19
}];
/** Offset (ms) between UTC and Houston wall-clock time at the given instant. */
function zoneOffsetMs(at) {
	const parts = new Intl.DateTimeFormat("en-US", {
		timeZone: CHURCH_TIMEZONE,
		hourCycle: "h23",
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	}).formatToParts(at);
	const get = (t) => Number(parts.find((p) => p.type === t)?.value);
	return Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"), get("second")) - at.getTime();
}
/** The next start (as a real instant) of a weekly slot, after `from`. */
function nextOccurrence(slot, from = /* @__PURE__ */ new Date()) {
	const wall = new Date(from.getTime() + zoneOffsetMs(from));
	for (let add = 0; add < 8; add++) {
		const day = new Date(Date.UTC(wall.getUTCFullYear(), wall.getUTCMonth(), wall.getUTCDate() + add, slot.hour, 0, 0));
		if (day.getUTCDay() !== slot.weekday) continue;
		let guess = new Date(day.getTime() - zoneOffsetMs(day));
		guess = new Date(day.getTime() - zoneOffsetMs(guess));
		if (guess.getTime() > from.getTime()) return guess;
	}
	throw new Error("unreachable");
}
function nextService(from = /* @__PURE__ */ new Date()) {
	const candidates = SERVICES.map((slot) => ({
		slot,
		target: nextOccurrence(slot, from)
	}));
	candidates.sort((a, b) => a.target.getTime() - b.target.getTime());
	return candidates[0];
}
/** Player card: embeds the stream when STREAM.embedUrl is set, otherwise shows the offline state. */
function LivestreamPlayer() {
	const [upcoming, setUpcoming] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => setUpcoming(nextService()), []);
	const live = Boolean(STREAM.embedUrl);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-3xl border border-border bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative aspect-video min-h-64 w-full bg-deep",
			children: live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				className: "size-full",
				src: STREAM.embedUrl,
				title: "Live Stream",
				allow: "accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture",
				allowFullScreen: true
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/2023__10__Audience.png",
					alt: "",
					className: "size-full object-cover opacity-35",
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 grid place-items-center p-6 text-center text-deep-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-deep-foreground/25 px-3 py-1 text-xs font-semibold uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, {
								className: "size-3.5",
								"aria-hidden": "true"
							}), "Offline"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-2xl font-bold sm:text-3xl",
							children: "We are not currently live"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-2 max-w-md text-sm text-deep-foreground/75",
							suppressHydrationWarning: true,
							children: upcoming ? `Our next broadcast: ${upcoming.slot.title}, ${upcoming.slot.schedule}.` : SERVICES.map((s) => `${s.title}: ${s.schedule}`).join(" · ")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: STREAM.livePlatformUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Open the live page"]
						})
					] })
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-3 p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-bold",
					suppressHydrationWarning: true,
					children: upcoming?.slot.title ?? SERVICES[0].title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					suppressHydrationWarning: true,
					children: upcoming?.slot.schedule ?? SERVICES[0].schedule
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground",
				children: live ? "Live now" : SITE.name
			})]
		})]
	});
}
var BOOKS = [
	"Genesis",
	"Exodus",
	"Leviticus",
	"Numbers",
	"Deuteronomy",
	"Joshua",
	"Judges",
	"Ruth",
	"1 Samuel",
	"2 Samuel",
	"1 Kings",
	"2 Kings",
	"Psalms",
	"Proverbs",
	"Ecclesiastes",
	"Isaiah",
	"Jeremiah",
	"Ezekiel",
	"Daniel",
	"Matthew",
	"Mark",
	"Luke",
	"John",
	"Acts",
	"Romans",
	"1 Corinthians",
	"2 Corinthians",
	"Galatians",
	"Ephesians",
	"Philippians",
	"Colossians",
	"1 Thessalonians",
	"2 Thessalonians",
	"1 Timothy",
	"2 Timothy",
	"Titus",
	"Hebrews",
	"James",
	"1 Peter",
	"2 Peter",
	"1 John",
	"Revelation"
];
async function fetchPassage(book, chapter) {
	const res = await fetch(`https://bible-api.com/${encodeURIComponent(`${book} ${chapter}`)}?translation=kjv`);
	if (!res.ok) throw new Error("Passage not found");
	return await res.json();
}
/** Scripture reader that sits beside the stream. Uses the free bible-api.com (KJV), no key needed. */
function BiblePanel() {
	const [book, setBook] = (0, import_react.useState)("John");
	const [chapter, setChapter] = (0, import_react.useState)("15");
	const [verse, setVerse] = (0, import_react.useState)("5");
	const selectedRef = (0, import_react.useRef)(null);
	const { data, isFetching, isError } = useQuery({
		queryKey: [
			"passage",
			book,
			chapter
		],
		queryFn: () => fetchPassage(book, chapter),
		staleTime: 6e5,
		retry: false
	});
	(0, import_react.useEffect)(() => {
		selectedRef.current?.scrollIntoView({
			block: "center",
			behavior: "smooth"
		});
	}, [data, verse]);
	const selectClass = "min-h-11 w-full rounded-full border border-border bg-card px-4 text-sm focus-visible:outline-2 focus-visible:outline-accent";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-3xl border border-border bg-card p-6",
		"aria-label": "Bible reader",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "inline-flex items-center gap-2 font-display text-lg font-bold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
					className: "size-5 text-primary",
					"aria-hidden": "true"
				}), "Follow the scripture"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-3 sm:grid-cols-3",
				children: [
					{
						id: "bible-book",
						label: "Book",
						value: book,
						set: setBook,
						options: BOOKS
					},
					{
						id: "bible-chapter",
						label: "Chapter",
						value: chapter,
						set: setChapter,
						options: Array.from({ length: 150 }, (_, i) => String(i + 1))
					},
					{
						id: "bible-verse",
						label: "Verse",
						value: verse,
						set: setVerse,
						options: Array.from({ length: 176 }, (_, i) => String(i + 1))
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-xs font-semibold text-muted-foreground uppercase",
					htmlFor: s.id,
					children: s.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					id: s.id,
					className: selectClass,
					value: s.value,
					onChange: (e) => s.set(e.target.value),
					children: s.options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))
				})] }, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-3xl bg-secondary p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase",
					children: [data?.reference ?? `${book} ${chapter}`, isFetching ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
						className: "size-3.5 animate-spin",
						"aria-hidden": "true"
					}) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 max-h-[420px] space-y-2 overflow-y-auto pr-1",
					"aria-live": "polite",
					children: isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base",
						children: "That chapter could not be found. Try another chapter."
					}) : data ? data.verses.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						ref: String(v.verse) === verse ? selectedRef : void 0,
						className: String(v.verse) === verse ? "rounded-xl bg-primary/10 p-2 text-base leading-relaxed font-medium" : "p-2 text-base leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-1 align-super text-xs font-semibold",
							children: v.verse
						}), v.text.trim()]
					}, v.verse)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base",
						children: "Loading passage…"
					})
				})]
			})
		]
	});
}
function timeAgo(iso) {
	const s = Math.max(1, Math.floor((Date.now() - new Date(iso).getTime()) / 1e3));
	if (s < 60) return "just now";
	if (s < 3600) return `${Math.floor(s / 60)} min ago`;
	if (s < 86400) return `${Math.floor(s / 3600)} hr ago`;
	return `${Math.floor(s / 86400)} d ago`;
}
/** Live conversation: reads/writes the `livestream_comments` table in Supabase (see supabase/migrations). */
function CommentFeed() {
	const { data, refetch } = useQuery({
		queryKey: ["live-comments"],
		enabled: isSupabaseConfigured,
		refetchInterval: 2e4,
		queryFn: async () => {
			const { data: rows, error } = await supabase.from("livestream_comments").select("id,name,body,created_at").order("created_at", { ascending: false }).limit(30);
			if (error) throw error;
			return rows;
		}
	});
	const [name, setName] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const [sending, setSending] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	async function onSubmit(e) {
		e.preventDefault();
		if (String(new FormData(e.currentTarget).get("website") ?? "").trim()) return;
		if (!name.trim() || !body.trim()) {
			setError("Please add your name and a message.");
			return;
		}
		setSending(true);
		setError(null);
		const { error: err } = await supabase.from("livestream_comments").insert({
			name: name.trim().slice(0, 60),
			body: body.trim().slice(0, 500)
		});
		setSending(false);
		if (err) {
			setError("Your comment could not be posted. Please try again.");
			return;
		}
		setBody("");
		refetch();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-border bg-card p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "inline-flex items-center gap-2 font-display text-lg font-bold",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
				className: "size-5 text-primary",
				"aria-hidden": "true"
			}), "Live conversation"]
		}), isSupabaseConfigured ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "mt-5 grid gap-3",
			noValidate: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					"aria-label": "Your name",
					maxLength: 60,
					placeholder: "Name",
					value: name,
					onChange: (e) => setName(e.target.value),
					className: "min-h-11 rounded-full border border-border bg-secondary px-4 text-sm focus-visible:outline-2 focus-visible:outline-accent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					"aria-label": "Your message",
					maxLength: 500,
					rows: 3,
					placeholder: "Message",
					value: body,
					onChange: (e) => setBody(e.target.value),
					className: "rounded-2xl border border-border bg-secondary px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-accent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "absolute -left-[9999px] h-0 w-0 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						name: "website",
						tabIndex: -1,
						autoComplete: "off",
						defaultValue: ""
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
					type: "submit",
					disabled: sending,
					className: "w-fit",
					children: sending ? "Posting…" : "Post"
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "text-xs text-destructive",
					children: error
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 max-h-80 space-y-4 overflow-y-auto",
			children: (data ?? []).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-xs font-bold",
					children: c.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-semibold",
						children: [
							c.name,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1 text-xs font-normal text-muted-foreground",
								children: timeAgo(c.created_at)
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-sm break-words text-muted-foreground",
						children: c.body
					})]
				})]
			}, c.id))
		})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-5 rounded-2xl bg-secondary p-4 text-sm text-muted-foreground",
			children: "The live conversation turns on once Supabase is connected (see SETUP-GUIDE.md)."
		})]
	});
}
/** Compact donate card that keeps the church's existing Stripe donate link. */
function DonateCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col justify-between rounded-3xl bg-deep p-6 text-deep-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, {
			className: "size-7 text-accent",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-4 font-display text-2xl font-bold",
			children: "Donate"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillAnchor, {
			href: SITE.donateUrl,
			target: "_blank",
			variant: "accent",
			className: "mt-8 w-fit",
			children: "Donate Now"
		})]
	});
}
/** Dark countdown band to the next service. */
function ServiceCountdown() {
	const [upcoming, setUpcoming] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => setUpcoming(nextService()), []);
	const target = upcoming?.target ?? /* @__PURE__ */ new Date();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-deep py-16 text-deep-foreground sm:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bokeh, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site relative grid items-center gap-10 rounded-[2rem] bg-deep-foreground/5 p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold sm:text-4xl",
					suppressHydrationWarning: true,
					children: upcoming?.slot.title ?? SERVICES[0].title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-deep-foreground/75",
					suppressHydrationWarning: true,
					children: upcoming?.slot.schedule ?? SERVICES[0].schedule
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillLink, {
						to: "/contact/",
						variant: "accent",
						children: "Contact Us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillAnchor, {
						href: SITE.donateUrl,
						target: "_blank",
						variant: "light",
						children: "Donate"
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownTiles, { target })]
		})]
	});
}
function LiveStreamPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			title: "Live Stream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-wrap items-center justify-center gap-3 text-sm",
				children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-full border border-deep-foreground/25 px-4 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-semibold",
							children: s.title
						}),
						" · ",
						s.schedule
					]
				}, s.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "cream",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1.6fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivestreamPlayer, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BiblePanel, {})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommentFeed, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonateCard, {})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCountdown, {})
	] });
}
export { LiveStreamPage as component };
