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
  title: "Best Neighborhoods for Public Transit in Minneapolis (2026)",
  description:
    "The best Minneapolis neighborhoods for public transit — ranked by Transit Score, light rail access, bus frequency, and car-free viability. Honest about what Minneapolis transit can and cannot do.",
  openGraph: {
    title: "Best Neighborhoods for Public Transit in Minneapolis (2026)",
    description:
      "The best Minneapolis neighborhoods for public transit — light rail, high-frequency buses, and honest car-free viability rankings.",
    url: `${BASE_URL}/guides/best-neighborhoods-for-public-transit`,
    type: "article",
  },
};

const neighborhoods = [
  {
    rank: 1,
    name: "Downtown East",
    slug: "downtown-east",
    transitScore: 85,
    lightRail: "Blue Line + Green Line (Government Plaza, US Bank Stadium)",
    keyBusRoutes: "Multiple high-frequency routes",
    commuteToDowntown: "0 min (you are downtown)",
    carFreeViability: "Excellent",
    honest:
      "Downtown East is the transit hub of Minneapolis. The Government Plaza and US Bank Stadium stations put both light rail lines within walking distance of any point in the neighborhood. The Blue Line runs to the airport (25 minutes) and Mall of America (35 minutes). The Green Line runs to the University of Minnesota (10 minutes) and downtown St. Paul (40 minutes). High-frequency bus routes radiate outward in every direction. The skyway system adds a climate-controlled pedestrian network. Car-free living here is not a compromise — it is the logical choice. The tradeoff: Downtown East transit is optimized for commuters and event-goers. Late-night service is limited (last trains around midnight), and weekend frequency drops. If your lifestyle involves leaving downtown regularly for non-work destinations, the transit advantage diminishes.",
  },
  {
    rank: 2,
    name: "Downtown West",
    slug: "downtown-west",
    transitScore: 82,
    lightRail: "Blue Line + Green Line (Nicollet Mall, Warehouse District)",
    keyBusRoutes: "Routes 4, 6, 10, 17, 18 + multiple express routes",
    commuteToDowntown: "0 min (you are downtown)",
    carFreeViability: "Excellent",
    honest:
      "Downtown West matches Downtown East on transit fundamentals — both light rail lines, high-frequency buses, skyway access. The Nicollet Mall station and Warehouse District station provide convenient access to the entire light rail system. The bus network is slightly denser here because Hennepin and Nicollet avenues serve as major bus corridors. Target Center and the Hennepin Theatre District mean you can attend events without driving. The same late-night and weekend frequency limitations apply. Downtown West is also slightly more walkable to the North Loop, which extends your car-free radius for dining and entertainment.",
  },
  {
    rank: 3,
    name: "North Loop",
    slug: "north-loop",
    transitScore: 78,
    lightRail: "Blue Line (Target Field) + Green Line (Target Field)",
    keyBusRoutes: "Routes 7, 22, limited others",
    commuteToDowntown: "5-10 min by light rail or 15 min walk",
    carFreeViability: "Very Good",
    honest:
      "The North Loop benefits from the Target Field light rail station, which is the transfer point between the Blue and Green lines. This gives you direct rail access to the airport, Mall of America, U of M, and St. Paul from a single station. The walkable density of the neighborhood means most daily needs are covered on foot — grocery, dining, coffee, fitness — so transit is primarily for longer trips. The limitation: bus service within the North Loop is thin compared to downtown. If your destination is not on a light rail line, you may be walking to downtown to catch a bus or using a rideshare. Car-free living is very doable if your life is organized around the light rail corridors; it gets harder if you regularly need to reach suburban destinations.",
  },
  {
    rank: 4,
    name: "Marcy-Holmes",
    slug: "marcy-holmes",
    transitScore: 72,
    lightRail: "Green Line (East Bank, Stadium Village stations)",
    keyBusRoutes: "Routes 2, 3, 6, campus shuttles",
    commuteToDowntown: "10 min by Green Line",
    carFreeViability: "Very Good",
    honest:
      "Marcy-Holmes sits at the western edge of the University of Minnesota campus, which makes the Green Line light rail its transit backbone. The East Bank station is a 5-10 minute walk from most of the neighborhood, providing direct service to downtown Minneapolis (10 minutes) and downtown St. Paul (35 minutes). University bus routes supplement the light rail. The neighborhood is one of the most bikeable in the city, and the Stone Arch Bridge provides a beautiful pedestrian/bike route to downtown. Car-free living works well here, especially for people connected to the U of M ecosystem. The limitation: north-south transit is weaker. Getting to South Minneapolis neighborhoods by transit requires transfers and patience.",
  },
  {
    rank: 5,
    name: "Cedar-Riverside",
    slug: "cedar-riverside",
    transitScore: 70,
    lightRail: "Green Line (West Bank station)",
    keyBusRoutes: "Routes 2, 7, 22",
    commuteToDowntown: "8 min by Green Line",
    carFreeViability: "Very Good",
    honest:
      "Cedar-Riverside has the West Bank light rail station, putting the Green Line within walking distance of the entire neighborhood. The station is right at the edge of the U of M West Bank campus, making this an excellent transit neighborhood for students, faculty, and hospital workers (HCMC and the U of M Medical Center are both accessible by transit). The neighborhood is also one of the most walkable for daily errands — the Cedar-Riverside commercial district along Cedar Avenue has grocery stores, restaurants, and services that serve the large Somali and East African community. Car-free living is not just viable here — it is how many residents actually live. The tradeoff: late-night safety concerns around the light rail station are real and worth acknowledging.",
  },
  {
    rank: 6,
    name: "South Uptown",
    slug: "south-uptown",
    transitScore: 62,
    lightRail: "None (nearest: Lake Street/Midtown station, 1+ mile)",
    keyBusRoutes: "Route 6 (Hennepin), Route 4 (Lyndale), Route 21 (Lake St)",
    commuteToDowntown: "15-20 min by bus",
    carFreeViability: "Good",
    honest:
      "South Uptown does not have light rail, but it has something almost as useful: three high-frequency bus corridors converging in a small area. Route 6 on Hennepin runs every 10-15 minutes to downtown. Route 4 on Lyndale provides north-south service. Route 21 on Lake Street is one of Metro Transit's busiest routes, connecting Uptown to the Midtown Greenway corridor and points east and west. The Midtown Greenway itself functions as a transit corridor for cyclists — a flat, separated bike path that connects to downtown in 15 minutes. Car-free living works in South Uptown if you combine bus and bike. The limitation: no light rail means no direct airport or St. Paul access without a transfer, and bus frequency drops after 10 PM.",
  },
  {
    rank: 7,
    name: "Whittier",
    slug: "whittier",
    transitScore: 64,
    lightRail: "None (nearest: Franklin station on Blue Line, 0.5 mile east)",
    keyBusRoutes: "Route 18 (Nicollet), Route 4 (Lyndale), Route 2 (Franklin)",
    commuteToDowntown: "15-20 min by bus",
    carFreeViability: "Good",
    honest:
      "Whittier's transit story centers on the Nicollet Avenue bus — Route 18, which runs the length of Nicollet from downtown through Eat Street and south. It is not the fastest bus in the system, but it is frequent and connects Whittier to downtown reliably. The Lyndale Avenue bus (Route 4) provides a parallel corridor. Whittier is close enough to the Blue Line's Franklin station that some residents walk to light rail for airport trips. The neighborhood's real transit advantage is that its density of amenities reduces the need for transit in the first place — most daily errands are walkable. Car-free living in Whittier is good for people who primarily need downtown access and can walk or bike for everything else.",
  },
  {
    rank: 8,
    name: "Longfellow",
    slug: "longfellow",
    transitScore: 50,
    lightRail: "Blue Line (46th Street station)",
    keyBusRoutes: "Route 21 (Lake Street), Route 7 (limited)",
    commuteToDowntown: "20-25 min by Blue Line",
    carFreeViability: "Moderate",
    honest:
      "Longfellow's transit anchor is the Blue Line light rail station at 46th Street, which provides direct service to downtown (20 minutes), the airport (10 minutes), and Mall of America (15 minutes). If you live near the station, this is a genuine asset — airport access alone justifies transit-oriented living. Route 21 on Lake Street adds an east-west bus corridor. The limitation: the 46th Street station is at the southern end of Longfellow, and much of the neighborhood is a 15-20 minute walk from the platform. Transit access in Longfellow is a spectrum: excellent near the station, mediocre in the northern half. The Midtown Greenway runs through the neighborhood, making bike-to-transit a viable commute strategy. Car-free living is possible but requires intentionality and a willingness to bike.",
  },
  {
    rank: 9,
    name: "Phillips",
    slug: "phillips",
    transitScore: 58,
    lightRail: "Blue Line (Franklin & Lake Street stations, eastern edge)",
    keyBusRoutes: "Route 21 (Lake Street), Route 2 (Franklin), Route 5 (Chicago Ave)",
    commuteToDowntown: "15-20 min by bus, 10-15 by Blue Line",
    carFreeViability: "Moderate-Good",
    honest:
      "Phillips is one of the most transit-dependent neighborhoods in Minneapolis — not because the transit is great, but because car ownership rates are lower here than in almost any other neighborhood. The Blue Line's Franklin and Lake Street stations are accessible from the eastern edge of Phillips. Three bus routes (21, 2, and 5) provide reasonable coverage. Route 5 on Chicago Avenue is an underappreciated corridor that connects Phillips to downtown efficiently. The neighborhood's central location means biking to downtown takes only 10-15 minutes. Car-free living is the reality for many Phillips residents, and the transit infrastructure is adequate but not excellent. More frequency, especially on Route 5, would make a meaningful difference in daily life here.",
  },
  {
    rank: 10,
    name: "Elliot Park",
    slug: "elliot-park",
    transitScore: 65,
    lightRail: "Blue Line + Green Line (nearby downtown stations)",
    keyBusRoutes: "Route 7, Route 22, proximity to downtown bus hub",
    commuteToDowntown: "5 min walk or 1 stop on light rail",
    carFreeViability: "Good",
    honest:
      "Elliot Park is technically the southern edge of downtown, and its transit advantage comes from proximity to the downtown bus and rail network rather than dedicated neighborhood service. Walk 5-10 minutes north and you are at a light rail station. Walk 5 minutes west and you are on Nicollet Mall with multiple bus options. The neighborhood is anchored by HCMC (Hennepin Healthcare), which generates its own transit demand — many hospital workers commute by bus or train. Elliot Park is also one of the most centrally located neighborhoods for biking, with downtown, the Greenway, and the river trails all within easy reach. The tradeoff: Elliot Park is in the middle of a dramatic transformation — new apartment towers, convention center expansion, and street reconstruction — that will likely improve transit access over the next few years but currently creates construction-related disruptions.",
  },
];

export default function PublicTransitPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Best Neighborhoods for Public Transit in Minneapolis (2026)",
      description:
        "The best Minneapolis neighborhoods for public transit — ranked by Transit Score, light rail access, bus frequency, and car-free viability.",
      url: `${BASE_URL}/guides/best-neighborhoods-for-public-transit`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best Neighborhoods for Public Transit",
        url: `${BASE_URL}/guides/best-neighborhoods-for-public-transit`,
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
            src="/images/transit/metro-light-rail-downtown.webp"
            alt="Metro Transit light rail in downtown Minneapolis"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Best Neighborhoods for Public Transit
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Minneapolis transit is decent for a mid-size American city and
            mediocre by global standards. Two light rail lines, a network of
            bus routes, and excellent bike infrastructure create a system that
            works &mdash; if you live in the right neighborhood and set
            realistic expectations. Here are the 10 neighborhoods where
            transit access is strongest, ranked with honest assessments of
            what &ldquo;car-free&rdquo; actually means in each one.
          </p>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717a] pt-5 border-t border-[#e4e4e7]">
            Last updated: March 2026
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-16">
        {/* Transit context */}
        <div className="bg-[#f5f5f5] p-6 mb-12">
          <h2 className="text-sm font-bold text-[#0a0a0a] mb-2">
            Minneapolis Transit: The Honest Overview
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed mb-3">
            Metro Transit operates two light rail lines: the{" "}
            <strong className="text-[#0a0a0a]">Blue Line</strong> (running
            from Target Field through downtown to the airport and Mall of
            America) and the{" "}
            <strong className="text-[#0a0a0a]">Green Line</strong> (running
            from Target Field through the U of M campus to downtown
            St.&nbsp;Paul). The bus network covers the city with varying
            frequency &mdash; some routes run every 10 minutes during rush
            hour, others every 30-60 minutes.
          </p>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            The honest truth: Minneapolis transit works well for commuting
            to downtown and for trips along the light rail corridors. It is
            less useful for cross-town trips, suburban destinations, and
            late-night travel. Most transit-dependent Minneapolis residents
            supplement with biking (in season) and occasional rideshares. True
            car-free living is possible in the top neighborhoods below;
            car-light living is more realistic for most.
          </p>
        </div>

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

                  {/* Transit data grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
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
                        Light Rail
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.lightRail}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Downtown Commute
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.commuteToDowntown}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Car-Free?
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.carFreeViability}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#71717a] mb-3">
                    <strong className="text-[#0a0a0a]">Key bus routes:</strong>{" "}
                    {n.keyBusRoutes}
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
            A Note on Biking as Transit
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed mb-3">
            Any honest guide to Minneapolis transit has to acknowledge that
            biking is, functionally, part of the transit system. The Midtown
            Greenway, the Chain of Lakes paths, the riverfront trails, and the
            city&apos;s extensive bike lane network mean that a bike extends
            your effective transit radius by miles. Many Minneapolis residents
            who describe themselves as &ldquo;car-free&rdquo; are really
            &ldquo;bike + transit&rdquo; &mdash; using light rail or buses
            for longer trips and biking for everything else.
          </p>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            This works from April through October. From November through
            March, the dedicated winter cyclists continue (Minneapolis has one
            of the highest winter cycling rates in America), but most people
            shift to transit-only or add rideshares. If you are planning
            car-free living in Minneapolis, build your plan around the winter
            months, not the summer ones.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            More Livability Guides
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Transit is one piece of the livability puzzle. Our other guides
            cover walkability, winter survival, cost of living, and what each
            neighborhood is actually like to live in.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/most-walkable-neighborhoods"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Most Walkable Neighborhoods
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
