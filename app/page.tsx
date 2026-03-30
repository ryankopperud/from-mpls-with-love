import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    absolute: "From MPLS With Love — Minneapolis Neighborhood Guide",
  },
  description:
    "The most in-depth guide to every neighborhood in Minneapolis. Explore interactive maps, honest guides, and neighborhood sign art for all 87 neighborhoods.",
  alternates: {
    canonical: "/",
  },
};

const FEATURED_GUIDES = [
  {
    slug: "north-loop",
    name: "North Loop",
    tag: "Most Walkable",
    description:
      "Warehouse lofts, James Beard restaurants, and the best Walk Score in Minneapolis. The city's premier food-and-nightlife district, steps from the riverfront.",
    image: "/images/neighborhoods/north-loop-walkway-bike-share-evening.webp",
    imageAlt:
      "Evening view of the North Loop walkway with bike share stations and warm lighting",
  },
  {
    slug: "whittier",
    name: "Whittier",
    tag: "Most Interesting",
    description:
      "Eat Street, MIA, genuine diversity, and the densest restaurant scene in the state. Where culture, affordability, and urban density actually coexist.",
    image: "/images/food/aster-cafe-st-anthony-main-summer.webp",
    imageAlt:
      "Aster Cafe on St. Anthony Main in summer, representing the diverse Minneapolis food scene",
  },
  {
    slug: "fulton",
    name: "Fulton",
    tag: "Best for Families",
    description:
      "Lake Harriet, Craftsman bungalows, strong schools, and the quiet life done right. A top pick for families who want lake access and residential calm.",
    image: "/images/lakes/sailboats-minneapolis-lake-pink-dusk.webp",
    imageAlt:
      "Sailboats on a Minneapolis lake at pink dusk, capturing Fulton's lakeside lifestyle",
  },
  {
    slug: "logan-park",
    name: "Logan Park",
    tag: "Most Creative",
    description:
      "Art-A-Whirl, Northrup King studios, the brewery district, and the heart of Nordeast. Where old-world Eastern European roots meet the city's creative class.",
    image: "/images/architecture/grain-belt-beer-sign-northeast.webp",
    imageAlt:
      "The iconic Grain Belt beer sign in Northeast Minneapolis at night",
  },
  {
    slug: "powderhorn-park",
    name: "Powderhorn Park",
    tag: "Most Authentic",
    description:
      "MayDay Parade, the lake as commons, radical community, and the real Minneapolis. Politically engaged, culturally diverse, and rebuilding after 2020.",
    image: "/images/parks/spoonbridge-cherry-sculpture-garden-winter.webp",
    imageAlt:
      "The Spoonbridge and Cherry sculpture in the Minneapolis Sculpture Garden during winter",
  },
  {
    slug: "longfellow",
    name: "Longfellow",
    tag: "Best Value",
    description:
      "Minnehaha Falls, the Greenway, rebuilding after 2020, and the most underpriced location in the city. Great biking, river access, and strong community roots.",
    image: "/images/parks/minnehaha-falls-summer-lush.webp",
    imageAlt:
      "Minnehaha Falls surrounded by lush summer greenery in the Longfellow neighborhood",
  },
];

const EDITORIAL_LINKS = [
  {
    href: "/guides/moving-to-minneapolis",
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
  return (
    <div className="flex-1 bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/stone-arch-bridge-st-anthony-falls-golden-hour.webp"
            alt="The Stone Arch Bridge and St. Anthony Falls bathed in golden hour light over the Mississippi River in Minneapolis"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-[#0a0a0a]/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-28 lg:pt-32 lg:pb-36">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-6">
              Minneapolis Neighborhood Guide
            </p>
            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.9] tracking-[-0.03em] text-white mb-8">
              From MPLS
              <br />
              With Love
            </h1>
            <p className="text-lg text-white/80 max-w-lg leading-relaxed mb-12 font-light">
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
                className="inline-flex items-center px-8 py-4 text-[0.75rem] font-semibold tracking-[0.15em] uppercase border border-white/40 text-white hover:border-white transition-colors"
              >
                All Neighborhoods
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Guides ── */}
      <section className="bg-[#fafafa] border-t border-[#e4e4e7]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-4">
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
              View all guides &rarr;
            </Link>
          </div>
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-12 max-w-3xl">
            Whether you&apos;re moving to Minneapolis, exploring a new part of
            the city, or trying to decide between two neighborhoods, these six
            guides are where most readers begin. Each covers the history, the
            housing market, the restaurants, and the honest tradeoffs of living
            there.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                href={`/neighborhoods/${guide.slug}`}
                className="group bg-white border border-[#e4e4e7] hover:border-[#2a9d8f] transition-colors overflow-hidden"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.imageAlt}
                    width={800}
                    height={450}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[0.6rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-2">
                    {guide.tag}
                  </p>
                  <h3 className="text-xl font-bold text-[#0a0a0a] group-hover:text-[#2a9d8f] transition-colors mb-2">
                    {guide.name}
                  </h3>
                  <p className="text-sm text-[#71717a] leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="sm:hidden mt-8 text-center">
            <Link
              href="/neighborhoods"
              className="text-sm font-semibold text-[#2a9d8f] hover:underline"
            >
              View all guides &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
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
            <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
              Minneapolis has 87 officially defined neighborhoods, each with its
              own sign, its own character, and its own argument about what this
              city really is. We&apos;re documenting all of them.
            </p>
            <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
              This site is built for people making real decisions &mdash;
              where to move, where to rent, which neighborhood fits the way
              you actually live. Maybe you need to be close to good schools in
              Southwest. Maybe you want the restaurant density of Whittier or
              the brewery culture of Northeast. Maybe you want a house with
              a yard near a lake without spending $600K. We write the guides
              that answer those questions with specifics, not slogans.
            </p>
            <p className="text-lg text-[#71717a] leading-relaxed font-light">
              Beyond individual neighborhoods, we publish city-wide guides
              comparing Minneapolis neighborhoods by walkability, safety,
              affordability, food, nightlife, parks, transit access, and
              more &mdash; plus a complete guide to moving to Minneapolis for
              people coming from out of state. Every guide is free, with no
              gated content and no real estate agenda.
            </p>
          </div>
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/fall/residential-street-fall-foliage-canopy.webp"
              alt="A classic Minneapolis residential street lined with mature trees in full autumn color, golden and orange foliage forming a canopy over the road"
              width={1200}
              height={675}
              className="object-cover w-full h-full"
            />
          </div>
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
            <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
              Explore every neighborhood in Minneapolis on our interactive map.
              Click any neighborhood to see its boundaries, read its guide, and
              understand where it sits in the city.
            </p>
            <p className="text-lg text-[#71717a] leading-relaxed font-light mb-8">
              The map shows all 87 official neighborhood boundaries, organized
              across 11 community areas from the North Loop downtown to the
              residential streets of Nokomis in the south. Hover to see
              neighborhood names, click to jump directly to the full guide.
              It&apos;s the fastest way to understand how Minneapolis is
              organized and find the neighborhood that fits what you&apos;re
              looking for.
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
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/hero/minneapolis-skyline-above-tree-canopy-golden-hour.webp"
              alt="The Minneapolis skyline rising above a lush tree canopy during golden hour, inviting exploration of the city's neighborhoods"
              width={1200}
              height={675}
              className="object-cover w-full h-full"
            />
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
