import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Minneapolis Guides",
  description:
    "Curated guides to Minneapolis — best neighborhoods, most walkable areas, family-friendly picks, and more. Honest, in-depth, written by locals.",
};

const guides = [
  {
    slug: "best-neighborhoods",
    title: "Best Neighborhoods in Minneapolis (2026)",
    description:
      "The 10 best neighborhoods in Minneapolis, ranked and explained — with honest assessments of who each one is actually best for.",
    category: "Neighborhoods",
  },
  {
    slug: "most-walkable-neighborhoods",
    title: "Most Walkable Neighborhoods in Minneapolis",
    description:
      "The neighborhoods where you can ditch the car — ranked by Walk Score, transit access, and what's actually within walking distance.",
    category: "Neighborhoods",
  },
];

export default function GuidesPage() {
  return (
    <main className="flex-1 bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          From MPLS With Love
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-6 leading-[0.95]">
          Guides
        </h1>
        <p className="text-lg text-[#71717a] leading-relaxed font-light mb-14 max-w-2xl">
          Curated, cross-neighborhood guides to help you understand Minneapolis
          — whether you&apos;re moving here, exploring, or just curious about
          what makes this city work.
        </p>

        <div className="space-y-8">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block group border-b border-[#e4e4e7] pb-8"
            >
              <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-2">
                {guide.category}
              </p>
              <h2 className="text-xl font-bold text-[#0a0a0a] group-hover:text-[#2a9d8f] transition-colors mb-2">
                {guide.title}
              </h2>
              <p className="text-[15px] text-[#71717a] leading-relaxed">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#f5f5f5] p-8">
          <h2 className="text-lg font-bold text-[#0a0a0a] mb-2">
            Looking for a specific neighborhood?
          </h2>
          <p className="text-[15px] text-[#71717a] mb-4">
            We write in-depth guides to individual Minneapolis neighborhoods —
            history, restaurants, real estate, schools, and the honest version.
          </p>
          <Link
            href="/neighborhoods"
            className="text-[#2a9d8f] font-semibold text-sm hover:underline"
          >
            Browse all neighborhood guides →
          </Link>
        </div>
      </div>
    </main>
  );
}
