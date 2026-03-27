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
  title: "Most Underrated Neighborhoods in Minneapolis (2026)",
  description:
    "The most underrated neighborhoods in Minneapolis — 10 neighborhoods that are better than their reputation, overlooked by newcomers, and genuinely worth your attention.",
  openGraph: {
    title: "Most Underrated Neighborhoods in Minneapolis (2026)",
    description:
      "The Minneapolis neighborhoods that deserve more attention — honest takes on 10 overlooked areas with real, unrecognized value.",
    url: `${BASE_URL}/guides/most-underrated-neighborhoods`,
    type: "article",
  },
};

const neighborhoods = [
  {
    rank: 1,
    name: "Standish",
    slug: "standish",
    medianHome: "$310K–$370K",
    vibe: "Quiet residential, emerging commercial",
    overlookedBecause: "Adjacent to flashier Longfellow",
    highlights:
      "38th Street corridor, Midtown Greenway access, Moon Palace Books, affordable Craftsman homes, diverse demographics, strong block clubs",
    honest:
      "Standish is the neighborhood that people drive through on their way to Longfellow or Nokomis and never stop to look at. That is their loss. The 38th Street corridor has been quietly developing a commercial identity — Moon Palace Books is a legitimate cultural anchor, part bookstore, part event space, part community hub. The housing stock is solid Craftsman bungalows priced $50K-$100K below equivalent homes in the southwest lake neighborhoods. The Midtown Greenway runs along the northern edge, providing bike access to the entire city. The demographics are genuinely diverse — more so than the neighborhoods that get praised for diversity on Zillow listings. The block clubs are active and the community is engaged without being performatively political. What people miss: Standish has the bones of a neighborhood on the verge of a significant identity shift. The commercial development along 38th, the bike infrastructure, and the housing value proposition are all pointing in the same direction. This is the neighborhood you will wish you had bought into five years from now.",
  },
  {
    rank: 2,
    name: "Hale",
    slug: "hale",
    medianHome: "$320K–$380K",
    vibe: "Established residential, family-oriented",
    overlookedBecause: "No commercial district, no landmark",
    highlights:
      "Hale Park (rec center, basketball, playground), excellent housing stock, Minnehaha Creek access, 50th Street corridor proximity, well-maintained infrastructure",
    honest:
      "Hale is invisible to most Minneapolis neighborhood conversations because it does not have a hook — no lake, no commercial district, no cultural institution, no controversy. It is just a well-maintained residential neighborhood with solid 1920s-1940s houses, a good park with a rec center, and quiet streets where people walk their dogs and know their neighbors. Minnehaha Creek runs through the southern portion, providing parkland and trails. The 50th Street corridor is accessible from the northern edge. For families and homeowners who prioritize quality of housing stock, safe streets, and community stability over commercial amenities and nightlife, Hale delivers everything the celebrated southwest neighborhoods deliver at a $100K-$200K discount. The reason it is underrated is the same reason it is good: it does not try to be interesting. It just works.",
  },
  {
    rank: 3,
    name: "Diamond Lake",
    slug: "diamond-lake",
    medianHome: "$290K–$350K",
    vibe: "Suburban feel within city limits",
    overlookedBecause: "Overshadowed by Nokomis, far south",
    highlights:
      "Diamond Lake (small neighborhood lake), Diamond Lake Park, proximity to Lake Nokomis, affordable housing, good school access, quiet streets",
    honest:
      "Diamond Lake has something almost no Minneapolis neighborhood outside the famous chain of lakes can claim: its own lake. It is small — more of a pond, honestly — but Diamond Lake Park surrounds it with green space, a playground, and walking paths. The neighborhood is one of the most affordable in south Minneapolis, with median home prices well below the city average. Lake Nokomis is bikeable in minutes. The housing stock is modest but well-maintained — mid-century ramblers and split-levels that are affordable for first-time buyers and families. The neighborhood's southern location means it gets overlooked in favor of neighborhoods closer to downtown, but for people whose lives do not revolve around downtown — families with south suburban jobs, retirees, remote workers — the location is not a disadvantage. What people miss: Diamond Lake is one of the few remaining neighborhoods in Minneapolis where a working-class family can buy a house, have park access, and live in a safe, stable community. That is increasingly rare and increasingly valuable.",
  },
  {
    rank: 4,
    name: "Bancroft",
    slug: "bancroft",
    medianHome: "$270K–$330K",
    vibe: "Diverse, evolving, community-oriented",
    overlookedBecause: "Sandwiched between Powderhorn and Nokomis",
    highlights:
      "Affordable housing, diverse population, Minnehaha Avenue corridor, proximity to Midtown Global Market, strong community organizations, evolving food scene",
    honest:
      "Bancroft sits between Powderhorn Park and Nokomis — two neighborhoods with strong identities that overshadow their quieter neighbor. But Bancroft has its own thing going on. The diversity is real and unforced — the neighborhood is a mix of Latino, Somali, white, and Black residents living alongside each other in a way that is more normal than notable, which is exactly how genuine diversity works. The housing is among the most affordable in south Minneapolis. Minnehaha Avenue is developing as a commercial corridor with taquerias, small groceries, and service businesses that reflect the actual population. The proximity to Midtown Global Market (just north in Longfellow) adds food and cultural access. What people miss: Bancroft is one of the few Minneapolis neighborhoods where a new immigrant family and a fourth-generation Minnesotan live on the same block and use the same park. It is not polished, it is not curated, and it does not photograph well for real estate listings. But as a place to live an honest, affordable, community-connected life in Minneapolis, it is genuinely undervalued.",
  },
  {
    rank: 5,
    name: "Windom",
    slug: "windom",
    medianHome: "$285K–$340K",
    vibe: "Family neighborhood, quiet and stable",
    overlookedBecause: "Far south, no commercial anchor",
    highlights:
      "Windom Park (rec center, playground, sports fields), affordable single-family homes, good school access, diverse population, near Lake Nokomis via bike",
    honest:
      "Windom is the neighborhood that people who grew up in south Minneapolis know about and people who moved here from out of state have never heard of. It sits in the far south of the city, north of the airport flight path but south of the lake neighborhoods that get all the attention. The housing stock is modest, affordable, and well-maintained — the kind of neighborhood where people buy a house, raise their kids, and stay for decades. Windom Park has a rec center with youth programming. The demographic mix is increasingly diverse, reflecting the broader south Minneapolis shift. Lake Nokomis is a reasonable bike ride away. What people miss: Windom offers the stability and community that expensive neighborhoods sell as their brand, but at prices that working families can actually afford. The airport noise is real on some blocks — check flight paths before buying — but most of the neighborhood is outside the significant noise zones. For families priced out of Fulton or Lynnhurst who want the same general lifestyle at half the cost, Windom is the answer.",
  },
  {
    rank: 6,
    name: "Bryn Mawr",
    slug: "bryn-mawr",
    medianHome: "$375K–$475K",
    vibe: "Village neighborhood, nature access",
    overlookedBecause: "Small, not on the standard tour",
    highlights:
      "Theodore Wirth Park (759 acres), tight-knit community, Cuppa Java, Bryn Mawr Market, near downtown but feels separate, active neighborhood association",
    honest:
      "Bryn Mawr is technically not underrated by the people who live there — they know exactly what they have and they are not especially interested in sharing it. But it is dramatically underrated by the broader Minneapolis population and by newcomers, who rarely consider a neighborhood that is small, tucked between I-394 and Theodore Wirth Park, and absent from most \"best of\" lists. The neighborhood functions as a village: Bryn Mawr Market and Cuppa Java provide daily needs, the neighborhood association is one of the most active in the city, and Theodore Wirth Park gives every resident access to 759 acres of trails, lakes, and gardens. Downtown is a 10-minute drive. The community is tight-knit in a way that takes time to enter but is genuinely rewarding once you do. What people miss: Bryn Mawr has the best nature-access-to-downtown-proximity ratio of any neighborhood in the city. You can mountain bike in a 759-acre park and be at work downtown in 15 minutes. That combination does not exist anywhere else in Minneapolis.",
  },
  {
    rank: 7,
    name: "Webber-Camden",
    slug: "webber-camden",
    medianHome: "$200K–$280K",
    vibe: "Evolving, community investment, affordable",
    overlookedBecause: "North Minneapolis stigma",
    highlights:
      "Webber Park (natural swimming pool), Camden community, Mississippi riverfront, Victory Memorial Drive, most affordable homes near parks, emerging restaurant scene",
    honest:
      "Webber-Camden carries the weight of the \"North Minneapolis\" label, which in the local conversation is shorthand for crime, disinvestment, and decline. Some of that reputation is earned — the Northside has genuine challenges with poverty, gun violence, and institutional neglect. But Webber-Camden specifically is a neighborhood that deserves to be evaluated on its own terms, not as a proxy for an entire quadrant of the city. Webber Park has a natural swimming pool — a chemical-free, naturally filtered pool that is one of the most innovative public amenities in the Minneapolis park system. The Mississippi riverfront is accessible and uncrowded. Victory Memorial Drive is a grand, tree-lined boulevard. The housing is the most affordable near significant park access anywhere in Minneapolis. What people miss: Webber-Camden has assets that would make it a $400K-$500K neighborhood if it were located in south Minneapolis. The park infrastructure, the river access, the housing stock, and the lot sizes are all objectively strong. The stigma-to-reality gap is the largest of any neighborhood on this list.",
  },
  {
    rank: 8,
    name: "Corcoran",
    slug: "corcoran",
    medianHome: "$250K–$320K",
    vibe: "Diverse, artistic, community-organized",
    overlookedBecause: "Overshadowed by Longfellow and Powderhorn",
    highlights:
      "Corcoran Park, Midtown Greenway access, Lake Street corridor, strong community organizations, affordable homes, proximity to Midtown Global Market",
    honest:
      "Corcoran is the neighborhood between Longfellow and Powderhorn Park that absorbs the spillover energy from both without getting credit for its own identity. The Midtown Greenway runs through the neighborhood, providing excellent bike infrastructure. Lake Street is the northern boundary, with Midtown Global Market and the commercial corridor accessible on foot. Corcoran Park is a neighborhood-scale green space with a playground and rec center. The community organizing culture is strong — Corcoran was one of the first neighborhoods to establish a community land trust to fight displacement. The housing is affordable and the population is diverse. What people miss: Corcoran has built genuine anti-displacement infrastructure that other neighborhoods talk about but do not implement. The community land trust, the cooperative housing, and the organized response to development pressure are models that other neighborhoods study. For people who want to live in a diverse, affordable, organized community with good bike infrastructure and park access, Corcoran delivers — and it does so at prices that reflect its overlooked status rather than its actual value.",
  },
  {
    rank: 9,
    name: "Field",
    slug: "field",
    medianHome: "$275K–$335K",
    vibe: "Quiet, residential, family-oriented",
    overlookedBecause: "No distinguishing feature, far south",
    highlights:
      "Field Park, affordable housing, Lake Nokomis proximity, Minnehaha Creek access, good elementary schools, quiet residential character",
    honest:
      "Field is the neighborhood that exists to prove that not every good neighborhood needs a brand. There is no commercial district, no cultural institution, no natural landmark, and no controversy. There is a park with a playground, housing that families can afford, access to Minnehaha Creek trails, and proximity to Lake Nokomis. The elementary schools are solid. The streets are quiet. The neighbors are stable. Field is the neighborhood you choose when you have made peace with the idea that a neighborhood does not need to be interesting to be good. It just needs to be safe, affordable, well-maintained, and close to the things you care about. What people miss: Field's home prices are $150K-$300K below equivalent housing in the southwest neighborhoods, with comparable safety statistics and school access. The premium you pay for a Fulton or Linden Hills address is for the brand and the lake access, not for fundamentally better daily life. Field is for people who do the math.",
  },
  {
    rank: 10,
    name: "Victory",
    slug: "victory",
    medianHome: "$225K–$300K",
    vibe: "Working-class, improving, community-invested",
    overlookedBecause: "North Minneapolis stigma, far northwest",
    highlights:
      "Victory Memorial Drive (grand boulevard), Webber Park proximity, affordable housing, Victory neighborhood commercial node, strong community pride, improving infrastructure",
    honest:
      "Victory sits in the far northwest corner of Minneapolis and carries the same North Minneapolis stigma as Webber-Camden, but with even less visibility. Victory Memorial Drive — the grand boulevard lined with elm trees and memorials to Hennepin County war veterans — runs through the neighborhood and is one of the most impressive residential streets in the city. The commercial node at 44th and Penn has a small cluster of businesses that serve daily needs. Webber Park and its natural swimming pool are nearby. The housing stock includes some of the best-value single-family homes in Minneapolis — three-bedroom houses with garages and yards for $225K-$300K. What people miss: Victory is a neighborhood where long-time residents have invested in their community through decades of disinvestment and are building something with real pride and real momentum. The infrastructure is improving, the housing values are rising (from a very affordable base), and the community organizations are active. This is not a neighborhood you move to for the restaurants or the nightlife. It is a neighborhood you move to because you want to own a home, have a yard, and be part of a community that is actively building its future. At these prices, the financial risk is low and the potential upside is significant.",
  },
];

export default function MostUnderratedNeighborhoodsPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Most Underrated Neighborhoods in Minneapolis (2026)",
      description:
        "The most underrated neighborhoods in Minneapolis — 10 neighborhoods that are better than their reputation, overlooked by newcomers, and genuinely worth your attention.",
      url: `${BASE_URL}/guides/most-underrated-neighborhoods`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Most Underrated Neighborhoods",
        url: `${BASE_URL}/guides/most-underrated-neighborhoods`,
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
            src="/images/neighborhoods/vintage-moped-minneapolis-alley-summer.webp"
            alt="Vintage moped in a Minneapolis neighborhood alley"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Most Underrated Neighborhoods
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Every &ldquo;best neighborhoods&rdquo; list in Minneapolis features
            the same 10 names &mdash; North Loop, Linden Hills, Whittier,
            Longfellow. They deserve it. But Minneapolis has 87 officially
            recognized neighborhoods, and some of the best values, strongest
            communities, and most honest versions of city living are in the
            places no one writes about. These are 10 neighborhoods that are
            better than their reputation &mdash; or that simply do not have a
            reputation yet.
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
                        Median Home
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.medianHome}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Vibe
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.vibe}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Overlooked Because
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.overlookedBecause}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#71717a] mb-3">
                    <strong className="text-[#0a0a0a]">
                      What&apos;s here:
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
            A Note on &ldquo;Underrated&rdquo;
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            We are not listing neighborhoods that are underrated because they
            are bad and deserve a second look anyway. Every neighborhood on
            this list has genuine, concrete value &mdash; good housing stock,
            park access, community infrastructure, or some combination of the
            three &mdash; that is not reflected in its reputation or its real
            estate prices. Some of these neighborhoods have real challenges
            and we have been honest about them. &ldquo;Underrated&rdquo; means
            the gap between perception and reality is largest, not that the
            reality is perfect.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Explore Every Neighborhood
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Want the full picture? Our neighborhood guides cover housing,
            restaurants, parks, schools, and the honest version of daily life
            in every corner of Minneapolis.
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
