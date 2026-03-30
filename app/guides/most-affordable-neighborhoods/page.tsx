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
  title: "Most Affordable Neighborhoods in Minneapolis (2026)",
  description:
    "The most affordable neighborhoods in Minneapolis, ranked by median home price, median rent, and household income. Honest about the tradeoffs — why they're cheap, what you're giving up, and what you're getting.",
  openGraph: {
    title: "Most Affordable Neighborhoods in Minneapolis (2026)",
    description:
      "The most affordable Minneapolis neighborhoods — real prices, honest tradeoffs, and what 'affordable' actually means in each area.",
    url: `${BASE_URL}/guides/most-affordable-neighborhoods`,
    type: "article",
  },
  alternates: { canonical: "/guides/most-affordable-neighborhoods" },
};

const neighborhoods = [
  {
    rank: 1,
    name: "Folwell",
    slug: "folwell",
    medianHome: "$155K-$210K",
    medianRent: "$850-$1,050/mo",
    medianIncome: "$36K",
    walkScore: 68,
    honest:
      "Folwell is the most affordable neighborhood in Minneapolis where you can buy a solid, livable house. The housing stock is primarily pre-war bungalows and foursquares — well-built homes with hardwood floors, plaster walls, and real architectural character — at prices that would be unimaginable in South or Southwest Minneapolis. A 3-bedroom home for under $200K is still common here. The reason the prices are low is real: Folwell has higher crime rates than the city average, particularly property crime and some violent crime concentrated along the commercial corridors. North Memorial hospital and its campus are the major institutional anchor. The neighborhood is predominantly Black and increasingly diverse with growing East African and Latino populations. Folwell is not for everyone — but for buyers who are priced out of trendier neighborhoods and can evaluate risk honestly, the housing value is extraordinary.",
  },
  {
    rank: 2,
    name: "Jordan",
    slug: "jordan",
    medianHome: "$140K-$195K",
    medianRent: "$800-$1,000/mo",
    medianIncome: "$32K",
    walkScore: 65,
    honest:
      "Jordan is one of the least expensive neighborhoods in Minneapolis, and it has been for decades. The prices reflect real challenges: higher crime, disinvestment, commercial vacancy, and a history of predatory lending and redlining that stripped wealth from the community. But Jordan also has things that many expensive neighborhoods don't — genuine community organizing, a growing urban farming movement (Homewood Studios, community gardens), and a housing stock of well-built homes that represent some of the best per-square-foot value in the Twin Cities. First-time buyers and investors are starting to look at Jordan, but the neighborhood hasn't yet experienced the rapid appreciation that has transformed parts of Northeast and South Minneapolis. Whether that's an opportunity or a warning depends on your timeline and your tolerance for uncertainty.",
  },
  {
    rank: 3,
    name: "Hawthorne",
    slug: "hawthorne",
    medianHome: "$130K-$185K",
    medianRent: "$775-$975/mo",
    medianIncome: "$28K",
    walkScore: 70,
    honest:
      "Hawthorne posts some of the lowest home prices in the city, and the reasons are not subtle. This is a neighborhood that has faced decades of disinvestment, high crime rates, and the cascading effects of structural racism in housing and policing. The violent crime rate is among the highest in Minneapolis. Commercial infrastructure is limited. Many lots are vacant. That's the honest picture. But Hawthorne also has proximity to downtown (10 minutes by bike, 15 by bus), strong community organizations like the Hawthorne Neighborhood Council, and a housing stock that — when maintained — offers genuine value. New construction and rehab projects are bringing some investment. If you're buying in Hawthorne, you need to be clear-eyed about the challenges and genuinely committed to the community. This is not a neighborhood for passive investors looking for quick appreciation.",
  },
  {
    rank: 4,
    name: "McKinley",
    slug: "mckinley",
    medianHome: "$145K-$200K",
    medianRent: "$825-$1,025/mo",
    medianIncome: "$33K",
    walkScore: 62,
    honest:
      "McKinley sits between the Jordan and Folwell neighborhoods on the North Side, sharing their price profile and many of their challenges. The housing stock is similar — pre-war bungalows and modest single-family homes — and the prices are similarly low. Crime is higher than the city average but has been trending down in recent years. The neighborhood has less commercial infrastructure than Folwell (which has the North Memorial corridor) but more stability than Hawthorne. McKinley residents describe it as 'quiet for the North Side' — a characterization that reflects both genuine calm on many residential streets and the reality that 'quiet for the North Side' still means higher crime than Southwest Minneapolis. For buyers in the $150K-$200K range, McKinley offers more house for the money than almost anywhere in the metro area.",
  },
  {
    rank: 5,
    name: "Near North",
    slug: "near-north",
    medianHome: "$135K-$190K",
    medianRent: "$800-$1,000/mo",
    medianIncome: "$30K",
    walkScore: 72,
    honest:
      "Near North is the North Side neighborhood closest to downtown, and that proximity is its greatest asset and its greatest source of tension. The neighborhood has the best transit access on the North Side — multiple bus routes, and the planned Blue Line extension will add light rail. West Broadway is the commercial spine, with a mix of legacy businesses, community organizations, and newer investments. Heritage Park redevelopment brought mixed-income housing. But Near North also has some of the highest violent crime rates in the city, concentrated along specific corridors. The neighborhood's relationship with policing is fraught — this is where George Floyd's murder sparked the 2020 uprising, and trust between residents and MPD remains deeply fractured. Near North is affordable because of real problems, but it's also a neighborhood with real assets — downtown proximity, transit, community institutions — that make it a genuine option for buyers who want to invest in the North Side.",
  },
  {
    rank: 6,
    name: "Webber-Camden",
    slug: "webber-camden",
    medianHome: "$165K-$225K",
    medianRent: "$875-$1,075/mo",
    medianIncome: "$38K",
    walkScore: 58,
    honest:
      "Webber-Camden is the North Side neighborhood that most closely resembles the stable, family-oriented neighborhoods on the South Side. Webber Park and its natural swimming pool are genuine amenities. The housing stock is well-maintained by comparison to other North Side neighborhoods, with many owner-occupied homes and active block clubs. Victory Memorial Drive provides a grand, tree-lined parkway. Crime is lower than other North Side neighborhoods, though still above the citywide average. The median home price ($165K-$225K) represents a significant discount from comparable neighborhoods south of downtown. Webber-Camden is where North Side residents point when asked 'where's a good place to buy on the North Side?' — and the answer is honest. It's the most stable, most livable affordable option in North Minneapolis.",
  },
  {
    rank: 7,
    name: "Shingle Creek",
    slug: "shingle-creek",
    medianHome: "$185K-$240K",
    medianRent: "$900-$1,100/mo",
    medianIncome: "$40K",
    walkScore: 55,
    honest:
      "Shingle Creek is the most suburban-feeling neighborhood in Minneapolis. Located in the far northwest corner of the city, it borders Brooklyn Center and has the strip-mall commercial patterns, wider streets, and single-story housing that characterize first-ring suburbs rather than urban neighborhoods. The prices reflect this in-between status — more expensive than the core North Side neighborhoods but far cheaper than anything in South or Southwest Minneapolis. Crime is moderate — lower than the central North Side but higher than the southern suburbs it resembles. The main advantage is value: you get a single-family home with a garage and a yard in Minneapolis for under $240K. The main disadvantage is that nothing about Shingle Creek feels like city living. If you want urban amenities, walkability, or cultural energy, look elsewhere. If you want suburban quiet at a city price, this works.",
  },
  {
    rank: 8,
    name: "Willard-Hay",
    slug: "willard-hay",
    medianHome: "$150K-$210K",
    medianRent: "$825-$1,025/mo",
    medianIncome: "$34K",
    walkScore: 64,
    honest:
      "Willard-Hay shares a border and a profile with Near North — affordable, historically disinvested, predominantly Black, and navigating real challenges with crime and commercial vacancy. The Theodore Wirth Park border gives Willard-Hay a natural amenity that Near North lacks: direct access to 759 acres of parkland, trails, and Wirth Beach. Homes along the park edge tend to be better maintained and slightly more expensive. The interior streets are more mixed — some blocks are stable and well-kept, others have vacant lots and deferred maintenance. Willard-Hay is priced low for real reasons, but the park proximity adds a quality-of-life dimension that's hard to replicate. For buyers who value green space and can handle the tradeoffs of a high-crime neighborhood, the homes along the Wirth Park corridor are among the best values in Minneapolis.",
  },
  {
    rank: 9,
    name: "Phillips",
    slug: "phillips",
    medianHome: "$170K-$230K",
    medianRent: "$850-$1,050/mo",
    medianIncome: "$27K",
    walkScore: 82,
    honest:
      "Phillips is the most walkable affordable neighborhood in Minneapolis — and one of the most complex. The neighborhood is the most ethnically diverse in the state, with large Somali, Latino, Native American, and East African communities creating a genuinely global daily experience. East Lake Street provides dense commercial infrastructure: grocery stores, restaurants, services, transit. The Midtown Greenway cuts through. The Walk Score of 82 is higher than most neighborhoods on the 'Best Neighborhoods' list. The tradeoff: Phillips has high crime rates, significant visible homelessness, and the challenges that come with concentrated poverty. The median household income of $27K is the lowest on this list. Phillips is affordable because of real hardship — but it's also a neighborhood with extraordinary cultural richness, genuine community resilience, and walkability that expensive neighborhoods envy. Buying here is a bet on the neighborhood, not just on a house.",
  },
  {
    rank: 10,
    name: "Central",
    slug: "central",
    medianHome: "$175K-$240K",
    medianRent: "$875-$1,075/mo",
    medianIncome: "$35K",
    walkScore: 75,
    honest:
      "Central is a Nordeast neighborhood that hasn't yet experienced the full wave of appreciation that transformed Logan Park and St. Anthony West. The housing stock is similar — pre-war bungalows and duplexes on a grid — but the prices are $100K-$200K lower than its trendier neighbors. Central Avenue provides a walkable commercial corridor with a mix of old-school bars, ethnic restaurants, and new businesses. The neighborhood is more diverse and less polished than Logan Park. Crime is moderate — higher than the Southwest but lower than the North Side. Central's value proposition is location: you're in Northeast Minneapolis, with all its brewery-trail-arts-district appeal, at prices that Northeast hasn't charged in a decade. The risk is that appreciation may not arrive on your timeline, or that the neighborhood's identity may shift in ways you don't expect.",
  },
];

export default function MostAffordablePage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Most Affordable Neighborhoods in Minneapolis (2026)",
      description:
        "The most affordable neighborhoods in Minneapolis, ranked by median home price, rent, and household income — with honest context about why they're affordable.",
      url: `${BASE_URL}/guides/most-affordable-neighborhoods`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Most Affordable Neighborhoods",
        url: `${BASE_URL}/guides/most-affordable-neighborhoods`,
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
            src="/images/fall/residential-street-fall-foliage-canopy.webp"
            alt="Tree-lined Minneapolis residential street in autumn"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Most Affordable Neighborhoods
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Affordable neighborhoods in Minneapolis are affordable for reasons.
            Some of those reasons are fine &mdash; less walkability, fewer
            trendy restaurants, distance from the lakes. Some are serious
            &mdash; higher crime, disinvestment, structural racism. This guide
            ranks the 10 most affordable neighborhoods by median home price and
            is honest about both the value and the tradeoffs. If you&apos;re
            looking for a $200K house, you need to know what comes with it.
          </p>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717a] pt-5 border-t border-[#e4e4e7]">
            Last updated: March 2026
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-16">
        {/* Context box */}
        <div className="bg-[#f5f5f5] p-6 mb-12">
          <h2 className="text-sm font-bold text-[#0a0a0a] mb-2">
            Context on Minneapolis Affordability
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            The citywide median home price in Minneapolis is approximately
            $325K (2025-2026). The metro median is $365K. Neighborhoods on this
            list range from $130K to $240K &mdash; 25% to 60% below the city
            median. For comparison, the median home in Southwest Minneapolis
            neighborhoods like Linden Hills is $700K+. The affordability gap
            between Minneapolis neighborhoods is among the widest of any major
            U.S. city, and it maps almost perfectly onto historic redlining
            boundaries.
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

                  {/* Data grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Median Home
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.medianHome}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Median Rent
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.medianRent}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Median Income
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.medianIncome}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Walk Score
                      </p>
                      <p className="text-2xl font-black text-[#0a0a0a]">
                        {n.walkScore}
                      </p>
                    </div>
                  </div>

                  <p className="text-[15px] text-[#52525b] leading-[1.85]">
                    {n.honest}
                  </p>

                  <Link
                    href={`/neighborhoods/${n.slug}`}
                    className="inline-block mt-4 text-sm font-semibold text-[#2a9d8f] hover:underline"
                  >
                    Read the full {n.name} guide &rarr;
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 bg-[#f5f5f5] p-6 mb-12">
          <h2 className="text-sm font-bold text-[#0a0a0a] mb-2">
            Affordability and Equity
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Seven of the ten neighborhoods on this list are on the North Side
            of Minneapolis. That&apos;s not a coincidence &mdash; it&apos;s the
            direct result of redlining, racial covenants, predatory lending,
            and decades of systematic disinvestment in Black communities.
            Affordable prices are not a natural market outcome; they are a
            consequence of intentional exclusion. If you buy in these
            neighborhoods, understand that history. Support existing community
            organizations. Shop at local businesses. The best thing new buyers
            can do is invest in the community, not just the property.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            First-Time Buyer?
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            If you&apos;re buying your first home in Minneapolis, our
            first-time homebuyer guide covers neighborhoods with the best value
            at every price point &mdash; including options beyond the most
            affordable tier.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/best-neighborhoods-for-first-time-homebuyers"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              First-Time Homebuyer Guide
            </Link>
            <Link
              href="/guides/best-neighborhoods"
              className="border border-white/30 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Best Neighborhoods Overall
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
