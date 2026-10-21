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
export const STREAM = {
  embedUrl: (import.meta.env["VITE_LIVESTREAM_EMBED_URL"] as string | undefined) ?? "",
  livePlatformUrl: "https://live.christembassytexasvirtualchurch.com/",
} as const;
