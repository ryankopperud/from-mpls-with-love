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
  title: "Best Neighborhoods for First-Time Homebuyers in Minneapolis (2026)",
  description:
    "The best Minneapolis neighborhoods for first-time homebuyers, ranked by median home price, appreciation potential, housing stock quality, and walkability. Realistic price ranges and honest tradeoffs.",
  openGraph: {
    title:
      "Best Neighborhoods for First-Time Homebuyers in Minneapolis (2026)",
    description:
      "The best Minneapolis neighborhoods for first-time buyers — realistic prices, appreciation potential, and honest tradeoffs for every budget.",
    url: `${BASE_URL}/guides/best-neighborhoods-for-first-time-homebuyers`,
    type: "article",
  },
  alternates: { canonical: "/guides/best-neighborhoods-for-first-time-homebuyers" },
};

const neighborhoods = [
  {
    rank: 1,
    name: "Longfellow",
    slug: "longfellow",
    medianHome: "$310K-$375K",
    priceTrend: "Up 4-6% annually",
    housingStock: "1920s-1940s bungalows, Cape Cods",
    walkScore: 73,
    appreciation: "Strong",
    honest:
      "Longfellow is the best first-time buyer neighborhood in Minneapolis because it combines affordability, quality housing stock, strong appreciation potential, and genuine neighborhood character. The homes are primarily 1920s-1940s bungalows and Cape Cods — well-built with hardwood floors, plaster walls, and the kind of architectural detail that new construction can't replicate. At $310K-$375K, you're getting a real house with a yard in a neighborhood with Minnehaha Falls, the Midtown Greenway, and the Blue Line light rail (46th St station). Appreciation has been strong and steady — 4-6% annually — driven by the neighborhood's fundamentals rather than speculation. The tradeoff: Longfellow was hit hard in 2020. Parts of Lake Street are still rebuilding. Crime is higher than Southwest Minneapolis. Some first-time buyers are nervous about those realities. But the community's response — rebuilding, organizing, investing — has been extraordinary, and the values reflect a discount that may not last.",
  },
  {
    rank: 2,
    name: "Nokomis",
    slug: "nokomis",
    medianHome: "$300K-$450K",
    priceTrend: "Up 3-5% annually",
    housingStock: "1940s-1960s ramblers, bungalows",
    walkScore: 70,
    appreciation: "Steady",
    honest:
      "Nokomis gives first-time buyers something rare: lake access at a first-time-buyer price. Lake Nokomis beach, the parkway trails, and the community center provide year-round amenity value that the Southwest lake neighborhoods charge $200K-$400K more for. The housing stock is solid mid-century — ramblers and bungalows that are easy to maintain and update. The price range ($300K-$450K) is wide, with the most affordable options in the southern part of the neighborhood and the most expensive closer to the lake and 50th Street. Appreciation has been steady but not explosive, which is actually good news for first-time buyers — you're not overpaying at the peak of a hype cycle. The tradeoff: the wide price range means your experience varies significantly by block. The $300K homes may need $30K-$50K in updates. The commercial options along 50th Street are thin. You'll need a car for most errands.",
  },
  {
    rank: 3,
    name: "Powderhorn Park",
    slug: "powderhorn-park",
    medianHome: "$250K-$350K",
    priceTrend: "Up 3-7% annually (volatile)",
    housingStock: "Pre-war duplexes, foursquares, bungalows",
    walkScore: 76,
    appreciation: "High potential, higher risk",
    honest:
      "Powderhorn offers the most house for the money of any neighborhood with genuine cultural identity in Minneapolis. The housing stock is diverse — duplexes, foursquares, bungalows, and some Victorian-era homes — and much of it has real architectural character. At $250K-$350K, you can buy a 3-bedroom home or a duplex where rental income offsets your mortgage. The Midtown Global Market, Lake Street commercial corridor, and the lake itself provide walkable infrastructure. The community is diverse, engaged, and politically active. The tradeoff: Powderhorn's appreciation has been volatile. Prices dipped after 2020, recovered, and are now climbing — but the trajectory is less predictable than Longfellow or Nokomis. Crime is meaningfully higher than the South Minneapolis neighborhoods ranked below it. Some blocks are thriving; others are struggling. First-time buyers in Powderhorn need to visit multiple times, at different times of day, and be honest about their comfort level with urban complexity.",
  },
  {
    rank: 4,
    name: "Seward",
    slug: "seward",
    medianHome: "$290K-$380K",
    priceTrend: "Up 4-5% annually",
    housingStock: "Mix of bungalows, duplexes, some newer",
    walkScore: 80,
    appreciation: "Steady-strong",
    honest:
      "Seward is the first-time buyer neighborhood for people who care more about community than square footage. The homes tend to be smaller than Longfellow or Nokomis — more 2-bedroom bungalows than 3-bedroom ramblers — but the neighborhood's walkability, co-op culture, and river access create a quality of life that square footage can't buy. The Seward Co-op is a genuine daily-life amenity. The Mississippi River gorge trails are extraordinary. The Franklin Avenue corridor provides services and transit. Appreciation has been steady, driven by the neighborhood's desirability among a specific demographic: progressive, community-oriented, food-conscious buyers in their late 20s to early 40s. The tradeoff: the housing stock is limited, and competition for well-maintained homes is fierce. You may need to compromise on size, condition, or both. Duplexes are available but often need significant investment. If you're handy and community-oriented, Seward rewards the effort.",
  },
  {
    rank: 5,
    name: "Standish",
    slug: "standish",
    medianHome: "$280K-$360K",
    priceTrend: "Up 3-5% annually",
    housingStock: "1920s-1950s bungalows, some duplexes",
    walkScore: 68,
    appreciation: "Steady",
    honest:
      "Standish is one of the most undervalued neighborhoods in South Minneapolis. The housing stock is similar to Longfellow's — solid pre-war bungalows with hardwood floors and good bones — but prices are $20K-$40K lower because Standish lacks Longfellow's headline amenity (Minnehaha Falls) and commercial identity. What you get instead is a quiet, stable residential neighborhood with Standish-Ericsson Park, the Hiawatha LRT corridor nearby, and a community that has invested steadily in its housing stock. The tradeoff: Standish has no commercial center and no walkable destination. Your daily errands require driving to Lake Street, 38th Street, or Minnehaha Avenue. The neighborhood is more diverse than the Southwest but less vibrant than Powderhorn or Longfellow. Standish is the first-time buyer choice for people who prioritize the house itself — quality construction, reasonable price, quiet street — over neighborhood amenities.",
  },
  {
    rank: 6,
    name: "Kingfield",
    slug: "kingfield",
    medianHome: "$325K-$450K",
    priceTrend: "Up 4-6% annually",
    housingStock: "1910s-1940s bungalows, foursquares",
    walkScore: 78,
    appreciation: "Strong",
    honest:
      "Kingfield straddles the line between 'first-time buyer neighborhood' and 'neighborhood you aspire to but can't quite afford.' The lower end of the range ($325K-$375K) is accessible for first-time buyers with solid income, and you get a lot for it: Nicollet Avenue walkability, the Kingfield Farmers Market, Martin Luther King Park, and a community that is more diverse and more interesting than the Southwest neighborhoods at a $200K discount. Appreciation has been strong — Kingfield is one of the neighborhoods that benefited from buyers seeking an alternative to Uptown's struggles. The tradeoff: the homes that sell for $325K tend to need work. The move-in-ready houses are $400K+. If your budget is $350K, you're buying a house that needs a new kitchen or a new roof, and you need to factor that into your total cost. First-time buyers who are handy or willing to live with cosmetic issues will find Kingfield is an excellent long-term investment.",
  },
  {
    rank: 7,
    name: "Hale",
    slug: "hale",
    medianHome: "$310K-$420K",
    priceTrend: "Up 3-4% annually",
    housingStock: "1920s-1950s bungalows, Cape Cods",
    walkScore: 65,
    appreciation: "Steady",
    honest:
      "Hale is the quiet, practical first-time buyer choice. The housing stock is modest and well-maintained — 2-3 bedroom bungalows and Cape Cods that are the kind of homes people buy, raise families in, and stay in for 20 years. Prices in the $310K-$380K range get you a solid home on a quiet street with low crime and good park access. Appreciation is steady but not spectacular — Hale doesn't have the hype drivers (lake, commercial corridor, brewery district) that generate rapid price increases. That stability is actually a benefit for first-time buyers: you're not overpaying at the top of a speculative market. The tradeoff: Hale is boring by design. There's no commercial center, no walkable nightlife, no cultural identity beyond 'nice place to live.' If you need your neighborhood to be a source of identity and social life, Hale won't deliver. If you need a safe, affordable house on a quiet street as a foundation for the next decade, it will.",
  },
  {
    rank: 8,
    name: "Diamond Lake",
    slug: "diamond-lake",
    medianHome: "$300K-$400K",
    priceTrend: "Up 3-4% annually",
    housingStock: "1940s-1960s ramblers, split-levels",
    walkScore: 60,
    appreciation: "Steady",
    honest:
      "Diamond Lake is where first-time buyers land when they've been outbid in Kingfield and Longfellow. The homes are slightly newer (1940s-1960s ramblers and split-levels rather than pre-war bungalows), which means lower maintenance costs, more functional floor plans, and less charm. At $300K-$360K, you're getting a 3-bedroom home with a garage in a low-crime neighborhood in South Minneapolis — and in the current market, that's a genuinely good deal. The neighborhood borders Richfield, and the southern blocks have a decidedly suburban character. The tradeoff: Diamond Lake has the thinnest commercial infrastructure and lowest walkability of any neighborhood on this list. You need a car. The neighborhood lacks a defining identity. But for first-time buyers who are realistic about their budget and prioritize the house over the neighborhood, Diamond Lake delivers solid fundamentals at a fair price.",
  },
  {
    rank: 9,
    name: "Bancroft",
    slug: "bancroft",
    medianHome: "$265K-$340K",
    priceTrend: "Up 4-6% annually",
    housingStock: "Pre-war bungalows, some duplexes",
    walkScore: 72,
    appreciation: "Strong (undervalued)",
    honest:
      "Bancroft is arguably the most undervalued neighborhood in Minneapolis for first-time buyers. The housing stock is solid pre-war construction similar to Longfellow and Standish, but prices are $30K-$60K lower. Bloomington Avenue provides a walkable corridor with bus transit. The neighborhood is diverse — growing Latino, Somali, and East African communities alongside longtime homeowners. Chicago Avenue adds additional commercial options. At $265K-$340K, a 3-bedroom bungalow is realistic for buyers with household income in the $70K-$90K range. Appreciation has been strong, suggesting the market is recognizing Bancroft's value. The tradeoff: crime is higher than Hale or Diamond Lake, particularly along the commercial corridors. Some blocks are well-maintained; others show deferred maintenance. Bancroft doesn't have a reputation — positive or negative — which means you're buying a house, not a brand. For first-time buyers focused on value per dollar, that's an advantage.",
  },
  {
    rank: 10,
    name: "Corcoran",
    slug: "corcoran",
    medianHome: "$250K-$330K",
    priceTrend: "Up 5-8% annually",
    housingStock: "Pre-war bungalows, duplexes, some new infill",
    walkScore: 70,
    appreciation: "Strong (highest appreciation on list)",
    honest:
      "Corcoran is the highest-risk, highest-reward neighborhood on this list. Located just south of Lake Street between Longfellow and Powderhorn, it was one of the neighborhoods most directly affected by the 2020 unrest and the subsequent rebuilding. Prices dipped and then recovered sharply — the 5-8% annual appreciation reflects real investment and genuine demand, not speculation. New infill construction is appearing alongside rehabbed pre-war homes. The Midtown Greenway runs along the northern edge. East Lake Street provides commercial access and transit. The tradeoff: Corcoran's crime rates are higher than anything else on this list except Powderhorn. The 2020 scars are still visible — vacant lots, rebuilt storefronts, a community that is resilient but still healing. Buying in Corcoran is a bet on continued recovery and appreciation. The early data suggests that bet is paying off, but it's not a sure thing. First-time buyers here need to be comfortable with uncertainty and genuinely invested in the community's trajectory.",
  },
];

export default function FirstTimeBuyersPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title:
        "Best Neighborhoods for First-Time Homebuyers in Minneapolis (2026)",
      description:
        "The best Minneapolis neighborhoods for first-time homebuyers, ranked by median home price, appreciation potential, housing stock quality, and walkability.",
      url: `${BASE_URL}/guides/best-neighborhoods-for-first-time-homebuyers`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best for First-Time Homebuyers",
        url: `${BASE_URL}/guides/best-neighborhoods-for-first-time-homebuyers`,
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
            src="/images/neighborhoods/cozy-minneapolis-home-interior-fireplace.webp"
            alt="Cozy Minneapolis home interior with fireplace"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Best Neighborhoods for First-Time Homebuyers
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Buying your first home in Minneapolis means navigating a market
            where $250K and $750K homes are sometimes two miles apart. The good
            news: Minneapolis still has neighborhoods where first-time buyers
            can get a solid house with real appreciation potential. The honest
            news: the best values come with tradeoffs &mdash; higher crime,
            fewer amenities, or a house that needs work. Here are the 10 best
            neighborhoods for first-time buyers, ranked by the combination of
            price, housing quality, appreciation potential, and livability.
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
            First-Time Buyer Context
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            The median first-time buyer in Minneapolis has a household income
            of $75K-$95K and a budget of $275K-$375K. At current rates, that
            translates to a monthly payment (PITI) of $2,000-$2,700. Every
            neighborhood on this list has homes available in that range.
            Minnesota also offers first-time buyer programs through Minnesota
            Housing &mdash; down payment assistance, below-market rates, and
            tax credits &mdash; that can meaningfully reduce your costs. Check
            mnhousing.gov before you start shopping.
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
                        Price Trend
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.priceTrend}
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
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Appreciation
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.appreciation}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#71717a] mb-3">
                    <strong className="text-[#0a0a0a]">
                      Housing stock:
                    </strong>{" "}
                    {n.housingStock}
                  </p>

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
            A Note on Inspections
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Many homes on this list are pre-war construction &mdash; which
            means potential issues with knob-and-tube wiring, galvanized
            plumbing, foundation settling, and lead paint. A thorough
            inspection is non-negotiable. Budget $500-$700 for a general
            inspection and consider adding a sewer scope ($150-$250) for any
            home built before 1960. The inspection isn&apos;t just about
            finding problems &mdash; it&apos;s about understanding what
            maintenance and investment the house will need over the next 5-10
            years so you can make an informed decision.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Explore Every Neighborhood
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Each neighborhood on this list has a full in-depth guide covering
            restaurants, schools, real estate trends, and the honest version
            of daily life. And if budget is your primary concern, check our
            affordability guide for neighborhoods under $250K.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/most-affordable-neighborhoods"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Most Affordable Neighborhoods
            </Link>
            <Link
              href="/neighborhoods"
              className="border border-white/30 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Browse All Neighborhoods
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
