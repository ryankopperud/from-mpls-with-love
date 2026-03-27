import type { Metadata } from "next";
import Link from "next/link";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  renderJsonLd,
} from "@/lib/schema";

const BASE_URL = "https://mplswithlove.com";

export const metadata: Metadata = {
  title: "Best Neighborhoods Near the Lakes in Minneapolis (2026)",
  description:
    "The best Minneapolis neighborhoods near the Chain of Lakes, Lake Nokomis, and Cedar Lake — ranked by lake access, walkability to water, home prices, and neighborhood character.",
  openGraph: {
    title: "Best Neighborhoods Near the Lakes in Minneapolis (2026)",
    description:
      "The best Minneapolis lake neighborhoods — ranked by distance to water, home prices, and honest assessments of what lake-adjacent life actually looks like.",
    url: `${BASE_URL}/guides/best-neighborhoods-near-the-lakes`,
    type: "article",
  },
};

const neighborhoods = [
  {
    rank: 1,
    name: "East Harriet",
    slug: "east-harriet",
    lake: "Lake Harriet",
    distanceToLake: "2-5 min walk",
    medianPrice: "$550K–$750K",
    walkScore: 72,
    character: "Quiet, residential, family-oriented",
    honest:
      "East Harriet is the quintessential Minneapolis lake neighborhood — and it earns the top spot because no other neighborhood puts you closer to a better lake experience. Lake Harriet is arguably the most beautiful of the Chain of Lakes: the bandshell hosts free concerts all summer, the rose garden is immaculate, the sailing school teaches kids to crew, and the 2.7-mile loop is the best walking path in the city. Most East Harriet residents are within a 5-minute walk of the shoreline. The Linden Hills commercial node at 43rd & Upton is adjacent, giving you Sebastian Joe's ice cream, Wild Rumpus bookstore, and Tilia without needing a car. The tradeoff: you're paying for it. Median home prices push $650K, and the neighborhood is quiet to the point of sleepy on weekday evenings. This is not a neighborhood with nightlife or late-night dining — it's a neighborhood where the lake is your entertainment.",
  },
  {
    rank: 2,
    name: "ECCO",
    slug: "ecco",
    lake: "Bde Maka Ska & Lake Harriet",
    distanceToLake: "3-8 min walk",
    medianPrice: "$475K–$650K",
    walkScore: 75,
    character: "Family-friendly, walkable, two-lake access",
    honest:
      "ECCO (East Calhoun Community Organization) has the rare advantage of two-lake access — Bde Maka Ska to the north and Lake Harriet to the south, both within walking distance. The neighborhood sits between the lakes with a mix of single-family homes, duplexes, and small apartment buildings that keeps the population density higher than the purely residential lake neighborhoods. The 50th & France commercial area in Edina is a short drive, and the Bde Maka Ska commercial node has cafes and restaurants. The tradeoff: ECCO is smaller and quieter than it looks on a map. The commercial options within the neighborhood itself are limited — you're relying on adjacent neighborhoods for most shopping and dining. Home prices are slightly more accessible than East Harriet or Linden Hills but still firmly in the upper tier of Minneapolis real estate.",
  },
  {
    rank: 3,
    name: "Linden Hills",
    slug: "linden-hills",
    lake: "Lake Harriet & Bde Maka Ska",
    distanceToLake: "5-10 min walk",
    medianPrice: "$625K–$850K",
    walkScore: 78,
    character: "Village feel, families, established",
    honest:
      "Linden Hills earns a top-three lake neighborhood ranking not just for proximity to water but for having the best walkable commercial district of any lake neighborhood. The 43rd & Upton node — Wild Rumpus, Sebastian Joe's, Tilia, the hardware store, a wine shop — functions as a genuine village center. Lake Harriet is a 5-10 minute walk from most of the neighborhood, and Bde Maka Ska is accessible via the trails. The housing stock is beautiful: well-maintained Craftsmans, Tudors, and colonials on tree-lined streets. The tradeoff: Linden Hills is the most expensive neighborhood on this list, and it knows it. The community is overwhelmingly white and affluent, and the village identity can shade into exclusivity. Teardowns replacing $600K bungalows with $1.2M new construction are changing the streetscape. If you can afford it and you want the Minneapolis version of a New England village with lake access, Linden Hills delivers.",
  },
  {
    rank: 4,
    name: "Fulton",
    slug: "fulton",
    lake: "Lake Harriet",
    distanceToLake: "5-15 min walk",
    medianPrice: "$475K–$700K",
    walkScore: 70,
    character: "Stable, family-focused, Craftsman bungalows",
    honest:
      "Fulton is the neighborhood for families who want Lake Harriet access without paying Linden Hills or East Harriet prices. The eastern edge of Fulton is within a 5-minute walk of the lake; the western blocks are more of a 15-minute walk or a quick bike ride. The housing stock is predominantly Craftsman bungalows from the 1920s-40s — solid, well-built homes on tree-lined streets. Fulton is stable in the best and most limiting senses of the word: low crime, strong schools (Kenny and Lake Harriet), neighbors who stay for decades. The tradeoff: the commercial options within Fulton are almost nonexistent. You're driving or biking to Linden Hills or 50th & Xerxes for coffee, groceries, and restaurants. The lake access is real but not as immediate as East Harriet or ECCO. Fulton is for people who want the lake as a bonus to family-neighborhood stability, not as the organizing principle of daily life.",
  },
  {
    rank: 5,
    name: "South Uptown",
    slug: "south-uptown",
    lake: "Bde Maka Ska",
    distanceToLake: "3-10 min walk",
    medianPrice: "$350K–$500K (condos), $500K–$700K (houses)",
    walkScore: 82,
    character: "Urban, young, lake + nightlife",
    honest:
      "South Uptown is the only neighborhood on this list where you get lake access and real urban amenities in the same package. Bde Maka Ska is walkable from most of the neighborhood, and the Lyn-Lake commercial corridor provides bars, restaurants, and coffee shops. The Midtown Greenway runs through for car-free biking. The rental market is strong, making this the most accessible lake neighborhood for non-homeowners. The tradeoff: Uptown's commercial identity is in transition. Some of the storefronts that made Lyn-Lake vibrant are now vacant. The neighborhood is noisier and grittier than the southwest lake neighborhoods. And the lake experience from the Bde Maka Ska north shore — the Uptown side — is more crowded and party-oriented than the quieter south shore. But if you want to run around the lake in the morning and walk to a bar at night, South Uptown is the only neighborhood that offers both.",
  },
  {
    rank: 6,
    name: "Cedar-Isles-Dean",
    slug: "cedar-isles-dean",
    lake: "Cedar Lake & Lake of the Isles",
    distanceToLake: "2-5 min walk",
    medianPrice: "$550K–$900K",
    walkScore: 68,
    character: "Secluded, nature-oriented, quiet luxury",
    honest:
      "Cedar-Isles-Dean offers the most nature-immersive lake experience in Minneapolis. Cedar Lake is the wildest of the Chain of Lakes — less developed shoreline, more wooded trails, a hidden beach that feels like northern Minnesota. Lake of the Isles is the most visually stunning, with its grand parkway loop and historic mansions. Living in CIDNA means your daily landscape looks like a nature preserve inside a major city. The Kenilworth Trail runs through the neighborhood for car-free biking to downtown. The tradeoff: this is one of the least commercially served neighborhoods on the list. There are essentially no restaurants, shops, or services within the neighborhood — you're driving or biking to Uptown or Linden Hills for everything. The housing stock is a mix of modest mid-century ramblers and million-dollar lakefront properties, with not much in between. CIDNA is for people who prioritize natural beauty and quiet over walkable convenience.",
  },
  {
    rank: 7,
    name: "Bryn Mawr",
    slug: "bryn-mawr",
    lake: "Cedar Lake & Wirth Lake",
    distanceToLake: "5-10 min walk",
    medianPrice: "$375K–$525K",
    walkScore: 58,
    character: "Hidden gem, nature access, community-oriented",
    honest:
      "Bryn Mawr is the lake neighborhood that nobody outside Minneapolis knows about. Tucked between Theodore Wirth Park and Cedar Lake, it offers nature access that rivals the more expensive southwest lake neighborhoods at significantly lower prices. Cedar Lake's north beach is a 5-10 minute walk. Wirth Lake and the massive Theodore Wirth Park trail system — mountain biking, cross-country skiing, swimming beach — are immediately adjacent. The neighborhood itself is small, tight-knit, and community-oriented with an active neighborhood association. The tradeoff: Bryn Mawr is isolated by geography. I-394 and the rail corridor create barriers to the south and east, and the park buffers to the north and west mean there's essentially one way in and out. Commercial options are minimal — a handful of spots on the edge, but no walkable commercial district. You need a car (or a committed bike habit) for daily errands. But for the nature-to-price ratio, Bryn Mawr is the best deal on this list.",
  },
  {
    rank: 8,
    name: "Nokomis",
    slug: "nokomis",
    lake: "Lake Nokomis",
    distanceToLake: "3-15 min walk",
    medianPrice: "$300K–$450K",
    walkScore: 70,
    character: "Relaxed, diverse, swimming beach",
    honest:
      "Lake Nokomis is the most unpretentious lake in Minneapolis, and the Nokomis neighborhood matches that energy. The beach is arguably the best public swimming beach in the city — sandier, less crowded, and more kid-friendly than Bde Maka Ska. The 50th Street commercial corridor has a handful of neighborhood staples: Sandcastle, Bull's Horn, Town Hall Tap. Home prices are $200K-$400K less than the Chain of Lakes neighborhoods, making Nokomis the most accessible homeownership option for lake-adjacent living. The tradeoff: Lake Nokomis is smaller and simpler than the Chain of Lakes — no sailing school, no bandshell, no grand parkway mansions. The commercial options are thinner. And the neighborhood's distance from downtown and the Greenway makes it less connected to the rest of the city. Nokomis is for people who want a neighborhood lake, not a destination lake, and want to pay neighborhood prices for it.",
  },
  {
    rank: 9,
    name: "Lynnhurst",
    slug: "lynnhurst",
    lake: "Lake Harriet",
    distanceToLake: "5-15 min walk",
    medianPrice: "$475K–$675K",
    walkScore: 65,
    character: "Residential, families, understated",
    honest:
      "Lynnhurst is the quiet middle sibling of the Lake Harriet neighborhoods — less expensive than Linden Hills, less close to the water than East Harriet, and less talked about than either. The neighborhood is predominantly single-family homes from the 1920s-1950s on wide, tree-canopied streets. The eastern edge is walking distance to Lake Harriet; the western blocks are more of a bike-ride distance. The 54th & Lyndale commercial node has a few restaurants and services. The tradeoff: Lynnhurst's greatest asset and greatest limitation are the same thing — it is deeply residential. There's very little commercial activity, very little nightlife, very little that would make you visit if you didn't live there. The schools are strong, the streets are beautiful, and the lake is close enough to use regularly. For families who want quiet, stable lake-adjacent living at prices below Linden Hills, Lynnhurst delivers.",
  },
  {
    rank: 10,
    name: "CARAG",
    slug: "carag",
    lake: "Bde Maka Ska",
    distanceToLake: "5-12 min walk",
    medianPrice: "$325K–$475K (condos/houses)",
    walkScore: 80,
    character: "Mixed housing, walkable, transitional",
    honest:
      "CARAG (Calhoun Area Residents Action Group) gives you walkable Bde Maka Ska access at more accessible prices than most lake neighborhoods, thanks to a housing mix that includes condos, apartments, and smaller single-family homes alongside the larger houses. The Hennepin Avenue corridor provides commercial services and bus transit to downtown. The lake is a 5-12 minute walk depending on your block. The tradeoff: CARAG shares Uptown's identity transition — some commercial vacancies, some uncertainty about what the area becomes next. The neighborhood sits between the polish of the southwest lake neighborhoods and the grittiness of post-2020 Uptown, and its identity borrows from both without fully committing to either. For buyers and renters who want lake proximity with some urban edge and lower prices, CARAG is a smart bet on a neighborhood still finding its post-pandemic footing.",
  },
];

export default function NearTheLakesPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Best Neighborhoods Near the Lakes in Minneapolis (2026)",
      description:
        "The best Minneapolis neighborhoods near the Chain of Lakes, Lake Nokomis, and Cedar Lake — ranked by lake access, home prices, and neighborhood character.",
      url: `${BASE_URL}/guides/best-neighborhoods-near-the-lakes`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best Neighborhoods Near the Lakes",
        url: `${BASE_URL}/guides/best-neighborhoods-near-the-lakes`,
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
          Best Neighborhoods Near the Lakes
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            The lakes define Minneapolis. The Chain of Lakes &mdash; Bde Maka
            Ska, Lake Harriet, Lake of the Isles, Cedar Lake &mdash; plus Lake
            Nokomis form a network of urban waterfronts that no other American
            city can match. Living near them is the closest thing Minneapolis
            has to a universal aspiration. Here are the 10 best neighborhoods
            for lake access, ranked by proximity, price, and what daily life
            near the water actually looks like.
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
                        Nearest Lake
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.lake}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Distance to Water
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.distanceToLake}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Median Home Price
                      </p>
                      <p className="text-lg font-black text-[#0a0a0a]">
                        {n.medianPrice}
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
                    <div className="sm:col-span-2">
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Character
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.character}
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
            A Note on Lake Access
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Every lake in Minneapolis is public, and the Grand Rounds trail
            system connects them all. Even if you live 20 minutes from the
            nearest lake by bike, you have access. The neighborhoods on this
            list are ranked by the convenience of daily lake use &mdash; the
            difference between &ldquo;I walk to the lake every evening&rdquo;
            and &ldquo;I drive to the lake on weekends.&rdquo; Both are valid
            ways to live in Minneapolis, but this guide is for people who want
            the lake to be part of their daily routine, not an occasional
            destination.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Explore Lake Neighborhoods
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Every neighborhood on this list has a full in-depth guide with
            restaurant picks, real estate data, and honest assessments of
            what it&apos;s like to live there year-round &mdash; including
            winter, when the lakes freeze and the real Minneapolis reveals
            itself.
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
              Best Neighborhoods Overall
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
