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
  title: "Most Walkable Neighborhoods in Minneapolis (2026)",
  description:
    "The most walkable neighborhoods in Minneapolis, ranked by Walk Score, transit access, bikeability, and what's actually within walking distance of your front door.",
  openGraph: {
    title: "Most Walkable Neighborhoods in Minneapolis (2026)",
    description:
      "The most walkable Minneapolis neighborhoods — ranked by Walk Score, transit, bikeability, and honest livability without a car.",
    url: `${BASE_URL}/guides/most-walkable-neighborhoods`,
    type: "article",
  },
  alternates: { canonical: "/guides/most-walkable-neighborhoods" },
};

const neighborhoods = [
  {
    rank: 1,
    name: "North Loop",
    slug: "north-loop",
    walkScore: 95,
    bikeScore: 93,
    transitScore: 78,
    carFree: "Very doable",
    highlights:
      "Grocery (Trader Joe's, Target), 20+ restaurants within 5-min walk, 2 light rail lines, riverfront trails, Target Field, The Commons park",
    honest:
      "The North Loop's walkability is the real deal — you can handle every daily errand on foot. The density of restaurants, coffee shops, and services per block is unmatched in Minneapolis. Two light rail lines provide downtown and airport access. The Achilles heel is grocery: Trader Joe's is the main option within the neighborhood, and a full grocery run for a family may still require a car trip. Also, the walkability comes with condo prices ($350K-$550K) and HOA fees ($200-$600/month) that price out a large portion of the population.",
  },
  {
    rank: 2,
    name: "Downtown East",
    slug: "downtown-east",
    walkScore: 95,
    bikeScore: 90,
    transitScore: 85,
    carFree: "Very doable",
    highlights:
      "Light rail hub, skyway system, Guthrie Theater, Mill City Museum, Stone Arch Bridge, grocery within walking distance",
    honest:
      "Downtown East ties the North Loop on Walk Score but edges it on transit access — the light rail hub at Government Plaza/US Bank Stadium station puts both lines at your doorstep. The skyway system adds winter walkability that no other neighborhood can match. The tradeoff: Downtown East feels less like a neighborhood and more like a district. The residential population is growing but still thin. Evening and weekend foot traffic drops sharply outside of event days. Living here car-free is easy; living here and feeling like you belong to a community is harder.",
  },
  {
    rank: 3,
    name: "Whittier",
    slug: "whittier",
    walkScore: 93,
    bikeScore: 90,
    transitScore: 64,
    carFree: "Doable with occasional rideshare",
    highlights:
      "Eat Street (Nicollet Ave), Lyndale Ave corridor, MIA, Midtown Greenway, multiple grocery options, dense restaurant mix",
    honest:
      "Whittier's walkability is driven by the density and diversity of its commercial corridors. Eat Street alone has more dining options within walking distance than most entire neighborhoods. The Midtown Greenway provides a fast, car-free east-west bike corridor. Multiple grocery stores (Aldi, Cub Foods, Wedge Co-op nearby) mean you never need to drive for food. The transit score is the weak point — bus service is decent on Nicollet and Lyndale but doesn't match the light rail access of downtown neighborhoods. Car-free living is very doable here, especially if you bike.",
  },
  {
    rank: 4,
    name: "Lowry Hill East",
    slug: "lowry-hill-east",
    walkScore: 90,
    bikeScore: 95,
    transitScore: 60,
    carFree: "Doable",
    highlights:
      "Hennepin & Lyndale corridors, Wedge Co-op, Bryant Lake Bowl, Walker Art Center, Sculpture Garden, dense restaurant/bar scene",
    honest:
      "The Wedge earns its walkability through sheer density of stuff — bars, restaurants, the co-op, entertainment venues — packed into a small triangular footprint. The Bike Score of 95 is the real story: this is arguably the most bikeable neighborhood in Minneapolis, with flat terrain, bike lanes on multiple streets, and the Midtown Greenway and Kenilworth Trail within easy reach. The tradeoff: the same density that makes it walkable makes it loud, and the parking situation is genuinely terrible. If you're committed to car-free or car-light living, The Wedge is one of the best neighborhoods in the city for it.",
  },
  {
    rank: 5,
    name: "Logan Park",
    slug: "logan-park",
    walkScore: 72,
    bikeScore: 88,
    transitScore: 55,
    carFree: "Challenging — bike-dependent",
    highlights:
      "Central Avenue corridor, brewery district, Northrup King Building, bike-friendly streets, riverfront trail access",
    honest:
      "Logan Park's walkability is concentrated along Central Avenue — if you live near it, daily errands are manageable on foot. Move a few blocks into the residential or industrial areas and the Walk Score drops. The real transportation story is biking: the Bike Score of 88 reflects excellent infrastructure and a culture where cycling is the default mode for a large portion of residents. The ride to downtown via the riverfront trails is one of the best urban bike commutes in America. Transit is functional (Route 10 on Central) but not frequent enough for car-free dependence. Most Logan Park residents who go car-free are committed cyclists.",
  },
  {
    rank: 6,
    name: "Seward",
    slug: "seward",
    walkScore: 80,
    bikeScore: 87,
    transitScore: 55,
    carFree: "Doable for committed cyclists",
    highlights:
      "Seward Co-op (2 locations), Franklin Ave corridor, Midtown Greenway eastern terminus, West River Parkway, U of M proximity",
    honest:
      "Seward's walkability centers on the Seward Co-op and the Franklin Avenue corridor. Having a nationally recognized cooperative grocery store — actually two locations — within walking distance is a legitimate daily-life advantage. The Midtown Greenway's eastern terminus is here, and the river trail system provides excellent recreational biking. The neighborhood is compact enough that most internal trips work on foot. For trips beyond Seward, biking is the efficient choice — downtown is a 10-15 minute ride. Transit is adequate but not a primary mode for most residents.",
  },
  {
    rank: 7,
    name: "Powderhorn Park",
    slug: "powderhorn-park",
    walkScore: 76,
    bikeScore: 85,
    transitScore: 55,
    carFree: "Possible with planning",
    highlights:
      "Lake Street corridor, Midtown Global Market, Powderhorn Lake paths, bus routes on Lake St and Bloomington Ave",
    honest:
      "Powderhorn's walkability is uneven — strong along Lake Street (where Midtown Global Market, grocery stores, and bus service provide real daily-life infrastructure) and weaker in the residential interior. The neighborhood is bike-friendly by design and by culture. Bus Route 21 on Lake Street is one of the highest-frequency routes in the system. Car-free living is possible if you live near Lake Street and are comfortable biking for longer trips, but it requires more intentionality than in the top-4 walkable neighborhoods.",
  },
  {
    rank: 8,
    name: "South Uptown",
    slug: "south-uptown",
    walkScore: 82,
    bikeScore: 88,
    transitScore: 62,
    carFree: "Doable",
    highlights:
      "Lyn-Lake corridor, Bde Maka Ska lakefront, Midtown Greenway, Hennepin Ave bus, dense retail/dining",
    honest:
      "South Uptown's walkability benefits from the Lyn-Lake commercial node and proximity to Bde Maka Ska. The Midtown Greenway runs through the neighborhood, providing car-free access east to Longfellow and west to the lakes. The Hennepin Avenue bus runs frequently to downtown. The tradeoff: Uptown's commercial vacancies have thinned the walkable amenity density compared to five years ago. Some storefronts that made the neighborhood walkable are now empty. The bones are still excellent — lake access, Greenway, transit — but the commercial ecosystem is in transition.",
  },
  {
    rank: 9,
    name: "Longfellow",
    slug: "longfellow",
    walkScore: 73,
    bikeScore: 90,
    transitScore: 50,
    carFree: "Bike-dependent",
    highlights:
      "Midtown Greenway, Minnehaha Falls, Blue Line light rail (46th St station), Lake Street corridor, river trails",
    honest:
      "Longfellow's walkability is neighborhood-scale — you can walk to a park, a café, maybe a corner store, but a full grocery run or restaurant outing usually requires biking or driving. The Bike Score of 90 is the real number: the Greenway, the river trails, and the neighborhood's flat terrain make cycling the most efficient way to get around. The Blue Line light rail station at 46th Street provides airport and downtown access. Car-free living is possible here, but it's a bike-first lifestyle, not a walking-first one.",
  },
  {
    rank: 10,
    name: "Nokomis",
    slug: "nokomis",
    walkScore: 70,
    bikeScore: 85,
    transitScore: 45,
    carFree: "Difficult",
    highlights:
      "Lake Nokomis beach, 50th Street corridor, parkway trails, residential quiet",
    honest:
      "Nokomis is honest about what it is: a beautiful lake neighborhood with moderate walkability. The 50th Street corridor has enough — a few restaurants, a coffee shop, basic services — for some daily needs, but it is not a commercial district that supports full car-free living. The lake and parkway trails are excellent for recreational biking, and commute biking to downtown is doable (30-40 minutes). But most Nokomis residents own a car and use it regularly. This is a neighborhood where walkability is a nice bonus, not the organizing principle.",
  },
];

export default function MostWalkablePage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Most Walkable Neighborhoods in Minneapolis (2026)",
      description:
        "The most walkable neighborhoods in Minneapolis, ranked by Walk Score, transit access, bikeability, and honest car-free livability.",
      url: `${BASE_URL}/guides/most-walkable-neighborhoods`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Most Walkable Neighborhoods",
        url: `${BASE_URL}/guides/most-walkable-neighborhoods`,
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
            src="/images/transit/sabo-bridge-pedestrians-overcast.webp"
            alt="Pedestrians crossing the Sabo Bridge near the Midtown Greenway"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Most Walkable Neighborhoods
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Minneapolis is not a walking city in the way New York or San
            Francisco is &mdash; but some of its neighborhoods genuinely
            support car-free or car-light living. Here are the 10 most
            walkable neighborhoods, ranked by Walk Score but contextualized
            with the stuff that matters more: what&apos;s actually within
            walking distance, how good the biking is, and whether you can
            realistically live without a car.
          </p>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717a] pt-5 border-t border-[#e4e4e7]">
            Last updated: March 2026
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-16">
        {/* Rankings */}
        <div className="space-y-10">
          {neighborhoods.map((n) => (
            <section
              key={n.slug}
              className="border-b border-[#e4e4e7] pb-10"
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
                    <h2 className="text-2xl font-bold text-[#0a0a0a] group-hover:text-[#2a9d8f] transition-colors mb-2">
                      {n.name}
                    </h2>
                  </Link>

                  {/* Score grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Walk Score
                      </p>
                      <p className="text-2xl font-black text-[#0a0a0a]">
                        {n.walkScore}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Bike Score
                      </p>
                      <p className="text-2xl font-black text-[#0a0a0a]">
                        {n.bikeScore}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Transit Score
                      </p>
                      <p className="text-2xl font-black text-[#0a0a0a]">
                        {n.transitScore}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Car-Free?
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.carFree}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#71717a] mb-3">
                    <strong className="text-[#0a0a0a]">
                      What&apos;s walkable:
                    </strong>{" "}
                    {n.highlights}
                  </p>

                  <p className="text-[15px] text-[#52525b] leading-[1.85]">
                    {n.honest}
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

        {/* Bottom note */}
        <div className="mt-12 bg-[#f5f5f5] p-6 mb-12">
          <h2 className="text-sm font-bold text-[#0a0a0a] mb-2">
            A Note on Walk Scores
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Walk Score is a useful starting point but not the whole story. It
            measures proximity to amenities but doesn&apos;t account for
            sidewalk quality, winter maintenance, perceived safety, or whether
            the amenities nearby are ones you actually use. A neighborhood with
            a Walk Score of 75 and a great co-op, a solid coffee shop, and a
            park you love might feel more walkable in practice than a
            neighborhood scoring 90 with amenities that don&apos;t match your
            life. Use the scores as a filter, then visit on foot.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Planning a Move?
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Our relocation guide covers everything beyond walkability &mdash;
            cost of living, weather, jobs, schools, and the stuff no one tells
            you until you get here.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/moving-to-minneapolis"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Moving to Minneapolis Guide
            </Link>
            <Link
              href="/guides/best-neighborhoods"
              className="border border-white/30 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Best Neighborhoods
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
