// The apex domain 307-redirects to www, so www is the canonical origin.
export const SITE_URL = "https://www.abdullahesha.me";
export const SITE_NAME = "Abdullah Esha";
export const TWITTER_HANDLE = "@shahria72632736";
export const DEFAULT_IMAGE = "/abdullah-circle.png";

export const absoluteUrl = (path = "/") =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

export const stripHtml = (html: string) =>
  html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

export const excerpt = (html: string, length = 160) => {
  const text = stripHtml(html);
  return text.length > length ? `${text.substring(0, length - 1).trimEnd()}…` : text;
};

// Returns YYYY-MM-DD independent of timezone so server and client render the same value.
export const toIsoDate = (date: string) => {
  const parsed = new Date(date);
  if (isNaN(parsed.getTime())) return undefined;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${parsed.getFullYear()}-${pad(parsed.getMonth() + 1)}-${pad(parsed.getDate())}`;
};
