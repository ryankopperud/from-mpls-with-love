import type { Metadata } from "next";
import Link from "next/link";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  renderJsonLd,
} from "@/lib/schema";

const BASE_URL = "https://mplswithlove.com";

export const metadata: Metadata = {
  title: "Best Neighborhoods for Young Professionals in Minneapolis (2026)",
  description:
    "The best Minneapolis neighborhoods for young professionals, ranked by walkability, nightlife, dining, transit, median rent, and social scene. Where to live in your 20s and 30s.",
  openGraph: {
    title: "Best Neighborhoods for Young Professionals in Minneapolis (2026)",
    description:
      "The best Minneapolis neighborhoods for young professionals — walkability, nightlife, dining, transit, and what it actually costs to rent.",
    url: `${BASE_URL}/guides/best-neighborhoods-for-young-professionals`,
    type: "article",
  },
};

const neighborhoods = [
  {
    rank: 1,
    name: "North Loop",
    slug: "north-loop",
    walkScore: 95,
    medianRent: "$1,600-$2,200/mo (1BR)",
    nightlife: "Excellent",
    transitAccess: "Two light rail lines",
    medianAge: 31,
    honest:
      "The North Loop is Minneapolis's most polished young-professional neighborhood, and it earns the top spot on sheer density of the things young professionals care about: restaurants (Spoon and Stable, Bar La Grassa, The Bachelor Farmer), coffee shops (Spyhouse, Dogwood), breweries (Inbound, Modist), and nightlife — all within walking distance. Two light rail lines provide car-free commuting to most major employment centers. The riverfront trails are right there for morning runs. The social scene is active and well-curated. The tradeoff: the North Loop is expensive. A 1-bedroom apartment runs $1,600-$2,200/month, and the neighborhood attracts a specific demographic — affluent, mid-to-late 20s and 30s, predominantly white — that some find homogeneous. If your salary supports it and you want the most convenient young-professional lifestyle in Minneapolis, the North Loop delivers. If you want grit, diversity, or affordability, look further down this list.",
  },
  {
    rank: 2,
    name: "Whittier",
    slug: "whittier",
    walkScore: 93,
    medianRent: "$1,000-$1,400/mo (1BR)",
    nightlife: "Excellent",
    transitAccess: "Bus routes on Nicollet & Lyndale",
    medianAge: 29,
    honest:
      "Whittier is the North Loop's scrappier, more interesting, more affordable counterpart. Eat Street (Nicollet Avenue from 24th to 29th) has more culinary range in five blocks than most cities have in total — Vietnamese, Ethiopian, Somali, Mexican, Korean, Japanese, and everything between. The Minneapolis Institute of Art is here. MCAD is here. The Midtown Greenway provides car-free east-west biking. Rents are $400-$800/month cheaper than the North Loop for comparable square footage. The population is genuinely diverse — racially, economically, and culturally — in a way the North Loop is not. The tradeoff: Whittier is urban in the full sense. More noise, more visible homelessness, higher property crime, and a grittier street feel than the North Loop's curated polish. Young professionals who choose Whittier over the North Loop are making a values statement about the kind of city life they want. It's the right call for many people.",
  },
  {
    rank: 3,
    name: "Lowry Hill East",
    slug: "lowry-hill-east",
    walkScore: 90,
    medianRent: "$1,100-$1,500/mo (1BR)",
    nightlife: "Very Good",
    transitAccess: "Bus on Hennepin & Lyndale",
    medianAge: 28,
    honest:
      "The Wedge is Minneapolis's quintessential 20-something neighborhood — dense, loud, bikeable, and packed with bars, restaurants, and the kind of chaotic energy that works when you're 27 and stops working around 34. Bryant Lake Bowl (bowling, dinner, live shows), the Wedge Co-op, and the Hennepin-Lyndale corridor provide walkable everything. The Bike Score of 95 makes this one of the most bikeable neighborhoods in the country. The Walker Art Center and Sculpture Garden are at the neighborhood's edge. The tradeoff: the building stock is old, and 'old' here often means 'the landlord hasn't updated anything since 1987.' Parking is a competitive sport. Noise is constant — this is not a neighborhood for light sleepers. But for young professionals who want to live in the middle of things, bike everywhere, and have a packed social calendar, The Wedge is hard to beat at the price.",
  },
  {
    rank: 4,
    name: "South Uptown",
    slug: "south-uptown",
    walkScore: 82,
    medianRent: "$1,200-$1,600/mo (1BR)",
    nightlife: "Good (rebuilding)",
    transitAccess: "Hennepin Ave bus, Midtown Greenway",
    medianAge: 30,
    honest:
      "South Uptown was the default young-professional neighborhood for a decade, and its reputation still carries weight even as the reality has shifted. The Lyn-Lake corridor retains genuine nightlife — CC Club, Liquor Lyle's, and a handful of restaurants and bars that anchor the social scene. Bde Maka Ska is a 10-minute walk, providing the best lake access of any neighborhood on this list. The Midtown Greenway runs through for car-free biking. But Uptown has struggled since 2020: commercial vacancies have thinned the walkable amenity density, crime spiked and hasn't fully recovered, and the neighborhood is in an identity transition between its party-district past and an uncertain future. Rents have dropped from their peak, which creates opportunity. If you liked what Uptown used to be, the bones are still here. If you need everything to be open and thriving right now, the North Loop and Whittier are safer bets.",
  },
  {
    rank: 5,
    name: "Downtown East",
    slug: "downtown-east",
    walkScore: 95,
    medianRent: "$1,400-$1,900/mo (1BR)",
    nightlife: "Good (event-driven)",
    transitAccess: "Light rail hub, skyway",
    medianAge: 32,
    honest:
      "Downtown East is the best choice for young professionals whose social and professional lives center on downtown institutions. The Guthrie Theater, Mill City Museum, and Stone Arch Bridge provide cultural infrastructure. The light rail hub gives you the best transit access in the city. The skyway system means you can walk to work in January without going outside. The residential population has grown significantly with new apartment buildings offering amenities (gyms, rooftop decks, co-working spaces) that substitute for neighborhood infrastructure. The tradeoff: Downtown East doesn't feel like a neighborhood. The streets empty out after 6 PM on weeknights and on weekends outside of event days. The 'nightlife' is largely tied to sporting events and theater, not the casual walk-to-a-bar scene that defines the other neighborhoods on this list. If you work downtown, value convenience above all, and build your social life through activities rather than proximity, Downtown East works. If you want to bump into friends on the street, live elsewhere.",
  },
  {
    rank: 6,
    name: "Logan Park",
    slug: "logan-park",
    walkScore: 72,
    medianRent: "$1,100-$1,450/mo (1BR)",
    nightlife: "Good (brewery-centric)",
    transitAccess: "Route 10 on Central Ave",
    medianAge: 30,
    honest:
      "Logan Park is the young-professional neighborhood for people who find the North Loop too polished and Whittier too chaotic. The social scene centers on the brewery district — Indeed, Bauhaus, Fair State, Dangerous Man — which functions as the city's most concentrated craft beer ecosystem. Art-A-Whirl turns the neighborhood into a giant open studio every May. The Northrup King Building hosts 300+ artist studios year-round. Central Avenue provides a walkable corridor of old-school NE bars, ethnic restaurants, and newer spots. The vibe is creative, unpretentious, and beer-forward. The tradeoff: walkability is concentrated along Central Avenue — live a few blocks off it, and you're in quiet residential territory. Transit is functional but not frequent. The neighborhood works best if you bike (the riverfront trail commute to downtown is exceptional) and if your social life revolves around breweries and arts events rather than restaurants and clubs.",
  },
  {
    rank: 7,
    name: "Loring Park",
    slug: "loring-park",
    walkScore: 92,
    medianRent: "$1,200-$1,700/mo (1BR)",
    nightlife: "Good",
    transitAccess: "Multiple bus routes, near light rail",
    medianAge: 33,
    honest:
      "Loring Park is the most underrated young-professional neighborhood in Minneapolis. The park itself is beautiful — a genuine urban green space with a pond, walking paths, and the annual Loring Park Art Festival. The Walker Art Center and Sculpture Garden are a 5-minute walk. The Nicollet Mall corridor is nearby. The Basilica of St. Mary hosts the Block Party. The neighborhood has a significant LGBTQ+ community and has historically been one of Minneapolis's most welcoming neighborhoods for queer residents. The building stock is heavily apartment-oriented, with some grand older buildings alongside newer construction. The tradeoff: Loring Park has struggled with safety perceptions — the park itself has had crime issues, particularly after dark, and the neighborhood borders areas with higher crime. Rents are lower than the North Loop for comparable proximity to downtown, which reflects both opportunity and caution. For young professionals who want a central location, park access, and a walkable lifestyle at a moderate price, Loring Park is worth investigating.",
  },
  {
    rank: 8,
    name: "Seward",
    slug: "seward",
    walkScore: 80,
    medianRent: "$1,000-$1,350/mo (1BR)",
    nightlife: "Moderate",
    transitAccess: "Bus on Franklin Ave",
    medianAge: 29,
    honest:
      "Seward is the young-professional neighborhood for people who'd rather go to a co-op than a cocktail bar. The Seward Co-op (two locations) anchors a community that values cooperative economics, local food, and intentional living. The demographic mix — Somali and Oromo immigrants, longtime co-op members, University of Minnesota grad students — creates a genuinely multicultural daily experience that the North Loop and Lowry Hill East can't match. The Mississippi River gorge provides bluff-top trails for running and biking. The Midtown Greenway's eastern terminus is here. Rents are $500-$800/month less than the North Loop. The tradeoff: the nightlife and dining scene is limited compared to the higher-ranked neighborhoods. Seward's social life is community-oriented — potlucks, co-op events, neighborhood meetings — rather than bar-and-restaurant oriented. If your idea of a good Friday night involves a co-op wine section and a home-cooked meal with friends, Seward is perfect. If you want a vibrant going-out scene, it's not.",
  },
  {
    rank: 9,
    name: "Powderhorn Park",
    slug: "powderhorn-park",
    walkScore: 76,
    medianRent: "$900-$1,200/mo (1BR)",
    nightlife: "Moderate",
    transitAccess: "Route 21 on Lake St",
    medianAge: 31,
    honest:
      "Powderhorn is the most affordable young-professional neighborhood with genuine cultural energy. The MayDay Parade, Midtown Global Market, and the lake itself create a community calendar that is unlike anything in the North Loop or Uptown. The neighborhood is politically engaged — intensely so — and the social scene is built around activism, art, and community organizing as much as nightlife. Rents under $1,200 for a 1-bedroom are common. The population is diverse across every dimension. Lake Street provides transit and commercial infrastructure. The tradeoff: Powderhorn took 2020 harder than almost any neighborhood on this list. Crime spiked. The park encampment was traumatic for the community. The neighborhood is rebuilding, but the scars are real. Young professionals who move to Powderhorn tend to be politically progressive, comfortable with complexity, and drawn to community engagement rather than consumer convenience. It's not for everyone, but the people it's for tend to love it deeply.",
  },
  {
    rank: 10,
    name: "Stevens Square",
    slug: "stevens-square",
    walkScore: 94,
    medianRent: "$850-$1,150/mo (1BR)",
    nightlife: "Moderate (proximity-based)",
    transitAccess: "Multiple bus routes, near light rail",
    medianAge: 30,
    honest:
      "Stevens Square is the most affordable walkable neighborhood in Minneapolis, and the low rents are the primary draw for young professionals on a budget. The Walk Score of 94 is among the highest in the city — you're within walking distance of downtown, Eat Street, the convention center, and Loring Park. The neighborhood is tiny (just a few blocks) and almost entirely apartment buildings. Rents under $1,000 for a 1-bedroom are common, which is remarkable for a location this central. The tradeoff: Stevens Square has the highest crime rate of any neighborhood on this list. The combination of affordable rents, transient population, and proximity to higher-crime areas creates real safety concerns, particularly at night. The neighborhood lacks its own commercial infrastructure — you're walking to other neighborhoods for everything. Stevens Square works for young professionals who prioritize affordability and location above all else and are comfortable with urban safety realities. It's a starting point, not a destination.",
  },
];

export default function YoungProfessionalsPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title:
        "Best Neighborhoods for Young Professionals in Minneapolis (2026)",
      description:
        "The best Minneapolis neighborhoods for young professionals, ranked by walkability, nightlife, dining, transit, and median rent.",
      url: `${BASE_URL}/guides/best-neighborhoods-for-young-professionals`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best for Young Professionals",
        url: `${BASE_URL}/guides/best-neighborhoods-for-young-professionals`,
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

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Best Neighborhoods for Young Professionals
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Minneapolis is a strong city for young professionals &mdash; lower
            cost of living than coastal cities, a deep employer base
            (healthcare, finance, tech, creative), excellent biking
            infrastructure, and neighborhoods that range from polished urban to
            scrappy-creative. Here are the 10 best neighborhoods for people in
            their 20s and 30s, ranked by the stuff that actually matters when
            you&apos;re building a career and a social life: walkability,
            dining, nightlife, transit, and what it costs to rent.
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
                        Walk Score
                      </p>
                      <p className="text-2xl font-black text-[#0a0a0a]">
                        {n.walkScore}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Median Rent (1BR)
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.medianRent}
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
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Median Age
                      </p>
                      <p className="text-2xl font-black text-[#0a0a0a]">
                        {n.medianAge}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#71717a] mb-3">
                    <strong className="text-[#0a0a0a]">
                      Transit:
                    </strong>{" "}
                    {n.transitAccess}
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
            Car-Free or Car-Light?
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Minneapolis is one of the best biking cities in America, and many
            young professionals here go car-free or car-light. If that&apos;s
            your plan, prioritize the top 5 neighborhoods on this list &mdash;
            they have the walkability, transit, and commercial density to
            support it. Below that, you&apos;ll want a bike (at minimum) and
            may find a car necessary for some errands. Check our{" "}
            <Link
              href="/guides/most-walkable-neighborhoods"
              className="text-[#2a9d8f] hover:underline"
            >
              walkability guide
            </Link>{" "}
            for the full breakdown.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Ready to Buy?
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            When you&apos;re ready to move from renting to buying, our
            first-time homebuyer guide covers the neighborhoods with the best
            value for young professionals making the jump.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/best-neighborhoods-for-first-time-homebuyers"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              First-Time Homebuyer Guide
            </Link>
            <Link
              href="/guides/moving-to-minneapolis"
              className="border border-white/30 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Moving to Minneapolis
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
