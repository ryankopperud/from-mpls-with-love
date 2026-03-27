import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMMUNITIES } from "@/lib/communities";
import { slugify } from "@/lib/neighborhoods";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  renderJsonLd,
} from "@/lib/schema";

const BASE_URL = "https://mplswithlove.com";

const COMMUNITY_OVERVIEWS: Record<string, string[]> = {
  "Bde Maka Ska-Isles": [
    "Bde Maka Ska-Isles is the geography that defines the Minneapolis fantasy — the one visitors picture, the one that appears on postcards, the one that real estate agents sell as a lifestyle. The Chain of Lakes (Bde Maka Ska, Lake of the Isles, Cedar Lake) and the parkways and trails connecting them create a recreational corridor that is genuinely world-class. This is not hyperbole. Very few American cities have anything comparable within their urban core.",
    "The community stretches from the mansions of Lowry Hill overlooking downtown to the density of Lowry Hill East (known locally as The Wedge), from the quiet wealth of Kenwood to the contested identity of South Uptown. What unites these nine neighborhoods is proximity to water and the infrastructure that surrounds it: the Grand Rounds parkway system, the bike paths, the beaches, the canoe launches, the ice skating in winter.",
    "The tradeoffs are real. This is expensive Minneapolis — median home prices in several neighborhoods exceed $500K, and lakefront properties go much higher. The demographics skew white and affluent, particularly west of the lakes. The community's relationship with the renaming of Lake Calhoun to Bde Maka Ska revealed genuine tensions about identity, history, and who gets to define the character of shared public space. But as a place to live, to walk, to bike, to swim — there is no equivalent in this city or most others.",
  ],
  Camden: [
    "Camden is the Minneapolis that most Minneapolis residents never visit. Anchoring the far north of the city along the Mississippi River, it operates with a rhythm and identity distinct from the rest of the urban core. The neighborhoods here — Victory, Webber-Camden, Folwell, Shingle Creek — are more suburban in feel than anything south of Dowling Avenue. Lots are bigger. Streets are wider. The pace is slower.",
    "What Camden offers is genuine affordability in a city where that word is increasingly meaningless. The housing stock runs toward postwar bungalows and ramblers, priced at a fraction of what comparable square footage costs in Southwest or the lakes district. Victory Memorial Drive, a parkway lined with elm trees and memorials to World War I veterans, is one of the most underappreciated public spaces in Minneapolis. Webber Park's natural swimming pool — chlorine-free, filtered through a natural system — is a civic amenity that would be famous if it were located in a wealthier part of town.",
    "Camden is also honest about its challenges. Some neighborhoods include industrial districts that fragment the residential fabric. Commercial corridors are thinner than in south Minneapolis. The community has experienced disinvestment that shows in the built environment. But there is a resilience here, a working-class pragmatism that does not perform its identity for outsiders. Camden is for people who want to live in Minneapolis without paying the premium for proximity to the lakes or the cachet of a trending neighborhood.",
  ],
  Central: [
    "Central is where Minneapolis works, eats, drinks, performs, and — increasingly — lives. The community encompasses downtown proper and its immediate surroundings: the skyway-connected office towers of Downtown West, the emerging residential density of Downtown East, the warehouse-district-turned-food-destination of the North Loop, the green refuge of Loring Park, and the dense urban fabric of Elliot Park and Stevens Square.",
    "The North Loop has become the city's premier dining and nightlife neighborhood, with a concentration of acclaimed restaurants (Spoon and Stable, Bar La Grassa, Demi) rivaling any district in the Midwest. Downtown East anchors the cultural infrastructure: the Guthrie Theater, Mill City Museum, the Stone Arch Bridge, and U.S. Bank Stadium. Loring Park provides one of the few genuinely mixed-use urban parks in the city — a place where office workers, residents, homeless individuals, and cultural events share space daily.",
    "The honest assessment: downtown Minneapolis has struggled post-pandemic. Office occupancy remains below pre-2020 levels. Nicollet Mall, once the commercial spine of the city, has vacancies that would have been unthinkable a decade ago. The skyway system — 11 miles of enclosed, climate-controlled walkways connecting 80 blocks — is both an engineering marvel and a social experiment that has drawn residents off the street and into a privatized parallel city. Central is in transition, and the outcome is not yet clear. But the bones are extraordinary, and the current moment represents opportunity for those willing to bet on urban density.",
  ],
  Longfellow: [
    "Longfellow is the southeast Minneapolis community that earns its reputation through geography. The Mississippi River forms its eastern boundary, Minnehaha Creek cuts through its southern edge, and Minnehaha Falls — a 53-foot waterfall in a city park, the waterfall that Longfellow the poet wrote about — anchors its most famous public space. The Midtown Greenway, a below-grade bike highway built in a former rail corridor, runs east-west through the community and connects it to the lakes and downtown.",
    "The five neighborhoods here — Cooper, Hiawatha, Howe, Longfellow proper, and Seward — share a commitment to biking infrastructure, cooperative economics, and community organizing that is unusually strong even by Minneapolis standards. Seward Co-op is not just a grocery store; it is a community institution that embodies the neighborhood's values. The Midtown Greenway is not just a bike path; it is a transportation network that shapes daily life for thousands of residents.",
    "Longfellow was hit hard in 2020. The Third Precinct, the Lake Street corridor, and several neighborhood businesses were damaged or destroyed during the unrest following George Floyd's murder. The rebuilding has been real, sustained, and community-driven — but it is ongoing. Parts of Lake Street are still recovering. This is not a neighborhood that pretends its recent history did not happen. Longfellow is for people who value resilience, who want the best biking infrastructure in the city, and who understand that community is something you build, not something you purchase.",
  ],
  "Near North": [
    "Near North is the heart of Black Minneapolis. The community's history is inseparable from the Great Migration, the civil rights movement, the 1966 and 1967 unrest on Plymouth Avenue, and the ongoing struggle for racial equity in a city that markets itself as progressive while maintaining some of the worst racial disparities in the country. To write about Near North without centering this history would be dishonest.",
    "The six neighborhoods here — Harrison, Hawthorne, Jordan, Near-North, Sumner-Glenwood, and Willard-Hay — contain some of the most affordable housing in Minneapolis, significant cultural institutions (the Capri Theater, the Heritage Park development), and a community organizing tradition that has produced leaders who shaped the city's politics for decades. The housing stock ranges from historic Victorians to postwar construction to new development, with prices that remain accessible in a city where affordability is disappearing.",
    "Near North faces challenges that are structural, not incidental. Decades of redlining, highway construction that destroyed the Rondo neighborhood in neighboring St. Paul and disrupted communities here, and persistent disinvestment have created conditions that cannot be addressed by individual homebuyers or trendy coffee shops. Crime rates are higher than city averages. Commercial corridors are thin. But there is also investment — the Upper Harbor Terminal redevelopment, new housing, community-driven planning — and a cultural depth that wealthier, whiter neighborhoods cannot replicate. Near North is not for everyone. But understanding it is essential to understanding Minneapolis.",
  ],
  Nokomis: [
    "Nokomis is the south Minneapolis community that delivers lake life without the southwest premium. Lake Nokomis, smaller and less famous than Bde Maka Ska or Harriet, has arguably the best public beach in the city — a wide, sandy stretch with a bathhouse, paddleboard rentals, and a summertime energy that feels more relaxed and less performative than the western lakes. The community's eleven neighborhoods spread south and east from the lake, forming a residential fabric that is more diverse and more affordable than the neighborhoods to the west.",
    "The housing stock is classic Minneapolis: postwar bungalows, Cape Cods, and ramblers on tree-lined streets, with prices ranging from $300K to $450K — significantly below the $500K-plus medians in Southwest or the lakes district. The 50th Street corridor provides neighborhood-scale commercial amenities. Minnehaha Parkway connects the community to Minnehaha Falls and the river. The demographics are shifting, becoming more diverse in ways that some longtime residents celebrate and others find disorienting.",
    "Nokomis is not the neighborhood you move to for nightlife, for a restaurant scene, or for urban density. It is the neighborhood you move to for a house with a yard within biking distance of a lake, in a community that is affordable enough to include people who are not already wealthy. The commercial infrastructure is thinner than in denser neighborhoods, and walkability varies significantly block by block. But for families, for value, and for lake access without the premium, Nokomis is one of the most practical choices in Minneapolis.",
  ],
  Northeast: [
    "Northeast Minneapolis — always \"Nordeast\" to locals — is the city's most distinctive community, a place where the old and the new coexist in productive, sometimes uncomfortable tension. The historic identity is Eastern European: Polish, Ukrainian, Czech, and Slovak immigrants built the churches (St. Boniface, Holy Cross, Our Lady of Lourdes), the bars (Nye's Polonaise Room, now closed and mourned), and the commercial corridors along Central and University Avenues. That identity is still visible in the architecture, the food, and the institutions that survive.",
    "Layered on top of this is the arts and brewery district that has defined Northeast for the past two decades. The Northrup King Building and the Casket Arts Building house hundreds of artist studios. Art-A-Whirl, the annual open-studio weekend, draws tens of thousands. The brewery cluster — Indeed, Bauhaus, Fair State, Dangerous Man — functions as social infrastructure for the creative class. Thirteen neighborhoods spread across the community, from the riverfront density of Sheridan and Beltrami to the residential quiet of Audubon Park and Waite Park.",
    "The tension in Northeast is between the community that built it and the community that discovered it. Artists moved here because it was cheap. Breweries followed because the zoning allowed it. Young professionals followed because the breweries were good. Developers followed because the young professionals had money. The result is a community where a third-generation Polish family lives next to a graphic designer who moved from Portland, and both are watching their property taxes rise. Northeast is the most interesting version of a story playing out in every American city — gentrification as cultural succession, with all the loss and gain that implies.",
  ],
  Phillips: [
    "Phillips is the most diverse community in Minneapolis, and one of the most diverse square miles in the Midwest. The four neighborhoods here — East Phillips, Midtown Phillips, Phillips West, and Ventura Village — are home to significant Somali, Latino, Native American, and African American populations, along with Southeast Asian communities and longtime white residents. This is not brochure diversity. This is the real thing: multiple languages spoken on every block, multiple food traditions within walking distance, multiple cultural frameworks operating simultaneously.",
    "The community sits south of downtown, bracketed by Interstate 35W and Hiawatha Avenue, with the Midtown Greenway running along its southern edge. The housing is affordable — some of the most affordable in the city — and the commercial corridors along Lake Street and Franklin Avenue serve the community's actual residents rather than visitors or gentrifiers. The Little Earth housing project is one of the country's only urban housing developments specifically for Native Americans. The East Phillips Indoor Urban Farm project represents years of community organizing against industrial land use.",
    "Phillips does not perform well on conventional neighborhood rankings. Walk scores are moderate. Crime statistics are above city averages. The built environment shows decades of disinvestment. But conventional rankings measure neighborhoods by what they offer to newcomers, not by what they mean to the people who already live there. Phillips is a community where immigrant families build new lives, where cultural institutions serve populations that are invisible in wealthier neighborhoods, and where community organizing is not a hobby but a survival strategy. It is not for everyone. It is essential to Minneapolis.",
  ],
  Powderhorn: [
    "Powderhorn is south Minneapolis at its most politically engaged, culturally diverse, and honestly complicated. The eight neighborhoods in this community — Bancroft, Bryant, Central, Corcoran, Lyndale, Powderhorn Park, Standish, and Whittier — form the densest, most diverse residential fabric in the city. Whittier alone contains Eat Street (the stretch of Nicollet Avenue with more culinary range in five blocks than most cities have in total), the Minneapolis Institute of Art, and MCAD. Powderhorn Park's lake is a true urban commons where every demographic in Minneapolis shares space.",
    "The community's identity is inseparable from its activism. The MayDay Parade, organized by In the Heart of the Beast Theatre, is a giant puppet procession that is unlike any civic event in the country. The neighborhood associations here are among the most active in the city. The political culture runs progressive to radical, with organizing traditions rooted in labor, immigrant rights, racial justice, and cooperative economics.",
    "Powderhorn took 2020 harder than almost any other community in Minneapolis. The Third Precinct burned. Lake Street businesses were destroyed. The park encampment that formed in Powderhorn Park was a traumatic community experience that tested every ideal the community claimed to hold. The rebuilding has been intense, contested, and ongoing. Crime spiked and has partially but not fully receded. Commercial corridors are recovering but not recovered. Powderhorn is for people who want to live in a community that takes its values seriously enough to be tested by them — and who understand that the testing is not over.",
  ],
  Southwest: [
    "Southwest is the Minneapolis community that works the way suburbs are supposed to work — except it is in the city. The nine neighborhoods here (Armatage, East Harriet, Fulton, Kenny, King Field, Linden Hills, Lynnhurst, Tangletown, and Windom) form a residential corridor of tree-lined streets, well-maintained bungalows and Craftsmans, strong public schools, and easy access to Lake Harriet and the surrounding parkland. This is where Minneapolis families move when they want the urban school district, the lake lifestyle, and the walkable village centers without the density or complexity of neighborhoods closer to downtown.",
    "Linden Hills, the community's most recognizable neighborhood, has a genuine village center at 43rd and Upton — Wild Rumpus bookstore, Sebastian Joe's ice cream, Tilia restaurant — that functions as a neighborhood living room. Fulton and Lynnhurst offer the same housing stock at slightly lower prices with slightly less commercial infrastructure. Tangletown's winding, non-grid streets feel like a secret neighborhood hidden within the city's relentless regularity.",
    "The tradeoffs in Southwest are not about amenities — the amenities are excellent. They are about who gets to access them. These are expensive neighborhoods, with median home prices ranging from the mid-$400Ks to $700K-plus. The demographics are overwhelmingly white. The \"village\" identity that makes Linden Hills charming can shade into insularity. The community's resistance to density and multifamily housing has been a flashpoint in Minneapolis's broader debates about equity and growth. Southwest is an excellent place to live if you can afford it. The question Minneapolis is asking is whether that exclusivity is a feature or a problem.",
  ],
  University: [
    "University is the Minneapolis community shaped most directly by a single institution. The University of Minnesota's Twin Cities campus — 50,000 students, a Big Ten athletic program, a world-class research infrastructure — dominates the physical and social landscape. But the seven neighborhoods here are more than a college town. Cedar-Riverside, known as the West Bank, is home to the largest Somali community in North America and a counterculture history that stretches back to the 1960s folk scene. Prospect Park has the Witch's Hat water tower and a light rail station that is reshaping the neighborhood around transit-oriented development.",
    "Marcy-Holmes, the oldest neighborhood in Minneapolis, sits between the campus and the river with a mix of student housing, historic homes, and the St. Anthony Main commercial district. Como is a residential neighborhood of postwar houses that feels more like a suburb than a university district. Nicollet Island, a literal island in the Mississippi, has some of the most distinctive residential properties in the city. The diversity of the community — students, Somali families, aging counterculture residents, young professionals in new apartment buildings — creates a demographic mix that is genuinely unusual.",
    "The University community has challenges unique to its anchor institution. Student turnover means that community cohesion is harder to build. Rental housing dominates in several neighborhoods, with absentee landlords and deferred maintenance. Stadium Village and Dinkytown serve the campus population more than the broader community. But the cultural infrastructure is extraordinary: the Weisman Art Museum, the Guthrie's former home on the West Bank, the Cedar Cultural Center, and a density of intellectual and artistic energy that exists because of, not despite, the university's presence.",
  ],
};

function getCommunityBySlug(slug: string) {
  return COMMUNITIES.find((c) => slugify(c.name) === slug) ?? null;
}

export async function generateStaticParams() {
  return COMMUNITIES.map((c) => ({
    slug: slugify(c.name),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) return { title: "Not Found" };

  return {
    title: `${community.name} Community | From MPLS With Love`,
    description: `Explore the ${community.neighborhoods.length} neighborhoods of the ${community.name} community in Minneapolis — character, geography, and what makes this part of the city distinct.`,
    openGraph: {
      title: `${community.name} Community — Minneapolis Neighborhoods`,
      description: `Explore the ${community.neighborhoods.length} neighborhoods of the ${community.name} community in Minneapolis.`,
      url: `${BASE_URL}/communities/${slug}`,
      type: "article",
    },
  };
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) {
    notFound();
  }

  const overview = COMMUNITY_OVERVIEWS[community.name];

  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: `${community.name} Community — Minneapolis Neighborhoods`,
      description: `Explore the ${community.neighborhoods.length} neighborhoods of the ${community.name} community in Minneapolis.`,
      url: `${BASE_URL}/communities/${slug}`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Neighborhoods", url: `${BASE_URL}/neighborhoods` },
      {
        name: community.name,
        url: `${BASE_URL}/communities/${slug}`,
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
          href="/neighborhoods"
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
          All Neighborhoods
        </Link>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Community
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          {community.name}
        </h1>

        <div className="mb-14">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717a] pb-5 border-b border-[#e4e4e7] mb-0">
            {community.neighborhoods.length} neighborhoods
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-16">
        {/* Editorial overview */}
        <div className="mb-16 space-y-6">
          {overview?.map((paragraph, i) => (
            <p
              key={i}
              className="text-[15px] text-[#52525b] leading-[1.85]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Neighborhoods grid */}
        <div className="mb-16">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            Neighborhoods in {community.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {community.neighborhoods.map((name) => (
              <Link
                key={name}
                href={`/neighborhoods/${slugify(name)}`}
                className="group border border-[#e4e4e7] px-5 py-4 hover:border-[#2a9d8f] transition-colors"
              >
                <span className="text-sm font-semibold text-[#0a0a0a] group-hover:text-[#2a9d8f] transition-colors">
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Explore All Minneapolis Neighborhoods
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Browse all 87 neighborhoods across 11 communities &mdash; or
            read our guide to the best neighborhoods if you&apos;re deciding
            where to live.
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
              Best Neighborhoods Guide
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
