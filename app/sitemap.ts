import type { MetadataRoute } from "next";
import { getPublishedSlugs, getGuide } from "@/lib/content-loader";
import { COMMUNITIES } from "@/lib/communities";

const BASE_URL = "https://mplswithlove.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const publishedSlugs = getPublishedSlugs();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: "2026-03-26",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/map`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/neighborhoods`,
      lastModified: "2026-03-26",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/guides/moving-to-minneapolis`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: "2026-03-26",
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guides/best-neighborhoods`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/guides/most-walkable-neighborhoods`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/safest-neighborhoods`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/most-affordable-neighborhoods`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/most-underrated-neighborhoods`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guides/most-bikeable-neighborhoods`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/best-neighborhoods-for-families`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/guides/best-neighborhoods-for-young-professionals`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/best-neighborhoods-for-renters`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/best-neighborhoods-for-first-time-homebuyers`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/best-neighborhoods-for-retirees`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guides/best-neighborhoods-for-remote-workers`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guides/best-neighborhoods-for-dog-owners`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guides/best-neighborhoods-for-artists`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guides/best-neighborhoods-for-schools`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/best-neighborhoods-for-public-transit`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/best-neighborhoods-near-downtown`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guides/best-neighborhoods-near-the-lakes`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/best-food-neighborhoods`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/best-breweries-by-neighborhood`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guides/best-coffee-shops-by-neighborhood`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guides/best-patios-outdoor-dining`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guides/best-neighborhoods-for-nightlife`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guides/best-parks-by-neighborhood`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guides/best-winter-neighborhoods`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guides/history-of-minneapolis-neighborhood-signs`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/minneapolis-vs-st-paul`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // Load each guide to get its real dateModified
  const neighborhoodPages: MetadataRoute.Sitemap = await Promise.all(
    publishedSlugs.map(async (slug) => {
      const guide = await getGuide(slug);
      return {
        url: `${BASE_URL}/neighborhoods/${slug}`,
        lastModified: guide?.data.dateModified ?? "2026-03-01",
        changeFrequency: "monthly" as const,
        priority: 0.8,
      };
    })
  );

  const slugify = (name: string) =>
    name.toLowerCase().replace(/['']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const communityPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/communities`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...COMMUNITIES.map((c) => ({
      url: `${BASE_URL}/communities/${slugify(c.name)}`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...staticPages, ...neighborhoodPages, ...communityPages];
}
