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
  title: "Best Neighborhoods Near Downtown Minneapolis (2026)",
  description:
    "The best neighborhoods near downtown Minneapolis — ranked by commute time, walkability, transit access, rent/home prices, and nightlife. Honest assessments of downtown-adjacent living.",
  openGraph: {
    title: "Best Neighborhoods Near Downtown Minneapolis (2026)",
    description:
      "The best neighborhoods near downtown Minneapolis — commute times, transit access, nightlife, and honest assessments of what it's like to live at the city's center.",
    url: `${BASE_URL}/guides/best-neighborhoods-near-downtown`,
    type: "article",
  },
  alternates: { canonical: "/guides/best-neighborhoods-near-downtown" },
};

const neighborhoods = [
  {
    rank: 1,
    name: "North Loop",
    slug: "north-loop",
    commuteWalk: "5-15 min",
    commuteBike: "3-8 min",
    commuteTransit: "5-10 min (Blue/Green Line)",
    walkScore: 95,
    medianPrice: "$350K–$550K (condos)",
    nightlife: "Excellent",
    honest:
      "The North Loop is downtown-adjacent living at its best — close enough to walk to any downtown office in 15 minutes or less, far enough to feel like a distinct neighborhood. The Blue and Green light rail lines stop within the neighborhood, putting Target Field, US Bank Stadium, and the Government Center transit hub at your doorstep. The restaurant and bar scene — Bar La Grassa, Spoon and Stable, Marvel Bar, The Loop — means you don't need to leave the neighborhood for a high-quality night out. The riverfront trails provide morning runs and evening walks. The tradeoff: you're paying for it. Condos start around $350K and go well north of $500K, with HOA fees running $200-$600/month. The neighborhood is almost entirely condos and apartments — no houses, no yards. And the polish can feel sterile. The North Loop is for people who want urban convenience without urban grit, and are willing to pay a premium for that combination.",
  },
  {
    rank: 2,
    name: "Downtown East",
    slug: "downtown-east",
    commuteWalk: "0-10 min",
    commuteBike: "0-5 min",
    commuteTransit: "0-5 min (Blue/Green Line hub)",
    walkScore: 95,
    medianPrice: "$300K–$500K (condos)",
    nightlife: "Good (event-driven)",
    honest:
      "Downtown East is downtown — not near it, in it. The commute to any downtown office is measured in blocks, not miles. The Government Plaza and US Bank Stadium light rail stations make this the transit hub of the entire metro. The skyway system adds climate-controlled walkability that no other neighborhood can offer. Cultural anchors are exceptional: the Guthrie Theater, Mill City Museum, Stone Arch Bridge, and Gold Medal Park. New residential construction has added modern inventory. The tradeoff: Downtown East still feels more like a district than a neighborhood. The residential population is growing but thin. After business hours and outside of event days (Vikings games, concerts at the Armory), foot traffic drops sharply. Nightlife is concentrated on event nights; a random Tuesday evening can feel empty. Living here is ideal for someone who works downtown, values transit access above all else, and doesn't need the neighborhood to provide community — because that's still developing.",
  },
  {
    rank: 3,
    name: "Downtown West",
    slug: "downtown-west",
    commuteWalk: "0-10 min",
    commuteBike: "0-5 min",
    commuteTransit: "0-5 min (Nicollet Mall, multiple bus lines)",
    walkScore: 97,
    medianPrice: "$250K–$450K (condos)",
    nightlife: "Good",
    honest:
      "Downtown West is the commercial core of Minneapolis — Nicollet Mall, the IDS Center, Target headquarters, and the Hennepin Theatre District are all here. The Walk Score of 97 is the highest in Minneapolis, reflecting the sheer density of services within walking distance. The Nicollet Mall bus transitway, multiple regular bus routes, and proximity to light rail stations make this the most transit-connected neighborhood in the city. The condo inventory spans a wide price range, from studio apartments in older buildings to luxury high-rises. The tradeoff: this is a business district first and a neighborhood second. The population empties out after 6 PM on weekdays and on weekends. The nightlife exists but is concentrated around Hennepin Avenue and First Avenue, and it's more 'going out downtown' than 'walking to your neighborhood bar.' Grocery options are limited — you're relying on Target and convenience stores for most food shopping. Downtown West works best for someone whose office is here, who travels frequently, and who wants to walk to work in 5 minutes and take the light rail to the airport.",
  },
  {
    rank: 4,
    name: "Loring Park",
    slug: "loring-park",
    commuteWalk: "10-20 min",
    commuteBike: "5-10 min",
    commuteTransit: "10-15 min (Route 4, 6, 12)",
    walkScore: 93,
    medianPrice: "$200K–$400K (condos)",
    nightlife: "Moderate-Good",
    honest:
      "Loring Park is downtown-adjacent with a crucial distinction: it has a 34-acre park as its centerpiece rather than office towers. That park — with its lake, walking paths, summer music series, and winter ice skating — gives the neighborhood a livability that the downtown core lacks. The Walker Art Center and Minneapolis Sculpture Garden are at the neighborhood's western edge. The walk to downtown offices is 10-20 minutes depending on your block. Bus routes on Hennepin and Lyndale connect to downtown and Uptown. Condo prices are notably lower than the North Loop, making this the most affordable downtown-adjacent option for buyers. The tradeoff: the neighborhood's north edge along Hennepin Avenue can feel rough. The residential population is transient — high renter turnover means less community cohesion than established neighborhoods. The park itself has experienced safety concerns, particularly after dark. Loring Park is the right choice for someone who wants park-adjacent downtown living at a lower price point and accepts the tradeoffs of an urban park neighborhood.",
  },
  {
    rank: 5,
    name: "Elliot Park",
    slug: "elliot-park",
    commuteWalk: "5-15 min",
    commuteBike: "3-8 min",
    commuteTransit: "5-10 min (multiple bus routes)",
    walkScore: 90,
    medianPrice: "$225K–$375K (condos)",
    nightlife: "Emerging",
    honest:
      "Elliot Park is the downtown-adjacent neighborhood undergoing the most dramatic transformation in Minneapolis. The Wells Fargo campus, new apartment construction, and the continued development around the convention center are reshaping what was historically one of the grittiest downtown neighborhoods. The commute to any downtown destination is short — walk, bike, or bus, you're there in under 15 minutes. Prices remain lower than the North Loop or Downtown East, making it one of the more affordable options for downtown-proximate living. The tradeoff: Elliot Park is honest about its challenges in a way that polished neighborhood guides often aren't. Homelessness is visible. The neighborhood has higher crime rates than the North Loop or Loring Park. The amenity density is improving but still thin — you're not walking to a strip of boutiques and wine bars. This is a neighborhood for people with urban tolerance who see the trajectory, not just the current state, and who want downtown access without downtown prices.",
  },
  {
    rank: 6,
    name: "Stevens Square",
    slug: "stevens-square",
    commuteWalk: "10-20 min",
    commuteBike: "5-10 min",
    commuteTransit: "10-15 min (Route 18, Nicollet Ave buses)",
    walkScore: 92,
    medianPrice: "$850–$1,100/mo (1BR rent)",
    nightlife: "Moderate (adjacent to Eat Street)",
    honest:
      "Stevens Square is the most affordable neighborhood within walking distance of downtown Minneapolis. The rents — $850-$1,100 for a one-bedroom — are $200-$400 below comparable downtown-adjacent neighborhoods. The Walk Score of 92 reflects the central location: downtown is a 10-20 minute walk north, Eat Street (Nicollet Avenue) is immediately east, and the convention center is adjacent. The neighborhood is small — just a few blocks — but packed with older apartment buildings that keep the rental inventory high and prices competitive. The tradeoff: Stevens Square has the highest crime rate of any neighborhood on this list. The streets can feel unsafe after dark, and the amenity density within the neighborhood itself is low — you're walking to Whittier or downtown for restaurants and services. This is a location play for budget-conscious renters who prioritize proximity to downtown and Eat Street over neighborhood polish. If you're comfortable with the tradeoffs of a genuinely urban environment, the value is real.",
  },
  {
    rank: 7,
    name: "Marcy-Holmes",
    slug: "marcy-holmes",
    commuteWalk: "10-20 min (via Stone Arch Bridge)",
    commuteBike: "5-10 min",
    commuteTransit: "10-15 min (Green Line, Route 6)",
    walkScore: 82,
    medianPrice: "$275K–$400K",
    nightlife: "Moderate",
    honest:
      "Marcy-Holmes offers something no other downtown-adjacent neighborhood can: the Stone Arch Bridge commute. Walking or biking across the bridge to downtown is one of the best urban commutes in America — the Mississippi River gorge, St. Anthony Falls, and the downtown skyline all in a 10-minute crossing. The Green Line light rail stops at the edge of the neighborhood, adding transit options. St. Anthony Main on the riverfront has restaurants and a movie theater. The neighborhood is primarily rental, with a mix of student housing near the U of M campus and nicer residential blocks near the river. The tradeoff: the neighborhood is bifurcated. The blocks near the river are genuinely appealing for downtown commuters; the blocks near campus are noisy, student-oriented, and feel like a different neighborhood. Target the area between University Avenue and the river for the best downtown-adjacent experience. Southeast of the Stone Arch Bridge is the sweet spot: riverfront access, downtown views, and a 10-minute bridge walk to work.",
  },
  {
    rank: 8,
    name: "Lowry Hill East",
    slug: "lowry-hill-east",
    commuteWalk: "15-25 min",
    commuteBike: "8-12 min",
    commuteTransit: "12-18 min (Route 6, 12, Hennepin Ave buses)",
    walkScore: 90,
    medianPrice: "$1,100–$1,500/mo (1BR rent)",
    nightlife: "Very Good",
    honest:
      "Lowry Hill East — The Wedge — is the furthest neighborhood on this list from downtown, but it earns its spot because the commute is offset by the best neighborhood-level nightlife and dining of any downtown-adjacent option. The Hennepin and Lyndale corridors have bars, restaurants, and entertainment venues (Bryant Lake Bowl, Jungle Theater) that mean you never need to go downtown for a night out. The Walker Art Center is adjacent. The Bike Score of 95 makes the downtown commute fast and pleasant. The tradeoff: 15-25 minutes walking to downtown is real, and in January at -10F, that walk feels long. The transit options — Hennepin Avenue buses — are decent but not light rail. The neighborhood is dense, loud, and parking is terrible. For people who want to live in a lively neighborhood that happens to be near downtown, rather than living near downtown and looking for things to do, The Wedge is the pick.",
  },
  {
    rank: 9,
    name: "Cedar-Riverside",
    slug: "cedar-riverside",
    commuteWalk: "10-20 min",
    commuteBike: "5-10 min",
    commuteTransit: "5-10 min (Green/Blue Line at West Bank station)",
    walkScore: 85,
    medianPrice: "$175K–$300K",
    nightlife: "Niche (music venues)",
    honest:
      "Cedar-Riverside is downtown-adjacent with a character unlike any other Minneapolis neighborhood. Known as the West Bank, it's the home of the Somali diaspora community, the University of Minnesota's West Bank campus, and a historic music scene (the Cedar Cultural Center, Palmer's Bar). The West Bank light rail station puts both lines — Blue and Green — within walking distance, making the transit access exceptional. Housing costs are the lowest on this list. The tradeoff: Cedar-Riverside is the most economically challenged neighborhood near downtown. The Riverside Plaza towers house a large immigrant population with limited resources. Crime is higher than most neighborhoods on this list. The nightlife is niche — if you love live music and global food, it's excellent; if you want cocktail bars and gastropubs, look elsewhere. Cedar-Riverside is for people who value cultural authenticity, transit access, and affordability, and who are comfortable in a neighborhood that doesn't look or feel like a brochure.",
  },
  {
    rank: 10,
    name: "Nicollet Island",
    slug: "nicollet-island",
    commuteWalk: "5-15 min",
    commuteBike: "3-8 min",
    commuteTransit: "10-15 min (Hennepin Ave bridge to bus/rail)",
    walkScore: 75,
    medianPrice: "$350K–$600K",
    nightlife: "Low (quiet by design)",
    honest:
      "Nicollet Island is the most unusual downtown-adjacent neighborhood in Minneapolis — a literal island in the Mississippi River, connected to downtown by the Hennepin Avenue Bridge. The residential population is tiny: a handful of renovated historic homes and one condo building. The setting is extraordinary — mature trees, limestone bluffs, the Nicollet Island Inn, and views of St. Anthony Falls and the downtown skyline. The commute to downtown is a 5-15 minute walk across the bridge. The tradeoff: Nicollet Island barely functions as a neighborhood in the traditional sense. There are no grocery stores, no commercial services, no daily-errand infrastructure. The housing inventory is extremely limited, and turnover is rare. This is a novelty pick — an extraordinary place to live if a unit becomes available and you're willing to cross a bridge for every errand. For most downtown workers, the other neighborhoods on this list are more practical. But for the person who wants to live on a wooded island 5 minutes from a downtown office, nothing else in Minneapolis competes.",
  },
];

export default function NearDowntownPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Best Neighborhoods Near Downtown Minneapolis (2026)",
      description:
        "The best neighborhoods near downtown Minneapolis — ranked by commute time, walkability, transit access, rent and home prices, and nightlife.",
      url: `${BASE_URL}/guides/best-neighborhoods-near-downtown`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best Neighborhoods Near Downtown",
        url: `${BASE_URL}/guides/best-neighborhoods-near-downtown`,
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
            src="/images/neighborhoods/downtown-minneapolis-skyways-dusk.webp"
            alt="Downtown Minneapolis skyways at dusk"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Best Neighborhoods Near Downtown
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Downtown Minneapolis has 180,000+ jobs, two light rail lines, the
            best restaurant scene in the state, and a skyway system that
            connects 80 blocks of climate-controlled walking. Living near it
            &mdash; or in it &mdash; eliminates commute stress and puts you at
            the center of the city&apos;s cultural, dining, and nightlife
            infrastructure. Here are the 10 best neighborhoods for
            downtown-adjacent living, ranked by commute time, transit access,
            price, and honest livability.
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

                  {/* Data grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Walk to Downtown
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.commuteWalk}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Bike to Downtown
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.commuteBike}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Transit
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.commuteTransit}
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
                        Median Price
                      </p>
                      <p className="text-lg font-black text-[#0a0a0a]">
                        {n.medianPrice}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Nightlife
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.nightlife}
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
            The Winter Commute Factor
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Commute times in this guide assume fair weather. In January, a
            15-minute walk becomes a 20-minute slog through wind chill that
            can hit -30F. The skyway system mitigates this for neighborhoods
            that connect to it (Downtown West, Downtown East, and parts of
            the North Loop). For neighborhoods outside the skyway, winter
            commuting favors transit and biking (with proper gear) over
            walking. If you work downtown and plan to live car-free, proximity
            and transit access matter more in Minneapolis than in cities
            without real winters.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Beyond Downtown
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Not everyone wants to live near downtown &mdash; and that&apos;s
            one of the best things about Minneapolis. Our other guides cover
            lake neighborhoods, bikeable neighborhoods, and the best overall
            picks across the city.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/best-neighborhoods"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Best Neighborhoods Overall
            </Link>
            <Link
              href="/guides/most-walkable-neighborhoods"
              className="border border-white/30 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Most Walkable Neighborhoods
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
