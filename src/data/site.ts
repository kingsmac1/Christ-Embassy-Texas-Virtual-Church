/** Church details and navigation. Everything here comes from the WordPress site. */
export const SITE = {
  name: "Christ Embassy Texas Virtual Church",
  domain: "https://christembassytexasvirtualchurch.com",
  addressLines: ["Christ Embassy Wilcrest", "6111A Wilcrest Drive , Houston TX 77072"],
  address: "Christ Embassy Wilcrest 6111A Wilcrest Drive , Houston TX 77072",
  phone: "281-965-8970",
  phoneHref: "tel:281-965-8970",
  email: "contact@christembassytexasvirtualchurch.com",
  donateUrl: "https://donate.stripe.com/28o9C80ZUbBVaLSaEE",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Loveworld", to: "/about-loveworld/" },
  { label: "Our Ministry", to: "/our-ministry/" },
  { label: "Contact", to: "/contact/" },
  { label: "Live Stream", to: "/live-stream/" },
  { label: "Store", to: "/ourstore/" },
  { label: "Donate", to: "/donate/" },
] as const;

export const FOOTER_LINKS = [
  { label: "Our Ministry", to: "/our-ministry/" },
  { label: "Live Streaming", to: "/live-stream/" },
  { label: "Contact", to: "/contact/" },
  { label: "Shop", to: "/ourstore/" },
  { label: "Donate", to: "/donate/" },
] as const;

export const SHARED_META = {
  siteName: "Christ Embassy Texas Virtual Church",
  ogImage: "/favicon-512.png",
} as const;
