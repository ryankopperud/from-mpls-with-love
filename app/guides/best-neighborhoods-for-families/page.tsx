import type { Metadata } from "next";
import Link from "next/link";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  renderJsonLd,
} from "@/lib/schema";

const BASE_URL = "https://mplswithlove.com";

export const metadata: Metadata = {
  title: "Best Neighborhoods for Families in Minneapolis (2026)",
  description:
    "The best Minneapolis neighborhoods for families, ranked by school quality, park access, safety, walkability, and median home price. Real school names, real park names, honest tradeoffs.",
  openGraph: {
    title: "Best Neighborhoods for Families in Minneapolis (2026)",
    description:
      "The best family neighborhoods in Minneapolis — ranked by schools, parks, safety, and what it actually costs to live there.",
    url: `${BASE_URL}/guides/best-neighborhoods-for-families`,
    type: "article",
  },
};

const neighborhoods = [
  {
    rank: 1,
    name: "Fulton",
    slug: "fulton",
    topSchool: "Lake Harriet Upper & Lower Campus",
    parkAccess: "Lake Harriet, Linden Hills Park",
    safety: "Very Low Crime",
    medianHome: "$525K-$700K",
    walkScore: 70,
    honest:
      "Fulton is the default answer to 'where should families live in Minneapolis?' and for good reason. Lake Harriet Upper and Lower Campus consistently rank among the top MPS schools, with reading and math proficiency rates 20-30 points above the district average. Lake Harriet is a 10-minute walk or bike from anywhere in the neighborhood. The streets are wide, tree-lined, and calm enough that kids bike to school unsupervised. Block clubs are active, and the neighborhood has a deep bench of families with kids — your children will have plenty of peers. The tradeoff: Fulton is expensive, and the families who live here skew heavily white and upper-middle-class. The neighborhood lacks diversity in every dimension — racial, economic, architectural. If your priority is raising kids in an environment that reflects the full diversity of Minneapolis, Fulton isn't it. If your priority is safety, schools, and lake access, it's hard to beat.",
  },
  {
    rank: 2,
    name: "Linden Hills",
    slug: "linden-hills",
    topSchool: "Lake Harriet Lower Campus",
    parkAccess: "Lake Harriet, Bde Maka Ska, Linden Hills Park",
    safety: "Very Low Crime",
    medianHome: "$625K-$850K",
    walkScore: 78,
    honest:
      "Linden Hills is Fulton with a village center and a higher price tag. The 43rd & Upton commercial node — Wild Rumpus bookstore, Sebastian Joe's ice cream, Tilia restaurant, the hardware store — is the kind of walkable family infrastructure that most American neighborhoods lost decades ago. Kids can walk to the bookstore, get ice cream, and be home in time for dinner without crossing a major road. Lake Harriet Lower Campus provides excellent elementary education. Two lakes are within biking distance. The tradeoff is price: the median home is $625K-$850K, and many of the larger homes push well past $1M. You're paying a premium for the village experience, and the buyer pool is competitive. Linden Hills families tend to be affluent, well-educated, and deeply invested in their neighborhood — which creates a strong community but also a certain homogeneity.",
  },
  {
    rank: 3,
    name: "Kenny",
    slug: "kenny",
    topSchool: "Kenny School (K-5)",
    parkAccess: "Kenny Park, Lake Harriet (short bike ride)",
    safety: "Very Low Crime",
    medianHome: "$425K-$575K",
    walkScore: 62,
    honest:
      "Kenny is the neighborhood that parents discover when Fulton is too expensive and Linden Hills is way too expensive. Kenny School (K-5) is a solid neighborhood school with an engaged parent community and strong test scores. The neighborhood is quieter than Fulton — almost no commercial activity, very little through traffic — which some families love and others find stifling. Lake Harriet is a short bike ride rather than a walk. The housing stock is similar to Fulton's (1940s-1960s ramblers and bungalows) at prices $50K-$150K lower. The tradeoff: Kenny lacks a commercial center entirely. There's no coffee shop, no corner store, no walkable destination. Your social life as a Kenny parent revolves around the school, the park, and your neighbors' backyards. For families who prioritize safety and quiet over walkable amenities, that's a feature, not a bug.",
  },
  {
    rank: 4,
    name: "Nokomis",
    slug: "nokomis",
    topSchool: "Keewaydin School, Nokomis Montessori",
    parkAccess: "Lake Nokomis, Nokomis Community Center",
    safety: "Low Crime",
    medianHome: "$300K-$450K",
    walkScore: 70,
    honest:
      "Nokomis is the family neighborhood that actually feels like Minneapolis rather than a suburb wearing a city address. Lake Nokomis beach is one of the best swimming beaches in the metro — real sand, lifeguards in summer, a community center with programming for kids year-round. Keewaydin School and Nokomis Montessori offer solid options within the neighborhood. The 50th Street corridor provides some walkable family-friendly businesses. The demographic mix is more diverse than the Southwest neighborhoods, and the price point ($300K-$450K) puts homeownership in reach for middle-income families. The tradeoff: school quality is good but not at the Lake Harriet level. Crime is low but higher than Fulton or Kenny. The commercial options are thinner. Nokomis families tend to be more politically engaged and less homogeneous than Southwest families, which creates a different but equally strong community fabric.",
  },
  {
    rank: 5,
    name: "Hale",
    slug: "hale",
    topSchool: "Hale School (K-5)",
    parkAccess: "Hale Park, Diamond Lake Park",
    safety: "Low Crime",
    medianHome: "$310K-$420K",
    walkScore: 65,
    honest:
      "Hale is a family neighborhood that doesn't try to be anything else. Hale School is a small, community-focused K-5 with a dedicated parent base and solid fundamentals. Hale Park provides playground, sports fields, and a wading pool. The neighborhood is essentially all single-family homes built between 1920 and 1950 — the kind of solid, unpretentious housing stock that works for families with kids. Crime is low. The streets are quiet. Your kids can ride their bikes to the park. The tradeoff: Hale has no commercial center, no lake access (Diamond Lake is small and not a swimming destination), and no defining cultural identity. It's a neighborhood you choose for the practical stuff — good school, safe streets, affordable house — not for the lifestyle stuff. For families with young kids and a budget under $420K, that practical stuff matters a lot.",
  },
  {
    rank: 6,
    name: "Lynnhurst",
    slug: "lynnhurst",
    topSchool: "Burroughs Community School",
    parkAccess: "Lynnhurst Park, Lake Harriet (short walk)",
    safety: "Very Low Crime",
    medianHome: "$500K-$725K",
    walkScore: 72,
    honest:
      "Lynnhurst occupies the sweet spot between Fulton's quiet stability and Linden Hills' walkable village life. Burroughs Community School is one of the strongest elementary schools in MPS — consistently high test scores, an active PTA, and a diverse magnet program that draws families from across the city. Lake Harriet is within walking distance from the eastern half of the neighborhood. Lynnhurst Park has a playground, tennis courts, and a recreation center. The 50th & Penn commercial node provides a small but useful cluster of family-friendly businesses. The tradeoff: Lynnhurst homes are expensive, and the ones closest to the lake push toward Linden Hills pricing. The neighborhood is beautiful and well-maintained but also homogeneous in the same ways as its Southwest neighbors. School access is the differentiator — if Burroughs is your target school, Lynnhurst is your neighborhood.",
  },
  {
    rank: 7,
    name: "Tangletown",
    slug: "tangletown",
    topSchool: "Washburn High School (nearby), Kenny School",
    parkAccess: "Fuller Park, Washburn Fair Oaks Park",
    safety: "Low Crime",
    medianHome: "$400K-$575K",
    walkScore: 68,
    honest:
      "Tangletown's winding streets create a neighborhood that feels like a private enclave — and for families with young kids, that enclosed feeling translates to safety and freedom. The non-grid layout means almost no through traffic, so kids can play in the street the way they did in 1965. The housing stock is charming — Tudor revivals, bungalows, and colonials on curving, tree-canopied streets. Fuller Park has a playground and community garden. Washburn High School, which serves much of the area, has improved significantly in recent years. The tradeoff: the winding streets that make Tangletown safe also make it somewhat isolated. The nearest commercial corridors (Nicollet Avenue, 50th Street) are a walk or drive. The neighborhood is small and tight-knit, which can feel welcoming or cliquish depending on your experience.",
  },
  {
    rank: 8,
    name: "Bryn Mawr",
    slug: "bryn-mawr",
    topSchool: "Bryn Mawr Elementary",
    parkAccess: "Theodore Wirth Park, Bryn Mawr Meadows",
    safety: "Low Crime",
    medianHome: "$375K-$525K",
    walkScore: 55,
    honest:
      "Bryn Mawr offers something no other Minneapolis family neighborhood can: direct access to Theodore Wirth Park, the city's largest park at 759 acres. Cross-country skiing, mountain biking, swimming at Wirth Beach, hiking trails, a nature center — it's essentially a state park within city limits, and Bryn Mawr kids grow up with it as their backyard. Bryn Mawr Elementary is a small, community-rooted school. Bryn Mawr Meadows Park provides a closer-to-home playground and sports facility. The neighborhood itself is a tight-knit enclave of well-maintained homes with an active neighborhood association. The tradeoff: Bryn Mawr is geographically isolated by I-394 and the park. Walkable commercial options are minimal. You need a car for most errands. The neighborhood feels more like a small town than a city neighborhood, which is exactly what its families love about it — and exactly what might not work if you want urban family life.",
  },
  {
    rank: 9,
    name: "Diamond Lake",
    slug: "diamond-lake",
    topSchool: "Washburn High School (nearby)",
    parkAccess: "Diamond Lake Park, Pearl Park",
    safety: "Low Crime",
    medianHome: "$300K-$400K",
    walkScore: 60,
    honest:
      "Diamond Lake is the most affordable neighborhood on this list, and it delivers solid family fundamentals for the price. The housing stock is modest — mostly 1940s-1950s ramblers and bungalows — but well-maintained by long-tenured homeowners. Diamond Lake Park and Pearl Park provide playgrounds and green space. The neighborhood is quiet and residential with low crime. The demographic mix is more diverse than Southwest Minneapolis, with growing Somali and Latino families adding to the community. The tradeoff: school options within the immediate neighborhood are limited — many families look to nearby magnets or Washburn High School. The commercial infrastructure is thin. Diamond Lake lacks the identity and community anchors (a signature park, a village center, a standout school) that define the neighborhoods ranked above it. But for families who need a safe, affordable base in South Minneapolis, it works.",
  },
  {
    rank: 10,
    name: "Kingfield",
    slug: "kingfield",
    topSchool: "Kingfield Elementary (K-5)",
    parkAccess: "Martin Luther King Park, Nicollet Ave corridor",
    safety: "Low-Moderate Crime",
    medianHome: "$325K-$450K",
    walkScore: 78,
    honest:
      "Kingfield is the family neighborhood with the most urban energy on this list. The Nicollet Avenue corridor provides genuine walkability — restaurants, coffee shops, the Kingfield Farmers Market, and neighborhood businesses within walking distance. Martin Luther King Park has a playground, recreation center, and winter ice skating. Kingfield Elementary is a solid community school. The neighborhood is more diverse than the Southwest options, more walkable than the South Minneapolis options, and priced in the middle of this list. The tradeoff: crime is higher than the Southwest neighborhoods — 'low-moderate' rather than 'very low.' Nicollet Avenue's commercial activity brings both vibrancy and some disorder. Kingfield families tend to be younger, more progressive, and more comfortable with urban tradeoffs than Fulton or Linden Hills families. If you want your kids to grow up in a neighborhood that looks like a city, Kingfield delivers.",
  },
];

export default function BestFamilyNeighborhoodsPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Best Neighborhoods for Families in Minneapolis (2026)",
      description:
        "The best Minneapolis neighborhoods for families, ranked by school quality, park access, safety, walkability, and median home price.",
      url: `${BASE_URL}/guides/best-neighborhoods-for-families`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best for Families",
        url: `${BASE_URL}/guides/best-neighborhoods-for-families`,
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
          Best Neighborhoods for Families
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Raising a family in Minneapolis means choosing between trade-offs
            that don&apos;t exist in the suburbs: walkability vs. yard space,
            diverse schools vs. test scores, urban energy vs. quiet streets. No
            neighborhood gets everything right. Here are the 10 that get the
            most important things right &mdash; schools, parks, safety, and
            community &mdash; ranked with real school names, real park names,
            and honest assessments of who each neighborhood actually works for.
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
                        Top School
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.topSchool}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Park Access
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.parkAccess}
                      </p>
                    </div>
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
                        Walk Score
                      </p>
                      <p className="text-2xl font-black text-[#0a0a0a]">
                        {n.walkScore}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#71717a] mb-3">
                    <strong className="text-[#0a0a0a]">
                      Safety:
                    </strong>{" "}
                    {n.safety}
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
            A Note on Schools
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Minneapolis Public Schools operates an open enrollment system,
            meaning your child is not limited to the neighborhood school. Many
            families in every neighborhood use magnets, charter schools, or
            open-enroll into schools outside their attendance area. The schools
            listed above are the primary neighborhood options, but your actual
            school choice may be different. Visit schools in person, talk to
            current parents, and don&apos;t rely solely on test scores &mdash;
            they correlate more strongly with demographics than with teaching
            quality.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            More Neighborhood Guides
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Families care about more than schools and parks. Check our safety
            rankings, walkability guide, and affordability analysis to find the
            full picture for your family.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/safest-neighborhoods"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Safest Neighborhoods
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
