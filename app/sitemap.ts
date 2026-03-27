import type { MetadataRoute } from "next";
import { getPublishedSlugs } from "@/lib/content-loader";
import { COMMUNITIES } from "@/lib/communities";

const BASE_URL = "https://mplswithlove.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedSlugs = getPublishedSlugs();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/map`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/neighborhoods`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/guides/moving-to-minneapolis`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guides/best-neighborhoods`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/guides/most-walkable-neighborhoods`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Only include published neighborhood guides in the sitemap
  const neighborhoodPages: MetadataRoute.Sitemap = publishedSlugs.map(
    (slug) => ({
      url: `${BASE_URL}/neighborhoods/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  const slugify = (name: string) =>
    name.toLowerCase().replace(/['']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const communityPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/communities`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...COMMUNITIES.map((c) => ({
      url: `${BASE_URL}/communities/${slugify(c.name)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...staticPages, ...neighborhoodPages, ...communityPages];
}
