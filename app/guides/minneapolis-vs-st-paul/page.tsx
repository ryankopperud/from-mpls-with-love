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
  title: "Minneapolis vs. St. Paul: An Honest Comparison (2026)",
  description:
    "Minneapolis vs. St. Paul — an honest, detailed comparison of the Twin Cities on vibe, housing, food, nightlife, transit, cost of living, and more. No favoritism, just real talk.",
  openGraph: {
    title: "Minneapolis vs. St. Paul: An Honest Comparison (2026)",
    description:
      "An honest comparison of Minneapolis and St. Paul — vibe, neighborhoods, food, nightlife, transit, cost of living, and everything else that matters.",
    url: `${BASE_URL}/guides/minneapolis-vs-st-paul`,
    type: "article",
  },
};

const sections = [
  {
    id: "vibe",
    title: "Vibe & Culture",
    minneapolis:
      "Minneapolis is the louder, flashier twin. It has the bigger skyline, the bigger arts institutions (Walker Art Center, Guthrie Theater, MIA), and the bigger ego. The cultural identity leans progressive-corporate — Fortune 500 headquarters fund world-class arts organizations. The energy is more ambitious, more striving, more interested in being seen as a legitimate major city. The music history is real — Prince, The Replacements, Hüsker Dü, Atmosphere — and the current scene (First Avenue, 7th St Entry, Turf Club spillover) still punches above its weight. Minneapolis wants you to know it is cool.",
    stPaul:
      "St. Paul is the quieter, more confident twin. It does not need you to think it is cool. The culture is more literary (Fitzgerald grew up here), more Irish-Catholic in its bones, more neighborhood-oriented. Summit Avenue — the longest stretch of intact Victorian homes in America — tells you everything about St. Paul's relationship to its own history: it preserves things. The arts scene is smaller but arguably more interesting per capita: the Fitzgerald Theater, Penumbra Theatre (August Wilson's artistic home), the Ordway. St. Paul feels like a mid-sized city that is comfortable being a mid-sized city.",
    verdict:
      "If you want energy and ambition, Minneapolis. If you want character and comfort, St. Paul. Neither is better — they are different cities that happen to share a border.",
  },
  {
    id: "neighborhoods",
    title: "Neighborhoods & Housing",
    minneapolis:
      "Minneapolis has 87 officially designated neighborhoods, each with its own sign and identity. The range is enormous: from the $800K Craftsman bungalows of Linden Hills to the dense, diverse walk-ups of Whittier to the new-build condos of the North Loop. The median home price is around $330K (2025 data). The housing stock skews toward pre-war bungalows and four-plexes in the south and east, with newer development concentrated downtown and in the North Loop. Minneapolis has more rental inventory and more density than St. Paul, which makes it easier for young professionals but harder for families seeking affordable single-family homes.",
    stPaul:
      "St. Paul's neighborhoods feel more like small towns within a city. Summit Hill, Cathedral Hill, Highland Park, Mac-Groveland, and Crocus Hill have a cohesion and architectural consistency that most Minneapolis neighborhoods lack. The median home price is around $280K — roughly 15% lower than Minneapolis — and you get more house for the money. The Victorian and Craftsman housing stock is better preserved. The tradeoff: there is less rental inventory, fewer new-build options, and the housing market moves more slowly. St. Paul is where you buy a house and stay for 20 years.",
    verdict:
      "Minneapolis for renters, young professionals, and people who want neighborhood variety. St. Paul for buyers who want more house for less money and better-preserved architecture.",
  },
  {
    id: "food",
    title: "Food & Dining",
    minneapolis:
      "Minneapolis has the volume advantage: more restaurants, more nationally recognized chefs, more James Beard nominations. The North Loop alone (Spoon and Stable, Bar La Grassa, Demi) would be a top dining district in most American cities. Eat Street in Whittier has extraordinary ethnic food density — Vietnamese, Ethiopian, Mexican, Somali, Thai — in five walkable blocks. The brewery scene is massive (Surly, Indeed, Bauhaus, Fair State). Minneapolis dining skews newer, trendier, and more expensive.",
    stPaul:
      "St. Paul may actually have better restaurants per capita — it just does not market them as aggressively. Grand Avenue and Selby Avenue have excellent, chef-driven spots that would get breathless media coverage if they were in Minneapolis. The ethnic food is different: Hmong cuisine on University Avenue is a legitimate culinary tradition you cannot find at this depth anywhere else in America. Frogtown and the Midway have some of the best Thai, Vietnamese, and Hmong food in the Midwest. St. Paul dining is more neighborhood-oriented, less scene-oriented, and often cheaper. The tradeoff: fewer options overall, and the fine dining scene is thinner.",
    verdict:
      "Minneapolis for volume, trend, and scene. St. Paul for value, ethnic food depth (especially Hmong and Southeast Asian), and restaurants that have been excellent for decades without needing Instagram validation.",
  },
  {
    id: "nightlife",
    title: "Nightlife",
    minneapolis:
      "Minneapolis wins this one clearly. First Avenue is a world-famous music venue. The North Loop, Northeast (Stinson corridor), Uptown (diminished but still active), and the Lyn-Lake corridor provide multiple distinct nightlife districts. The brewery scene doubles as nightlife infrastructure. Late-night food options exist (barely — this is still Minnesota). The bar scene spans dive bars (Grumpy's, CC Club), cocktail bars (Marvel Bar, Tattersall), breweries, and clubs. Minneapolis has genuine nightlife energy on weekends.",
    stPaul:
      "St. Paul's nightlife is more of a pub scene than a nightlife scene — and that is fine if that is what you want. The Amsterdam, Eagle Street Grille, and the bars along West 7th have loyal regulars and genuine character. The Turf Club in the Midway is one of the best small music venues in the Midwest. But if you are looking for a night out with options, variety, and the ability to bar-hop between distinct venues, you are probably driving to Minneapolis. St. Paul's nightlife is excellent for a Tuesday drink with friends; Minneapolis's nightlife is better for a Saturday night out.",
    verdict:
      "Minneapolis, and it is not particularly close. St. Paul has great bars; Minneapolis has a nightlife scene.",
  },
  {
    id: "transit",
    title: "Walkability & Transit",
    minneapolis:
      "Minneapolis has the edge on transit infrastructure: both light rail lines (Blue and Green) have significant Minneapolis coverage, the skyway system downtown adds winter walkability, and several neighborhoods (North Loop, Whittier, Downtown East) have Walk Scores above 90. The bike infrastructure is legitimately excellent — the Midtown Greenway, the Chain of Lakes paths, and the riverfront trails make Minneapolis one of the most bikeable cities in America. The Nice Ride bike-share system is well-used.",
    stPaul:
      "St. Paul's transit relies more heavily on buses, which are functional but slower. The Green Line light rail connects downtown St. Paul to downtown Minneapolis, which is genuinely useful. Walkability is high in the core neighborhoods — Cathedral Hill, Summit Hill, and Grand Avenue are very walkable — but drops off faster in the outer neighborhoods than it does in Minneapolis. Biking infrastructure is improving but is behind Minneapolis. The tradeoff: St. Paul's smaller footprint means driving distances are shorter, so the gap in transit is less painful in daily life.",
    verdict:
      "Minneapolis for transit, biking, and walkability. St. Paul is fine if you have a car and are okay with a bus-first system.",
  },
  {
    id: "cost",
    title: "Cost of Living",
    minneapolis:
      "Minneapolis is more expensive on housing (median $330K vs. $280K), rent ($1,350 for a 1BR vs. $1,100), and dining. Property taxes are comparable. The premium is concentrated in the desirable southwest neighborhoods — Linden Hills, Fulton, Lynnhurst — where $700K buys a nice-but-not-extraordinary house. The North Loop condo market ($350K-$550K) adds another expensive tier. That said, Minneapolis is still cheap compared to coastal cities — a couple earning $120K combined can own a home in a good neighborhood.",
    stPaul:
      "St. Paul is 10-20% cheaper on housing and rent, with comparably lower restaurant and entertainment costs. The money goes further: a $350K house in Highland Park or Mac-Groveland gets you a well-maintained three-bedroom on a tree-lined street near good schools. The lower cost comes with fewer amenities — less nightlife, fewer restaurants, less dense commercial corridors — so the savings reflect a different lifestyle, not just a cheaper version of the same thing.",
    verdict:
      "St. Paul is meaningfully cheaper, especially for homebuyers. The difference is most dramatic in the family-neighborhood tier: a $500K St. Paul house often matches a $650K Minneapolis house in size, condition, and school quality.",
  },
  {
    id: "jobs",
    title: "Jobs & Economy",
    minneapolis:
      "Minneapolis is the economic engine of the region. The Fortune 500 concentration is extraordinary for a city this size: Target, UnitedHealth Group, U.S. Bancorp, Xcel Energy, and Ameriprise are all headquartered here. The downtown office market, while dealing with the same remote-work headwinds as every American city, is still the primary employment center for the metro. The tech scene is growing (particularly health tech), and the startup ecosystem is real if small. The unemployment rate hovers around 3%.",
    stPaul:
      "St. Paul has the state government (a massive employer), 3M (in adjacent Maplewood), Ecolab, and a growing health care sector. The job market is more stable and less cyclical than Minneapolis — government and health care do not have the same boom-bust cycles as corporate headquarters. The tradeoff: fewer high-paying private-sector jobs, less startup activity, and a downtown that is quieter during business hours. If you work in government, education, health care, or nonprofits, St. Paul's job market is strong.",
    verdict:
      "Minneapolis for corporate careers, tech, finance, and startups. St. Paul for government, health care, education, and stability. Many people live in one city and work in the other — the commute between downtowns is 15 minutes.",
  },
  {
    id: "parks",
    title: "Parks & Outdoors",
    minneapolis:
      "Minneapolis consistently ranks as one of the best park systems in America — first or second in the Trust for Public Land's ParkScore rankings for over a decade. The Chain of Lakes (Bde Maka Ska, Harriet, Isles, Cedar), Minnehaha Falls, Theodore Wirth Park, and the Mississippi River gorge provide an extraordinary range of urban outdoor recreation. The Grand Rounds Scenic Byway — a 50-mile loop of parks and parkways — is a national treasure. Every Minneapolis resident lives within a 10-minute walk of a park.",
    stPaul:
      "St. Paul's parks are excellent and underrated. Como Park (with the free zoo and conservatory) is a genuine gem. The river bluffs on the east side provide hiking that feels nothing like a city. Hidden Falls and Crosby Farm parks along the Mississippi are wilder and less manicured than Minneapolis's riverfront parks. Indian Mounds Park has skyline views and deep history. St. Paul's park system does not get the national rankings, but the quality is high and the crowds are lower.",
    verdict:
      "Minneapolis has the better system — more acreage, more variety, the lakes, and the Grand Rounds. But St. Paul's parks are genuinely good, less crowded, and arguably more natural-feeling.",
  },
  {
    id: "sports",
    title: "Sports",
    minneapolis:
      "Minneapolis has all four major professional sports teams: the Vikings (U.S. Bank Stadium), the Twins (Target Field), the Timberwolves and Lynx (Target Center), and Minnesota United FC (Allianz Field is technically in St. Paul, but the team is marketed as Minnesota). The Gopher athletics complex at the University of Minnesota is also in Minneapolis. Game-day culture — especially for the Vikings and Twins — creates genuine neighborhood energy in the North Loop and Downtown East.",
    stPaul:
      "St. Paul has the Wild (Xcel Energy Center), which is arguably the best fan experience of any Twin Cities pro team. Xcel Energy Center is a great hockey arena in a downtown that comes alive on game nights. The Saints (minor league baseball at CHS Field) provide a more affordable, more fun game-day experience than the Twins, honestly. Minnesota United plays at Allianz Field in the Midway neighborhood. St. Paul's sports identity is more hockey-centric, which feels right for Minnesota.",
    verdict:
      "Minneapolis has more teams. St. Paul has the Wild, which might be the best single sports experience in the metro. If you care about having walkable access to multiple stadiums, Minneapolis wins.",
  },
  {
    id: "schools",
    title: "Schools",
    minneapolis:
      "Minneapolis Public Schools (MPS) is a district in transition. The best neighborhood schools — Lake Harriet, Burroughs, Kenny, Barton Open — are genuinely strong. But the district has struggled with enrollment decline, achievement gaps, budget cuts, and the fallout from the 2022 teachers' strike. The open enrollment system means your neighborhood school is not guaranteed, which creates stress for families. Private and charter school options are abundant. Many Minneapolis families with school-age children who can afford to choose end up supplementing with private or leaving for the suburbs.",
    stPaul:
      "St. Paul Public Schools (SPPS) faces similar challenges — achievement gaps, enrollment pressure, budget concerns — but the system is structured differently. St. Paul's magnet school system is extensive and provides real choice within the public system. Central High School, Highland Park Senior High, and several magnet programs are strong. The overall district performance is comparable to Minneapolis — neither is a selling point, honestly — but the magnet system gives families more control over placement. St. Paul families seem slightly less likely to go private, though the data is mixed.",
    verdict:
      "Neither district is a clear winner. Both have excellent individual schools within struggling systems. St. Paul's magnet system may offer more reliable access to strong public schools. Minneapolis has more private and charter alternatives. If schools are your top priority, you are choosing specific schools, not districts.",
  },
];

export default function MinneapolisVsStPaulPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Minneapolis vs. St. Paul: An Honest Comparison (2026)",
      description:
        "An honest, detailed comparison of Minneapolis and St. Paul across vibe, housing, food, nightlife, transit, cost of living, and more.",
      url: `${BASE_URL}/guides/minneapolis-vs-st-paul`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Minneapolis vs. St. Paul",
        url: `${BASE_URL}/guides/minneapolis-vs-st-paul`,
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
            src="/images/hero/minneapolis-skyline-freeway-light-trails-twilight.webp"
            alt="Minneapolis skyline with freeway light trails at twilight"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Twin Cities Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Minneapolis vs. St.&nbsp;Paul
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            People who have never been here assume Minneapolis and St. Paul are
            basically the same city. They are not. They share a metro area, a
            light rail line, and a mutual passive-aggressiveness about each
            other, but they are distinct places with different vibes, different
            strengths, and different tradeoffs. This is an honest comparison
            &mdash; not a case for one over the other. We are a Minneapolis
            site, but St. Paul deserves a fair shake. It gets one here.
          </p>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717a] pt-5 border-t border-[#e4e4e7]">
            Last updated: March 2026
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-16">
        {/* Quick comparison table */}
        <div className="bg-[#f5f5f5] p-6 mb-12 overflow-x-auto">
          <h2 className="text-sm font-bold text-[#0a0a0a] mb-4">
            At a Glance
          </h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-[#e4e4e7]">
                <th className="pb-2 text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a] font-medium w-1/3"></th>
                <th className="pb-2 text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a] font-medium w-1/3">
                  Minneapolis
                </th>
                <th className="pb-2 text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a] font-medium w-1/3">
                  St. Paul
                </th>
              </tr>
            </thead>
            <tbody className="text-[#52525b]">
              <tr className="border-b border-[#e4e4e7]">
                <td className="py-2 font-semibold text-[#0a0a0a]">Population</td>
                <td className="py-2">~430,000</td>
                <td className="py-2">~310,000</td>
              </tr>
              <tr className="border-b border-[#e4e4e7]">
                <td className="py-2 font-semibold text-[#0a0a0a]">Median Home Price</td>
                <td className="py-2">~$330K</td>
                <td className="py-2">~$280K</td>
              </tr>
              <tr className="border-b border-[#e4e4e7]">
                <td className="py-2 font-semibold text-[#0a0a0a]">Median 1BR Rent</td>
                <td className="py-2">~$1,350/mo</td>
                <td className="py-2">~$1,100/mo</td>
              </tr>
              <tr className="border-b border-[#e4e4e7]">
                <td className="py-2 font-semibold text-[#0a0a0a]">Walk Score (citywide avg)</td>
                <td className="py-2">69</td>
                <td className="py-2">57</td>
              </tr>
              <tr className="border-b border-[#e4e4e7]">
                <td className="py-2 font-semibold text-[#0a0a0a]">Fortune 500 HQs</td>
                <td className="py-2">5</td>
                <td className="py-2">1 (Ecolab)</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold text-[#0a0a0a]">Vibe in 3 words</td>
                <td className="py-2">Ambitious, progressive, buzzy</td>
                <td className="py-2">Rooted, literary, unpretentious</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comparison sections */}
        <div className="space-y-14">
          {sections.map((s) => (
            <section
              key={s.id}
              className="border-b border-[#e4e4e7] pb-14"
            >
              <h2 className="text-2xl font-black text-[#0a0a0a] mb-6">
                {s.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#2a9d8f] font-medium mb-2">
                    Minneapolis
                  </p>
                  <p className="text-[15px] text-[#52525b] leading-[1.85]">
                    {s.minneapolis}
                  </p>
                </div>
                <div>
                  <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#2a9d8f] font-medium mb-2">
                    St. Paul
                  </p>
                  <p className="text-[15px] text-[#52525b] leading-[1.85]">
                    {s.stPaul}
                  </p>
                </div>
              </div>

              <div className="bg-[#f5f5f5] p-4">
                <p className="text-sm text-[#0a0a0a]">
                  <strong>The verdict:</strong>{" "}
                  <span className="text-[#52525b]">{s.verdict}</span>
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-12 bg-[#f5f5f5] p-6 mb-12">
          <h2 className="text-sm font-bold text-[#0a0a0a] mb-2">
            The Bottom Line
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed mb-4">
            Minneapolis is the better city if you value walkability, nightlife,
            dining variety, career ambition, bike infrastructure, and park
            systems. St. Paul is the better city if you value affordability,
            architectural preservation, neighborhood rootedness, ethnic food
            depth, and a quieter daily life. Many people live in one and spend
            significant time in the other &mdash; the Green Line light rail
            connects the two downtowns in about 45 minutes, and driving between
            them takes 15.
          </p>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            The real answer: visit both. Spend a Saturday on Grand Avenue in
            St. Paul and a Saturday in the North Loop in Minneapolis. You will
            know within an hour which city matches your energy.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Explore Minneapolis Neighborhoods
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            If Minneapolis sounds like your city, we have in-depth guides for
            every neighborhood &mdash; housing, restaurants, schools, parks,
            and the honest version of what it&apos;s like to live there.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/neighborhoods"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Browse All Neighborhoods
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
