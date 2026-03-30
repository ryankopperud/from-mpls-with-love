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
  title: "Best Neighborhoods for Artists and Creatives in Minneapolis (2026)",
  description:
    "The best Minneapolis neighborhoods for artists and creatives — ranked by studio space, gallery density, creative community, affordability, and cultural institutions.",
  openGraph: {
    title: "Best Neighborhoods for Artists and Creatives in Minneapolis (2026)",
    description:
      "Where artists actually live and work in Minneapolis — studio space, galleries, creative community, and honest affordability assessments.",
    url: `${BASE_URL}/guides/best-neighborhoods-for-artists`,
    type: "article",
  },
  alternates: { canonical: "/guides/best-neighborhoods-for-artists" },
};

const neighborhoods = [
  {
    rank: 1,
    name: "Logan Park / Northeast",
    slug: "logan-park",
    studioSpace: "Excellent",
    galleryDensity: "Highest in the city",
    affordability: "Moderate — rising",
    creativeVibe: "Epicenter",
    highlights:
      "Northrup King Building (300+ studios), Casket Arts Building, Solar Arts Building, Quincy Street Studios, Art-A-Whirl (largest open studio tour in the US), Indeed Brewing, Bauhaus Brew Labs",
    honest:
      "Northeast Minneapolis — and Logan Park specifically — is the undisputed center of the Minneapolis art scene. The Northrup King Building alone houses over 300 artist studios across four floors, making it one of the largest artist studio complexes in the country. Casket Arts Building, a converted casket factory, adds another 100+ studios with a grittier, more DIY energy. Art-A-Whirl, held every May, opens these buildings and dozens of smaller studios to 30,000+ visitors over a single weekend. The brewery scene — Indeed, Bauhaus, Fair State, Dangerous Man — provides the social infrastructure where creatives actually meet and collaborate. The honest reality: the artists who built this neighborhood are under increasing economic pressure. Studio rents in Northrup King have risen significantly over the past five years. New luxury apartment construction is changing the demographic mix. The creative community is still here and still vibrant, but the affordability window that created it is narrowing.",
  },
  {
    rank: 2,
    name: "Whittier",
    slug: "whittier",
    studioSpace: "Limited — home studios",
    galleryDensity: "High",
    affordability: "Good",
    creativeVibe: "Institutional + grassroots",
    highlights:
      "Minneapolis Institute of Art (MIA), MCAD (Minneapolis College of Art and Design), Eat Street murals, Midtown Global Market, diverse cultural programming",
    honest:
      "Whittier is where institutional art meets street-level creativity. The Minneapolis Institute of Art — free admission, 90,000+ works, encyclopedic collection — anchors the neighborhood's northwest corner. MCAD, directly adjacent, feeds a pipeline of young artists into the neighborhood and keeps the median age low and the creative energy high. MCAD graduates who want to stay near their community rent apartments in Whittier because they can still afford to. The Eat Street corridor provides the kind of visually stimulating, culturally diverse streetscape that attracts creative people — the murals, the signage, the mix of Vietnamese, Ethiopian, Mexican, and Somali businesses creates a visual environment that feels alive. Studio space is the weakness: Whittier lacks the converted industrial buildings that give Northeast its studio inventory. Most artists here work from home studios or rent space elsewhere. But as a neighborhood to live in as a creative person — surrounded by major institutions, diverse food, and affordable rents — Whittier is hard to beat.",
  },
  {
    rank: 3,
    name: "Powderhorn Park",
    slug: "powderhorn-park",
    studioSpace: "Moderate — home studios, some shared spaces",
    galleryDensity: "Low — event-based",
    affordability: "Very good",
    creativeVibe: "Community-driven",
    highlights:
      "Powderhorn Art Fair (July), In the Heart of the Beast Theatre, MayDay Parade, Open Eye Figure Theatre, strong DIY and maker culture",
    honest:
      "Powderhorn's creative identity is built on community art, not commercial art. The Powderhorn Art Fair, held every July along the lake, is one of the best juried art fairs in the Midwest — focused on handmade and original work, not mass-produced craft fair stuff. In the Heart of the Beast Puppet and Mask Theatre produces the MayDay Parade, a giant puppet procession that is genuinely one of the most remarkable civic art events in America. Open Eye Figure Theatre adds another layer of experimental performance. The neighborhood attracts artists who make work about community, identity, and social justice rather than artists optimizing for gallery representation. Housing is affordable — you can buy a house here for $250K-$350K, which means a working artist with a day job can actually own property. The tradeoff: there is no gallery infrastructure, limited commercial art market, and the neighborhood's challenges (crime, political intensity) are real factors in daily life.",
  },
  {
    rank: 4,
    name: "Phillips",
    slug: "phillips",
    studioSpace: "Emerging",
    galleryDensity: "Low — cultural orgs",
    affordability: "Most affordable",
    creativeVibe: "Cultural and grassroots",
    highlights:
      "Little Earth of United Tribes, All My Relations Arts gallery, Indigenous art community, East African creative scene, affordable live/work spaces, proximity to Franklin Ave cultural corridor",
    honest:
      "Phillips is the most culturally important arts neighborhood in Minneapolis in ways that do not show up on gallery maps. The Indigenous art community centered around Little Earth of United Tribes and the Franklin Avenue corridor includes visual artists, musicians, writers, and performers whose work engages with sovereignty, identity, and community in ways that matter beyond the art market. All My Relations Arts gallery, on East Franklin, is one of the few dedicated Indigenous contemporary art spaces in the country. The East African creative community — Somali poets, Oromo musicians, Ethiopian visual artists — adds another creative dimension. Phillips is the most affordable neighborhood in this list, with median home prices under $200K and rents among the lowest in the city. The tradeoff is direct: the affordability exists because the neighborhood has real challenges — higher crime, less commercial infrastructure, fewer amenities. Artists who thrive here are those who are embedded in community, not those looking for a lifestyle neighborhood with studio space.",
  },
  {
    rank: 5,
    name: "Seward",
    slug: "seward",
    studioSpace: "Limited",
    galleryDensity: "Low",
    affordability: "Moderate",
    creativeVibe: "Cooperative and literary",
    highlights:
      "Seward Co-op, Birchbark Books (Louise Erdrich's bookstore), strong literary community, cooperative culture, Midtown Greenway artist studios, river bluff landscape",
    honest:
      "Seward's creative identity is quieter and more literary than Northeast's visual art scene. Birchbark Books, owned by National Book Award winner Louise Erdrich, is a neighborhood institution that anchors a literary community of writers, editors, and small press publishers. The cooperative ethos — rooted in the Seward Co-op and extending to housing co-ops and community organizations — attracts artists interested in alternative economic models and communal creative practice. The Mississippi River gorge provides landscape that has attracted plein air painters and nature writers for decades. Studio space is limited; most creatives in Seward work from home or in small shared spaces. This is not a neighborhood for artists who want a scene — it is for artists who want a supportive, values-aligned community and access to natural beauty within the city.",
  },
  {
    rank: 6,
    name: "Lowry Hill East",
    slug: "lowry-hill-east",
    studioSpace: "Very limited",
    galleryDensity: "Moderate",
    affordability: "Moderate — rental market",
    creativeVibe: "Performance and nightlife",
    highlights:
      "Bryant Lake Bowl (performance space + bowling + restaurant), Jungle Theater, Walker Art Center proximity, Wedge Co-op, dense bar and music venue scene",
    honest:
      "The Wedge attracts performers, musicians, comedians, and writers more than visual artists. Bryant Lake Bowl is the key venue — a genuinely unique space that combines bowling, a full restaurant, a bar, and a performance theater that hosts experimental comedy, solo shows, dance, and music. The Jungle Theater on Lyndale produces some of the best small-theater work in the city. The Walker Art Center and Minneapolis Sculpture Garden sit at the neighborhood's northern edge, providing world-class contemporary art access without leaving the zip code. The density of bars and music venues along Lyndale and Hennepin means this is where musicians and comedians live because they can walk to their gigs. Studio space for visual artists is essentially nonexistent — the building stock is residential, not industrial. But for performing artists and writers who want to be in the middle of the city's social and nightlife energy, The Wedge delivers.",
  },
  {
    rank: 7,
    name: "Stevens Square",
    slug: "stevens-square",
    studioSpace: "Limited — affordable apartments as studios",
    galleryDensity: "Low",
    affordability: "Very good",
    creativeVibe: "Scrappy and urban",
    highlights:
      "Most affordable near-downtown rents, proximity to MIA and MCAD, Stevens Square Park, diverse population, walking distance to Loring Park and Walker",
    honest:
      "Stevens Square is the neighborhood where broke artists have always lived in Minneapolis — not because it has studios or galleries, but because the rents are low and the location is central. One-bedroom apartments here run $800-$1,100, which is remarkable for a neighborhood within walking distance of both the Minneapolis Institute of Art and the Walker Art Center. The population is dense, diverse, and transient — a mix of students, immigrants, artists, and service workers. There is no pretension here, no curated creative district vibe. Stevens Square is for artists in the early or lean years who need a cheap apartment near cultural institutions and do not mind a gritty urban environment. The tradeoff: higher crime, aging building stock, and limited commercial amenities. But as a launching pad for a creative career in Minneapolis, the location-to-cost ratio is unmatched.",
  },
  {
    rank: 8,
    name: "Loring Park",
    slug: "loring-park",
    studioSpace: "Very limited",
    galleryDensity: "High — institutional",
    affordability: "Moderate",
    creativeVibe: "Institutional and performative",
    highlights:
      "Walker Art Center, Minneapolis Sculpture Garden, Loring Park (concerts, festivals), Loring Greenway, proximity to Hennepin Theatre District, LHENA arts programming",
    honest:
      "Loring Park is the neighborhood where you consume art rather than make it — but the consumption options are extraordinary. The Walker Art Center is one of the top contemporary art museums in the country. The Minneapolis Sculpture Garden, with its iconic Spoonbridge and Cherry, is free and open daily. Loring Park itself hosts festivals and concerts through the summer. The Hennepin Theatre District, a few blocks north, has the Orpheum, State, and Pantages theaters. Living here means being within walking distance of more performing and visual arts than any other residential neighborhood in the state. The limitation for working artists is practical: there is no studio space, the rents are moderate-to-high, and the creative energy is audience-oriented rather than maker-oriented. Loring Park is ideal for arts administrators, curators, critics, and creative professionals who work in the arts ecosystem but do not need raw studio space.",
  },
  {
    rank: 9,
    name: "Cedar-Riverside",
    slug: "cedar-riverside",
    studioSpace: "Limited — emerging",
    galleryDensity: "Low",
    affordability: "Very good",
    creativeVibe: "Multicultural and academic",
    highlights:
      "West Bank music history (birthplace of Bob Dylan's scene), Mixed Blood Theatre, U of M arts programs, Somali cultural institutions, Cedar Cultural Center, emerging East African creative scene",
    honest:
      "Cedar-Riverside has the deepest musical history of any Minneapolis neighborhood. The West Bank folk scene of the 1960s — the clubs where Bob Dylan played before he left for New York — established a creative lineage that still echoes. The Cedar Cultural Center continues to book eclectic, globally-minded music. Mixed Blood Theatre produces work focused on racial and cultural diversity. The University of Minnesota's arts programs feed students and faculty into the neighborhood. The Somali community, now the dominant demographic, is generating its own creative scene — poetry, music, fashion design, digital media — that is still emerging but increasingly visible. Cedar-Riverside is not a polished arts district; it is a neighborhood where multiple creative traditions coexist, sometimes overlapping and sometimes running in parallel. The tradeoff: the infrastructure for working artists is minimal, the neighborhood has significant poverty and density challenges, and the creative history is more legacy than current reality for the folk and rock scenes.",
  },
  {
    rank: 10,
    name: "Lind-Bohanon / Camden",
    slug: "webber-camden",
    studioSpace: "Emerging — affordable spaces",
    galleryDensity: "Very low",
    affordability: "Excellent",
    creativeVibe: "Frontier — early stage",
    highlights:
      "Extremely affordable housing, emerging artist-led spaces, FLOW Northside Arts Crawl, Northside arts organizations, large lots for studio builds",
    honest:
      "North Minneapolis neighborhoods like Lind-Bohanon and Camden are where the next chapter of Minneapolis arts might be written — if the pattern holds. Artists priced out of Northeast are beginning to look north, where home prices ($150K-$250K) make it possible to buy a house and convert a garage or basement into a studio. The FLOW Northside Arts Crawl is building the same kind of open-studio culture that Art-A-Whirl pioneered in Northeast. Northside arts organizations, including Juxtaposition Arts and Homewood Studios, provide community-embedded creative programming. This is not a developed arts neighborhood — there are no gallery districts, no converted warehouse studios, no brewery crawl infrastructure. But for artists who want to own space, build something from scratch, and be part of an emerging community rather than joining an established one, the Northside offers what Northeast offered twenty years ago: affordability, space, and possibility.",
  },
];

export default function BestNeighborhoodsForArtistsPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title:
        "Best Neighborhoods for Artists and Creatives in Minneapolis (2026)",
      description:
        "The best Minneapolis neighborhoods for artists and creatives — ranked by studio space, gallery density, creative community, affordability, and cultural institutions.",
      url: `${BASE_URL}/guides/best-neighborhoods-for-artists`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best Neighborhoods for Artists",
        url: `${BASE_URL}/guides/best-neighborhoods-for-artists`,
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
            src="/images/murals/bob-dylan-mural-full-view.webp"
            alt="Bob Dylan mural by Eduardo Kobra in downtown Minneapolis"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Best Neighborhoods for Artists
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Minneapolis punches above its weight as an arts city &mdash; more
            working artists per capita than New York, a deep tradition of public
            funding for the arts, and enough affordable space (for now) to
            sustain a genuine creative class. Here are the 10 neighborhoods
            where artists actually live, work, and show &mdash; ranked by
            studio availability, community, institutions, and the honest
            economics of making art in each one.
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
                        Studio Space
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.studioSpace}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Gallery Density
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.galleryDensity}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Affordability
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.affordability}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Creative Vibe
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.creativeVibe}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#71717a] mb-3">
                    <strong className="text-[#0a0a0a]">
                      Key spaces:
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
            The Affordability Question
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Minneapolis is still affordable compared to coastal cities for
            working artists, but the gap is closing. Studio rents in Northeast
            have roughly doubled since 2015. The neighborhoods on this list
            that offer the best value &mdash; Phillips, Powderhorn, Stevens
            Square, the Northside &mdash; are also the ones with the most
            significant quality-of-life tradeoffs. There is no neighborhood
            in Minneapolis that is simultaneously cheap, safe, walkable, and
            full of studio space. The art of being an artist here, as
            everywhere, is choosing your tradeoffs wisely.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Explore Minneapolis Neighborhoods
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Every neighborhood on this list has a full guide covering housing,
            restaurants, walkability, and community character &mdash; everything
            you need to decide where to set up your studio.
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
