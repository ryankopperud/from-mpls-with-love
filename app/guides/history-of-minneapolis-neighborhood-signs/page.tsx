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
  title: "The History of Minneapolis Neighborhood Signs",
  description:
    "The story behind Minneapolis's 87 neighborhood signs — how the city created one of America's most distinctive neighborhood identity systems, who designed the signs, and what they mean.",
  openGraph: {
    title: "The History of Minneapolis Neighborhood Signs",
    description:
      "How Minneapolis created 87 official neighborhoods, each with its own sign — the history, design, and civic meaning of America's most distinctive neighborhood identity system.",
    url: `${BASE_URL}/guides/history-of-minneapolis-neighborhood-signs`,
    type: "article",
  },
  alternates: { canonical: "/guides/history-of-minneapolis-neighborhood-signs" },
};

export default function NeighborhoodSignsPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "The History of Minneapolis Neighborhood Signs",
      description:
        "The story behind Minneapolis's 87 neighborhood signs — how the city created one of America's most distinctive neighborhood identity systems.",
      url: `${BASE_URL}/guides/history-of-minneapolis-neighborhood-signs`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "History of Neighborhood Signs",
        url: `${BASE_URL}/guides/history-of-minneapolis-neighborhood-signs`,
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
            src="/images/architecture/grain-belt-beer-sign-northeast.webp"
            alt="Grain Belt Beer sign in Northeast Minneapolis"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis History
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          The Neighborhood Signs
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            If you have driven through Minneapolis, you have seen them: green
            and white signs marking the borders of 87 officially recognized
            neighborhoods, from{" "}
            <Link
              href="/neighborhoods/north-loop"
              className="text-[#2a9d8f] hover:underline"
            >
              North Loop
            </Link>{" "}
            to{" "}
            <Link
              href="/neighborhoods/nokomis"
              className="text-[#2a9d8f] hover:underline"
            >
              Nokomis
            </Link>
            , from{" "}
            <Link
              href="/neighborhoods/whittier"
              className="text-[#2a9d8f] hover:underline"
            >
              Whittier
            </Link>{" "}
            to{" "}
            <Link
              href="/neighborhoods/bryn-mawr"
              className="text-[#2a9d8f] hover:underline"
            >
              Bryn Mawr
            </Link>
            . These signs are so familiar to Minneapolis residents that they
            become invisible &mdash; part of the infrastructure, like stop
            signs and fire hydrants. But the story behind them is remarkable:
            how a city decided to officially name and demarcate 87 distinct
            communities, and what that decision says about Minneapolis&apos;s
            relationship to neighborhood identity.
          </p>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717a] pt-5 border-t border-[#e4e4e7]">
            Last updated: March 2026
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-16">
        {/* Section: The number */}
        <section className="mb-12">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            87 Neighborhoods. Why 87?
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-4">
            <p>
              Most American cities do not have an official number of
              neighborhoods. Ask someone in Chicago how many neighborhoods the
              city has and you will get answers ranging from 77 (the community
              areas) to 200+ (the neighborhoods as locals define them). New
              York has boroughs, community districts, and neighborhoods that
              overlap and contradict each other. Even St. Paul, sitting right
              across the river, uses 17 &ldquo;planning districts&rdquo;
              rather than granular neighborhood designations.
            </p>
            <p>
              Minneapolis chose a different path. In 1991, the city formally
              recognized 87 neighborhoods as the building blocks of civic
              participation. Each neighborhood was given official boundaries,
              an official name, and an official neighborhood organization
              funded in part by the city. The number 87 was not arbitrary
              &mdash; it emerged from decades of organic community
              self-identification, formalized through a process that blended
              resident input, historical precedent, and geographic logic.
            </p>
            <p>
              Some of the 87 names have deep roots.{" "}
              <Link
                href="/neighborhoods/powderhorn-park"
                className="text-[#2a9d8f] hover:underline"
              >
                Powderhorn Park
              </Link>{" "}
              takes its name from the lake, which was named for its shape
              (resembling a powder horn used by frontier settlers).{" "}
              <Link
                href="/neighborhoods/seward"
                className="text-[#2a9d8f] hover:underline"
              >
                Seward
              </Link>{" "}
              is named for William Seward, Lincoln&apos;s Secretary of State
              who brokered the purchase of Alaska.{" "}
              <Link
                href="/neighborhoods/longfellow"
                className="text-[#2a9d8f] hover:underline"
              >
                Longfellow
              </Link>{" "}
              honors Henry Wadsworth Longfellow, whose poem &ldquo;The Song of
              Hiawatha&rdquo; (romanticized and problematic as it is) put
              Minnehaha Falls on the national map. Other names are more
              prosaic: Downtown East and Downtown West are exactly what they
              sound like.
            </p>
          </div>
        </section>

        {/* Section: The sign program */}
        <section className="mb-12">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            The Sign Program
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-4">
            <p>
              The physical signs that mark Minneapolis neighborhoods today are
              the product of a city sign program that has evolved over several
              decades. The earliest neighborhood identification signs appeared
              in the 1970s, when community organizations began putting up
              their own markers &mdash; a grassroots act of territorial
              identity that preceded any official city program. These early
              signs were inconsistent in design, materials, and placement.
              Some neighborhoods had hand-painted wooden signs. Others had
              nothing.
            </p>
            <p>
              The city formalized the sign program in the 1990s, coinciding
              with the creation of the Neighborhood Revitalization Program
              (NRP) in 1990. The NRP was a groundbreaking initiative that
              allocated $400 million over 20 years to neighborhood-level
              planning and improvements, with each neighborhood organization
              controlling how its share was spent. The sign program was part
              of a broader effort to make neighborhoods legible &mdash; to
              give residents and visitors a visual vocabulary for the city&apos;s
              geography.
            </p>
            <p>
              The standard sign design that most people recognize today
              features green backgrounds with white text, consistent
              typography, and the neighborhood name in large letters. The
              signs are posted at neighborhood boundaries, typically on
              arterial streets and major intersections. Some neighborhoods
              have supplemented the standard signs with their own custom
              designs &mdash;{" "}
              <Link
                href="/neighborhoods/north-loop"
                className="text-[#2a9d8f] hover:underline"
              >
                North Loop
              </Link>{" "}
              and{" "}
              <Link
                href="/neighborhoods/logan-park"
                className="text-[#2a9d8f] hover:underline"
              >
                Logan Park
              </Link>{" "}
              in Northeast have particularly distinctive markers that reflect
              their neighborhoods&apos; creative identities.
            </p>
          </div>
        </section>

        {/* Section: NRP and neighborhood power */}
        <section className="mb-12">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            The Neighborhood Revitalization Program
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-4">
            <p>
              The signs are visible, but the system behind them is more
              important. When Minneapolis created the Neighborhood
              Revitalization Program in 1990, it did something unusual for an
              American city: it devolved real power and real money to
              neighborhood-level organizations. Each of the 87 neighborhoods
              was allocated funding based on population, housing conditions,
              and need. Neighborhood organizations &mdash; volunteer boards
              elected by residents &mdash; decided how to spend it.
            </p>
            <p>
              Some neighborhoods used NRP funds to build parks, improve
              streetscaping, or fund housing rehabilitation. Others invested
              in commercial corridor improvements, public art, or community
              gardens. The program was not without criticism &mdash;
              wealthier, whiter neighborhoods with more organized residents
              tended to leverage the process more effectively, raising equity
              concerns that persist today. But the NRP established a
              principle that remains central to Minneapolis governance: the
              neighborhood is the fundamental unit of civic life.
            </p>
            <p>
              The NRP&apos;s direct funding ended, but the neighborhood
              organization system it created persists. Today, 70+
              neighborhood organizations operate across the city, funded
              through a combination of city grants (now through the
              Neighborhoods 2020 program), private fundraising, and volunteer
              labor. These organizations run community events, review
              development proposals, advocate for infrastructure improvements,
              and serve as the first point of contact between residents and
              city government. The signs are the visible markers of this
              invisible infrastructure.
            </p>
          </div>
        </section>

        {/* Section: Design evolution */}
        <section className="mb-12">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            Design and Evolution
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-4">
            <p>
              The signs have never been fully standardized, and that is part
              of their charm. The &ldquo;official&rdquo; city signs follow a
              consistent template, but many neighborhoods have added their
              own markers over the years. Some examples:
            </p>
            <p>
              <Link
                href="/neighborhoods/lowry-hill-east"
                className="text-[#2a9d8f] hover:underline"
              >
                Lowry Hill East
              </Link>{" "}
              (The Wedge) has signs that read &ldquo;The Wedge&rdquo; rather
              than the official name, reflecting a community that has always
              preferred its informal identity. The signs in{" "}
              <Link
                href="/neighborhoods/fulton"
                className="text-[#2a9d8f] hover:underline"
              >
                Fulton
              </Link>{" "}
              and{" "}
              <Link
                href="/neighborhoods/linden-hills"
                className="text-[#2a9d8f] hover:underline"
              >
                Linden Hills
              </Link>{" "}
              are well-maintained and prominently placed, reflecting
              neighborhoods with strong organizational capacity and civic
              pride. In some North Minneapolis neighborhoods, signs have
              been damaged or removed and not replaced, reflecting the
              disinvestment that has affected the area &mdash; a sign&apos;s
              condition, it turns out, is a reliable indicator of a
              neighborhood&apos;s political power.
            </p>
            <p>
              Some neighborhoods have gone beyond signs to create entire
              visual identity systems.{" "}
              <Link
                href="/neighborhoods/north-loop"
                className="text-[#2a9d8f] hover:underline"
              >
                North Loop
              </Link>{" "}
              has branded banners on light poles. Northeast Minneapolis
              neighborhoods have embraced arts-district branding. The
              Powderhorn and{" "}
              <Link
                href="/neighborhoods/south-uptown"
                className="text-[#2a9d8f] hover:underline"
              >
                South Uptown
              </Link>{" "}
              areas have seen grassroots mural projects that function as
              unofficial neighborhood markers. The signs are the official
              system; the murals, banners, and custom markers are the folk
              system that exists alongside it.
            </p>
          </div>
        </section>

        {/* Section: Civic meaning */}
        <section className="mb-12">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            What the Signs Mean
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-4">
            <p>
              The neighborhood signs are more than wayfinding. They represent
              a civic philosophy: that a city of 430,000 people works best
              when it is organized as a federation of 87 smaller communities,
              each with its own identity, its own organizations, and its own
              voice in how the city is governed. This is not how most American
              cities operate. Most cities use larger planning districts or
              wards as their primary sub-city units. Minneapolis uses
              neighborhoods.
            </p>
            <p>
              This has practical consequences. When a developer proposes a
              new building in{" "}
              <Link
                href="/neighborhoods/whittier"
                className="text-[#2a9d8f] hover:underline"
              >
                Whittier
              </Link>
              , the Whittier Alliance reviews and comments on the proposal.
              When a park in{" "}
              <Link
                href="/neighborhoods/kingfield"
                className="text-[#2a9d8f] hover:underline"
              >
                Kingfield
              </Link>{" "}
              needs renovation, the Kingfield Neighborhood Association
              advocates for it. When{" "}
              <Link
                href="/neighborhoods/longfellow"
                className="text-[#2a9d8f] hover:underline"
              >
                Longfellow
              </Link>{" "}
              was devastated by the unrest of 2020, the Longfellow Community
              Council was the primary vehicle for neighborhood-level response
              and recovery.
            </p>
            <p>
              The system is imperfect. Neighborhood organization boards can
              be dominated by a small number of vocal residents who do not
              represent the broader community. Renters, immigrants, and
              younger residents are chronically underrepresented. The
              organizations in wealthier neighborhoods have more resources and
              more influence. But the principle &mdash; that neighborhood
              identity matters, that it deserves a sign and a seat at the
              table &mdash; is deeply embedded in how Minneapolis works.
            </p>
          </div>
        </section>

        {/* Section: Comparison to other cities */}
        <section className="mb-12">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            How Minneapolis Compares
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-4">
            <p>
              Most American cities have neighborhood signs of some kind.
              Chicago&apos;s neighborhood signs are iconic &mdash; star-shaped
              markers in the city&apos;s signature blue and white. Portland
              has neighborhood boundary signs. Even smaller cities like
              Buffalo and Cleveland mark their neighborhoods. What makes
              Minneapolis distinctive is not the signs themselves but the
              system behind them: 87 officially recognized neighborhoods, each
              with a funded organization, each with a defined role in city
              governance.
            </p>
            <p>
              Chicago has 77 community areas but 200+ self-identified
              neighborhoods. Portland has 95 neighborhoods organized into
              seven district coalitions. Boston has 23 neighborhoods.
              Minneapolis&apos;s 87 is high for a city of its size, resulting
              in neighborhoods that are small enough to feel like genuine
              communities. The average Minneapolis neighborhood has about
              5,000 residents &mdash; small enough that a dedicated resident
              can walk the entire neighborhood in 30 minutes and recognize
              faces at the coffee shop.
            </p>
            <p>
              This granularity is what makes the signs meaningful. A sign
              that says{" "}
              <Link
                href="/neighborhoods/kenny"
                className="text-[#2a9d8f] hover:underline"
              >
                Kenny
              </Link>{" "}
              is not marking a large, anonymous district. It is marking a
              community small enough for its residents to know their
              neighbors, attend a meeting at the community center, and feel
              genuine ownership over a few square blocks of the city. That is
              the promise of the Minneapolis neighborhood system, and the
              signs are the physical reminder of that promise.
            </p>
          </div>
        </section>

        {/* Section: The signs today */}
        <section className="mb-12">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            The Signs Today
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-4">
            <p>
              In 2026, the neighborhood sign system is both enduring and
              evolving. Some neighborhoods have invested in updated signs and
              branding. Others have signs that are faded, bent, or missing.
              The condition of the signs roughly maps to the condition of the
              neighborhoods &mdash; which is either a practical observation
              or a systemic indictment, depending on your perspective.
            </p>
            <p>
              There is an ongoing conversation about whether 87 is the right
              number. Some neighborhoods are so small that their organizations
              struggle to find board members or maintain programming. Others
              have boundaries that no longer reflect how residents actually
              identify. The city has explored consolidation and
              reorganization, but the neighborhoods resist &mdash; identity,
              once established and marked with a sign, is hard to take away.
            </p>
            <p>
              What is not in question is the significance of the system. When
              a Minneapolis resident tells you they live in{" "}
              <Link
                href="/neighborhoods/seward"
                className="text-[#2a9d8f] hover:underline"
              >
                Seward
              </Link>{" "}
              or{" "}
              <Link
                href="/neighborhoods/logan-park"
                className="text-[#2a9d8f] hover:underline"
              >
                Logan Park
              </Link>{" "}
              or{" "}
              <Link
                href="/neighborhoods/tangletown"
                className="text-[#2a9d8f] hover:underline"
              >
                Tangletown
              </Link>
              , they are not just giving you a geographic reference. They are
              telling you something about who they are, what they value, and
              how they relate to the city. The signs are how Minneapolis says:
              this place is specific, this community is real, and the people
              who live here have a name for where they belong.
            </p>
            <p>
              That is worth a sign on every corner.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Explore Every Neighborhood
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            We have built a guide for every Minneapolis neighborhood &mdash;
            the history, the restaurants, the housing, and the honest version
            of what it&apos;s like to live there. Start exploring the 87.
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
