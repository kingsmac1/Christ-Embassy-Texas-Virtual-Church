import { r as __toESM } from "../_runtime.mjs";
import { r as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as notFound, _ as createFileRoute, b as useRouter, d as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Menu, i as ShoppingCart, t as X, w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { _ as SmoothScroll, f as PillButton, g as Section, l as PageHero, p as PillLink, u as PageTransition, v as WpSidebar, y as cn } from "./sections-BoYk-BZc.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { i as __exportAll } from "./server-DG1KjO3i.mjs";
// node_modules/.nitro/vite/services/ssr/assets/products-202ywX2Y.js
var PRODUCTS = [
	{
		"name": "7 THINGS THE HOLY SPIRIT WILL DO FOR YOU",
		"slug": "7-things-the-holy-spirit-will-do-for-you",
		"priceCents": 2200,
		"regularPriceCents": 2800,
		"images": ["/images/2023__12__7-THINGS-THE-HOLY-SPIRIT-WILL-DO-FOR-YOU-2.png"],
		"description": "<p>Have you received the Holy Spirit since you believed?</p>\n<p>Enter a whole new world of discovery of the person of the Holy Spirit and the fullness of the blessings He brings into your life in this revised edition of the classic “Seven Things the Holy Spirit Will Do For You\".</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"the-power-of-tongues",
			"rhapsody-of-realities-daily-devotional",
			"now-that-you-are-born-again",
			"the-power-of-your-mind"
		]
	},
	{
		"name": "7 THINGS THE HOLY SPIRIT WILL DO IN YOU",
		"slug": "7-things-the-holy-spirit-will-do-in-you",
		"priceCents": 2200,
		"regularPriceCents": 2800,
		"images": ["/images/2023__12__7-THINGS-THE-HOLY-SPIRIT-WILL-DO-IN-YOU-1.png"],
		"description": "<p>In “Seven Things The Holy Spirit Will Do In You”, Pastor Chris introduces the Holy Spirit and shows you seven things He will do in you; seven crucial blessings you will have in your life only when you receive Him and give Him full, unlimited access.</p>\n<p>Get ready for a fresh revelation of Who the Holy Spirit is and what He can do in your life. And begin to enjoy the fullness of the blessings of His presence as you walk with Him daily.</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"faith-proclaimations-of-health-and-healing",
			"dont-stop-here",
			"now-that-you-are-born-again",
			"7-things-the-holy-spirit-will-do-for-you"
		]
	},
	{
		"name": "DON’T STOP HERE",
		"slug": "dont-stop-here",
		"priceCents": 2e3,
		"regularPriceCents": 2800,
		"images": ["/images/2023__12__DONT-STOP-HERE-1.png"],
		"description": "<p>Ignorance of God’s Word is a destroyer. God said, “My people are destroyed (that is they perish, suffer, are brought down and crushed) for lack of knowledge...” (Hosea 4:6).<br/> In other words, they are impoverished, punished, brought down, crushed and destroyed because they lack knowledge spiritual knowledge They get into trouble for their lack of knowledge (Isaiah 5:13).</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"none-of-these-diseases",
			"how-to-make-your-faith-work",
			"7-things-the-holy-spirit-will-do-for-you",
			"rhapsody-of-realities-teevo"
		]
	},
	{
		"name": "FAITH PROCLAIMATIONS OF HEALTH AND HEALING",
		"slug": "faith-proclaimations-of-health-and-healing",
		"priceCents": 1e3,
		"regularPriceCents": 1800,
		"images": ["/images/2023__12__FAITH-PROCLAIMATIONS-OF-HEALTH-AND-HEALING-1.png"],
		"description": "<p>As a Christian, you are the righteousness of God in Christ Jesus. You are called to live a life of faith (Hebrews 10:38), and the righteousness of faith speaks (Romans 10:6). To walk daily in the provisions of God’s Word for your life, you have to maintain a steady stream of faith-filled confessions. The Bible says that “death and life are in the power of the tongue…” (Proverbs 18:21). Remaining alive and well depends on what you say. 2 Corinthians 4:13 says, “We having the same spirit of faith…also believe, and therefore speak.” Faith’s Proclamations are daily attestations to all the wonderful realities of your life in Christ through His Word. This book is designed to help you keep yourself in divine health through the confession of God’s Word. Use this book daily and watch your life transformed through the Word of God.</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"how-to-pray-effectively",
			"the-rhapsody-of-realities-devotional-study-bible",
			"how-to-receive-a-miracle-and-retain-it",
			"rhapsody-of-realities-daily-devotional"
		]
	},
	{
		"name": "HOW TO MAKE YOUR FAITH WORK",
		"slug": "how-to-make-your-faith-work",
		"priceCents": 2500,
		"regularPriceCents": 3e3,
		"images": ["/images/2023__12__HOW-TO-MAKE-YOUR-FAITH-WORK-1.png"],
		"description": "<p>That’s the missing ingredient from the message of faith, which is needed now in the body of Christ. This book is an outstanding revelational masterpiece that teaches you not just how to acquire faith, but how to put your faith to work so you can live the life of victory, success, joy, health and prosperity which God has ordained for you.<br/> You’ll learn about:<br/> * The faith attitude in prayer,<br/> * The four different levels of the God-kind of faith<br/> * What to do for your faith to become great<br/> * The reason and the cure for weak faith<br/> * How to build prevailing faith</p>\n<p>Don’t get stuck in the rut! Learn how to make your faith work!</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"rhapsody-of-realities-daily-devotional",
			"when-god-visits-you",
			"the-power-of-your-mind",
			"the-oil-and-the-mantle"
		]
	},
	{
		"name": "HOW TO PRAY EFFECTIVELY",
		"slug": "how-to-pray-effectively",
		"priceCents": 2200,
		"regularPriceCents": 2800,
		"images": ["/images/2023__12__HOW-TO-PRAY-EFFECTIVELY-1.png"],
		"description": "<p>Understanding the rules of prayer for different situations and how to apply them for your desired outcome.</p>\n<p>God's earnest desire is to have a rich, vibrant, and enduring fellowship with His children; but how can we enjoy such communion with all its blessings and benefits if we don't know how to pray effectively?</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"the-oil-and-the-mantle",
			"faith-proclaimations-of-health-and-healing",
			"rhapsody-of-realities-daily-devotional",
			"7-things-the-holy-spirit-will-do-for-you"
		]
	},
	{
		"name": "HOW TO RECEIVE A MIRACLE AND RETAIN IT",
		"slug": "how-to-receive-a-miracle-and-retain-it",
		"priceCents": 2300,
		"regularPriceCents": 3e3,
		"images": ["/images/2023__12__HOW-TO-RECEIVE-A-MIRACLE-AND-RETAIN-IT-1.png"],
		"description": "<p>Unlock the secrets of receiving and retaining God’s miraculous interventions with “How to Receive a Miracle and Retain It” by Chris Oyakhilome. Discover the vital steps to invite divine power into your life and learn how to safeguard these miracles from the devil’s counterattacks. Your supernatural journey awaits you!,</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"7-things-the-holy-spirit-will-do-for-you",
			"now-that-you-are-born-again",
			"the-gates-of-zion",
			"the-oil-and-the-mantle"
		]
	},
	{
		"name": "JOIN THIS CHARIOT",
		"slug": "join-this-chariot",
		"priceCents": 2300,
		"regularPriceCents": 3e3,
		"images": ["/images/2023__12__JOIN-THIS-CHARIOT-1.png"],
		"description": "<p>Join This Chariot’ is a classic on soul wining that motivates the believer to effective evangelism and teaches him practical steps to reaching his world with the gospel of Jesus Christ.</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"how-to-receive-a-miracle-and-retain-it",
			"how-to-make-your-faith-work",
			"the-power-of-tongues",
			"rhapsody-of-realities-daily-devotional"
		]
	},
	{
		"name": "NONE OF THESE DISEASES",
		"slug": "none-of-these-diseases",
		"priceCents": 2800,
		"regularPriceCents": 3e3,
		"images": ["/images/2023__12__NONE-OF-THESE-DISEASES-1.png"],
		"description": "<p>This book will stir in and around you an atmosphere of miracles. “No matter who you are and what stage of life you’re at, there is a message in this book for you. I send this book to you with prayer: that words contained in this volume would open your eyes to the reality of who you are in Christ.”</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"rhapsody-of-realities-topical-compendium-volume-5",
			"how-to-receive-a-miracle-and-retain-it",
			"the-seven-spirits-of-god",
			"your-rights-in-christ"
		]
	},
	{
		"name": "NOW THAT YOU ARE BORN AGAIN",
		"slug": "now-that-you-are-born-again",
		"priceCents": 1e3,
		"regularPriceCents": 1800,
		"images": ["/images/2023__12__NOW-THAT-YOU-ARE-BORN-AGAIN.png"],
		"description": "<p>“Now that you’re born again, WHAT NEXT?”</p>\n<p>That’s the big question, and this book gives clear and simple answers in it, best-selling author and teacher, Chris Oyakhilome, reveals vital truths fundamental to the Christian faith, truths upon which you can build a strong and vibrant life in Christ.</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"the-oil-and-the-mantle",
			"7-things-the-holy-spirit-will-do-for-you",
			"the-seven-spirits-of-god",
			"the-rhapsody-of-realities-devotional-study-bible"
		]
	},
	{
		"name": "PRAYING THE RIGHT WAY",
		"slug": "praying-the-right-way",
		"priceCents": 2200,
		"regularPriceCents": 2800,
		"images": ["/images/2023__12__PRAYING-THE-RIGHT-WAY-1.png"],
		"description": "<p>God is more willing to give to you than you could ever be willing to receive.<br/> You don’t ‘say’ prayers, you pray from your heart to God.</p>\n<p>You pray in the Name of Jesus to God the Father, not through Jesus<br/> In this concise, yet comprehensive book on prayer, Pastor Chris puts paid to the wrong mindsets, doctrines and practices that have clogged the wheels of your prayer life and opens to you an effective prayer life in the New Testament. Praying The Right Way not only teaches you dynamic principles of effective prayer, but also ignites a passion for prayer within you. The principles are simple, the results guaranteed – a life full of joy and peace as you receive answers to your prayers …always.</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"how-to-receive-a-miracle-and-retain-it",
			"the-seven-spirits-of-god",
			"rhapsody-of-realities-teevo-bible-for-teenagers",
			"now-that-you-are-born-again"
		]
	},
	{
		"name": "PROPHESY; UNDERSTANDING THE POWER THAT CONTROLS THE FUTURE",
		"slug": "prophesy-understanding-the-power-that-controls-the-future",
		"priceCents": 2300,
		"regularPriceCents": 3e3,
		"images": ["/images/2023__12__PROPHESY-UNDERSTANDING-THE-POWER-THAT-CONTROLS-THE-FUTURE-1.png"],
		"description": "<p>“‘And it shall come to pass in the last days, says God, That I will pour out of My Spirit on all flesh; Your sons and your daughters shall prophesy…” Acts 2:17 (NKJV).<br/> God’s people are a people of prophecy. We are products of the prophetic Word and we can only be established and make advancements in our lives through the same. In this timely classic, Pastor Chris Oyakhilome reveals how to take advantage of the powerful gift of prophecy to order the course of your life, and create the future you ought to have.</p>\n<p>Get ready to discover:<br/> • What Prophecy really is<br/> • The two–fold application of prophecy<br/> • The difference between the prophetic ministry and the gift of prophecy<br/> • The link between prophecy and tongues<br/> • How to change circumstances through prophecy and so much more!<br/> Learn to speak forth ‘Rhema’―God’s specific Word to you, at a specific time, for a specific purpose―and control your destiny by the power of God made available to you through prophecy!</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"the-power-of-your-mind",
			"praying-the-right-way",
			"the-oil-and-the-mantle",
			"when-god-visits-you"
		]
	},
	{
		"name": "RHAPSODY OF REALITIES DAILY DEVOTIONAL",
		"slug": "rhapsody-of-realities-daily-devotional",
		"priceCents": 800,
		"regularPriceCents": 1500,
		"images": ["/images/2023__12__RHAPSODY-OF-REALITIES-DAILY-DEVOTIONAL-1.png"],
		"description": "<p>Rhapsody of Realities is a Christian daily devotional publication by Pastor Chris Oyakhilome. It was first published January 2001 in English language and by August 2022, it was reported to have over 8,123 languages. In 2011, it distributed 2 million copies each month globally. No other material in human history has been translated into every living language. This uniquely positions Rhapsody of Realities at the center of God’s end-time agenda to reach the whole world with His Word. Join us to get these translated copies into the hands of those who need to read them.</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"none-of-these-diseases",
			"the-power-of-tongues",
			"the-rhapsody-of-realities-devotional-study-bible",
			"the-gates-of-zion"
		]
	},
	{
		"name": "RHAPSODY OF REALITIES TEEVO",
		"slug": "rhapsody-of-realities-teevo",
		"priceCents": 800,
		"regularPriceCents": 1500,
		"images": ["/images/2023__12__RHAPSODY-OF-REALITIES-TEEVO-1.png"],
		"description": "<p>TeeVo Rhapsody of Realities is a daily devotional for teenagers. It is designed to inspire, encourage and strengthen you by providing you answer-from the perspective of God’s Word-to question of critical concern. Teevo helps you discover your true purpose and programs you for a life of out-and-out success.</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"rhapsody-of-realities-topical-compendium-volume-5",
			"now-that-you-are-born-again",
			"the-seven-spirits-of-god",
			"the-rhapsody-of-realities-devotional-study-bible"
		]
	},
	{
		"name": "RHAPSODY OF REALITIES TEEVO BIBLE FOR TEENAGERS",
		"slug": "rhapsody-of-realities-teevo-bible-for-teenagers",
		"priceCents": 3300,
		"regularPriceCents": 4500,
		"images": ["/images/2023__12__RHAPSODY-OF-REALITIES-TEEVO-BIBLE-FOR-TEENAGERS-1.png"],
		"description": "<p>The Rhapsody of Realities Teevo Bible is one designed to inspire and encourage teenagers and young adults generally to study God’s Word. In it, the young reader will find the writing and presentation styles endearing, and its features helpful, engaging and designed to appeal to young minds.</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"none-of-these-diseases",
			"your-rights-in-christ",
			"praying-the-right-way",
			"now-that-you-are-born-again"
		]
	},
	{
		"name": "RHAPSODY OF REALITIES TOPICAL COMPENDIUM VOLUME 5",
		"slug": "rhapsody-of-realities-topical-compendium-volume-5",
		"priceCents": 3e3,
		"regularPriceCents": 4500,
		"images": ["/images/2023__12__RHAPSODY-OF-REALITIES-TOPICAL-COMPENDIUM-VOLUME-5-1.png"],
		"description": "<p>The rhapsody of realities topical compendium series are comprehensive reference materials that have enhanced word based training among Christians. these series are renowned with inspiring articles that articulate the gospel of our lord Jesus, and it’s therefore an important tool for the spiritual development of god’s children.</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"how-to-pray-effectively",
			"rhapsody-of-realities-teevo-bible-for-teenagers",
			"now-that-you-are-born-again",
			"rhapsody-of-realities-daily-devotional"
		]
	},
	{
		"name": "THE GATES OF ZION",
		"slug": "the-gates-of-zion",
		"priceCents": 2e3,
		"regularPriceCents": 2800,
		"images": ["/images/2023__12__THE-GATES-OF-ZION-1.png"],
		"description": "<p>God has called you to a life of progress, success and victory! He has designed for you to experience consistent growth in your life. In this prophetic book, Pastor Chris takes you through the rebuilding of the walls of Jerusalem as symbolic of God’s pattern for building His church. Not only will you experience the glory of God as you read, more importantly, you will reflect His glory in your life.</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"the-power-of-your-mind",
			"the-seven-spirits-of-god",
			"praying-the-right-way",
			"rhapsody-of-realities-teevo"
		]
	},
	{
		"name": "THE HOLY SPIRIT AND YOU",
		"slug": "the-holy-spirit-and-you",
		"priceCents": 2300,
		"regularPriceCents": 3e3,
		"images": ["/images/2023__12__THE-HOLY-SPIRIT-AND-YOU-1.png"],
		"description": "<p>Discover in ‘The Holy Spirit and You’ the key to the successful life you’ve always desired.<br/> Get to know the One who answers to the Name of Jesus. Learn to walk with Him, and let Him lead you into your inheritance and your destiny in God.<br/> ‘The Holy Spirit and You’ will arouse in you a deep desire for an intimate relationship with the Holy Spirit and help you develop such a relationship.<br/> THEN YOU AND THE HOLY SPIRIT CAN MAKE AN UNBEATABLE TEAM THAT WILL IMPACT YOUR WORLD!</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"join-this-chariot",
			"prophesy-understanding-the-power-that-controls-the-future",
			"the-seven-spirits-of-god",
			"7-things-the-holy-spirit-will-do-for-you"
		]
	},
	{
		"name": "THE OIL AND THE MANTLE",
		"slug": "the-oil-and-the-mantle",
		"priceCents": 2300,
		"regularPriceCents": 3e3,
		"images": ["/images/2023__12__THE-OIL-AND-THE-MANTLE-1.png"],
		"description": "<p>In his usual dynamic and easy–to–understand manner, Pastor Chris exposes the myths about the use of material media to perform miracles, and reveals clearly the mind of God on the subject. “The Oil and The Mantle”, an explicit treatise on these controversial issues, will cause you to be established in the truth.</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"praying-the-right-way",
			"the-rhapsody-of-realities-devotional-study-bible",
			"faith-proclaimations-of-health-and-healing",
			"the-holy-spirit-and-you"
		]
	},
	{
		"name": "THE POWER OF TONGUES",
		"slug": "the-power-of-tongues",
		"priceCents": 1e3,
		"regularPriceCents": 1800,
		"images": ["/images/2023__12__THE-POWER-OF-TONGUES-1.png"],
		"description": "<p>In this book, Pastor Chris Oyakhilome teaches you the “what,” “how” and “why” of speaking in other tongues, and reveals the immense benefits it holds for you as a New Testament believer in Jesus Christ.<br/> You will also learn about: Tongues, Interpretation of tongues, and Prophecy<br/> The difference between Praying in Your Understanding<br/> and Praying in Tongues</p>\n<p>How to build up your faith through speaking in<br/> tongues</p>\n<p>How to enjoy intimate fellowship with the Holy<br/> Spirit</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"how-to-receive-a-miracle-and-retain-it",
			"the-rhapsody-of-realities-devotional-study-bible",
			"the-power-of-your-mind",
			"dont-stop-here"
		]
	},
	{
		"name": "THE POWER OF YOUR MIND",
		"slug": "the-power-of-your-mind",
		"priceCents": 2700,
		"regularPriceCents": 3e3,
		"images": ["/images/2023__12__THE-POWER-OF-YOUR-MIND-1.png"],
		"description": "<p>Walk in divine excellence and transform your world through the power of a renewed mind.</p>\n<p>Put your mind-power to work and be all God wants you to be! There are no limits to what you can achieve, and absolutely no restrictions to how high you can propel yourself, when you put your mind-power to work.</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"none-of-these-diseases",
			"the-gates-of-zion",
			"rhapsody-of-realities-teevo",
			"7-things-the-holy-spirit-will-do-for-you"
		]
	},
	{
		"name": "THE RHAPSODY OF REALITIES DEVOTIONAL STUDY BIBLE",
		"slug": "the-rhapsody-of-realities-devotional-study-bible",
		"priceCents": 2300,
		"regularPriceCents": 3e3,
		"images": ["/images/2023__12__THE-RHAPSODY-OF-REALITIES-DEVOTIONAL-STUDY-BIBLE-1.png"],
		"description": "<p>In a world where demands for our time and attention is constant, many Christians find themselves torn between the choices of either studying their Bibles or reading some inspirational Christian literature.The Rhapsody of Realities Devotional Study Bible offers a solution to this challenge in its compact package that combines features of the most important book on earth The Holy Bible and the best-selling daily devotional, Rhapsody of Realities to produce an exceptional Study Bible. The inspirational messages are a great encouragement to help you dig deeper into God’s Word and seek out His heart in your everyday life. The Rhapsody of Realities Devotional Study Bible is a must have for families, Bible Scholars and individuals in search of God’s word.</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"how-to-receive-a-miracle-and-retain-it",
			"rhapsody-of-realities-topical-compendium-volume-5",
			"the-power-of-tongues",
			"now-that-you-are-born-again"
		]
	},
	{
		"name": "THE SEVEN SPIRITS OF GOD",
		"slug": "the-seven-spirits-of-god",
		"priceCents": 2300,
		"regularPriceCents": 3e3,
		"images": ["/images/2023__12__THE-SEVEN-SPIRITS-OF-GOD-1.png"],
		"description": "<p>When you hear or read the title, “The Seven Spirits of God” for the first time, the first question that will likely come up in your mind is, Does this mean God has seven Holy Spirits? The Bible does show that there are “Seven Spirits of God.” It however behooves us to understand exactly what this means and how it applies to us in the New Covenant.</p>\n<p>To start with, the number Seven (7) is regarded by the Hebrew people as a sacred number, and throughout the Bible it is used to symbolize perfection, fullness, abundance, rest, and completion. The “Seven Spirits of God” therefore implies a “completeness” or “fullness” of the Holy Spirit, and this fullness of the Spirit is what every Christian ought to have, for it is our birthright.</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"7-things-the-holy-spirit-will-do-in-you",
			"prophesy-understanding-the-power-that-controls-the-future",
			"how-to-pray-effectively",
			"none-of-these-diseases"
		]
	},
	{
		"name": "WHEN GOD VISITS YOU",
		"slug": "when-god-visits-you",
		"priceCents": 2300,
		"regularPriceCents": 3e3,
		"images": ["/images/2023__12__WHEN-GOD-VISITS-YOU-1.png"],
		"description": "<p>Does God actually visit? When does He visit? How do I prepare for His visitation? What are the benefits of such visits? In this dynamic volume, Pastor Chris shares from the lives of Bible characters on how you can position yourself for a visitation from God and experience that change you’ve so long desired.</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"how-to-receive-a-miracle-and-retain-it",
			"7-things-the-holy-spirit-will-do-in-you",
			"the-seven-spirits-of-god",
			"rhapsody-of-realities-daily-devotional"
		]
	},
	{
		"name": "YOUR RIGHTS IN CHRIST",
		"slug": "your-rights-in-christ",
		"priceCents": 2300,
		"regularPriceCents": 2800,
		"images": ["/images/2023__12__YOUR-RIGHTS-IN-CHRIST-1.png"],
		"description": "<p>By virtue of the redeeming work of Christ, we have been declared free and at liberty to choose the way to live. This freedom in Christ empowers us with legal rights to dictate the course of our lives. Join Pastor Chris as he guides your thoughts into the reality of God’s plan for excellence in your life.</p>",
		"variations": [],
		"stripePriceId": "",
		"related": [
			"the-holy-spirit-and-you",
			"rhapsody-of-realities-topical-compendium-volume-5",
			"7-things-the-holy-spirit-will-do-in-you",
			"join-this-chariot"
		]
	}
];
var getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
var formatPrice = (cents) => `$${(cents / 100).toFixed(2)}`;
// node_modules/.nitro/vite/services/ssr/assets/supabase-_NBqheGF.js
/**
* Supabase client. VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are public values
* (the anon key is protected by Row Level Security), so they are safe in the browser.
*/
var supabaseUrl = {
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
}["VITE_SUPABASE_URL"];
var supabaseAnonKey = {
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
}["VITE_SUPABASE_ANON_KEY"];
var isPlaceholder = (v) => !v || v.includes("YOUR-PROJECT-REF") || v.startsWith("your-");
var isSupabaseConfigured = !isPlaceholder(supabaseUrl) && !isPlaceholder(supabaseAnonKey);
var supabase = isSupabaseConfigured ? createClient(supabaseUrl, supabaseAnonKey) : null;
/** Calls a Supabase Edge Function. Returns a friendly error when Supabase is not set up yet. */
async function callFunction(name, body) {
	if (!supabase) return {
		data: null,
		error: "This feature is not connected yet. Please try again later."
	};
	const { data, error } = await supabase.functions.invoke(name, { body });
	if (error) {
		let message = "Something went wrong. Please try again.";
		let fieldErrors;
		try {
			const res = error.context;
			if (res) {
				const payload = await res.json();
				if (payload.error) message = payload.error;
				fieldErrors = payload.errors;
			}
		} catch {}
		return {
			data: null,
			error: message,
			...fieldErrors ? { fieldErrors } : {}
		};
	}
	return {
		data,
		error: null
	};
}
// node_modules/.nitro/vite/services/ssr/assets/router-B6psyTwW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DWHztte5.css";
var STORAGE_KEY = "cetvc-cart-v1";
var MAX_QTY = 20;
var CartContext = (0, import_react.createContext)(null);
function load() {
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		return JSON.parse(raw).filter((i) => getProduct(i.slug) && Number.isInteger(i.quantity) && i.quantity > 0);
	} catch {
		return [];
	}
}
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setItems(load());
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		try {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
		} catch {}
	}, [items, ready]);
	(0, import_react.useEffect)(() => {
		const onStorage = (e) => {
			if (e.key === STORAGE_KEY) setItems(load());
		};
		window.addEventListener("storage", onStorage);
		return () => window.removeEventListener("storage", onStorage);
	}, []);
	const add = (0, import_react.useCallback)((slug, quantity = 1) => {
		setItems((prev) => {
			if (prev.find((i) => i.slug === slug)) return prev.map((i) => i.slug === slug ? {
				...i,
				quantity: Math.min(MAX_QTY, i.quantity + quantity)
			} : i);
			return [...prev, {
				slug,
				quantity: Math.min(MAX_QTY, quantity)
			}];
		});
	}, []);
	const remove = (0, import_react.useCallback)((slug) => setItems((prev) => prev.filter((i) => i.slug !== slug)), []);
	const setQuantity = (0, import_react.useCallback)((slug, quantity) => {
		setItems((prev) => quantity < 1 ? prev.filter((i) => i.slug !== slug) : prev.map((i) => i.slug === slug ? {
			...i,
			quantity: Math.min(MAX_QTY, quantity)
		} : i));
	}, []);
	const clear = (0, import_react.useCallback)(() => setItems([]), []);
	const value = (0, import_react.useMemo)(() => {
		const count = items.reduce((n, i) => n + i.quantity, 0);
		const subtotalCents = items.reduce((n, i) => n + (getProduct(i.slug)?.priceCents ?? 0) * i.quantity, 0);
		return {
			items,
			count,
			subtotalCents,
			ready,
			add,
			remove,
			setQuantity,
			clear
		};
	}, [
		items,
		ready,
		add,
		remove,
		setQuantity,
		clear
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value,
		children
	});
}
function useCart() {
	const ctx = (0, import_react.useContext)(CartContext);
	if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
	return ctx;
}
var logo$1 = "/logo.png";
/**
* Shows a breathing logo on the deep background with a loading bar, then wipes
* away vertically to reveal the page.
*/
function Preloader() {
	const [progress, setProgress] = (0, import_react.useState)(8);
	const [wiping, setWiping] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const tick = window.setInterval(() => {
			setProgress((p) => p >= 100 ? 100 : Math.min(100, p + Math.random() * 22));
		}, 180);
		const wipe = window.setTimeout(() => setWiping(true), 1400);
		const finish = window.setTimeout(() => setDone(true), 2300);
		return () => {
			window.clearInterval(tick);
			window.clearTimeout(wipe);
			window.clearTimeout(finish);
		};
	}, []);
	if (done) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": "true",
		className: "fixed inset-0 z-[999] flex flex-col items-center justify-center bg-deep transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]",
		style: { transform: wiping ? "translateY(-100%)" : "translateY(0)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: logo$1,
			alt: "",
			className: "animate-breathe w-40 sm:w-52"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 h-[3px] w-48 overflow-hidden rounded-full bg-deep-foreground/20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full bg-accent transition-[width] duration-200 ease-out",
				style: { width: `${progress}%` }
			})
		})]
	});
}
/** Church details and navigation. Everything here comes from the WordPress site. */
var SITE = {
	name: "Christ Embassy Texas Virtual Church",
	domain: "https://christembassytexasvirtualchurch.com",
	addressLines: ["Christ Embassy Wilcrest", "6111A Wilcrest Drive , Houston TX 77072"],
	address: "Christ Embassy Wilcrest 6111A Wilcrest Drive , Houston TX 77072",
	phone: "281-965-8970",
	phoneHref: "tel:281-965-8970",
	email: "contact@christembassytexasvirtualchurch.com",
	donateUrl: "https://donate.stripe.com/28o9C80ZUbBVaLSaEE"
};
var NAV_LINKS = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About Loveworld",
		to: "/about-loveworld/"
	},
	{
		label: "Our Ministry",
		to: "/our-ministry/"
	},
	{
		label: "Contact",
		to: "/contact/"
	},
	{
		label: "Live Stream",
		to: "/live-stream/"
	},
	{
		label: "Store",
		to: "/ourstore/"
	},
	{
		label: "Donate",
		to: "/donate/"
	}
];
var FOOTER_LINKS = [
	{
		label: "Our Ministry",
		to: "/our-ministry/"
	},
	{
		label: "Live Streaming",
		to: "/live-stream/"
	},
	{
		label: "Contact",
		to: "/contact/"
	},
	{
		label: "Shop",
		to: "/ourstore/"
	},
	{
		label: "Donate",
		to: "/donate/"
	}
];
var logo = "/logo.png";
var overlayVariants = {
	hidden: {
		opacity: 0,
		y: "-4%"
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .4,
			ease: [
				.22,
				1,
				.36,
				1
			],
			staggerChildren: .045,
			delayChildren: .08
		}
	},
	exit: {
		opacity: 0,
		y: "-4%",
		transition: {
			duration: .3,
			ease: [
				.4,
				0,
				1,
				1
			]
		}
	}
};
var linkVariants = {
	hidden: {
		opacity: 0,
		y: 16
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .4,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function CartLink({ onClick, className }) {
	const { count } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/cart/",
		onClick,
		"aria-label": `Cart, ${count} item${count === 1 ? "" : "s"}`,
		className: "relative inline-flex size-11 items-center justify-center rounded-full border border-deep-foreground/25 text-deep-foreground transition-colors hover:bg-deep-foreground/10 " + (className ?? ""),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
			className: "size-5",
			"aria-hidden": "true"
		}), count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute -right-1 -top-1 grid min-w-5 place-items-center rounded-full bg-accent px-1 text-[0.65rem] font-bold leading-5 text-accent-foreground",
			children: count
		}) : null]
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const close = () => setOpen(false);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") close();
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [open]);
	const mainLinks = NAV_LINKS.filter((l) => l.label !== "Donate");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 bg-deep text-deep-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex min-w-0 items-center",
					"aria-label": `${SITE.name} home`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo,
						alt: SITE.name,
						className: "size-12 shrink-0 object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Main",
					className: "hidden justify-self-center xl:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex items-center gap-1",
						children: mainLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							activeOptions: { exact: link.to === "/" },
							activeProps: { className: "bg-deep-foreground/10 text-deep-foreground" },
							className: "rounded-full px-3 py-2 text-sm font-medium text-deep-foreground/75 transition-colors hover:bg-deep-foreground/10 hover:text-deep-foreground",
							children: link.label
						}) }, link.to))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 justify-self-end",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartLink, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PillLink, {
							to: "/donate/",
							variant: "accent",
							className: "hidden sm:inline-flex",
							children: ["Donate", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-5 place-items-center rounded-full bg-accent-foreground/15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-3",
									"aria-hidden": "true"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Open menu",
							"aria-expanded": open,
							onClick: () => setOpen(true),
							className: "inline-flex size-11 items-center justify-center rounded-full border border-deep-foreground/25 text-deep-foreground xl:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								className: "size-5",
								"aria-hidden": "true"
							})
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Menu",
			variants: overlayVariants,
			initial: "hidden",
			animate: "visible",
			exit: "exit",
			className: "fixed inset-0 z-[100] flex flex-col bg-deep text-deep-foreground xl:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-site flex items-center justify-between py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						onClick: close,
						className: "flex items-center",
						"aria-label": `${SITE.name} home`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo,
							alt: SITE.name,
							className: "size-12 object-contain"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartLink, { onClick: close }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							autoFocus: true,
							"aria-label": "Close menu",
							onClick: close,
							className: "inline-flex size-11 items-center justify-center rounded-full border border-deep-foreground/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "size-5",
								"aria-hidden": "true"
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Mobile",
					className: "container-site flex-1 overflow-y-auto py-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-x-6 gap-y-1 sm:grid-cols-2",
						children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
							variants: linkVariants,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: link.to,
								onClick: close,
								activeOptions: { exact: link.to === "/" },
								activeProps: { className: "text-accent" },
								className: "block py-2.5 font-display text-3xl font-semibold tracking-tight text-deep-foreground hover:text-accent sm:text-4xl",
								children: link.label
							})
						}, link.to))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: linkVariants,
					className: "container-site border-t border-deep-foreground/15 py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-4 text-sm text-deep-foreground/75",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hover:text-accent",
							href: SITE.phoneHref,
							children: SITE.phone
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hover:text-accent",
							href: `mailto:${SITE.email}`,
							children: SITE.email
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-deep-foreground/60",
						children: SITE.address
					})]
				})
			]
		}) : null })]
	});
}
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** Browser-side validation. The Edge Function repeats these checks on the server. */
function validateFields(fields, values) {
	const errors = {};
	for (const f of fields) {
		const v = (values[f.name] ?? "").trim();
		if (f.required && !v) errors[f.name] = "This field is required.";
		else if (v && f.type === "email" && !EMAIL_RE.test(v)) errors[f.name] = "Please enter a valid email address.";
		else if (v && f.type === "tel" && !/^[0-9+()\-.\s]{6,40}$/.test(v)) errors[f.name] = "Please enter a valid phone number.";
	}
	return errors;
}
async function submitForm(form, values, honeypot) {
	return callFunction("send-form-email", {
		form,
		fields: values,
		website: honeypot
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
/**
* Centered success popup shared by every form on the site. The checkmark
* animates in via CSS (see the success-check-* utilities in styles.css) —
* re-mounting the <svg> each time the dialog opens (key={open}) restarts it.
*/
function SuccessModal({ open, onOpenChange, title, message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-sm rounded-3xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-2 grid size-20 place-items-center rounded-full bg-accent/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 52 52",
						className: "size-11 text-accent",
						fill: "none",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "26",
							cy: "26",
							r: "24",
							stroke: "currentColor",
							strokeWidth: "3",
							className: "success-check-circle"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M14.1 27.2l7.1 7.2 16.7-16.8",
							stroke: "currentColor",
							strokeWidth: "3.5",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							className: "success-check-mark"
						})]
					}, String(open))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "mt-2 text-center font-display text-xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "text-center text-sm",
					children: message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
					type: "button",
					className: "mx-auto mt-2",
					onClick: () => onOpenChange(false),
					children: "Done"
				})
			]
		})
	});
}
function SiteFooter() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	const [showSuccess, setShowSuccess] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const email = String(data.get("email") ?? "").trim();
		const found = validateFields([{
			name: "email",
			label: "Email",
			type: "email",
			required: true
		}], { email });
		if (found["email"]) {
			setStatus("error");
			setMessage(found["email"]);
			return;
		}
		setStatus("sending");
		const result = await submitForm("newsletter", { email }, String(data.get("website") ?? ""));
		if (result.error) {
			setStatus("error");
			setMessage(result.error);
			return;
		}
		form.reset();
		setStatus("idle");
		setMessage("");
		setShowSuccess(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-deep text-deep-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1.2fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.png",
							alt: "",
							className: "size-24 object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-lg font-bold",
							children: "Address:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "mt-2 space-y-1 text-sm text-deep-foreground/80 not-italic",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: SITE.address }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-semibold hover:text-accent",
								href: SITE.phoneHref,
								children: SITE.phone
							}) })]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Quick Link",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-sm font-bold tracking-wide uppercase text-accent",
							children: "Quick Link"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm text-deep-foreground/80",
							children: FOOTER_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "hover:text-accent",
								children: l.label
							}) }, l.label))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						noValidate: true,
						onSubmit,
						"aria-label": "Newsletter",
						className: "max-w-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-sm font-bold tracking-wide uppercase text-accent",
								children: "Newsletter"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "footer-newsletter",
										className: "sr-only",
										children: "Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "footer-newsletter",
										name: "email",
										type: "email",
										placeholder: "Email",
										autoComplete: "email",
										className: "min-h-11 w-full rounded-full border border-deep-foreground/25 bg-deep-foreground/5 px-4 text-sm text-deep-foreground placeholder:text-deep-foreground/50 focus-visible:outline-2 focus-visible:outline-accent"
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
										variant: "accent",
										className: "shrink-0",
										disabled: status === "sending",
										children: status === "sending" ? "Subscribing…" : "Subscribe"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"aria-live": "polite",
								role: status === "error" ? "alert" : void 0,
								className: "mt-2 text-xs text-red-300",
								children: status === "error" ? message : ""
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-deep-foreground/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-site py-5 text-center text-xs text-deep-foreground/65",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Copyright © ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						SITE.name,
						". All Rights Reserved."
					] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessModal, {
				open: showSuccess,
				onOpenChange: setShowSuccess,
				title: "Thank you!",
				message: "Your email has been added to our newsletter."
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center bg-background px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-semibold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillLink, {
						to: "/",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center bg-background px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-deep",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex min-h-11 items-center justify-center rounded-full border border-primary/30 px-6 text-sm font-semibold hover:bg-secondary",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$22 = createRootRouteWithContext()({
	head: () => ({
		meta: [{ charSet: "utf-8" }, {
			name: "viewport",
			content: "width=device-width, initial-scale=1"
		}],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon-32.png",
				type: "image/png",
				sizes: "32x32"
			},
			{
				rel: "icon",
				href: "/favicon-192.png",
				type: "image/png",
				sizes: "192x192"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&family=Manrope:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$22.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preloader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-dvh flex-col overflow-x-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex-1 overflow-x-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTransition, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
				]
			})
		] })
	});
}
var SEO = {
	"/about-loveworld/": {
		"title": "About Loveworld - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/about-loveworld/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "About Loveworld"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/about-loveworld/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-18T22:59:50+00:00"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "34 minutes"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/about-loveworld\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/about-loveworld\\/\",\"name\":\"About Loveworld - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"datePublished\":\"2023-11-14T11:21:35+00:00\",\"dateModified\":\"2023-12-18T22:59:50+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/about-loveworld\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/about-loveworld\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/about-loveworld\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"About Loveworld\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/back-to-school/": {
		"title": "Back to School - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/back-to-school/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "Back to School"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/back-to-school/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2024-08-02T21:52:37+00:00"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/back-to-school\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/back-to-school\\/\",\"name\":\"Back to School - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"datePublished\":\"2024-07-31T09:48:53+00:00\",\"dateModified\":\"2024-08-02T21:52:37+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/back-to-school\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/back-to-school\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/back-to-school\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Back to School\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/cart/": {
		"title": "Cart - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/cart/",
		"meta": [
			{
				"name": "robots",
				"content": "noindex, follow"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "Cart"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/cart/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-16T13:13:55+00:00"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "2 minutes"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/cart\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/cart\\/\",\"name\":\"Cart - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"datePublished\":\"2023-10-27T15:34:50+00:00\",\"dateModified\":\"2023-12-16T13:13:55+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/cart\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/cart\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/cart\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Cart\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/checkout/": {
		"title": "Cart - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/cart/",
		"meta": [
			{
				"name": "robots",
				"content": "noindex, follow"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "Cart"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/cart/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-16T13:13:55+00:00"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "2 minutes"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/cart\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/cart\\/\",\"name\":\"Cart - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"datePublished\":\"2023-10-27T15:34:50+00:00\",\"dateModified\":\"2023-12-16T13:13:55+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/cart\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/cart\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/cart\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Cart\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/contact/": {
		"title": "Contact - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/contact/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "Contact"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/contact/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2024-05-15T15:20:19+00:00"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "16 minutes"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/contact\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/contact\\/\",\"name\":\"Contact - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"datePublished\":\"2023-10-27T17:02:37+00:00\",\"dateModified\":\"2024-05-15T15:20:19+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/contact\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/contact\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/contact\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Contact\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/donate/": {
		"title": "Donate - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/donate/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "Donate"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/donate/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2024-01-09T23:15:12+00:00"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "3 minutes"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/donate\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/donate\\/\",\"name\":\"Donate - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"datePublished\":\"2023-12-15T11:10:27+00:00\",\"dateModified\":\"2024-01-09T23:15:12+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/donate\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/donate\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/donate\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Donate\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/hello-world/": {
		"title": "Hello world! - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/hello-world/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"name": "description",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "Hello world!"
			},
			{
				"property": "og:description",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/hello-world/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:published_time",
				"content": "2023-10-23T14:29:53+00:00"
			},
			{
				"name": "author",
				"content": "admin"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Written by"
			},
			{
				"name": "twitter:data1",
				"content": "admin"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"Article\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/hello-world\\/#article\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/hello-world\\/\"},\"author\":{\"name\":\"admin\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#\\/schema\\/person\\/e5fbe90f54b69a5c9769dbead580fcae\"},\"headline\":\"Hello world!\",\"datePublished\":\"2023-10-23T14:29:53+00:00\",\"mainEntityOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/hello-world\\/\"},\"wordCount\":17,\"commentCount\":1,\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"CommentAction\",\"name\":\"Comment\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/hello-world\\/#respond\"]}]},{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/hello-world\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/hello-world\\/\",\"name\":\"Hello world! - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"datePublished\":\"2023-10-23T14:29:53+00:00\",\"author\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#\\/schema\\/person\\/e5fbe90f54b69a5c9769dbead580fcae\"},\"description\":\"Christ Embassy Texas Virtual Church\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/hello-world\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/hello-world\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/hello-world\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Hello world!\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"},{\"@type\":\"Person\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#\\/schema\\/person\\/e5fbe90f54b69a5c9769dbead580fcae\",\"name\":\"admin\",\"image\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/867e12f940be5e57f80f63c5740798c49bde24a7b054c6cb8d09db229255db5a?s=96&d=mm&r=g\",\"url\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/867e12f940be5e57f80f63c5740798c49bde24a7b054c6cb8d09db229255db5a?s=96&d=mm&r=g\",\"contentUrl\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/867e12f940be5e57f80f63c5740798c49bde24a7b054c6cb8d09db229255db5a?s=96&d=mm&r=g\",\"caption\":\"admin\"},\"sameAs\":[\"https:\\/\\/christembassytexasvirtualchurch.com\"],\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/author\\/admin\\/\"}]}"
	},
	"/": {
		"title": "Home - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/",
		"meta": [
			{
				"name": "description",
				"content": "Christ Embassy Texas Virtual Church is a church specially designed by God's spirit and in line with the vision of the ministry to take the divine presence of God to nations of the world, demonstrating the character of the Holy Spirit."
			},
			{
				"name": "keywords",
				"content": "Christ Embassy Texas, Christ Embassy Wilcrest, Christ Embassy, Healing Streams"
			},
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"name": "description",
				"content": "Christ Embassy Texas Virtual Church is a church specially designed by God’s spirit and in line with the vision of the ministry to take the divine presence of God to nations of the world, demonstrating the character of the Holy Spirit."
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "website"
			},
			{
				"property": "og:title",
				"content": "Home"
			},
			{
				"property": "og:description",
				"content": "Christ Embassy Texas Virtual Church is a church specially designed by God’s spirit and in line with the vision of the ministry to take the divine presence of God to nations of the world, demonstrating the character of the Holy Spirit."
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2024-12-06T11:57:10+00:00"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2024/03/cropped-CETVC1-Logo-New-1.png"
			},
			{
				"property": "og:image:width",
				"content": "512"
			},
			{
				"property": "og:image:height",
				"content": "512"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Home - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2024\\/03\\/cropped-CETVC1-Logo-New-1.png\",\"datePublished\":\"2023-10-27T15:48:12+00:00\",\"dateModified\":\"2024-12-06T11:57:10+00:00\",\"description\":\"Christ Embassy Texas Virtual Church is a church specially designed by God’s spirit and in line with the vision of the ministry to take the divine presence of God to nations of the world, demonstrating the character of the Holy Spirit.\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2024\\/03\\/cropped-CETVC1-Logo-New-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2024\\/03\\/cropped-CETVC1-Logo-New-1.png\",\"width\":512,\"height\":512},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/live-stream/": {
		"title": "Live Stream - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/live-stream/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "Live Stream"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/live-stream/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-10-27T16:15:52+00:00"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/live-stream\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/live-stream\\/\",\"name\":\"Live Stream - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"datePublished\":\"2023-10-27T16:15:50+00:00\",\"dateModified\":\"2023-10-27T16:15:52+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/live-stream\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/live-stream\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/live-stream\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Live Stream\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/my-account/": {
		"title": "My account - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/my-account/",
		"meta": [
			{
				"name": "robots",
				"content": "noindex, follow"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "My account"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/my-account/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/my-account\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/my-account\\/\",\"name\":\"My account - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"datePublished\":\"2023-10-27T15:34:50+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/my-account\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/my-account\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/my-account\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"My account\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/our-ministry/": {
		"title": "Our Ministry - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/our-ministry/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "Our Ministry"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/our-ministry/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-19T16:27:31+00:00"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "38 minutes"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/our-ministry\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/our-ministry\\/\",\"name\":\"Our Ministry - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"datePublished\":\"2023-10-27T16:15:21+00:00\",\"dateModified\":\"2023-12-19T16:27:31+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/our-ministry\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/our-ministry\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/our-ministry\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Our Ministry\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/ourstore/": {
		"title": "Store - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/ourstore/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "Store"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/ourstore/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-16T13:07:48+00:00"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "3 minutes"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\",\"name\":\"Store - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"datePublished\":\"2023-12-12T22:22:21+00:00\",\"dateModified\":\"2023-12-16T13:07:48+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/prayer-of-salvation/": {
		"title": "Prayer of Salvation - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/prayer-of-salvation/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "Prayer of Salvation"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/prayer-of-salvation/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-18T23:34:10+00:00"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "21 minutes"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/prayer-of-salvation\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/prayer-of-salvation\\/\",\"name\":\"Prayer of Salvation - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"datePublished\":\"2023-12-18T21:54:04+00:00\",\"dateModified\":\"2023-12-18T23:34:10+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/prayer-of-salvation\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/prayer-of-salvation\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/prayer-of-salvation\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Prayer of Salvation\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/prayer/": {
		"title": "Prayer - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/prayer/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "Prayer"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/prayer/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-10-27T16:16:19+00:00"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/prayer\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/prayer\\/\",\"name\":\"Prayer - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"datePublished\":\"2023-10-27T16:16:17+00:00\",\"dateModified\":\"2023-10-27T16:16:19+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/prayer\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/prayer\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/prayer\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Prayer\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/7-things-the-holy-spirit-will-do-for-you/": {
		"title": "7 THINGS THE HOLY SPIRIT WILL DO FOR YOU - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/7-things-the-holy-spirit-will-do-for-you/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "7 THINGS THE HOLY SPIRIT WILL DO FOR YOU"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/7-things-the-holy-spirit-will-do-for-you/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-13T21:24:57+00:00"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/7-THINGS-THE-HOLY-SPIRIT-WILL-DO-FOR-YOU-2.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "2 minutes"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/7-things-the-holy-spirit-will-do-for-you\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/7-things-the-holy-spirit-will-do-for-you\\/\",\"name\":\"7 THINGS THE HOLY SPIRIT WILL DO FOR YOU - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/7-things-the-holy-spirit-will-do-for-you\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/7-things-the-holy-spirit-will-do-for-you\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/7-THINGS-THE-HOLY-SPIRIT-WILL-DO-FOR-YOU-2.png\",\"datePublished\":\"2023-12-12T22:38:19+00:00\",\"dateModified\":\"2023-12-13T21:24:57+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/7-things-the-holy-spirit-will-do-for-you\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/7-things-the-holy-spirit-will-do-for-you\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/7-things-the-holy-spirit-will-do-for-you\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/7-THINGS-THE-HOLY-SPIRIT-WILL-DO-FOR-YOU-2.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/7-THINGS-THE-HOLY-SPIRIT-WILL-DO-FOR-YOU-2.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/7-things-the-holy-spirit-will-do-for-you\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"7 THINGS THE HOLY SPIRIT WILL DO FOR YOU\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/7-things-the-holy-spirit-will-do-in-you/": {
		"title": "7 THINGS THE HOLY SPIRIT WILL DO IN YOU - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/7-things-the-holy-spirit-will-do-in-you/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "7 THINGS THE HOLY SPIRIT WILL DO IN YOU"
			},
			{
				"property": "og:description",
				"content": "In “Seven Things The Holy Spirit Will Do In You”, Pastor Chris introduces the Holy Spirit and shows you seven things He will do in you; seven crucial blessings you will have in your life only when you receive Him and give Him full, unlimited access. Get ready for a fresh revelation of Who the […]"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/7-things-the-holy-spirit-will-do-in-you/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-13T20:58:51+00:00"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/7-THINGS-THE-HOLY-SPIRIT-WILL-DO-IN-YOU-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/7-things-the-holy-spirit-will-do-in-you\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/7-things-the-holy-spirit-will-do-in-you\\/\",\"name\":\"7 THINGS THE HOLY SPIRIT WILL DO IN YOU - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/7-things-the-holy-spirit-will-do-in-you\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/7-things-the-holy-spirit-will-do-in-you\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/7-THINGS-THE-HOLY-SPIRIT-WILL-DO-IN-YOU-1.png\",\"datePublished\":\"2023-12-12T22:39:17+00:00\",\"dateModified\":\"2023-12-13T20:58:51+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/7-things-the-holy-spirit-will-do-in-you\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/7-things-the-holy-spirit-will-do-in-you\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/7-things-the-holy-spirit-will-do-in-you\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/7-THINGS-THE-HOLY-SPIRIT-WILL-DO-IN-YOU-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/7-THINGS-THE-HOLY-SPIRIT-WILL-DO-IN-YOU-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/7-things-the-holy-spirit-will-do-in-you\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"7 THINGS THE HOLY SPIRIT WILL DO IN YOU\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/dont-stop-here/": {
		"title": "DON’T STOP HERE - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/dont-stop-here/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "DON’T STOP HERE"
			},
			{
				"property": "og:description",
				"content": "Ignorance of God’s Word is a destroyer. God said, “My people are destroyed (that is they perish, suffer, are brought down and crushed) for lack of knowledge…” (Hosea 4:6). In other words, they are impoverished, punished, brought down, crushed and destroyed because they lack knowledge spiritual knowledge They get into trouble for their lack of […]"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/dont-stop-here/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-13T21:47:40+00:00"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/DONT-STOP-HERE-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/dont-stop-here\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/dont-stop-here\\/\",\"name\":\"DON’T STOP HERE - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/dont-stop-here\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/dont-stop-here\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/DONT-STOP-HERE-1.png\",\"datePublished\":\"2023-12-13T21:47:05+00:00\",\"dateModified\":\"2023-12-13T21:47:40+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/dont-stop-here\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/dont-stop-here\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/dont-stop-here\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/DONT-STOP-HERE-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/DONT-STOP-HERE-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/dont-stop-here\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"DON’T STOP HERE\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/faith-proclaimations-of-health-and-healing/": {
		"title": "FAITH PROCLAIMATIONS OF HEALTH AND HEALING - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/faith-proclaimations-of-health-and-healing/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "FAITH PROCLAIMATIONS OF HEALTH AND HEALING"
			},
			{
				"property": "og:description",
				"content": "As a Christian, you are the righteousness of God in Christ Jesus. You are called to live a life of faith (Hebrews 10:38), and the righteousness of faith speaks (Romans 10:6). To walk daily in the provisions of God’s Word for your life, you have to maintain a steady stream of faith-filled confessions. The Bible […]"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/faith-proclaimations-of-health-and-healing/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/FAITH-PROCLAIMATIONS-OF-HEALTH-AND-HEALING-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "1 minute"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/faith-proclaimations-of-health-and-healing\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/faith-proclaimations-of-health-and-healing\\/\",\"name\":\"FAITH PROCLAIMATIONS OF HEALTH AND HEALING - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/faith-proclaimations-of-health-and-healing\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/faith-proclaimations-of-health-and-healing\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/FAITH-PROCLAIMATIONS-OF-HEALTH-AND-HEALING-1.png\",\"datePublished\":\"2023-12-14T07:07:15+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/faith-proclaimations-of-health-and-healing\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/faith-proclaimations-of-health-and-healing\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/faith-proclaimations-of-health-and-healing\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/FAITH-PROCLAIMATIONS-OF-HEALTH-AND-HEALING-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/FAITH-PROCLAIMATIONS-OF-HEALTH-AND-HEALING-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/faith-proclaimations-of-health-and-healing\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"FAITH PROCLAIMATIONS OF HEALTH AND HEALING\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/how-to-make-your-faith-work/": {
		"title": "HOW TO MAKE YOUR FAITH WORK - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/how-to-make-your-faith-work/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "HOW TO MAKE YOUR FAITH WORK"
			},
			{
				"property": "og:description",
				"content": "That’s the missing ingredient from the message of faith, which is needed now in the body of Christ. This book is an outstanding revelational masterpiece that teaches you not just how to acquire faith, but how to put your faith to work so you can live the life of victory, success, joy, health and prosperity […]"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/how-to-make-your-faith-work/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/HOW-TO-MAKE-YOUR-FAITH-WORK-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "1 minute"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-make-your-faith-work\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-make-your-faith-work\\/\",\"name\":\"HOW TO MAKE YOUR FAITH WORK - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-make-your-faith-work\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-make-your-faith-work\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/HOW-TO-MAKE-YOUR-FAITH-WORK-1.png\",\"datePublished\":\"2023-12-14T07:08:27+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-make-your-faith-work\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-make-your-faith-work\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-make-your-faith-work\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/HOW-TO-MAKE-YOUR-FAITH-WORK-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/HOW-TO-MAKE-YOUR-FAITH-WORK-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-make-your-faith-work\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"HOW TO MAKE YOUR FAITH WORK\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/how-to-pray-effectively/": {
		"title": "HOW TO PRAY EFFECTIVELY - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/how-to-pray-effectively/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "HOW TO PRAY EFFECTIVELY"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/how-to-pray-effectively/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-13T07:29:48+00:00"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/HOW-TO-PRAY-EFFECTIVELY-1.png"
			},
			{
				"property": "og:image:width",
				"content": "400"
			},
			{
				"property": "og:image:height",
				"content": "400"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "2 minutes"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-pray-effectively\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-pray-effectively\\/\",\"name\":\"HOW TO PRAY EFFECTIVELY - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-pray-effectively\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-pray-effectively\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/HOW-TO-PRAY-EFFECTIVELY-1.png\",\"datePublished\":\"2023-12-12T22:35:09+00:00\",\"dateModified\":\"2023-12-13T07:29:48+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-pray-effectively\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-pray-effectively\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-pray-effectively\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/HOW-TO-PRAY-EFFECTIVELY-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/HOW-TO-PRAY-EFFECTIVELY-1.png\",\"width\":400,\"height\":400},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-pray-effectively\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"HOW TO PRAY EFFECTIVELY\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/how-to-receive-a-miracle-and-retain-it/": {
		"title": "HOW TO RECEIVE A MIRACLE AND RETAIN IT - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/how-to-receive-a-miracle-and-retain-it/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "HOW TO RECEIVE A MIRACLE AND RETAIN IT"
			},
			{
				"property": "og:description",
				"content": "Unlock the secrets of receiving and retaining God’s miraculous interventions with “How to Receive a Miracle and Retain It” by Chris Oyakhilome. Discover the vital steps to invite divine power into your life and learn how to safeguard these miracles from the devil’s counterattacks. Your supernatural journey awaits you!,"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/how-to-receive-a-miracle-and-retain-it/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/HOW-TO-RECEIVE-A-MIRACLE-AND-RETAIN-IT-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-receive-a-miracle-and-retain-it\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-receive-a-miracle-and-retain-it\\/\",\"name\":\"HOW TO RECEIVE A MIRACLE AND RETAIN IT - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-receive-a-miracle-and-retain-it\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-receive-a-miracle-and-retain-it\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/HOW-TO-RECEIVE-A-MIRACLE-AND-RETAIN-IT-1.png\",\"datePublished\":\"2023-12-14T07:09:36+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-receive-a-miracle-and-retain-it\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-receive-a-miracle-and-retain-it\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-receive-a-miracle-and-retain-it\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/HOW-TO-RECEIVE-A-MIRACLE-AND-RETAIN-IT-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/HOW-TO-RECEIVE-A-MIRACLE-AND-RETAIN-IT-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/how-to-receive-a-miracle-and-retain-it\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"HOW TO RECEIVE A MIRACLE AND RETAIN IT\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/join-this-chariot/": {
		"title": "JOIN THIS CHARIOT - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/join-this-chariot/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "JOIN THIS CHARIOT"
			},
			{
				"property": "og:description",
				"content": "Join This Chariot’ is\xA0a classic on soul wining that motivates the believer to effective evangelism and teaches him practical steps to reaching his world with the gospel of Jesus Christ."
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/join-this-chariot/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-13T20:57:59+00:00"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/JOIN-THIS-CHARIOT-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/join-this-chariot\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/join-this-chariot\\/\",\"name\":\"JOIN THIS CHARIOT - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/join-this-chariot\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/join-this-chariot\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/JOIN-THIS-CHARIOT-1.png\",\"datePublished\":\"2023-12-12T22:40:44+00:00\",\"dateModified\":\"2023-12-13T20:57:59+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/join-this-chariot\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/join-this-chariot\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/join-this-chariot\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/JOIN-THIS-CHARIOT-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/JOIN-THIS-CHARIOT-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/join-this-chariot\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"JOIN THIS CHARIOT\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/none-of-these-diseases/": {
		"title": "NONE OF THESE DISEASES - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/none-of-these-diseases/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "NONE OF THESE DISEASES"
			},
			{
				"property": "og:description",
				"content": "This book will stir in and around you an atmosphere of miracles. “No matter who you are and what stage of life you’re at, there is a message in this book for you. I send this book to you with prayer: that words contained in this volume would open your eyes to the reality of […]"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/none-of-these-diseases/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-13T21:27:22+00:00"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/NONE-OF-THESE-DISEASES-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/none-of-these-diseases\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/none-of-these-diseases\\/\",\"name\":\"NONE OF THESE DISEASES - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/none-of-these-diseases\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/none-of-these-diseases\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/NONE-OF-THESE-DISEASES-1.png\",\"datePublished\":\"2023-12-12T22:37:09+00:00\",\"dateModified\":\"2023-12-13T21:27:22+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/none-of-these-diseases\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/none-of-these-diseases\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/none-of-these-diseases\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/NONE-OF-THESE-DISEASES-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/NONE-OF-THESE-DISEASES-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/none-of-these-diseases\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"NONE OF THESE DISEASES\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/now-that-you-are-born-again/": {
		"title": "NOW THAT YOU ARE BORN AGAIN - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/now-that-you-are-born-again/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "NOW THAT YOU ARE BORN AGAIN"
			},
			{
				"property": "og:description",
				"content": "“Now that you’re born again, WHAT NEXT?” That’s the big question, and this book gives clear and simple answers in it, best-selling author and teacher, Chris Oyakhilome, reveals vital truths fundamental to the Christian faith, truths upon which you can build a strong and vibrant life in Christ."
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/now-that-you-are-born-again/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/NOW-THAT-YOU-ARE-BORN-AGAIN.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/now-that-you-are-born-again\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/now-that-you-are-born-again\\/\",\"name\":\"NOW THAT YOU ARE BORN AGAIN - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/now-that-you-are-born-again\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/now-that-you-are-born-again\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/NOW-THAT-YOU-ARE-BORN-AGAIN.png\",\"datePublished\":\"2023-12-14T07:03:28+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/now-that-you-are-born-again\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/now-that-you-are-born-again\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/now-that-you-are-born-again\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/NOW-THAT-YOU-ARE-BORN-AGAIN.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/NOW-THAT-YOU-ARE-BORN-AGAIN.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/now-that-you-are-born-again\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"NOW THAT YOU ARE BORN AGAIN\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/praying-the-right-way/": {
		"title": "PRAYING THE RIGHT WAY - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/praying-the-right-way/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "PRAYING THE RIGHT WAY"
			},
			{
				"property": "og:description",
				"content": "God is more willing to give to you than you could ever be willing to receive. You don’t ‘say’ prayers, you pray from your heart to God. You pray in the Name of Jesus to God the Father, not through Jesus In this concise, yet comprehensive book on prayer, Pastor Chris puts paid to the […]"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/praying-the-right-way/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-13T21:29:04+00:00"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/PRAYING-THE-RIGHT-WAY-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "1 minute"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/praying-the-right-way\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/praying-the-right-way\\/\",\"name\":\"PRAYING THE RIGHT WAY - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/praying-the-right-way\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/praying-the-right-way\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/PRAYING-THE-RIGHT-WAY-1.png\",\"datePublished\":\"2023-12-12T22:36:05+00:00\",\"dateModified\":\"2023-12-13T21:29:04+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/praying-the-right-way\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/praying-the-right-way\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/praying-the-right-way\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/PRAYING-THE-RIGHT-WAY-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/PRAYING-THE-RIGHT-WAY-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/praying-the-right-way\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"PRAYING THE RIGHT WAY\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/prophesy-understanding-the-power-that-controls-the-future/": {
		"title": "PROPHESY; UNDERSTANDING THE POWER THAT CONTROLS THE FUTURE - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/prophesy-understanding-the-power-that-controls-the-future/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "PROPHESY; UNDERSTANDING THE POWER THAT CONTROLS THE FUTURE"
			},
			{
				"property": "og:description",
				"content": "“‘And it shall come to pass in the last days, says God, That I will pour out of My Spirit on all flesh; Your sons and your daughters shall prophesy…” Acts 2:17 (NKJV). God’s people are a people of prophecy. We are products of the prophetic Word and we can only be established and make […]"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/prophesy-understanding-the-power-that-controls-the-future/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-14T07:05:12+00:00"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/PROPHESY-UNDERSTANDING-THE-POWER-THAT-CONTROLS-THE-FUTURE-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "1 minute"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/prophesy-understanding-the-power-that-controls-the-future\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/prophesy-understanding-the-power-that-controls-the-future\\/\",\"name\":\"PROPHESY; UNDERSTANDING THE POWER THAT CONTROLS THE FUTURE - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/prophesy-understanding-the-power-that-controls-the-future\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/prophesy-understanding-the-power-that-controls-the-future\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/PROPHESY-UNDERSTANDING-THE-POWER-THAT-CONTROLS-THE-FUTURE-1.png\",\"datePublished\":\"2023-12-14T07:04:40+00:00\",\"dateModified\":\"2023-12-14T07:05:12+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/prophesy-understanding-the-power-that-controls-the-future\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/prophesy-understanding-the-power-that-controls-the-future\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/prophesy-understanding-the-power-that-controls-the-future\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/PROPHESY-UNDERSTANDING-THE-POWER-THAT-CONTROLS-THE-FUTURE-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/PROPHESY-UNDERSTANDING-THE-POWER-THAT-CONTROLS-THE-FUTURE-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/prophesy-understanding-the-power-that-controls-the-future\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"PROPHESY; UNDERSTANDING THE POWER THAT CONTROLS THE FUTURE\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/rhapsody-of-realities-daily-devotional/": {
		"title": "RHAPSODY OF REALITIES DAILY DEVOTIONAL - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/rhapsody-of-realities-daily-devotional/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "RHAPSODY OF REALITIES DAILY DEVOTIONAL"
			},
			{
				"property": "og:description",
				"content": "Rhapsody of Realities is\xA0a Christian daily devotional publication by Pastor Chris Oyakhilome. It was first published January 2001 in English language and by August 2022, it was reported to have over 8,123 languages. In 2011, it distributed 2 million copies each month globally.\xA0No other material in human history has been translated into every living language. […]"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/rhapsody-of-realities-daily-devotional/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/RHAPSODY-OF-REALITIES-DAILY-DEVOTIONAL-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-daily-devotional\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-daily-devotional\\/\",\"name\":\"RHAPSODY OF REALITIES DAILY DEVOTIONAL - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-daily-devotional\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-daily-devotional\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/RHAPSODY-OF-REALITIES-DAILY-DEVOTIONAL-1.png\",\"datePublished\":\"2023-12-14T07:10:46+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-daily-devotional\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-daily-devotional\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-daily-devotional\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/RHAPSODY-OF-REALITIES-DAILY-DEVOTIONAL-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/RHAPSODY-OF-REALITIES-DAILY-DEVOTIONAL-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-daily-devotional\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"RHAPSODY OF REALITIES DAILY DEVOTIONAL\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/rhapsody-of-realities-teevo-bible-for-teenagers/": {
		"title": "RHAPSODY OF REALITIES TEEVO BIBLE FOR TEENAGERS - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/rhapsody-of-realities-teevo-bible-for-teenagers/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "RHAPSODY OF REALITIES TEEVO BIBLE FOR TEENAGERS"
			},
			{
				"property": "og:description",
				"content": "The Rhapsody of Realities Teevo Bible is one designed to inspire and encourage teenagers and young adults generally to study God’s Word. In it, the young reader will find the writing and presentation styles endearing, and its features helpful, engaging and designed to appeal to young minds."
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/rhapsody-of-realities-teevo-bible-for-teenagers/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/RHAPSODY-OF-REALITIES-TEEVO-BIBLE-FOR-TEENAGERS-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-teevo-bible-for-teenagers\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-teevo-bible-for-teenagers\\/\",\"name\":\"RHAPSODY OF REALITIES TEEVO BIBLE FOR TEENAGERS - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-teevo-bible-for-teenagers\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-teevo-bible-for-teenagers\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/RHAPSODY-OF-REALITIES-TEEVO-BIBLE-FOR-TEENAGERS-1.png\",\"datePublished\":\"2023-12-14T07:14:34+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-teevo-bible-for-teenagers\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-teevo-bible-for-teenagers\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-teevo-bible-for-teenagers\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/RHAPSODY-OF-REALITIES-TEEVO-BIBLE-FOR-TEENAGERS-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/RHAPSODY-OF-REALITIES-TEEVO-BIBLE-FOR-TEENAGERS-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-teevo-bible-for-teenagers\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"RHAPSODY OF REALITIES TEEVO BIBLE FOR TEENAGERS\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/rhapsody-of-realities-teevo/": {
		"title": "RHAPSODY OF REALITIES TEEVO - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/rhapsody-of-realities-teevo/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "RHAPSODY OF REALITIES TEEVO"
			},
			{
				"property": "og:description",
				"content": "TeeVo Rhapsody of Realities is a daily devotional for teenagers. It is designed to inspire, encourage and strengthen you by providing you answer-from the perspective of God’s Word-to question of critical concern.\xA0Teevo\xA0helps you discover your true purpose and programs you for a life of out-and-out success."
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/rhapsody-of-realities-teevo/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/RHAPSODY-OF-REALITIES-TEEVO-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-teevo\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-teevo\\/\",\"name\":\"RHAPSODY OF REALITIES TEEVO - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-teevo\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-teevo\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/RHAPSODY-OF-REALITIES-TEEVO-1.png\",\"datePublished\":\"2023-12-14T07:11:48+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-teevo\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-teevo\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-teevo\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/RHAPSODY-OF-REALITIES-TEEVO-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/RHAPSODY-OF-REALITIES-TEEVO-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-teevo\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"RHAPSODY OF REALITIES TEEVO\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/rhapsody-of-realities-topical-compendium-volume-5/": {
		"title": "RHAPSODY OF REALITIES TOPICAL COMPENDIUM VOLUME 5 - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/rhapsody-of-realities-topical-compendium-volume-5/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "RHAPSODY OF REALITIES TOPICAL COMPENDIUM VOLUME 5"
			},
			{
				"property": "og:description",
				"content": "The rhapsody of realities topical compendium series are comprehensive reference materials that have enhanced word based training among Christians. these series are renowned with inspiring articles that articulate the gospel of our lord Jesus, and it’s therefore an important tool for the spiritual development of god’s children."
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/rhapsody-of-realities-topical-compendium-volume-5/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/RHAPSODY-OF-REALITIES-TOPICAL-COMPENDIUM-VOLUME-5-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-topical-compendium-volume-5\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-topical-compendium-volume-5\\/\",\"name\":\"RHAPSODY OF REALITIES TOPICAL COMPENDIUM VOLUME 5 - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-topical-compendium-volume-5\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-topical-compendium-volume-5\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/RHAPSODY-OF-REALITIES-TOPICAL-COMPENDIUM-VOLUME-5-1.png\",\"datePublished\":\"2023-12-13T21:54:24+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-topical-compendium-volume-5\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-topical-compendium-volume-5\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-topical-compendium-volume-5\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/RHAPSODY-OF-REALITIES-TOPICAL-COMPENDIUM-VOLUME-5-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/RHAPSODY-OF-REALITIES-TOPICAL-COMPENDIUM-VOLUME-5-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/rhapsody-of-realities-topical-compendium-volume-5\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"RHAPSODY OF REALITIES TOPICAL COMPENDIUM VOLUME 5\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/the-gates-of-zion/": {
		"title": "THE GATES OF ZION - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/the-gates-of-zion/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "THE GATES OF ZION"
			},
			{
				"property": "og:description",
				"content": "God has called you to a life of progress, success and victory! He has designed for you to experience consistent growth in your life. In this prophetic book, Pastor Chris takes you through the rebuilding of the walls of Jerusalem as symbolic of God’s pattern for building His church. Not only will you experience the […]"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/the-gates-of-zion/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/THE-GATES-OF-ZION-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-gates-of-zion\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-gates-of-zion\\/\",\"name\":\"THE GATES OF ZION - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-gates-of-zion\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-gates-of-zion\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-GATES-OF-ZION-1.png\",\"datePublished\":\"2023-12-13T21:48:34+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-gates-of-zion\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-gates-of-zion\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-gates-of-zion\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-GATES-OF-ZION-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-GATES-OF-ZION-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-gates-of-zion\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"THE GATES OF ZION\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/the-holy-spirit-and-you/": {
		"title": "THE HOLY SPIRIT AND YOU - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/the-holy-spirit-and-you/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "THE HOLY SPIRIT AND YOU"
			},
			{
				"property": "og:description",
				"content": "Discover in ‘The Holy Spirit and You’ the key to the successful life you’ve always desired. Get to know the One who answers to the Name of Jesus. Learn to walk with Him, and let Him lead you into your inheritance and your destiny in God. ‘The Holy Spirit and You’ will arouse in you […]"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/the-holy-spirit-and-you/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/THE-HOLY-SPIRIT-AND-YOU-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-holy-spirit-and-you\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-holy-spirit-and-you\\/\",\"name\":\"THE HOLY SPIRIT AND YOU - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-holy-spirit-and-you\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-holy-spirit-and-you\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-HOLY-SPIRIT-AND-YOU-1.png\",\"datePublished\":\"2023-12-14T07:06:14+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-holy-spirit-and-you\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-holy-spirit-and-you\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-holy-spirit-and-you\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-HOLY-SPIRIT-AND-YOU-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-HOLY-SPIRIT-AND-YOU-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-holy-spirit-and-you\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"THE HOLY SPIRIT AND YOU\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/the-oil-and-the-mantle/": {
		"title": "THE OIL AND THE MANTLE - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/the-oil-and-the-mantle/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "THE OIL AND THE MANTLE"
			},
			{
				"property": "og:description",
				"content": "In his usual dynamic and easy–to–understand manner, Pastor Chris exposes the myths about the use of material media to perform miracles, and reveals clearly the mind of God on the subject. “The Oil and The Mantle”, an explicit treatise on these controversial issues, will cause you to be established in the truth."
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/the-oil-and-the-mantle/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-13T20:57:08+00:00"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/THE-OIL-AND-THE-MANTLE-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-oil-and-the-mantle\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-oil-and-the-mantle\\/\",\"name\":\"THE OIL AND THE MANTLE - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-oil-and-the-mantle\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-oil-and-the-mantle\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-OIL-AND-THE-MANTLE-1.png\",\"datePublished\":\"2023-12-12T22:41:44+00:00\",\"dateModified\":\"2023-12-13T20:57:08+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-oil-and-the-mantle\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-oil-and-the-mantle\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-oil-and-the-mantle\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-OIL-AND-THE-MANTLE-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-OIL-AND-THE-MANTLE-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-oil-and-the-mantle\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"THE OIL AND THE MANTLE\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/the-power-of-tongues/": {
		"title": "THE POWER OF TONGUES - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/the-power-of-tongues/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "THE POWER OF TONGUES"
			},
			{
				"property": "og:description",
				"content": "In this book, Pastor Chris Oyakhilome teaches you the “what,” “how” and “why” of speaking in other tongues, and reveals the immense benefits it holds for you as a New Testament believer in Jesus Christ. You will also learn about: Tongues, Interpretation of tongues, and Prophecy The difference between Praying in Your Understanding and Praying […]"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/the-power-of-tongues/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/THE-POWER-OF-TONGUES-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-power-of-tongues\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-power-of-tongues\\/\",\"name\":\"THE POWER OF TONGUES - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-power-of-tongues\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-power-of-tongues\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-POWER-OF-TONGUES-1.png\",\"datePublished\":\"2023-12-13T21:49:32+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-power-of-tongues\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-power-of-tongues\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-power-of-tongues\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-POWER-OF-TONGUES-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-POWER-OF-TONGUES-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-power-of-tongues\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"THE POWER OF TONGUES\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/the-power-of-your-mind/": {
		"title": "THE POWER OF YOUR MIND - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/the-power-of-your-mind/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "THE POWER OF YOUR MIND"
			},
			{
				"property": "og:description",
				"content": "Walk in divine excellence and transform your world through the power of a renewed mind. Put your mind-power to work and be all God wants you to be! There are no limits to what you can achieve, and absolutely no restrictions to how high you can propel yourself, when you put your mind-power to work."
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/the-power-of-your-mind/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-13T21:45:08+00:00"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/THE-POWER-OF-YOUR-MIND-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-power-of-your-mind\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-power-of-your-mind\\/\",\"name\":\"THE POWER OF YOUR MIND - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-power-of-your-mind\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-power-of-your-mind\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-POWER-OF-YOUR-MIND-1.png\",\"datePublished\":\"2023-12-12T22:34:03+00:00\",\"dateModified\":\"2023-12-13T21:45:08+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-power-of-your-mind\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-power-of-your-mind\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-power-of-your-mind\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-POWER-OF-YOUR-MIND-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-POWER-OF-YOUR-MIND-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-power-of-your-mind\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"THE POWER OF YOUR MIND\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/the-rhapsody-of-realities-devotional-study-bible/": {
		"title": "THE RHAPSODY OF REALITIES DEVOTIONAL STUDY BIBLE - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/the-rhapsody-of-realities-devotional-study-bible/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "THE RHAPSODY OF REALITIES DEVOTIONAL STUDY BIBLE"
			},
			{
				"property": "og:description",
				"content": "In a world where demands for our time and attention is constant, many Christians find themselves torn between the choices of either studying their Bibles or reading some inspirational Christian literature.The Rhapsody of Realities Devotional Study Bible offers a solution to this challenge in its compact package that combines features of the most important book […]"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/the-rhapsody-of-realities-devotional-study-bible/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-14T07:12:51+00:00"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/THE-RHAPSODY-OF-REALITIES-DEVOTIONAL-STUDY-BIBLE-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "1 minute"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-rhapsody-of-realities-devotional-study-bible\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-rhapsody-of-realities-devotional-study-bible\\/\",\"name\":\"THE RHAPSODY OF REALITIES DEVOTIONAL STUDY BIBLE - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-rhapsody-of-realities-devotional-study-bible\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-rhapsody-of-realities-devotional-study-bible\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-RHAPSODY-OF-REALITIES-DEVOTIONAL-STUDY-BIBLE-1.png\",\"datePublished\":\"2023-12-14T07:12:50+00:00\",\"dateModified\":\"2023-12-14T07:12:51+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-rhapsody-of-realities-devotional-study-bible\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-rhapsody-of-realities-devotional-study-bible\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-rhapsody-of-realities-devotional-study-bible\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-RHAPSODY-OF-REALITIES-DEVOTIONAL-STUDY-BIBLE-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-RHAPSODY-OF-REALITIES-DEVOTIONAL-STUDY-BIBLE-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-rhapsody-of-realities-devotional-study-bible\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"THE RHAPSODY OF REALITIES DEVOTIONAL STUDY BIBLE\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/the-seven-spirits-of-god/": {
		"title": "THE SEVEN SPIRITS OF GOD - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/the-seven-spirits-of-god/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "THE SEVEN SPIRITS OF GOD"
			},
			{
				"property": "og:description",
				"content": "When you hear or read the title, “The Seven Spirits of God” for the first time, the first question that will likely come up in your mind is, Does this mean God has seven Holy Spirits? The Bible does show that there are “Seven Spirits of God.” It however behooves us to understand exactly what […]"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/the-seven-spirits-of-god/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/THE-SEVEN-SPIRITS-OF-GOD-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "1 minute"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-seven-spirits-of-god\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-seven-spirits-of-god\\/\",\"name\":\"THE SEVEN SPIRITS OF GOD - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-seven-spirits-of-god\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-seven-spirits-of-god\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-SEVEN-SPIRITS-OF-GOD-1.png\",\"datePublished\":\"2023-12-13T21:50:45+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-seven-spirits-of-god\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-seven-spirits-of-god\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-seven-spirits-of-god\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-SEVEN-SPIRITS-OF-GOD-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/THE-SEVEN-SPIRITS-OF-GOD-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/the-seven-spirits-of-god\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"THE SEVEN SPIRITS OF GOD\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/when-god-visits-you/": {
		"title": "WHEN GOD VISITS YOU - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/when-god-visits-you/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "WHEN GOD VISITS YOU"
			},
			{
				"property": "og:description",
				"content": "Does God actually visit? When does He visit? How do I prepare for His visitation? What are the benefits of such visits? In this dynamic volume, Pastor Chris shares from the lives of Bible characters on how you can position yourself for a visitation from God and experience that change you’ve so long desired."
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/when-god-visits-you/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-13T21:56:18+00:00"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/WHEN-GOD-VISITS-YOU-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/when-god-visits-you\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/when-god-visits-you\\/\",\"name\":\"WHEN GOD VISITS YOU - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/when-god-visits-you\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/when-god-visits-you\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/WHEN-GOD-VISITS-YOU-1.png\",\"datePublished\":\"2023-12-13T21:55:24+00:00\",\"dateModified\":\"2023-12-13T21:56:18+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/when-god-visits-you\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/when-god-visits-you\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/when-god-visits-you\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/WHEN-GOD-VISITS-YOU-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/WHEN-GOD-VISITS-YOU-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/when-god-visits-you\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"WHEN GOD VISITS YOU\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/product/your-rights-in-christ/": {
		"title": "YOUR RIGHTS IN CHRIST - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/product/your-rights-in-christ/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "YOUR RIGHTS IN CHRIST"
			},
			{
				"property": "og:description",
				"content": "By virtue of the redeeming work of Christ, we have been declared free and at liberty to choose the way to live. This freedom in Christ empowers us with legal rights to dictate the course of our lives. Join Pastor Chris as he guides your thoughts into the reality of God’s plan for excellence in […]"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/product/your-rights-in-christ/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2023-12-13T20:53:30+00:00"
			},
			{
				"property": "og:image",
				"content": "https://christembassytexasvirtualchurch.com/wp-content/uploads/2023/12/YOUR-RIGHTS-IN-CHRIST-1.png"
			},
			{
				"property": "og:image:width",
				"content": "200"
			},
			{
				"property": "og:image:height",
				"content": "200"
			},
			{
				"property": "og:image:type",
				"content": "image/png"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/your-rights-in-christ\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/your-rights-in-christ\\/\",\"name\":\"YOUR RIGHTS IN CHRIST - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/your-rights-in-christ\\/#primaryimage\"},\"image\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/your-rights-in-christ\\/#primaryimage\"},\"thumbnailUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/YOUR-RIGHTS-IN-CHRIST-1.png\",\"datePublished\":\"2023-12-12T22:42:50+00:00\",\"dateModified\":\"2023-12-13T20:53:30+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/your-rights-in-christ\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/your-rights-in-christ\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/your-rights-in-christ\\/#primaryimage\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/YOUR-RIGHTS-IN-CHRIST-1.png\",\"contentUrl\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/wp-content\\/uploads\\/2023\\/12\\/YOUR-RIGHTS-IN-CHRIST-1.png\",\"width\":200,\"height\":200},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/product\\/your-rights-in-christ\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Store\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/ourstore\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"YOUR RIGHTS IN CHRIST\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/sample-page/": {
		"title": "Sample Page - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/sample-page/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "Sample Page"
			},
			{
				"property": "og:description",
				"content": "This is an example page. It’s different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this: Hi there! I’m a bike messenger […]"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/sample-page/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "1 minute"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/sample-page\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/sample-page\\/\",\"name\":\"Sample Page - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"datePublished\":\"2023-10-23T14:29:53+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/sample-page\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/sample-page\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/sample-page\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Sample Page\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/sunday-special/": {
		"title": "Sunday Special - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/sunday-special/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "Sunday Special"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/sunday-special/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2024-05-15T16:55:21+00:00"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/sunday-special\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/sunday-special\\/\",\"name\":\"Sunday Special - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"datePublished\":\"2024-05-15T12:57:56+00:00\",\"dateModified\":\"2024-05-15T16:55:21+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/sunday-special\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/sunday-special\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/sunday-special\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Sunday Special\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	},
	"/thank-you-page/": {
		"title": "Thank you page - Christ Embassy Texas Virtual Church",
		"canonical": "https://christembassytexasvirtualchurch.com/thank-you-page/",
		"meta": [
			{
				"name": "robots",
				"content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				"property": "og:locale",
				"content": "en_US"
			},
			{
				"property": "og:type",
				"content": "article"
			},
			{
				"property": "og:title",
				"content": "Thank you page"
			},
			{
				"property": "og:url",
				"content": "https://christembassytexasvirtualchurch.com/thank-you-page/"
			},
			{
				"property": "og:site_name",
				"content": "Christ Embassy Texas Virtual Church"
			},
			{
				"property": "article:modified_time",
				"content": "2024-01-09T22:15:10+00:00"
			},
			{
				"name": "twitter:card",
				"content": "summary_large_image"
			},
			{
				"name": "twitter:label1",
				"content": "Est. reading time"
			},
			{
				"name": "twitter:data1",
				"content": "1 minute"
			}
		],
		"jsonld": "{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/thank-you-page\\/\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/thank-you-page\\/\",\"name\":\"Thank you page - Christ Embassy Texas Virtual Church\",\"isPartOf\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\"},\"datePublished\":\"2024-01-09T22:10:07+00:00\",\"dateModified\":\"2024-01-09T22:15:10+00:00\",\"breadcrumb\":{\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/thank-you-page\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https:\\/\\/christembassytexasvirtualchurch.com\\/thank-you-page\\/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/thank-you-page\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Thank you page\"}]},{\"@type\":\"WebSite\",\"@id\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/#website\",\"url\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/\",\"name\":\"Christ Embassy Texas Virtual Church\",\"description\":\"Christ Embassy Texas Virtual Church\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https:\\/\\/christembassytexasvirtualchurch.com\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"}]}"
	}
};
function seoHead(path) {
	const s = SEO[path];
	if (!s) return {};
	return {
		meta: [{ title: s.title }, ...s.meta],
		links: s.canonical ? [{
			rel: "canonical",
			href: s.canonical
		}] : [],
		scripts: s.jsonld ? [{
			type: "application/ld+json",
			children: s.jsonld
		}] : []
	};
}
var $$splitComponentImporter$21 = () => import("./routes-wDgsD9hP.mjs");
var Route$21 = createFileRoute("/")({
	head: () => seoHead("/"),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
/** Splits the "Healing Streams TV / Prayathon / Unending Praise" section into video + text groups. */
var $$splitComponentImporter$20 = () => import("./about-loveworld.index-Dh8tWm11.mjs");
var Route$20 = createFileRoute("/about-loveworld/")({
	head: () => seoHead("/about-loveworld/"),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./back-to-school.index-UT8Gx0Lk.mjs");
var Route$19 = createFileRoute("/back-to-school/")({
	head: () => seoHead("/back-to-school/"),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./cart.index-C_BmAgrX.mjs");
var Route$18 = createFileRoute("/cart/")({
	head: () => seoHead("/cart/"),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./checkout.index-CKJklDp-.mjs");
var Route$17 = createFileRoute("/checkout/")({
	head: () => seoHead("/checkout/"),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./contact.index-CtCzfTQ2.mjs");
var Route$16 = createFileRoute("/contact/")({
	head: () => seoHead("/contact/"),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./donate.index-CpUM50E7.mjs");
var Route$15 = createFileRoute("/donate/")({
	head: () => seoHead("/donate/"),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./hello-world.index-Bon1lCHL.mjs");
var Route$14 = createFileRoute("/hello-world/")({
	head: () => seoHead("/hello-world/"),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./live-stream.index-CG7oJ0xm.mjs");
var Route$13 = createFileRoute("/live-stream/")({
	head: () => seoHead("/live-stream/"),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./my-account.index-Dd4mdUX1.mjs");
var Route$12 = createFileRoute("/my-account/")({
	head: () => seoHead("/my-account/"),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./our-ministry.index-D4rMqAEw.mjs");
var Route$11 = createFileRoute("/our-ministry/")({
	head: () => seoHead("/our-ministry/"),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
/** Each ministry is: heading, paragraphs, buttons, plus one photo (the photos are listed in page order). */
var $$splitComponentImporter$10 = () => import("./ourstore.index-CnjowieD.mjs");
var Route$10 = createFileRoute("/ourstore/")({
	head: () => seoHead("/ourstore/"),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./prayer-of-salvation.index-BG-jclsp.mjs");
var Route$9 = createFileRoute("/prayer-of-salvation/")({
	head: () => seoHead("/prayer-of-salvation/"),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./prayer.index-CrddkrjH.mjs");
var Route$8 = createFileRoute("/prayer/")({
	head: () => seoHead("/prayer/"),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./sample-page.index-DTYKFNhe.mjs");
var Route$7 = createFileRoute("/sample-page/")({
	head: () => seoHead("/sample-page/"),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./sunday-special.index-Ca0Lw0YR.mjs");
var Route$6 = createFileRoute("/sunday-special/")({
	head: () => seoHead("/sunday-special/"),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./thank-you-page.index-alna0yZT.mjs");
var Route$5 = createFileRoute("/thank-you-page/")({
	head: () => seoHead("/thank-you-page/"),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./2023.10.index-PiicbSFx.mjs");
var Route$4 = createFileRoute("/2023/10/")({
	head: () => ({ meta: [{ title: "October 2023 - Christ Embassy Texas Virtual Church" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
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
var $$splitComponentImporter$3 = () => import("./category._slug.index-LkGI13O9.mjs");
var Route$3 = createFileRoute("/category/$slug/")({
	head: () => ({ meta: [{ title: "Uncategorized - Christ Embassy Texas Virtual Church" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./checkout.cancelled.index-CGONJ6cd.mjs");
var Route$2 = createFileRoute("/checkout/cancelled/")({
	head: () => ({ meta: [{ title: "Checkout cancelled - Christ Embassy Texas Virtual Church" }, {
		name: "robots",
		content: "noindex, follow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
/** Stripe sends customers here when they leave checkout without paying. */
var $$splitComponentImporter$1 = () => import("./checkout.success.index-CF3QcbQS.mjs");
var Route$1 = createFileRoute("/checkout/success/")({
	head: () => ({ meta: [{ title: "Thank you page - Christ Embassy Texas Virtual Church" }, {
		name: "robots",
		content: "noindex, follow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
/** Stripe sends customers here after a paid checkout. The text is the original "Thank you page". */
var $$splitComponentImporter = () => import("./product._slug.index-BNYroHhd.mjs");
var Route = createFileRoute("/product/$slug/")({
	loader: ({ params }) => {
		const product = getProduct(params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ params }) => seoHead(`/product/${params.slug}/`),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$21.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$22
	}),
	AboutLoveworldIndexRoute: Route$20.update({
		id: "/about-loveworld/",
		path: "/about-loveworld/",
		getParentRoute: () => Route$22
	}),
	BackToSchoolIndexRoute: Route$19.update({
		id: "/back-to-school/",
		path: "/back-to-school/",
		getParentRoute: () => Route$22
	}),
	CartIndexRoute: Route$18.update({
		id: "/cart/",
		path: "/cart/",
		getParentRoute: () => Route$22
	}),
	CheckoutIndexRoute: Route$17.update({
		id: "/checkout/",
		path: "/checkout/",
		getParentRoute: () => Route$22
	}),
	ContactIndexRoute: Route$16.update({
		id: "/contact/",
		path: "/contact/",
		getParentRoute: () => Route$22
	}),
	DonateIndexRoute: Route$15.update({
		id: "/donate/",
		path: "/donate/",
		getParentRoute: () => Route$22
	}),
	HelloWorldIndexRoute: Route$14.update({
		id: "/hello-world/",
		path: "/hello-world/",
		getParentRoute: () => Route$22
	}),
	LiveStreamIndexRoute: Route$13.update({
		id: "/live-stream/",
		path: "/live-stream/",
		getParentRoute: () => Route$22
	}),
	MyAccountIndexRoute: Route$12.update({
		id: "/my-account/",
		path: "/my-account/",
		getParentRoute: () => Route$22
	}),
	OurMinistryIndexRoute: Route$11.update({
		id: "/our-ministry/",
		path: "/our-ministry/",
		getParentRoute: () => Route$22
	}),
	OurstoreIndexRoute: Route$10.update({
		id: "/ourstore/",
		path: "/ourstore/",
		getParentRoute: () => Route$22
	}),
	PrayerOfSalvationIndexRoute: Route$9.update({
		id: "/prayer-of-salvation/",
		path: "/prayer-of-salvation/",
		getParentRoute: () => Route$22
	}),
	PrayerIndexRoute: Route$8.update({
		id: "/prayer/",
		path: "/prayer/",
		getParentRoute: () => Route$22
	}),
	SamplePageIndexRoute: Route$7.update({
		id: "/sample-page/",
		path: "/sample-page/",
		getParentRoute: () => Route$22
	}),
	SundaySpecialIndexRoute: Route$6.update({
		id: "/sunday-special/",
		path: "/sunday-special/",
		getParentRoute: () => Route$22
	}),
	ThankYouPageIndexRoute: Route$5.update({
		id: "/thank-you-page/",
		path: "/thank-you-page/",
		getParentRoute: () => Route$22
	}),
	R202310IndexRoute: Route$4.update({
		id: "/2023/10/",
		path: "/2023/10/",
		getParentRoute: () => Route$22
	}),
	CategorySlugIndexRoute: Route$3.update({
		id: "/category/$slug/",
		path: "/category/$slug/",
		getParentRoute: () => Route$22
	}),
	CheckoutCancelledIndexRoute: Route$2.update({
		id: "/checkout/cancelled/",
		path: "/checkout/cancelled/",
		getParentRoute: () => Route$22
	}),
	CheckoutSuccessIndexRoute: Route$1.update({
		id: "/checkout/success/",
		path: "/checkout/success/",
		getParentRoute: () => Route$22
	}),
	ProductSlugIndexRoute: Route.update({
		id: "/product/$slug/",
		path: "/product/$slug/",
		getParentRoute: () => Route$22
	})
};
var routeTree = Route$22._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		trailingSlash: "always",
		defaultPreloadStaleTime: 0
	});
};
export { submitForm as a, useCart as c, supabase as d, PRODUCTS as f, SuccessModal as i, callFunction as l, getProduct as m, Route as n, validateFields as o, formatPrice as p, ArchivePage as r, SITE as s, router_exports as t, isSupabaseConfigured as u };
