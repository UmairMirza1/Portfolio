import type { MetadataRoute } from "next";
import { siteUrl, featuredWork } from "@/data/contentConfig";
import { posts } from "@/data/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/writing/",
    ...featuredWork.filter((w) => w.caseStudy).map((w) => `/work/${w.slug}/`),
    ...posts.map((p) => `/writing/${p.slug}/`),
  ];
  return paths.map((path) => ({ url: `${siteUrl}${path}` }));
}
