import type { Metadata } from "next";
import Link from "next/link";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  renderJsonLd,
} from "@/lib/schema";

const BASE_URL = "https://mplswithlove.com";

export const metadata: Metadata = {
  title: "Best Neighborhoods for Retirees and Empty Nesters in Minneapolis (2026)",
  description:
    "The best Minneapolis neighborhoods for retirees and empty nesters — ranked by safety, walkability, healthcare proximity, quiet, amenities, and cultural access.",
  openGraph: {
    title: "Best Neighborhoods for Retirees and Empty Nesters in Minneapolis (2026)",
    description:
      "Where to retire in Minneapolis — honest assessments of safety, walkability, healthcare, quiet, and what each neighborhood offers for the 55+ crowd.",
    url: `${BASE_URL}/guides/best-neighborhoods-for-retirees`,
    type: "article",
  },
};

const neighborhoods = [
  {
    rank: 1,
    name: "Linden Hills",
    slug: "linden-hills",
    walkability: "78",
    safety: "Very high",
    healthcareAccess: "Good — 10 min to Abbott Northwestern",
    housingType: "Single-family, some condos",
    highlights:
      "Village center (43rd & Upton), Lake Harriet, Sebastian Joe's, Wild Rumpus, Tilia, strong community association, well-maintained sidewalks",
    honest:
      "Linden Hills is the best neighborhood in Minneapolis for retirees who want to stay in the city but live at a small-town pace. The village center at 43rd and Upton is a genuine walking-distance commercial node with a coffee shop, restaurants, a bookstore, and a hardware store — the kind of errands-on-foot setup that makes aging in place realistic. Lake Harriet is a few blocks away for daily walks. The community is engaged and friendly in a way that fights the isolation that can come with retirement. The streets are flat and well-maintained, which matters when you are walking year-round. The tradeoff: Linden Hills is expensive. Median home prices sit around $625K-$850K, and the housing stock is mostly larger single-family homes that may be more house than empty nesters need. Condo options are limited. If you can afford it and you want the combination of lake access, walkable village, and genuine community, this is the top choice.",
  },
  {
    rank: 2,
    name: "Fulton",
    slug: "fulton",
    walkability: "70",
    safety: "Very high",
    healthcareAccess: "Good — 10 min to Abbott Northwestern",
    housingType: "Single-family",
    highlights:
      "Lynnhurst Park rec center, Lake Harriet access, 50th & Penn corridor, strong block clubs, quiet residential streets, excellent tree canopy",
    honest:
      "Fulton offers what most retirees actually want from a neighborhood: safety, quiet, well-maintained homes, and enough nearby amenities to handle daily life without a long drive. The 50th & Penn commercial node and Lake Harriet are both accessible. Lynnhurst Park's rec center offers senior programming. The block clubs are active, which means neighbors look out for each other — a practical benefit as you age. The housing stock is mostly Craftsman bungalows and Cape Cods from the 1920s-1940s, which means single-story or story-and-a-half living is common. The tradeoff: these older homes often have stairs to the basement, narrow doorways, and layouts that were not designed with accessibility in mind. Renovation for aging in place is possible but adds cost. The neighborhood is also car-dependent for anything beyond the immediate commercial nodes. If you stop driving, Fulton becomes significantly harder to live in.",
  },
  {
    rank: 3,
    name: "Tangletown",
    slug: "tangletown",
    walkability: "72",
    safety: "Very high",
    healthcareAccess: "Good — 10 min to Abbott Northwestern",
    housingType: "Single-family, some duplexes",
    highlights:
      "Washburn-Fair Oaks Park, Tangletown Gardens, 48th & Nicollet node, winding streets, mature trees, strong neighborhood identity",
    honest:
      "Tangletown is the neighborhood that retirees who already live there never leave. The curving streets (the \"tangle\" in Tangletown) create a sense of enclosure and quiet that is unusual for a city neighborhood. Tangletown Gardens, the nursery and garden center on 54th Street, is a neighborhood institution and a social hub for the gardening-inclined. The 48th & Nicollet commercial node provides restaurants, coffee, and basic services within walking distance. Washburn-Fair Oaks Park is a neighborhood-scale green space with gentle topography. The neighborhood feel is distinctly mature — the average age skews older, the pace is slow, and the community is established. The tradeoff: Tangletown is quiet to the point of being sleepy. If you want cultural stimulation, nightlife, or a neighborhood that buzzes, this is not it. The housing stock, like Fulton's, is older and may need accessibility modifications. But for retirees who want a peaceful, well-maintained city neighborhood with a strong identity, Tangletown is ideal.",
  },
  {
    rank: 4,
    name: "Bryn Mawr",
    slug: "bryn-mawr",
    walkability: "65",
    safety: "High",
    healthcareAccess: "Very good — near HCMC, Hennepin corridor",
    housingType: "Single-family, some townhomes",
    highlights:
      "Theodore Wirth Park, Bryn Mawr Meadows, strong neighborhood association, Cuppa Java coffee shop, close to downtown, quiet streets",
    honest:
      "Bryn Mawr is a hidden gem for retirees who want nature access and city proximity in the same package. Theodore Wirth Park — 759 acres of trails, gardens, and lakes — is your backyard. The neighborhood itself is compact and tight-knit, with an active neighborhood association, a community garden, and the kind of neighbor-to-neighbor familiarity that makes aging in place safer. The Eloise Butler Wildflower Garden in Wirth Park is the kind of place that becomes a daily walking destination. Downtown Minneapolis is a 10-minute drive, and the Hennepin Avenue corridor provides good healthcare access. The tradeoff: Bryn Mawr has some topography — hills and slopes that can be challenging in icy winters. The walkable commercial options are limited to a few spots on Cedar Lake Road. You will need a car here. The neighborhood is also adjacent to I-394, and some blocks get highway noise. But for retirees who prioritize nature, community, and a village-within-the-city feeling, Bryn Mawr delivers.",
  },
  {
    rank: 5,
    name: "Kenwood",
    slug: "kenwood",
    walkability: "68",
    safety: "Very high",
    healthcareAccess: "Good — Hennepin corridor",
    housingType: "Single-family (larger homes)",
    highlights:
      "Lake of the Isles, Kenwood Park, Walker Art Center proximity, tree-lined streets, architectural interest, established community",
    honest:
      "Kenwood is the most beautiful residential neighborhood in Minneapolis — the houses are larger and more architecturally distinctive than anywhere else in the city, the streets wrap around Lake of the Isles, and the tree canopy is extraordinary. For retirees with the budget, it offers daily walks around the lake, proximity to the Walker Art Center and Sculpture Garden, and a quiet dignity that comes from established wealth and old trees. The community is small and stable — people buy into Kenwood and stay for decades. The tradeoff: the homes are large (often 3,000-5,000+ square feet), which means more maintenance, more stairs, and more house than two people need. Downsizing options within the neighborhood are almost nonexistent. Home prices typically start above $700K and can reach well into the millions. This is a neighborhood for retirees who are both affluent and physically active enough to maintain a larger home.",
  },
  {
    rank: 6,
    name: "Lynnhurst",
    slug: "lynnhurst",
    walkability: "72",
    safety: "Very high",
    healthcareAccess: "Good — near Abbott Northwestern",
    housingType: "Single-family",
    highlights:
      "Lynnhurst Park, 50th & Lyndale corridor, near Lake Harriet, well-maintained housing stock, mix of family and empty-nester residents",
    honest:
      "Lynnhurst is Fulton's neighbor to the east and shares many of the same qualities — quiet, safe, well-maintained, strong community — with slightly better walkable commercial access along the 50th & Lyndale corridor. The corridor has restaurants, a coffee shop, and services that make daily life manageable on foot. Lynnhurst Park provides recreation center programming, and Lake Harriet is nearby. The housing stock is similar vintage to Fulton but with some slightly larger lots. What sets Lynnhurst apart for retirees is the mix of demographics: the neighborhood has a healthy proportion of long-term residents who have aged in place alongside younger families, creating a more intergenerational community than some of the exclusively-family neighborhoods. The tradeoff is the same as Fulton — older housing stock that may need accessibility work, car dependence for most trips, and prices ($475K-$700K) that are high for the metro area.",
  },
  {
    rank: 7,
    name: "East Harriet",
    slug: "east-harriet",
    walkability: "74",
    safety: "Very high",
    healthcareAccess: "Good",
    housingType: "Single-family, some duplexes",
    highlights:
      "Lake Harriet eastern shore, Lyndale Avenue restaurants, Harriet Bandshell access, flat terrain, strong park access",
    honest:
      "East Harriet gives retirees what they are often actually looking for: easy daily access to a beautiful lake without the premium pricing of Linden Hills or Kenwood. The eastern shore of Lake Harriet — including access to the bandshell, the rose garden, and the lakeside walking paths — is within a short walk. The Lyndale Avenue corridor provides restaurant and service options. The terrain is flat, which matters for year-round walking. The neighborhood is quiet, safe, and well-maintained without the exclusivity or pretension of its wealthier neighbors to the north and west. Home prices ($450K-$650K) are high by national standards but represent a step down from Linden Hills. The tradeoff: the walkable commercial options are thinner than in neighborhoods with true village centers, and the neighborhood can feel like a pass-through between Uptown and the lakes rather than a distinct destination in its own right.",
  },
  {
    rank: 8,
    name: "Kenny",
    slug: "kenny",
    walkability: "65",
    safety: "Very high",
    healthcareAccess: "Moderate — slightly farther from hospitals",
    housingType: "Single-family",
    highlights:
      "Kenny Park, Todd Park, Armatage Park proximity, 50th Street corridor access, solid block clubs, affordable relative to neighbors",
    honest:
      "Kenny is the neighborhood that delivers 85% of what Fulton and Lynnhurst offer at a 15-20% discount on home prices. The housing stock is similar — 1920s-1940s bungalows and Cape Cods — the safety is equivalent, and the community is equally stable. Kenny Park provides local green space, and the 50th Street commercial corridor is accessible from the neighborhood's northern edge. For retirees on a fixed income who want a safe, quiet, well-maintained southwest Minneapolis neighborhood without paying peak prices, Kenny is the rational choice. The tradeoff: Kenny is slightly farther from the lakes than its immediate neighbors, the walkable commercial options are limited, and the neighborhood is genuinely quiet — there is no village center or gathering spot that creates social energy. Retirees who are proactive about seeking out social connections will do fine; those who rely on the neighborhood to provide them may feel isolated.",
  },
  {
    rank: 9,
    name: "North Loop",
    slug: "north-loop",
    walkability: "95",
    safety: "High",
    healthcareAccess: "Very good — near HCMC and Hennepin Healthcare",
    housingType: "Condos and lofts",
    highlights:
      "Walk Score of 95, restaurants within steps, light rail access, Trader Joe's, riverfront trails, cultural venues, no yard maintenance",
    honest:
      "The North Loop is the outlier on this list — it is the only neighborhood that offers a truly car-free retirement in Minneapolis. The Walk Score of 95 means every daily need is within walking distance. Light rail provides airport and regional access. The restaurant density means you can eat out every night without repeating for weeks. The condo format eliminates yard work, snow removal, and exterior maintenance — real advantages as you age. The riverfront trails provide excellent daily walking. Hennepin Healthcare is nearby. This is the right choice for retirees who want an urban retirement: walkable, stimulating, low-maintenance. The tradeoff: it is expensive ($350K-$550K for a condo, plus $200-$600/month HOA fees), it is loud compared to southwest neighborhoods, and the condo lifestyle requires comfort with density, shared walls, and elevator living. The community is younger — you will be surrounded by professionals in their 30s, not fellow retirees. For the right person, that is an advantage; for others, it is isolating.",
  },
  {
    rank: 10,
    name: "Nokomis",
    slug: "nokomis",
    walkability: "70",
    safety: "High",
    healthcareAccess: "Moderate",
    housingType: "Single-family, some condos",
    highlights:
      "Lake Nokomis beach, 50th Street corridor, parkway trails, more affordable than SW lake neighborhoods, evolving commercial options",
    honest:
      "Nokomis offers lake-neighborhood retirement at a lower price point than the southwest lake neighborhoods. Lake Nokomis is beautiful and swimmable, the parkway trails are excellent for daily walks, and the 50th Street corridor provides basic commercial needs. Home prices ($300K-$450K) are $100K-$300K less than comparable properties near Lake Harriet. The neighborhood is more diverse and less insular than the southwest neighborhoods, which some retirees find refreshing and others find unsettling — it depends on what you are used to. The tradeoff: healthcare access is less convenient than neighborhoods closer to the Abbott Northwestern or HCMC corridors, the commercial options are thinner, and the neighborhood is in active transition. Nokomis is the choice for retirees who want lake access and affordability and are comfortable with a neighborhood that is changing rather than settled.",
  },
];

export default function BestNeighborhoodsForRetireesPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title:
        "Best Neighborhoods for Retirees and Empty Nesters in Minneapolis (2026)",
      description:
        "The best Minneapolis neighborhoods for retirees and empty nesters — ranked by safety, walkability, healthcare proximity, quiet, amenities, and cultural access.",
      url: `${BASE_URL}/guides/best-neighborhoods-for-retirees`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best Neighborhoods for Retirees",
        url: `${BASE_URL}/guides/best-neighborhoods-for-retirees`,
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
          Best Neighborhoods for Retirees
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Retiring in Minneapolis is not for everyone &mdash; the winters are
            long, the ice is real, and six months of the year you need serious
            cold-weather infrastructure to leave the house. But for those who
            stay, the rewards are genuine: world-class parks and lakes, strong
            healthcare systems, cultural institutions, and neighborhoods where
            community actually functions. Here are the 10 best neighborhoods for
            retirees and empty nesters, ranked by what matters most when daily
            commutes and school districts are no longer the priority.
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
                        {n.walkability}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Safety
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.safety}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Healthcare
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.healthcareAccess}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Housing Type
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.housingType}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#71717a] mb-3">
                    <strong className="text-[#0a0a0a]">
                      Highlights:
                    </strong>{" "}
                    {n.highlights}
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
            The Winter Question
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Winter is the honest variable in every Minneapolis retirement
            decision. November through March means ice, sub-zero temperatures,
            and limited daylight. Sidewalk maintenance varies by block.
            Driving in snow is a skill that does not improve with age. Many
            Minneapolis retirees adopt a snowbird pattern &mdash; spending
            January and February elsewhere &mdash; which is viable but adds
            cost and complexity. If you are committed to year-round Minneapolis
            living in retirement, prioritize neighborhoods with good sidewalk
            maintenance, flat terrain, and walkable commercial nodes that
            reduce the need to drive in bad conditions. The North Loop&apos;s
            condo-and-walkability model solves the winter problem better than
            any single-family neighborhood on this list.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Explore These Neighborhoods
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Each neighborhood has a full guide covering real estate, restaurants,
            parks, and the honest version of daily life &mdash; everything you
            need to decide where to spend the next chapter.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/neighborhoods"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Browse All Neighborhoods
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
