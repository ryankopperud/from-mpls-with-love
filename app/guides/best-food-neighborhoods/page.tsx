import type { Metadata } from "next";
import Link from "next/link";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  renderJsonLd,
} from "@/lib/schema";

const BASE_URL = "https://mplswithlove.com";

export const metadata: Metadata = {
  title: "Best Food Neighborhoods in Minneapolis (2026)",
  description:
    "The best neighborhoods for food in Minneapolis, ranked by restaurant density, cuisine diversity, and the specific places worth eating at. An honest guide to the city's dining geography.",
  openGraph: {
    title: "Best Food Neighborhoods in Minneapolis (2026)",
    description:
      "The best Minneapolis neighborhoods for dining — ranked by restaurant density, cuisine diversity, and the places actually worth eating at.",
    url: `${BASE_URL}/guides/best-food-neighborhoods`,
    type: "article",
  },
};

const neighborhoods = [
  {
    rank: 1,
    name: "Whittier (Eat Street)",
    slug: "whittier",
    restaurantDensity: "Very High",
    cuisineDiversity: "Exceptional",
    priceRange: "$–$$$",
    notableRestaurants: "Quang, Pimento Jamaican Kitchen, Black Walnut Bakery, Icehouse, Rainbow Chinese, Peninsula Malaysian, Revival",
    summary:
      "Eat Street — the stretch of Nicollet Avenue from roughly 24th to 29th Street — is the single most important dining corridor in Minneapolis. Within five blocks you can eat Vietnamese pho at Quang (a Minneapolis institution since 1989), Jamaican jerk at Pimento, Szechuan at Rainbow Chinese, Malaysian at Peninsula, and soul food at Revival. The density is staggering: 40+ restaurants in a half-mile stretch, representing cuisines from six continents. This is not curated diversity — it is organic, messy, affordable, and real. The immigrant-owned restaurants on Eat Street are not trends; many have been here for decades. Beyond Nicollet, Lyndale Avenue adds another layer with cocktail bars and upscale-casual spots. If you care about food above all else, Whittier is the answer.",
  },
  {
    rank: 2,
    name: "North Loop",
    slug: "north-loop",
    restaurantDensity: "Very High",
    cuisineDiversity: "Moderate–High",
    priceRange: "$$–$$$$",
    notableRestaurants: "Bar La Grassa, Spoon and Stable, Demi, The Bachelor Farmer, Smack Shack, Monte Carlo",
    summary:
      "The North Loop is the fine dining capital of Minneapolis. Bar La Grassa's handmade pastas are consistently among the best in the Midwest. Demi is one of few tasting-menu restaurants in the state that justifies the price tag. Spoon and Stable, Gavin Kaysen's flagship, has anchored the neighborhood's culinary identity since 2014. The density of quality per block is high, but the price floor is also high — a casual dinner for two in the North Loop rarely comes in under $80. The cuisine range is narrower than Whittier's: heavily tilted toward New American, Italian, and upscale bar food. What the North Loop does, it does at an elite level. But it is a neighborhood where you eat to impress, not necessarily where you eat every Tuesday night.",
  },
  {
    rank: 3,
    name: "Northeast (Central Avenue)",
    slug: "logan-park",
    restaurantDensity: "High",
    cuisineDiversity: "High",
    priceRange: "$–$$$",
    notableRestaurants: "Holy Land, Hai Hai, Young Joni, Anchor Fish & Chips, Chimborazo, Northeast Palace",
    summary:
      "Central Avenue in Northeast Minneapolis is the most underrated food corridor in the city. Holy Land — bakery, deli, grocery, and restaurant in one — is a destination for Middle Eastern food that draws from across the metro. Young Joni made national lists for its wood-fired pizzas and Korean-inspired back bar. Hai Hai brought Southeast Asian street food to a neighborhood that still had Eastern European bakeries operating. Chimborazo serves Ecuadorian food that you will not find better in the Upper Midwest. The Northeast dining scene has a DIY energy that the North Loop lacks — chefs open here because rents are lower and the community supports risk-taking. The tradeoff: restaurants are more spread out along the avenue than on Eat Street, so you are walking 10-15 blocks, not 5.",
  },
  {
    rank: 4,
    name: "Powderhorn (Midtown Global Market)",
    slug: "powderhorn-park",
    restaurantDensity: "Moderate",
    cuisineDiversity: "Exceptional",
    priceRange: "$–$$",
    notableRestaurants: "Midtown Global Market (Manny's Tortas, Andy's Garage, Salsa a la Salsa, Safari Express), Taco Cat, In the Heart of the Beast neighborhood spots",
    summary:
      "Powderhorn's food scene is anchored by the Midtown Global Market, which is unlike any other food destination in Minneapolis. Inside the old Sears building on Lake Street, a dozen-plus vendors operate stalls serving Somali, Mexican, Vietnamese, Ecuadorian, and Middle Eastern food at price points that make Eat Street look expensive. Manny's Tortas does tortas and tacos that compete with anything in the city. Safari Express serves Somali rice plates for under $10 that feed two people. The surrounding Lake Street corridor adds taquerias, East African restaurants, and Somali tea shops that are genuinely neighborhood institutions, not Instagram spots. This is the most affordable food neighborhood in Minneapolis and arguably the most globally diverse.",
  },
  {
    rank: 5,
    name: "Lowry Hill East (Lyn-Lake)",
    slug: "lowry-hill-east",
    restaurantDensity: "High",
    cuisineDiversity: "Moderate",
    priceRange: "$$–$$$",
    notableRestaurants: "Bryant Lake Bowl, Nighthawks, Moto-i, Tilia (nearby), Jungle Theater area spots, Wedge Table",
    summary:
      "The Lyn-Lake corridor — where Lyndale and Lake Street intersect — is where Minneapolis goes for a night out that includes good food. Bryant Lake Bowl has been a neighborhood anchor for decades: bowling, theater, and a kitchen that takes its food more seriously than any bowling alley has a right to. Nighthawks does diner food elevated to an art form. Moto-i is the only sake brewery-restaurant in the Midwest. The scene here is more bar-and-restaurant than pure dining destination — you eat here as part of an evening, not as the point of the evening. The cuisine diversity is moderate (lots of New American and Asian-fusion) but the quality is consistently high and the atmosphere is unmatched.",
  },
  {
    rank: 6,
    name: "Downtown East",
    slug: "downtown-east",
    restaurantDensity: "Moderate–High",
    cuisineDiversity: "Moderate",
    priceRange: "$$–$$$$",
    notableRestaurants: "Owamni (closed 2023 — legacy noted), The Mill District spots, Borough, Eastside, Hell's Kitchen",
    summary:
      "Downtown East's food scene has been in transition. The loss of Owamni in 2023 — which had put Indigenous cuisine on the national map and won a James Beard Award — was a genuine blow to the city's culinary identity. What remains is a mix of hotel restaurants, event-night dining, and a few standouts. Hell's Kitchen has been a Minneapolis brunch institution for years, with its lemon-ricotta pancakes and unapologetic maximalism. Borough does upscale American in the hotel space. The Mill District area near the Guthrie has options, but foot traffic is event-driven. Downtown East is a place where you eat before a show, not where you explore a dining scene.",
  },
  {
    rank: 7,
    name: "Seward",
    slug: "seward",
    restaurantDensity: "Low–Moderate",
    cuisineDiversity: "Moderate",
    priceRange: "$–$$",
    notableRestaurants: "Birchwood Cafe, Seward Co-op Creamery deli, Friendship Store, A Baker's Wife, The Howe (nearby)",
    summary:
      "Seward is not a food destination in the traditional sense — you will not find a strip of restaurants to browse. What it has is specific: the Birchwood Cafe is one of the best farm-to-table restaurants in Minneapolis, with a commitment to local sourcing that is genuine rather than performative. The Seward Co-op deli at both locations serves prepared food that rivals sit-down restaurants. A Baker's Wife has been producing pastries from a small Franklin Avenue kitchen since 1985. The food here reflects the neighborhood's values: local, cooperative, sustainable, and unfussy. You eat in Seward because the food is good and the sourcing is honest, not because you are looking for a scene.",
  },
  {
    rank: 8,
    name: "South Uptown",
    slug: "south-uptown",
    restaurantDensity: "Moderate",
    cuisineDiversity: "Moderate",
    priceRange: "$$–$$$",
    notableRestaurants: "Bde Maka Ska area restaurants, Red Cow, Barbette, Cafeteria (nearby on Hennepin), Stella's Fish Cafe",
    summary:
      "South Uptown's dining scene is a shadow of what it was five years ago. Commercial vacancies along Hennepin and Lake Street have thinned the options. But the bones are still there: Red Cow does one of the best burgers in the city. Barbette is a French-inspired bistro that has survived multiple cycles of Uptown hype and decline. Stella's Fish Cafe rooftop remains a summer institution. The lakeside area near Bde Maka Ska adds seasonal options. The honest assessment: South Uptown is still a good place to eat dinner, but it is no longer a place you go specifically for the food scene. The neighborhood is between identities, and the dining reflects that uncertainty.",
  },
  {
    rank: 9,
    name: "Loring Park",
    slug: "loring-park",
    restaurantDensity: "Moderate",
    cuisineDiversity: "Low–Moderate",
    priceRange: "$$–$$$$",
    notableRestaurants: "Lurcat, La Belle Vie (legacy — closed), Brit's Pub, Loring Pasta Bar, The Dakota Jazz Club",
    summary:
      "Loring Park's food scene is defined by its proximity to Hennepin Avenue's theater district. Lurcat offers upscale New American dining that fills before shows at the Orpheum or State Theatre. The Dakota combines a world-class jazz venue with genuinely excellent food — not the afterthought-menu you expect at a music club. Brit's Pub has the best outdoor bowling green in the city and solid pub fare. Loring Pasta Bar occupies a converted house with an atmosphere that is either enchanting or gimmicky depending on your tolerance for candlelit maximalism. The neighborhood has fewer options than you would expect for its central location, largely because the park itself takes up so much real estate.",
  },
  {
    rank: 10,
    name: "Phillips",
    slug: "phillips",
    restaurantDensity: "Low–Moderate",
    cuisineDiversity: "High",
    priceRange: "$–$$",
    notableRestaurants: "East African restaurants on Franklin Ave, Somali spots on Cedar Ave, Little Earth area, Maria's Cafe",
    summary:
      "Phillips is not on most food guides, and that is a mistake. The Franklin Avenue and Cedar Avenue corridors have some of the most authentic East African, Somali, and Native American food in the Upper Midwest. The restaurants here are not designed for food tourists — they are neighborhood institutions serving communities that live here. Prices are low, portions are generous, and the food is made by people cooking their own cuisine, not interpreting it for a crossover audience. Maria's Cafe does diner breakfast with a regulars-only intensity. Phillips is for eaters who care about authenticity more than ambiance and are comfortable being the only outsider in the room.",
  },
];

export default function BestFoodNeighborhoodsPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Best Food Neighborhoods in Minneapolis (2026)",
      description:
        "The best neighborhoods for food in Minneapolis, ranked by restaurant density, cuisine diversity, and the specific places worth eating at.",
      url: `${BASE_URL}/guides/best-food-neighborhoods`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best Food Neighborhoods",
        url: `${BASE_URL}/guides/best-food-neighborhoods`,
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
          Best Food Neighborhoods
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Minneapolis punches way above its weight on food. The immigrant
            communities that shape the city&apos;s identity also shape its
            dining &mdash; Somali, Vietnamese, Mexican, Hmong, Ethiopian, and
            Ecuadorian kitchens sit alongside James Beard Award winners and
            nationally recognized fine dining. Here are the 10 best
            neighborhoods for eating, ranked by restaurant density, cuisine
            diversity, and the honest quality of what&apos;s on the plate.
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
                        Restaurant Density
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.restaurantDensity}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Cuisine Diversity
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.cuisineDiversity}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Price Range
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.priceRange}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#71717a] mb-3">
                    <strong className="text-[#0a0a0a]">
                      Notable restaurants:
                    </strong>{" "}
                    {n.notableRestaurants}
                  </p>

                  <p className="text-[15px] text-[#52525b] leading-[1.85]">
                    {n.summary}
                  </p>

                  <Link
                    href={`/neighborhoods/${n.slug}`}
                    className="inline-block mt-4 text-sm font-semibold text-[#2a9d8f] hover:underline"
                  >
                    Read the full {n.name.split(" (")[0]} guide →
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 bg-[#f5f5f5] p-6 mb-12">
          <h2 className="text-sm font-bold text-[#0a0a0a] mb-2">
            A Note on Restaurant Turnover
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Minneapolis restaurants open and close faster than any guide can
            track. The neighborhoods ranked here have deep enough food
            cultures that individual closures don&apos;t change the overall
            picture &mdash; Eat Street will be a food destination regardless
            of which specific restaurants are open in any given month. We
            update specific restaurant mentions quarterly, but the
            neighborhood rankings reflect durable patterns, not momentary
            snapshots.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Explore the Dining Scene
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Our neighborhood guides go deeper on restaurants, bars, and
            the food culture of each area. Or check out our brewery and
            coffee shop guides for more specific recommendations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/best-breweries-by-neighborhood"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Best Breweries Guide
            </Link>
            <Link
              href="/guides/best-coffee-shops-by-neighborhood"
              className="border border-white/30 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Best Coffee Shops Guide
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
