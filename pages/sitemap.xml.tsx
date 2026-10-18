import type { GetServerSideProps } from "next";
import blogData from "../blogPosts.json";
import { absoluteUrl, toIsoDate } from "../lib/seo";

type SitemapEntry = {
  path: string;
  lastmod?: string;
  changefreq: string;
  priority: string;
};

const buildSitemap = (entries: SitemapEntry[]) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    ({ path, lastmod, changefreq, priority }) => `  <url>
    <loc>${absoluteUrl(path)}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = blogData.blogPosts;
  const latestPost = posts
    .map((post) => toIsoDate(post.date))
    .filter(Boolean)
    .sort()
    .pop();

  const entries: SitemapEntry[] = [
    { path: "/", changefreq: "monthly", priority: "1.0" },
    { path: "/blog", lastmod: latestPost, changefreq: "weekly", priority: "0.8" },
    { path: "/resume.pdf", changefreq: "monthly", priority: "0.8" },
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      lastmod: toIsoDate(post.date),
      changefreq: "yearly",
      priority: "0.64",
    })),
  ];

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=86400"
  );
  res.write(buildSitemap(entries));
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
