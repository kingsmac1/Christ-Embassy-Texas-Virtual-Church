/** SEO title, description, keywords and Open Graph tags copied from the WordPress (Yoast) pages. */
export type SeoMeta = { name?: string; property?: string; content: string };
export type PageSeo = { title: string; canonical: string | null; meta: SeoMeta[]; jsonld: string | null };

export const SEO: Record<string, PageSeo> = {
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
        "content": "Join This Chariot’ is a classic on soul wining that motivates the believer to effective evangelism and teaches him practical steps to reaching his world with the gospel of Jesus Christ."
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
        "content": "Rhapsody of Realities is a Christian daily devotional publication by Pastor Chris Oyakhilome. It was first published January 2001 in English language and by August 2022, it was reported to have over 8,123 languages. In 2011, it distributed 2 million copies each month globally. No other material in human history has been translated into every living language. […]"
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
        "content": "TeeVo Rhapsody of Realities is a daily devotional for teenagers. It is designed to inspire, encourage and strengthen you by providing you answer-from the perspective of God’s Word-to question of critical concern. Teevo helps you discover your true purpose and programs you for a life of out-and-out success."
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

export function seoHead(path: string) {
  const s = SEO[path];
  if (!s) return {};
  return {
    meta: [{ title: s.title }, ...s.meta],
    links: s.canonical ? [{ rel: "canonical", href: s.canonical }] : [],
    scripts: s.jsonld ? [{ type: "application/ld+json", children: s.jsonld }] : [],
  };
}
