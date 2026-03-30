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
  title: "Best Neighborhoods for Renters in Minneapolis (2026)",
  description:
    "The best Minneapolis neighborhoods for renters — ranked by median rent, inventory, walkability, transit, and amenity density. Real rent ranges, honest assessments, no landlord marketing.",
  openGraph: {
    title: "Best Neighborhoods for Renters in Minneapolis (2026)",
    description:
      "The best Minneapolis neighborhoods for renters — real rent ranges, walkability, transit access, and honest assessments of renter life.",
    url: `${BASE_URL}/guides/best-neighborhoods-for-renters`,
    type: "article",
  },
  alternates: { canonical: "/guides/best-neighborhoods-for-renters" },
};

const neighborhoods = [
  {
    rank: 1,
    name: "Whittier",
    slug: "whittier",
    rent1BR: "$950–$1,200",
    rent2BR: "$1,200–$1,600",
    inventory: "High",
    walkScore: 93,
    transitScore: 64,
    amenityDensity: "Very High",
    honest:
      "Whittier is the best renter neighborhood in Minneapolis, full stop. The combination of affordable rents, high walkability, and Eat Street's unmatched dining diversity makes it the rare neighborhood where you get more for less. The rental stock is deep — everything from century-old walk-up apartments to newer mid-rises — and vacancy rates keep rents competitive. You're walking distance from the Minneapolis Institute of Art, MCAD, multiple grocery stores (Aldi, Cub Foods), and the Midtown Greenway. The tradeoff: Whittier is genuinely urban. Street noise, visible homelessness, and higher property crime rates come with the density. If you want a sanitized rental experience, look elsewhere. If you want to live in the most interesting neighborhood in the city at a price that doesn't require a tech salary, Whittier is it.",
  },
  {
    rank: 2,
    name: "Lowry Hill East",
    slug: "lowry-hill-east",
    rent1BR: "$1,100–$1,500",
    rent2BR: "$1,400–$1,900",
    inventory: "High",
    walkScore: 90,
    transitScore: 60,
    amenityDensity: "High",
    honest:
      "The Wedge is one of the densest renter neighborhoods in Minneapolis — the housing stock is dominated by apartments, duplexes, and fourplexes that keep the rental inventory high. Hennepin and Lyndale avenues provide two walkable commercial corridors with bars, restaurants, the Wedge Co-op, and Bryant Lake Bowl. The Walker Art Center and Sculpture Garden are at the neighborhood's edge. The Bike Score of 95 means you can commute car-free with ease. The tradeoff: you're paying a premium for Uptown-adjacent cool. Rents run $150–$300 higher than Whittier for comparable units. The building stock is aging — many apartments are charming but drafty, with radiator heat and no in-unit laundry. Parking is genuinely terrible, which matters less if you're committed to the bike-and-bus lifestyle the neighborhood rewards.",
  },
  {
    rank: 3,
    name: "Stevens Square",
    slug: "stevens-square",
    rent1BR: "$850–$1,100",
    rent2BR: "$1,050–$1,400",
    inventory: "Very High",
    walkScore: 92,
    transitScore: 70,
    amenityDensity: "Moderate",
    honest:
      "Stevens Square is the most affordable walkable rental neighborhood in Minneapolis. The rents are $100–$200 below Whittier and $300 below Lowry Hill East, and the Walk Score is 92. The neighborhood is small — just a few blocks — but strategically located between the Convention Center and Loring Park, with easy access to downtown, Eat Street, and the Greenway. The rental stock is almost entirely apartments, many of them large older buildings with affordable units. The tradeoff: Stevens Square has higher crime rates than most neighborhoods on this list, and the streetscape can feel rough, especially at night. The amenity density within the neighborhood itself is thin — you're relying on adjacent Whittier and Loring Park for most dining and shopping. But for a renter on a budget who wants to live car-free in a central location, the value proposition is hard to beat.",
  },
  {
    rank: 4,
    name: "Loring Park",
    slug: "loring-park",
    rent1BR: "$1,050–$1,400",
    rent2BR: "$1,400–$1,800",
    inventory: "High",
    walkScore: 93,
    transitScore: 75,
    amenityDensity: "High",
    honest:
      "Loring Park combines genuine park-adjacent living with downtown proximity in a way no other Minneapolis neighborhood does. The park itself — 34 acres with a lake, walking paths, and summer concerts — is one of the best urban parks in the city. You're a 5-minute walk from the Walker Art Center, a 10-minute walk to the North Loop restaurant scene, and directly on the 4/6 bus lines to downtown. The rental stock is primarily high-rise and mid-rise apartments, many with views of the park or downtown skyline. The tradeoff: the neighborhood's identity is still somewhat unsettled. The north edge near Hennepin can feel gritty, and the residential population skews heavily toward renters with less of the community cohesion found in neighborhoods like Whittier or Seward. You're paying for location and the park, not for neighborhood character.",
  },
  {
    rank: 5,
    name: "South Uptown",
    slug: "south-uptown",
    rent1BR: "$1,100–$1,450",
    rent2BR: "$1,400–$1,900",
    inventory: "High",
    walkScore: 82,
    transitScore: 62,
    amenityDensity: "Moderate-High",
    honest:
      "South Uptown gives renters something rare: lake access without homeowner prices. Bde Maka Ska and the Chain of Lakes are walkable from most of the neighborhood, and the Midtown Greenway runs through it for car-free commuting. The Lyn-Lake commercial node has bars, restaurants, and coffee shops, and Hennepin Avenue buses run frequently to downtown. The rental stock includes a good mix of vintage apartments, newer buildings, and converted houses. The tradeoff: Uptown's commercial identity has struggled since 2020. Some storefronts are still vacant, and the neighborhood is between eras — the party-destination Uptown of the 2010s is gone, and what replaces it is still forming. Rents have softened slightly as a result, which is actually good news for renters willing to bet on the rebound.",
  },
  {
    rank: 6,
    name: "Powderhorn Park",
    slug: "powderhorn-park",
    rent1BR: "$850–$1,100",
    rent2BR: "$1,050–$1,350",
    inventory: "Moderate",
    walkScore: 76,
    transitScore: 55,
    amenityDensity: "Moderate",
    honest:
      "Powderhorn is where renters go when they want genuine diversity, cultural energy, and affordable rents in a neighborhood with a real identity. The Lake Street corridor provides grocery, dining (Midtown Global Market is a 10-minute bike ride), and bus service on Route 21, one of Metro Transit's most frequent lines. The park itself — with its lake, May Day Parade, and year-round community events — is a genuine neighborhood anchor. Rental units are mostly in duplexes, triplexes, and converted houses, with fewer large apartment buildings than Whittier or Loring Park. The tradeoff: Powderhorn is still processing the aftermath of 2020. Crime rates remain elevated compared to the southwest neighborhoods. The rental stock is older and maintenance quality varies significantly by landlord. But for renters who value community character over polish, the price-to-neighborhood ratio here is excellent.",
  },
  {
    rank: 7,
    name: "Seward",
    slug: "seward",
    rent1BR: "$900–$1,200",
    rent2BR: "$1,150–$1,500",
    inventory: "Moderate",
    walkScore: 80,
    transitScore: 55,
    amenityDensity: "Moderate",
    honest:
      "Seward offers renters something unusual: a cooperative neighborhood culture that actually includes renters in community life. The Seward Co-op (two locations) is the commercial anchor, and the neighborhood's organizing traditions mean renters show up at community meetings and get treated as stakeholders, not transients. The Mississippi River gorge trails are exceptional, and the U of M campus is a short bike ride away. Franklin Avenue has basic commercial services. The tradeoff: the rental inventory is thinner than Whittier or Lowry Hill East — fewer large buildings, more scattered units in houses and small multifamily structures. Finding a unit requires patience. The commercial options are limited; this is not a neighborhood where you'll walk to 15 restaurants. But for renters who want community integration and co-op culture, Seward delivers in a way no other Minneapolis neighborhood does.",
  },
  {
    rank: 8,
    name: "Marcy-Holmes",
    slug: "marcy-holmes",
    rent1BR: "$950–$1,300",
    rent2BR: "$1,200–$1,600",
    inventory: "Very High",
    walkScore: 82,
    transitScore: 65,
    amenityDensity: "Moderate",
    honest:
      "Marcy-Holmes has more rental units per capita than almost any neighborhood in Minneapolis, driven by its proximity to the University of Minnesota. The inventory includes everything from student-oriented apartments near campus to nicer units in the quieter residential blocks near the river. The Stone Arch Bridge, St. Anthony Main, and the riverfront are walkable. Bus and light rail connections to downtown are strong. The tradeoff: the student population creates a bifurcated neighborhood — the blocks near campus can be loud and transient, while the blocks near the river feel like a different neighborhood entirely. If you're a non-student renter, target the area between University Avenue and the river for a quieter experience with better amenities. Avoid signing a lease without visiting on a weekend evening to gauge noise levels.",
  },
  {
    rank: 9,
    name: "Prospect Park",
    slug: "prospect-park",
    rent1BR: "$1,100–$1,500",
    rent2BR: "$1,400–$1,800",
    inventory: "Moderate-High",
    walkScore: 75,
    transitScore: 70,
    amenityDensity: "Moderate",
    honest:
      "Prospect Park has been transformed by the Green Line light rail, which gives it the best transit access of any neighborhood outside downtown. The Prospect Park station puts you 10 minutes from downtown Minneapolis and 20 minutes from downtown St. Paul. New apartment construction along University Avenue has added significant rental inventory, much of it newer and amenity-rich (in-unit laundry, fitness centers, rooftop decks). The Surly Brewing campus anchors the neighborhood's commercial identity. The tradeoff: the new construction rents are premium — you're paying for new finishes and light rail access. The neighborhood still feels like it's coalescing; the older residential streets and the new University Avenue corridor don't fully connect yet as a single neighborhood experience. But for renters who commute by transit, Prospect Park's value proposition is strong and getting stronger.",
  },
  {
    rank: 10,
    name: "Longfellow",
    slug: "longfellow",
    rent1BR: "$900–$1,200",
    rent2BR: "$1,100–$1,450",
    inventory: "Moderate",
    walkScore: 73,
    transitScore: 50,
    amenityDensity: "Moderate",
    honest:
      "Longfellow gives renters access to Minnehaha Falls, the Midtown Greenway, and one of the best bike-commute corridors in the city at rents well below the Uptown and downtown neighborhoods. The Blue Line light rail station at 46th Street provides airport and downtown service. The rental stock is primarily in smaller buildings — duplexes, triplexes, and scattered apartment buildings — which means you're more likely to have an individual landlord than a property management company. The tradeoff: walkability is neighborhood-scale only. You can walk to a park and a coffee shop, but a full grocery run or restaurant outing usually requires biking or driving. The Lake Street corridor is still rebuilding after 2020. For renters who bike as a primary mode and want space and affordability over density, Longfellow is an underrated pick.",
  },
];

export default function BestNeighborhoodsForRentersPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Best Neighborhoods for Renters in Minneapolis (2026)",
      description:
        "The best Minneapolis neighborhoods for renters — ranked by median rent, inventory, walkability, transit, and amenity density.",
      url: `${BASE_URL}/guides/best-neighborhoods-for-renters`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best Neighborhoods for Renters",
        url: `${BASE_URL}/guides/best-neighborhoods-for-renters`,
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
            src="/images/neighborhoods/downtown-crosswalk-evening-rush.webp"
            alt="Downtown Minneapolis crosswalk during evening rush"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Best Neighborhoods for Renters
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Minneapolis is a renter-friendly city &mdash; about 52% of residents
            rent, and strong tenant protections keep the market more balanced
            than most metros. But the renting experience varies dramatically by
            neighborhood. Here are the 10 best neighborhoods for renters, ranked
            by the things that actually matter: what you&apos;ll pay, how much
            inventory exists, and what daily life looks like without a mortgage.
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
                        1BR Rent
                      </p>
                      <p className="text-lg font-black text-[#0a0a0a]">
                        {n.rent1BR}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        2BR Rent
                      </p>
                      <p className="text-lg font-black text-[#0a0a0a]">
                        {n.rent2BR}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Inventory
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.inventory}
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
                        Transit Score
                      </p>
                      <p className="text-2xl font-black text-[#0a0a0a]">
                        {n.transitScore}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Amenity Density
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.amenityDensity}
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
            A Note on Rent Ranges
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Rent ranges reflect median asking prices as of early 2026 and vary
            significantly by building age, unit condition, and specific block.
            A renovated unit in a newer building will land at the top of the
            range; a walk-up with radiator heat and no dishwasher will land at
            the bottom. Both can be excellent depending on what you value.
            Always visit in person before signing &mdash; online photos in
            Minneapolis rental listings are notoriously optimistic.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            New to Minneapolis?
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Our relocation guide covers everything renters need to know &mdash;
            cost of living, tenant rights, weather prep, and the stuff no one
            tells you until you&apos;ve signed a lease.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/moving-to-minneapolis"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Moving to Minneapolis Guide
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
