import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllNeighborhoods,
  getNeighborhoodBySlug,
  slugify,
} from "@/lib/neighborhoods";
import { getGuide, getPublishedSlugs } from "@/lib/content-loader";
import NeighborhoodMap from "@/components/NeighborhoodMap";
import StickyToc from "@/components/StickyToc";
import {
  ArticleSection,
  StatsBox,
  FaqSection,
  ClosingSection,
  CtaBlock,
} from "@/components/NeighborhoodArticle";
import {
  generateFaqSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
  renderJsonLd,
} from "@/lib/schema";

const BASE_URL = "https://mplswithlove.com";

export async function generateStaticParams() {
  return getAllNeighborhoods().map((f) => ({
    slug: slugify(f.properties.BDNAME),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);
  if (!neighborhood) return { title: "Not Found" };

  const guide = await getGuide(slug);
  const isPublished = !!guide;

  if (guide) {
    return {
      title: guide.data.meta.title,
      description: guide.data.meta.description,
      openGraph: {
        title: guide.data.meta.title,
        description: guide.data.meta.description,
        url: `${BASE_URL}/neighborhoods/${slug}`,
        type: "article",
      },
    };
  }

  return {
    title: `${neighborhood.properties.BDNAME}`,
    description: `Explore the ${neighborhood.properties.BDNAME} neighborhood in Minneapolis.`,
    robots: isPublished ? undefined : { index: false, follow: true },
  };
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);

  if (!neighborhood) {
    notFound();
  }

  const guide = await getGuide(slug);
  const { BDNAME } = neighborhood.properties;
  const geojsonFeature = JSON.parse(JSON.stringify(neighborhood));

  // ── Published guide: full article template ──
  if (guide) {
    const { data, Content } = guide;

    const jsonLd = renderJsonLd([
      generateArticleSchema({
        title: data.meta.title,
        description: data.meta.description,
        url: `${BASE_URL}/neighborhoods/${slug}`,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        authorName: "From MPLS With Love",
        publisherName: "From MPLS With Love",
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: BASE_URL },
        { name: "Neighborhoods", url: `${BASE_URL}/neighborhoods` },
        { name: `${BDNAME}, Minneapolis`, url: `${BASE_URL}/neighborhoods/${slug}` },
      ]),
      generateFaqSchema(data.faq),
    ]);

    return (
      <main className="flex-1 bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 pt-16">
          <Link
            href="/neighborhoods"
            className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-[#71717a] hover:text-[#2a9d8f] transition-colors flex items-center gap-2 mb-12"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            All Neighborhoods
          </Link>

          <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
            {data.kicker}
          </p>
          <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
            {data.headline}
          </h1>

          <div className="mb-14 h-[450px] bg-[#f5f5f5] overflow-hidden">
            <NeighborhoodMap geojson={geojsonFeature} name={BDNAME} />
          </div>
        </div>

        {/* Two-column: sticky TOC + article */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
            <StickyToc items={data.toc} />

            <div className="max-w-3xl">
              {/* Deck + last updated */}
              <div className="mb-14">
                <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
                  {data.deck}
                </p>
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717a] pt-5 border-t border-[#e4e4e7]">
                  {data.lastUpdated}
                </p>
              </div>

              {/* Article content from content file */}
              <Content />

              {/* CTA Block */}
              <CtaBlock nearbyNeighborhoods={data.nearby} />
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ── Unpublished: placeholder page ──
  return (
    <main className="flex-1 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <Link
          href="/neighborhoods"
          className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-[#71717a] hover:text-[#2a9d8f] transition-colors flex items-center gap-2 mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          All Neighborhoods
        </Link>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Neighborhood
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-12 leading-[0.95]">
          {BDNAME}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#f5f5f5] h-[450px] overflow-hidden">
            <NeighborhoodMap geojson={geojsonFeature} name={BDNAME} />
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-4 border-b border-[#0a0a0a]">
                About
              </h2>
              <p className="text-[#71717a] leading-relaxed font-light">
                Content coming soon. This page will feature local highlights,
                history, restaurants, parks, and community information for the{" "}
                {BDNAME} neighborhood.
              </p>
            </div>

            <div>
              <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-4 border-b border-[#0a0a0a]">
                Quick Facts
              </h2>
              <dl>
                <div>
                  <dt className="text-[0.68rem] tracking-[0.15em] uppercase text-[#71717a] mb-1">
                    Area
                  </dt>
                  <dd className="text-2xl font-black text-[#0a0a0a]">
                    {(neighborhood.properties.Shape__Area / 27878400).toFixed(2)}{" "}
                    <span className="text-sm font-normal text-[#71717a]">sq mi</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
