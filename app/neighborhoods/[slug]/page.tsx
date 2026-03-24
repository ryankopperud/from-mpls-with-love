import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllNeighborhoods,
  getNeighborhoodBySlug,
  slugify,
} from "@/lib/neighborhoods";
import NeighborhoodMap from "@/components/NeighborhoodMap";

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

  return {
    title: `${neighborhood.properties.BDNAME} | From MPLS With Love`,
    description: `Explore the ${neighborhood.properties.BDNAME} neighborhood in Minneapolis.`,
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

  const { BDNAME } = neighborhood.properties;
  const geojsonFeature = JSON.parse(JSON.stringify(neighborhood));

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
