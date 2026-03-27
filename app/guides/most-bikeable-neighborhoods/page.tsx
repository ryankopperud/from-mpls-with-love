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
  title: "Most Bikeable Neighborhoods in Minneapolis (2026)",
  description:
    "The most bikeable neighborhoods in Minneapolis — ranked by Bike Score, trail access, bike infrastructure, and bike commute rates. Minneapolis is one of America's best biking cities. Here's where to live if you ride.",
  openGraph: {
    title: "Most Bikeable Neighborhoods in Minneapolis (2026)",
    description:
      "The most bikeable Minneapolis neighborhoods — Bike Scores, trail access, infrastructure, and honest assessments of year-round cycling life.",
    url: `${BASE_URL}/guides/most-bikeable-neighborhoods`,
    type: "article",
  },
};

const neighborhoods = [
  {
    rank: 1,
    name: "Lowry Hill East",
    slug: "lowry-hill-east",
    bikeScore: 95,
    bikeCommute: "~12%",
    keyTrails: "Midtown Greenway, Kenilworth Trail, Cedar Lake Trail",
    infrastructure: "Excellent — bike lanes on multiple streets, Greenway access",
    honest:
      "The Wedge has the highest Bike Score in Minneapolis because the infrastructure is exceptional and the distances are short. The Midtown Greenway — a grade-separated, car-free bike highway that runs 5.5 miles from the Chain of Lakes to the Mississippi River — is accessible from the neighborhood's southern edge. The Kenilworth Trail connects north to Cedar Lake and the Chain of Lakes. Bike lanes on Bryant, Blaisdell, and 1st Avenue provide direct routes to downtown. The neighborhood is flat, compact, and dense enough that biking is faster than driving for virtually every trip. The bike commute rate of roughly 12% is among the highest in the city. The tradeoff: the same density that makes biking convenient makes parking terrible, which reinforces the bike-first culture in a virtuous cycle. Winter biking here is very doable — the Greenway gets plowed, and the distances are short enough that even a 10F commute is manageable. If you want to live car-free in Minneapolis and biking is your primary mode, Lowry Hill East is the best neighborhood in the city for it.",
  },
  {
    rank: 2,
    name: "North Loop",
    slug: "north-loop",
    bikeScore: 93,
    bikeCommute: "~10%",
    keyTrails: "Cedar Lake Trail, Mississippi River Trail, Bassett Creek Trail",
    infrastructure: "Excellent — protected lanes, trail connections, Nice Ride stations",
    honest:
      "The North Loop's Bike Score of 93 reflects both excellent infrastructure and proximity to the best trail connections in the city. The Cedar Lake Trail, which begins at the neighborhood's western edge, provides a completely car-free route to the Chain of Lakes, Theodore Wirth Park, and the western suburbs. The Mississippi River Trail runs along the neighborhood's north and east edges. Protected bike lanes on Washington Avenue and 1st Avenue North connect to the downtown grid. Nice Ride bike-share stations are abundant. The tradeoff: the North Loop is flat and easy to bike, but the trail connections are better for recreational riding and commuting west than for commuting to destinations south or east. The Hennepin Avenue Bridge provides the main bike connection to Northeast Minneapolis, and it can be stressful during peak hours. Winter biking is feasible — the Cedar Lake Trail gets plowed, and the distances to downtown destinations are minimal. For people who work downtown and want world-class trail access in their backyard, the North Loop delivers.",
  },
  {
    rank: 3,
    name: "Longfellow",
    slug: "longfellow",
    bikeScore: 90,
    bikeCommute: "~11%",
    keyTrails: "Midtown Greenway, Minnehaha Trail, West River Parkway, Grand Rounds",
    infrastructure: "Very Good — Greenway access, residential bike streets, river trails",
    honest:
      "Longfellow is where Minneapolis's trail system comes together. The Midtown Greenway runs east-west through the neighborhood, connecting to the Chain of Lakes in one direction and the Mississippi River in the other. The Minnehaha Trail runs north-south along Minnehaha Creek. West River Parkway provides a scenic river route. The Grand Rounds Scenic Byway — the 51-mile network connecting all of Minneapolis's major parks and lakes — passes through. The result is a neighborhood where you can bike to any part of the city on dedicated trails, with minimal street riding. The bike commute to downtown is about 20 minutes via the Greenway or 25 minutes along the river — both are excellent rides. The tradeoff: Longfellow is big enough that internal bikeability varies. The blocks near the Greenway and Minnehaha Parkway are the most connected; the blocks near Lake Street are more car-oriented. The 46th Street Blue Line station adds a bike-to-rail multimodal option for longer trips. For trail-centric cyclists who want distance riding built into their daily routine, Longfellow is the best neighborhood in the city.",
  },
  {
    rank: 4,
    name: "Whittier",
    slug: "whittier",
    bikeScore: 90,
    bikeCommute: "~10%",
    keyTrails: "Midtown Greenway (southern border), Nicollet Ave, Lyndale Ave",
    infrastructure: "Very Good — Greenway, bike lanes, high cyclist density",
    honest:
      "Whittier's bikeability is driven by the Midtown Greenway along its southern border and the neighborhood's central location, which puts most Minneapolis destinations within a 15-minute ride. The Greenway connects you to Uptown and the lakes heading west, and to Longfellow and the river heading east. Nicollet Avenue and Lyndale Avenue have bike-friendly infrastructure, and the residential streets in between are low-traffic and pleasant for riding. The high Walk Score (93) means many trips don't require biking at all, but when you do ride, the infrastructure supports it. The tradeoff: Whittier is dense and the streets can feel crowded with cars, buses, pedestrians, and other cyclists competing for space. The Nicollet and Lyndale corridors are heavily trafficked, and biking on them during rush hour requires confidence. The Greenway is the escape valve — once you're on it, you're in a car-free corridor. For urban cyclists who are comfortable riding in mixed traffic and want maximum accessibility to the rest of the city, Whittier's location is hard to beat.",
  },
  {
    rank: 5,
    name: "Downtown East",
    slug: "downtown-east",
    bikeScore: 90,
    bikeCommute: "~8%",
    keyTrails: "Mississippi River Trail, Stone Arch Bridge, Mill Ruins Park trails",
    infrastructure: "Very Good — protected lanes, Nice Ride, trail connections",
    honest:
      "Downtown East's Bike Score of 90 reflects infrastructure investment: protected bike lanes on Washington Avenue and Portland Avenue, Nice Ride stations on nearly every block, and direct trail connections via the Stone Arch Bridge and the Mississippi River Trail. The Stone Arch Bridge is one of the most iconic bike commute routes in America — the view of St. Anthony Falls and the skyline from the bridge is reason enough to bike to work. The tradeoff: Downtown East's bikeability is optimized for commuting, not recreational riding. You can easily bike to work, but the trail connections for longer recreational rides require crossing downtown to reach the Cedar Lake Trail or heading south to reach the Greenway. The downtown street grid can feel hostile during peak hours, with bus traffic, turning vehicles, and construction. The Nice Ride stations make short trips easy, and the protected lanes are genuinely good. For downtown workers who want to bike-commute from within downtown and connect to the riverfront trail system, Downtown East is excellent.",
  },
  {
    rank: 6,
    name: "South Uptown",
    slug: "south-uptown",
    bikeScore: 88,
    bikeCommute: "~11%",
    keyTrails: "Midtown Greenway, Bde Maka Ska loop, Chain of Lakes Grand Rounds",
    infrastructure: "Very Good — Greenway access, lake trails, residential bike streets",
    honest:
      "South Uptown sits at the intersection of two of Minneapolis's best bike corridors: the Midtown Greenway (east-west) and the Chain of Lakes trail system (north-south). This means you can bike to downtown via the Greenway in 15 minutes, or bike to Lake Harriet via the lake trails in 10. The Bde Maka Ska loop trail — 3.1 miles around the lake — is one of the most popular recreational rides in the city. The Greenway access makes car-free commuting genuinely practical. The tradeoff: the lake trails are multi-use paths shared with runners, walkers, rollerbladers, and dogs, and they get congested on summer evenings and weekends. Biking for transportation is excellent; biking for speed on the lake trails requires patience. Hennepin Avenue — the main north-south commercial corridor — is not bike-friendly despite its importance as a connector. Most South Uptown cyclists learn to use the residential streets parallel to Hennepin for north-south riding. The bike culture here is strong, and the combination of Greenway + lakes makes it one of the best biking locations in the city.",
  },
  {
    rank: 7,
    name: "Logan Park",
    slug: "logan-park",
    bikeScore: 88,
    bikeCommute: "~13%",
    keyTrails: "Mississippi River Trail, Northeast Diagonal Trail, Central Ave corridor",
    infrastructure: "Good — river trails, bike lanes, brewery-district culture",
    honest:
      "Logan Park has the highest bike commute rate on this list — roughly 13% of residents bike to work, reflecting a neighborhood culture where cycling is the default mode for a significant portion of the population. The Mississippi River Trail along the neighborhood's western edge provides one of the best bike commutes in America: a scenic, car-free ride along the river bluffs directly to downtown, about 10 minutes. The Northeast Diagonal Trail connects through the neighborhood. The brewery district — Indeed, Bauhaus, Fair State — is linked by bike lanes, and weekend brewery-hopping by bike is practically a neighborhood sport. The tradeoff: the bike infrastructure off the main trails is good but not great. Central Avenue has bike lanes but heavy traffic. The residential streets are bikeable but some are in rough condition. Winter biking is more challenging on the Northeast side — the hills between Logan Park and the river are icy in winter, and the trail connections can be less reliably plowed than the Greenway. For cyclists who value culture and community as much as infrastructure, Logan Park's bike-first identity is genuine.",
  },
  {
    rank: 8,
    name: "Seward",
    slug: "seward",
    bikeScore: 87,
    bikeCommute: "~11%",
    keyTrails: "Midtown Greenway (eastern terminus), West River Parkway, river gorge trails",
    infrastructure: "Good — Greenway terminus, river trails, U of M connections",
    honest:
      "Seward is where the Midtown Greenway meets the Mississippi River, making it a natural hub for trail-connected cycling. The Greenway's eastern terminus in Seward means you can bike the entire 5.5-mile corridor to the Chain of Lakes without touching a street. West River Parkway runs along the neighborhood's eastern edge with river views and connections to downtown via the river trail system. The U of M campus is a short ride across the river. The bike commute to downtown is about 15 minutes via either the Greenway or the river trails. The tradeoff: the terrain in eastern Seward along the river gorge is hilly — the bluff climb from the river trail to the neighborhood plateau is a workout that filters out casual cyclists. The residential streets are pleasant for biking but the commercial options are limited, which means more of your trips require covering distance. For experienced cyclists who want trail-hub access and don't mind hills, Seward is a strong choice. The co-op culture here embraces biking as a core transportation value.",
  },
  {
    rank: 9,
    name: "Powderhorn Park",
    slug: "powderhorn-park",
    bikeScore: 85,
    bikeCommute: "~9%",
    keyTrails: "Midtown Greenway, Powderhorn Lake loop, Lake Street bike infrastructure",
    infrastructure: "Good — Greenway access, residential bike streets, community bike culture",
    honest:
      "Powderhorn's bikeability is anchored by the Midtown Greenway, which runs along the neighborhood's northern edge and provides car-free connections east to the river and west to the lakes. The Powderhorn Lake loop is a short recreational ride. Lake Street has improved bike infrastructure, and the residential streets south of the lake are low-traffic and pleasant for riding. The neighborhood's strong DIY and activist culture includes a robust bike community — Cycles for Change, the Powderhorn bike co-op, and community bike rides are all part of the fabric. The tradeoff: the bike infrastructure is good but not as developed as Lowry Hill East or the North Loop. Lake Street remains a challenging street to bike on despite improvements. The crime rates in parts of the neighborhood make some cyclists uncomfortable biking after dark, particularly in winter when the streets are empty. For cyclists who want affordable, community-oriented bike living with Greenway access, Powderhorn delivers at a price point that the trendier bike neighborhoods can't match.",
  },
  {
    rank: 10,
    name: "Nokomis",
    slug: "nokomis",
    bikeScore: 85,
    bikeCommute: "~8%",
    keyTrails: "Lake Nokomis loop, Minnehaha Parkway Trail, Grand Rounds",
    infrastructure: "Good — parkway trails, residential streets, but limited commute corridors",
    honest:
      "Nokomis earns its spot on this list for recreational biking more than commute biking. The Lake Nokomis loop, Minnehaha Parkway Trail, and Grand Rounds connections provide beautiful, low-stress riding through one of the prettiest parts of Minneapolis. On a summer evening, biking the parkway from Nokomis to Minnehaha Falls and back is one of the best rides in the city. The residential streets are wide, low-traffic, and pleasant. The tradeoff: the commute bike infrastructure is weaker than the trail system. Downtown is a 30-40 minute ride with no dedicated bike corridor for most of the route — you're on residential streets or parkway paths that are slower than the Greenway. The 46th Street Blue Line station provides a bike-to-rail option that helps. Nokomis is the best biking neighborhood for people who ride primarily for recreation and quality of life, not for people optimizing a daily bike commute. The lakeside riding experience is genuinely world-class; the commute logistics are merely good.",
  },
];

export default function MostBikeablePage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Most Bikeable Neighborhoods in Minneapolis (2026)",
      description:
        "The most bikeable neighborhoods in Minneapolis — ranked by Bike Score, trail access, bike infrastructure, and bike commute rates.",
      url: `${BASE_URL}/guides/most-bikeable-neighborhoods`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Most Bikeable Neighborhoods",
        url: `${BASE_URL}/guides/most-bikeable-neighborhoods`,
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
            src="/images/transit/cyclist-under-bridge-spring.webp"
            alt="Cyclist riding under a bridge in Minneapolis"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Most Bikeable Neighborhoods
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Minneapolis is consistently ranked among the top 3 biking cities
            in America, and it&apos;s earned. Over 200 miles of on- and
            off-street bikeways, the Midtown Greenway (a grade-separated,
            car-free bike highway), the Grand Rounds trail system connecting
            every major park and lake, and a culture where year-round cycling
            &mdash; yes, in winter &mdash; is a genuine identity, not a
            novelty. Here are the 10 most bikeable neighborhoods, ranked by
            Bike Score, trail access, infrastructure, and the thing that
            matters most: whether biking is a practical daily transportation
            mode or just a weekend activity.
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
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
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
                        Bike Commute %
                      </p>
                      <p className="text-2xl font-black text-[#0a0a0a]">
                        {n.bikeCommute}
                      </p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Key Trails
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.keyTrails}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#71717a] mb-3">
                    <strong className="text-[#0a0a0a]">
                      Infrastructure:
                    </strong>{" "}
                    {n.infrastructure}
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
            Yes, People Bike in Winter Here
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Minneapolis has a genuine winter biking culture. The Midtown
            Greenway is plowed year-round. Fat tire bikes handle snow and ice.
            Studded tires exist. About 30-40% of year-round cyclists keep
            riding through winter, and the number grows every year. The key
            factors for winter biking: short commute distance (under 3 miles
            is manageable in any weather), access to plowed trails (the
            Greenway is the gold standard), and proper gear (bar mitts,
            goggles, and layers). If you choose a neighborhood on this list
            with Greenway access and a short commute, year-round cycling is
            not just possible &mdash; it&apos;s a point of pride.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            More Ways to Get Around
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Biking is just one piece of the car-free puzzle. Our walkability
            guide ranks neighborhoods by Walk Score, transit, and overall
            car-free livability &mdash; because the best Minneapolis
            neighborhoods support multiple modes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/most-walkable-neighborhoods"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Most Walkable Neighborhoods
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
