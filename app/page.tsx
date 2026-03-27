import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getPublishedSlugs } from "@/lib/content-loader";

export const metadata: Metadata = {
  title: {
    absolute: "From MPLS With Love — Minneapolis Neighborhood Guide",
  },
  description:
    "The most in-depth guide to every neighborhood in Minneapolis. Explore interactive maps, honest guides, and neighborhood sign art for all 87 neighborhoods.",
};

const FEATURED_GUIDES = [
  {
    slug: "north-loop",
    name: "North Loop",
    tag: "Most Walkable",
    description:
      "Warehouse lofts, James Beard restaurants, and the best Walk Score in Minneapolis.",
  },
  {
    slug: "whittier",
    name: "Whittier",
    tag: "Most Interesting",
    description:
      "Eat Street, MIA, genuine diversity, and the densest restaurant scene in the state.",
  },
  {
    slug: "fulton",
    name: "Fulton",
    tag: "Best for Families",
    description:
      "Lake Harriet, Craftsman bungalows, strong schools, and the quiet life done right.",
  },
  {
    slug: "logan-park",
    name: "Logan Park",
    tag: "Most Creative",
    description:
      "Art-A-Whirl, Northrup King studios, the brewery district, and the heart of Nordeast.",
  },
  {
    slug: "powderhorn-park",
    name: "Powderhorn Park",
    tag: "Most Authentic",
    description:
      "MayDay Parade, the lake as commons, radical community, and the real Minneapolis.",
  },
  {
    slug: "longfellow",
    name: "Longfellow",
    tag: "Best Value",
    description:
      "Minnehaha Falls, the Greenway, rebuilding after 2020, and the most underpriced location in the city.",
  },
];

const EDITORIAL_LINKS = [
  {
    href: "/moving-to-minneapolis",
    title: "Moving to Minneapolis",
    description:
      "Everything you need to know — cost of living, weather, jobs, schools, and what no one tells you.",
  },
  {
    href: "/guides/best-neighborhoods",
    title: "Best Neighborhoods in Minneapolis",
    description:
      "The top 10, ranked and explained — who each one is actually best for.",
  },
  {
    href: "/guides/most-walkable-neighborhoods",
    title: "Most Walkable Neighborhoods",
    description:
      "Walk Scores, Bike Scores, and the honest truth about car-free living.",
  },
];

export default function Home() {
  const publishedCount = getPublishedSlugs().length;

  return (
    <div className="flex-1 bg-white">
      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-6">
            Minneapolis Neighborhood Guide
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.9] tracking-[-0.03em] text-[#0a0a0a] mb-8">
            From MPLS
            <br />
            With Love
          </h1>
          <p className="text-lg text-[#71717a] max-w-lg leading-relaxed mb-12 font-light">
            Every Minneapolis neighborhood has a name, a sign, and a
            story. We&apos;re writing them down.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/map"
              className="inline-flex items-center gap-3 bg-[#2a9d8f] text-white px-8 py-4 text-[0.75rem] font-semibold tracking-[0.15em] uppercase hover:bg-[#264653] transition-colors"
            >
              Explore the Map
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/neighborhoods"
              className="inline-flex items-center px-8 py-4 text-[0.75rem] font-semibold tracking-[0.15em] uppercase border border-[#e4e4e7] text-[#0a0a0a] hover:border-[#0a0a0a] transition-colors"
            >
              All Neighborhoods
            </Link>
          </div>
        </div>
        <div className="relative h-[500px] w-full grayscale">
          <Image
            src="/mpls-aerial.jpg"
            alt="Aerial view of downtown Minneapolis skyline and the Mississippi River"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* ── Featured Guides ── */}
      <section className="bg-[#fafafa] border-t border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-3">
                Featured Guides
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.02em] text-[#0a0a0a]">
                Start Here
              </h2>
            </div>
            <Link
              href="/neighborhoods"
              className="hidden sm:inline-flex text-sm font-semibold text-[#2a9d8f] hover:underline"
            >
              View all {publishedCount}&nbsp;guides &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                href={`/neighborhoods/${guide.slug}`}
                className="group bg-white border border-[#e4e4e7] p-6 hover:border-[#2a9d8f] transition-colors"
              >
                <p className="text-[0.6rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-2">
                  {guide.tag}
                </p>
                <h3 className="text-xl font-bold text-[#0a0a0a] group-hover:text-[#2a9d8f] transition-colors mb-2">
                  {guide.name}
                </h3>
                <p className="text-sm text-[#71717a] leading-relaxed">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="sm:hidden mt-8 text-center">
            <Link
              href="/neighborhoods"
              className="text-sm font-semibold text-[#2a9d8f] hover:underline"
            >
              View all {publishedCount}&nbsp;guides &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-3">
            What This Is
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.02em] text-[#0a0a0a] mb-6">
            Not a real estate listing. Not a Chamber of Commerce brochure.
          </h2>
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Every neighborhood guide is thousands of words of honest, specific,
            deeply researched writing about what it&apos;s actually like to live
            in that neighborhood. We cover the history, the restaurants, the
            schools, the real estate &mdash; and the stuff no one else writes
            about: the tensions, the changes, the problems, and the things that
            make a neighborhood genuinely worth choosing.
          </p>
          <p className="text-lg text-[#71717a] leading-relaxed font-light">
            Minneapolis has 87 officially defined neighborhoods, each with its
            own sign, its own character, and its own argument about what this
            city really is. We&apos;re documenting all of them.
          </p>
        </div>
      </section>

      {/* ── Editorial Content ── */}
      <section className="bg-[#264653]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-3">
            Guides
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.02em] text-white mb-12">
            Beyond the Neighborhoods
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDITORIAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group border border-white/20 p-6 hover:border-[#2a9d8f] transition-colors"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-[#2a9d8f] transition-colors mb-2">
                  {link.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {link.description}
                </p>
                <span className="inline-block mt-4 text-sm font-semibold text-[#2a9d8f]">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map CTA ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-3">
              Interactive Map
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.02em] text-[#0a0a0a] mb-6">
              87 neighborhoods. One map.
            </h2>
            <p className="text-lg text-[#71717a] leading-relaxed font-light mb-8">
              Explore every neighborhood in Minneapolis on our interactive map.
              Click any neighborhood to see its boundaries, read its guide, and
              understand where it sits in the city.
            </p>
            <Link
              href="/map"
              className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white px-8 py-4 text-[0.75rem] font-semibold tracking-[0.15em] uppercase hover:bg-[#2a9d8f] transition-colors"
            >
              Open the Map
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="bg-[#f5f5f5] h-[350px] flex items-center justify-center">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2a9d8f"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-4"
              >
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                <line x1="9" x2="9" y1="3" y2="18" />
                <line x1="15" x2="15" y1="6" y2="21" />
              </svg>
              <p className="text-sm text-[#71717a]">
                Interactive neighborhood map
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="bg-[#fafafa] border-t border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-3">
              Newsletter
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.02em] text-[#0a0a0a] mb-4">
              New neighborhoods, delivered.
            </h2>
            <p className="text-lg text-[#71717a] leading-relaxed font-light mb-8">
              We publish new neighborhood guides regularly. Get them in your
              inbox &mdash; plus city updates, seasonal guides, and the
              occasional strong opinion about where to eat.
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 border border-[#e4e4e7] px-4 py-3 text-sm focus:outline-none focus:border-[#2a9d8f] transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-[#2a9d8f] text-white px-6 py-3 text-[0.75rem] font-semibold tracking-[0.1em] uppercase hover:bg-[#264653] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
