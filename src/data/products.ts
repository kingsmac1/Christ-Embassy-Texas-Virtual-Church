/**
 * Store products, exported from the WordPress/WooCommerce store.
 * Prices are in cents (USD). Fill in `stripePriceId` (price_...) once the
 * products are created in Stripe; until then checkout uses the server-side
 * catalog price. All current products are simple (no variations).
 */
export type ProductVariation = { id: string; label: string; priceCents: number; stripePriceId: string };

export type Product = {
  name: string;
  slug: string;
  priceCents: number;
  regularPriceCents: number;
  images: string[];
  /** Product description exactly as written on WordPress (HTML). */
  description: string;
  variations: ProductVariation[];
  stripePriceId: string;
  /** Slugs of the "Related products" shown on the original product page. */
  related: string[];
};

export const PRODUCTS: Product[] = [
  {
    "name": "7 THINGS THE HOLY SPIRIT WILL DO FOR YOU",
    "slug": "7-things-the-holy-spirit-will-do-for-you",
    "priceCents": 2200,
    "regularPriceCents": 2800,
    "images": [
      "/images/2023__12__7-THINGS-THE-HOLY-SPIRIT-WILL-DO-FOR-YOU-2.png"
    ],
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
    "images": [
      "/images/2023__12__7-THINGS-THE-HOLY-SPIRIT-WILL-DO-IN-YOU-1.png"
    ],
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
    "priceCents": 2000,
    "regularPriceCents": 2800,
    "images": [
      "/images/2023__12__DONT-STOP-HERE-1.png"
    ],
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
    "priceCents": 1000,
    "regularPriceCents": 1800,
    "images": [
      "/images/2023__12__FAITH-PROCLAIMATIONS-OF-HEALTH-AND-HEALING-1.png"
    ],
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
    "regularPriceCents": 3000,
    "images": [
      "/images/2023__12__HOW-TO-MAKE-YOUR-FAITH-WORK-1.png"
    ],
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
    "images": [
      "/images/2023__12__HOW-TO-PRAY-EFFECTIVELY-1.png"
    ],
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
    "regularPriceCents": 3000,
    "images": [
      "/images/2023__12__HOW-TO-RECEIVE-A-MIRACLE-AND-RETAIN-IT-1.png"
    ],
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
    "regularPriceCents": 3000,
    "images": [
      "/images/2023__12__JOIN-THIS-CHARIOT-1.png"
    ],
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
    "regularPriceCents": 3000,
    "images": [
      "/images/2023__12__NONE-OF-THESE-DISEASES-1.png"
    ],
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
    "priceCents": 1000,
    "regularPriceCents": 1800,
    "images": [
      "/images/2023__12__NOW-THAT-YOU-ARE-BORN-AGAIN.png"
    ],
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
    "images": [
      "/images/2023__12__PRAYING-THE-RIGHT-WAY-1.png"
    ],
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
    "regularPriceCents": 3000,
    "images": [
      "/images/2023__12__PROPHESY-UNDERSTANDING-THE-POWER-THAT-CONTROLS-THE-FUTURE-1.png"
    ],
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
    "images": [
      "/images/2023__12__RHAPSODY-OF-REALITIES-DAILY-DEVOTIONAL-1.png"
    ],
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
    "images": [
      "/images/2023__12__RHAPSODY-OF-REALITIES-TEEVO-1.png"
    ],
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
    "images": [
      "/images/2023__12__RHAPSODY-OF-REALITIES-TEEVO-BIBLE-FOR-TEENAGERS-1.png"
    ],
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
    "priceCents": 3000,
    "regularPriceCents": 4500,
    "images": [
      "/images/2023__12__RHAPSODY-OF-REALITIES-TOPICAL-COMPENDIUM-VOLUME-5-1.png"
    ],
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
    "priceCents": 2000,
    "regularPriceCents": 2800,
    "images": [
      "/images/2023__12__THE-GATES-OF-ZION-1.png"
    ],
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
    "regularPriceCents": 3000,
    "images": [
      "/images/2023__12__THE-HOLY-SPIRIT-AND-YOU-1.png"
    ],
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
    "regularPriceCents": 3000,
    "images": [
      "/images/2023__12__THE-OIL-AND-THE-MANTLE-1.png"
    ],
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
    "priceCents": 1000,
    "regularPriceCents": 1800,
    "images": [
      "/images/2023__12__THE-POWER-OF-TONGUES-1.png"
    ],
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
    "regularPriceCents": 3000,
    "images": [
      "/images/2023__12__THE-POWER-OF-YOUR-MIND-1.png"
    ],
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
    "regularPriceCents": 3000,
    "images": [
      "/images/2023__12__THE-RHAPSODY-OF-REALITIES-DEVOTIONAL-STUDY-BIBLE-1.png"
    ],
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
    "regularPriceCents": 3000,
    "images": [
      "/images/2023__12__THE-SEVEN-SPIRITS-OF-GOD-1.png"
    ],
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
    "regularPriceCents": 3000,
    "images": [
      "/images/2023__12__WHEN-GOD-VISITS-YOU-1.png"
    ],
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
    "images": [
      "/images/2023__12__YOUR-RIGHTS-IN-CHRIST-1.png"
    ],
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

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);

export const formatPrice = (cents: number) => `$${(cents / 100).toFixed(2)}`;
