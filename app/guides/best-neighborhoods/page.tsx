import type { Metadata } from "next";
import Link from "next/link";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  renderJsonLd,
} from "@/lib/schema";
import Image from "next/image";

const BASE_URL = "https://mplswithlove.com";

export const metadata: Metadata = {
  title: "10 Best Neighborhoods in Minneapolis (2026)",
  description:
    "The best neighborhoods in Minneapolis, ranked and explained — who each one is best for, what it costs, and what no one tells you. An honest guide, not a real estate listing.",
  openGraph: {
    title: "10 Best Neighborhoods in Minneapolis (2026)",
    description:
      "The best neighborhoods in Minneapolis, ranked and explained — honest assessments of who each one is actually best for.",
    url: `${BASE_URL}/guides/best-neighborhoods`,
    type: "article",
  },
  alternates: { canonical: "/guides/best-neighborhoods" },
};

const neighborhoods = [
  {
    rank: 1,
    name: "North Loop",
    slug: "north-loop",
    bestFor: "Young professionals, walkability, dining",
    price: "$350K–$550K (condos)",
    walkScore: 95,
    summary:
      "The North Loop wins on density of amenities per square block. Within a 10-minute walk of any point in the neighborhood, you can reach a dozen excellent restaurants, multiple coffee shops, a farmers market, Target Field, the riverfront, and two light rail lines. The food scene — Spoon and Stable, Bar La Grassa, Bachelor Farmer, Demi — is the best concentrated dining in the state. The tradeoff: it is expensive, it is polished to the point of feeling curated, and it has almost no single-family homes. This is a neighborhood for people who want urban convenience and are willing to pay condo prices and HOA fees for it.",
  },
  {
    rank: 2,
    name: "Linden Hills",
    slug: "linden-hills",
    bestFor: "Families, lake access, village feel",
    price: "$625K–$850K",
    walkScore: 78,
    summary:
      "Linden Hills is the Minneapolis neighborhood that feels most like a small town. The commercial node at 43rd & Upton — Wild Rumpus, Sebastian Joe's, Tilia, the hardware store — functions as a genuine village center where people know each other by name. Lake Harriet and Bde Maka Ska are within walking or biking distance. The schools are strong. The streets are tree-lined and well-maintained. The tradeoff: it is expensive, it is overwhelmingly white, and the \"village\" identity can tip into insularity. If you want Minneapolis's best version of suburban comfort within city limits, this is it.",
  },
  {
    rank: 3,
    name: "Whittier",
    slug: "whittier",
    bestFor: "Diversity, food, walkability, culture",
    price: "$250K–$400K (condos/duplexes)",
    walkScore: 93,
    summary:
      "Whittier is the most interesting neighborhood in Minneapolis. Eat Street alone — the stretch of Nicollet Avenue from 24th to 29th — has more culinary range in five blocks than most American cities have in total. The Minneapolis Institute of Art is here. MCAD is here. The density is high, the population is genuinely diverse (not brochure-diverse — actually diverse), and the rents are still accessible. The tradeoff: it is urban in the full sense — more noise, more crime, more visible homelessness than the lake neighborhoods. Whittier is for people who want a city to feel like a city.",
  },
  {
    rank: 4,
    name: "Fulton",
    slug: "fulton",
    bestFor: "Families, stability, Lake Harriet",
    price: "$475K–$700K",
    walkScore: 70,
    summary:
      "Fulton is the neighborhood that works. It is not the most exciting — it will never be a destination — but as a place to raise a family, walk to the lake, send your kids to good schools, and live in a Craftsman bungalow under a canopy of elms, it is hard to beat. The tradeoff: it is quiet to the point of sleepy, it is expensive enough to be exclusionary, and the teardown-and-rebuild cycle is slowly changing the physical character of the streets. Fulton is for people who value stability and are willing to trade excitement for it.",
  },
  {
    rank: 5,
    name: "Logan Park",
    slug: "logan-park",
    bestFor: "Arts, breweries, creative community",
    price: "$300K–$420K",
    walkScore: 72,
    summary:
      "Logan Park is the creative heart of Northeast Minneapolis — the neighborhood where Art-A-Whirl started, where the Northrup King Building houses 300+ artist studios, and where the brewery scene (Indeed, Bauhaus, Fair State) functions as the city's social infrastructure. Central Avenue still has the old Eastern European institutions alongside newer spots. The tradeoff: the artists who made this neighborhood are being priced out by the desirability they created. Studio rents are rising, industrial buildings are becoming luxury apartments, and the authenticity that defines Logan Park is under real pressure.",
  },
  {
    rank: 6,
    name: "Lowry Hill East",
    slug: "lowry-hill-east",
    bestFor: "Young renters, nightlife, biking",
    price: "$1,100–$1,500/mo (1BR rent)",
    walkScore: 90,
    summary:
      "Known as The Wedge for its triangular shape, Lowry Hill East is one of the densest neighborhoods in Minneapolis — packed with apartments, duplexes, and fourplexes, populated by young professionals and creatives, and anchored by the Lyndale and Hennepin corridors. Bryant Lake Bowl, the Wedge Co-op, and a dozen bars and restaurants are within walking distance. The Walker Art Center and Sculpture Garden sit at the neighborhood's edge. The tradeoff: it is loud, parking is a competitive sport, and the building stock skews old (not charming-old — deferred-maintenance-old in some cases).",
  },
  {
    rank: 7,
    name: "Longfellow",
    slug: "longfellow",
    bestFor: "Value, Minnehaha Falls, bikeability",
    price: "$310K–$375K",
    walkScore: 73,
    summary:
      "Longfellow offers the best value proposition of any Minneapolis neighborhood with a major natural attraction. Minnehaha Falls — a 53-foot waterfall in a city park — is here. The Midtown Greenway connects you to the lakes and downtown by bike. The housing stock is solid and still affordable by Minneapolis standards. The community is diverse, engaged, and rebuilding after 2020 hit the neighborhood hard. The tradeoff: the rebuilding is real and ongoing, parts of Lake Street are still recovering, and crime is higher than in the southwest neighborhoods. Longfellow is for people who see investment potential and community resilience, not just current amenities.",
  },
  {
    rank: 8,
    name: "Seward",
    slug: "seward",
    bestFor: "Co-op culture, community, river access",
    price: "$290K–$380K",
    walkScore: 80,
    summary:
      "Seward is the neighborhood built around a grocery store — and that tells you everything about its values. The Seward Co-op anchors a community that takes cooperative economics, local food systems, and neighborhood organizing seriously. The Mississippi River gorge provides dramatic bluff-top trails. The demographic mix — Somali and Oromo immigrants alongside longtime co-op members alongside University of Minnesota grad students — creates a genuinely multicultural daily experience. The tradeoff: the commercial options are limited compared to denser neighborhoods, and the co-op ethos can feel insular to newcomers.",
  },
  {
    rank: 9,
    name: "Nokomis",
    slug: "nokomis",
    bestFor: "Lake life, families, affordability",
    price: "$300K–$450K",
    walkScore: 70,
    summary:
      "Nokomis gives you lake access without the premium pricing of the southwest lake neighborhoods. Lake Nokomis's beach is one of the best swimming spots in the city. The 50th Street corridor provides neighborhood-scale commercial options. The community is more diverse than Fulton or Linden Hills and more affordable by $100K-$300K. The tradeoff: it is less walkable than the denser neighborhoods, the commercial options are thinner, and the neighborhood is navigating real demographic and identity changes as it evolves from 'quiet lake neighborhood' to something more urban and diverse.",
  },
  {
    rank: 10,
    name: "Powderhorn Park",
    slug: "powderhorn-park",
    bestFor: "Culture, activism, diversity, affordability",
    price: "$250K–$350K",
    walkScore: 76,
    summary:
      "Powderhorn is Minneapolis's most politically engaged, culturally diverse, and genuinely unpredictable neighborhood. The MayDay Parade — a giant puppet procession organized by In the Heart of the Beast Theatre — is a civic event unlike anything else in the city. The lake is a true commons where every demographic in Minneapolis shares space. The food is global: taquerias, Somali tea shops, East African restaurants, and May Day Cafe. The tradeoff: Powderhorn took 2020 harder than almost any other neighborhood. Crime spiked. The park encampment was a traumatic community experience. The neighborhood is rebuilding with characteristic intensity, but it is honest to say the scars are still visible.",
  },
];

export default function BestNeighborhoodsPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "10 Best Neighborhoods in Minneapolis (2026)",
      description:
        "The best neighborhoods in Minneapolis, ranked and explained — who each one is best for, what it costs, and what no one tells you.",
      url: `${BASE_URL}/guides/best-neighborhoods`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best Neighborhoods",
        url: `${BASE_URL}/guides/best-neighborhoods`,
      },
    ]),
  ]);

  return (
    <main className="flex-1 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <div className="max-w-4xl mx-auto px-6 pt-16">
        <Link
          href="/guides"
          className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-[#71717a] hover:text-[#2a9d8f] transition-colors flex items-center gap-2 mb-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          All Guides
        </Link>

        <div className="relative w-full aspect-[21/9] mb-12 overflow-hidden">
          <Image
            src="/images/hero/minneapolis-skyline-i35w-fall-aerial.webp"
            alt="Aerial view of Minneapolis skyline in autumn"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Best Neighborhoods in Minneapolis
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            A ranked list of the 10 best neighborhoods in Minneapolis &mdash;
            not based on real estate marketing or Chamber of Commerce talking
            points, but on honest assessment of livability, character, value, and
            what each neighborhood is actually best for. Every neighborhood on
            this list has a full{" "}
            <Link
              href="/neighborhoods"
              className="text-[#2a9d8f] hover:underline"
            >
              in-depth guide
            </Link>{" "}
            if you want to go deeper.
          </p>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717a] pt-5 border-t border-[#e4e4e7]">
            Last updated: March 2026
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-16">
        {/* Methodology note */}
        <div className="bg-[#f5f5f5] p-6 mb-12">
          <h2 className="text-sm font-bold text-[#0a0a0a] mb-2">
            How We Ranked These
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            There is no objective &ldquo;best&rdquo; neighborhood &mdash; it
            depends entirely on what you value. We weighted walkability,
            commercial amenities, park access, community character, housing
            diversity, and cultural interest. We penalized for lack of
            diversity, inaccessible pricing, and dishonesty about problems.
            Every neighborhood on this list is genuinely good for someone;
            the ranking reflects breadth of appeal and overall livability.
          </p>
        </div>

        {/* Rankings */}
        <div className="space-y-12">
          {neighborhoods.map((n) => (
            <section
              key={n.slug}
              className="border-b border-[#e4e4e7] pb-12"
            >
              <div className="flex items-start gap-6">
                <span className="text-5xl font-black text-[#2a9d8f] leading-none shrink-0 w-16 text-right">
                  {n.rank}
                </span>
                <div className="flex-1">
                  <Link
                    href={`/neighborhoods/${n.slug}`}
                    className="group"
                  >
                    <h2 className="text-2xl font-bold text-[#0a0a0a] group-hover:text-[#2a9d8f] transition-colors mb-1">
                      {n.name}
                    </h2>
                  </Link>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-[#71717a] mb-4">
                    <span>
                      <strong className="text-[#0a0a0a]">Best for:</strong>{" "}
                      {n.bestFor}
                    </span>
                    <span>
                      <strong className="text-[#0a0a0a]">Price:</strong>{" "}
                      {n.price}
                    </span>
                    <span>
                      <strong className="text-[#0a0a0a]">Walk Score:</strong>{" "}
                      {n.walkScore}
                    </span>
                  </div>
                  <p className="text-[15px] text-[#52525b] leading-[1.85]">
                    {n.summary}
                  </p>
                  <Link
                    href={`/neighborhoods/${n.slug}`}
                    className="inline-block mt-4 text-sm font-semibold text-[#2a9d8f] hover:underline"
                  >
                    Read the full {n.name} guide →
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Honorable mentions */}
        <div className="mt-12 mb-12">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            Honorable Mentions
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-4">
            <p>
              <strong>
                <Link
                  href="/neighborhoods/south-uptown"
                  className="text-[#2a9d8f] hover:underline"
                >
                  South Uptown
                </Link>
              </strong>{" "}
              would have made this list five years ago. The Uptown brand has
              faded &mdash; commercial vacancies, the post-2020 crime spike, an
              identity crisis between its party-district past and its uncertain
              future. But Bde Maka Ska access, the Greenway, and the Lyn-Lake
              corridor still make it a legitimately great place to live if you
              pick the right block.
            </p>
            <p>
              <strong>
                <Link
                  href="/neighborhoods/kenny"
                  className="text-[#2a9d8f] hover:underline"
                >
                  Kenny
                </Link>
              </strong>{" "}
              is Fulton&apos;s quieter sibling &mdash; same housing stock, same
              schools, slightly lower prices, slightly less lake access. An
              excellent family neighborhood that doesn&apos;t get much press
              because there&apos;s not much to write about, which is exactly the
              point.
            </p>
            <p>
              <strong>
                <Link
                  href="/neighborhoods/downtown-east"
                  className="text-[#2a9d8f] hover:underline"
                >
                  Downtown East
                </Link>
              </strong>{" "}
              has the Guthrie, the Stone Arch Bridge, Mill City Museum, and the
              best transit access in the city. As a place to live
              full-time &mdash; not just attend events &mdash; it is still
              finding its identity, with a residential population that is
              growing but not yet established as a true neighborhood community.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Explore Every Neighborhood
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Each neighborhood on this list has a full in-depth guide &mdash;
            history, restaurants, real estate, schools, and the honest version
            of what it&apos;s like to live there.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/neighborhoods"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Browse All Neighborhoods
            </Link>
            <Link
              href="/guides/moving-to-minneapolis"
              className="border border-white/30 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Moving to Minneapolis Guide
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
