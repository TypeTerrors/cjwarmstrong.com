import type { MetadataRoute } from "next";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cjwarmstrong.com"
).replace(/\/$/, "");

const routes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/books", priority: 0.8 },
  { path: "/series", priority: 0.7 },
  { path: "/mailing-list", priority: 0.7 },
  { path: "/contact", priority: 0.5 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
