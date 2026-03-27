import type { Metadata } from "next";
import Link from "next/link";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  renderJsonLd,
} from "@/lib/schema";

const BASE_URL = "https://mplswithlove.com";

export const metadata: Metadata = {
  title: "Best Minneapolis Neighborhoods for Schools (2026)",
  description:
    "The best Minneapolis neighborhoods for families who prioritize schools — rated by elementary and secondary options, with honest assessments of MPS district challenges and alternatives.",
  openGraph: {
    title: "Best Minneapolis Neighborhoods for Schools (2026)",
    description:
      "The best Minneapolis neighborhoods for schools — real ratings, real school names, and honest talk about the MPS district.",
    url: `${BASE_URL}/guides/best-neighborhoods-for-schools`,
    type: "article",
  },
};

const neighborhoods = [
  {
    rank: 1,
    name: "Fulton",
    slug: "fulton",
    topElementary: "Burroughs Community School",
    elementaryRating: "8/10",
    secondaryOptions: "Southwest High School, Burroughs (K-8)",
    privateNearby: "Blessed Trinity, Incarnation, St. Thomas More",
    charterDensity: "Low",
    honest:
      "Fulton is the default answer for \"best schools in Minneapolis\" and for good reason. Burroughs Community School is a K-8 magnet that consistently ranks among the top MPS schools, with strong test scores, engaged parent involvement, and a project-based learning model that parents genuinely like. Southwest High School, while imperfect, offers IB and AP programs that send graduates to strong universities. The tradeoff: Burroughs is a citywide magnet, which means you are not guaranteed a spot even though you live next door. The lottery system creates real anxiety for Fulton families. If you get into Burroughs, the school experience is excellent. If you do not, you are navigating a school choice process that can feel arbitrary. Fulton also has easy access to several strong Catholic schools if public school placement does not work out.",
  },
  {
    rank: 2,
    name: "Linden Hills",
    slug: "linden-hills",
    topElementary: "Lake Harriet Lower & Upper Campus",
    elementaryRating: "8/10",
    secondaryOptions: "Southwest High School, Lake Harriet Upper (5-8)",
    privateNearby: "Blessed Trinity, Breck School (nearby Golden Valley)",
    charterDensity: "Low",
    honest:
      "Linden Hills families have access to the Lake Harriet school campus — a lower (K-4) and upper (5-8) school that functions as one of the most sought-after public school tracks in Minneapolis. The community around Lake Harriet schools is tightly knit, and the parent volunteer culture is strong. Test scores are well above district averages. The schools benefit from a PTA that raises significant supplemental funding — which is both an advantage and a reflection of broader MPS equity concerns. Southwest High School serves the secondary years and offers a rigorous course load. The neighborhood is expensive ($625K-$850K), and the school quality is priced into the real estate. You are paying a premium for school access, and everyone knows it.",
  },
  {
    rank: 3,
    name: "Kenny",
    slug: "kenny",
    topElementary: "Kenny Community School",
    elementaryRating: "7/10",
    secondaryOptions: "Southwest High School, Justice Page Middle",
    privateNearby: "Incarnation, Holy Name, Minnehaha Academy (nearby)",
    charterDensity: "Low",
    honest:
      "Kenny is Fulton's quieter neighbor with a similar school profile at a slightly lower price point. Kenny Community School (K-5) is a solid neighborhood school with decent test scores and an active parent community. It does not get the same attention as Burroughs or Lake Harriet, but families who live in Kenny and send their kids to the neighborhood school generally report satisfaction. The school feeds into Justice Page Middle School and then Southwest High School — a pipeline that works well for many families. Kenny's advantage over Fulton is honesty: you are more likely to actually attend your neighborhood school, since Kenny is not a citywide magnet. What you see is what you get.",
  },
  {
    rank: 4,
    name: "Lynnhurst",
    slug: "lynnhurst",
    topElementary: "Burroughs (magnet), Clara Barton Open",
    elementaryRating: "7/10",
    secondaryOptions: "Southwest High School, Justice Page Middle",
    privateNearby: "Holy Name, St. Thomas More, Annunciation",
    charterDensity: "Low",
    honest:
      "Lynnhurst sits between Fulton and the lakes, sharing access to the Burroughs magnet and the Southwest High School feeder pattern. Clara Barton Open School — an open/progressive-model school — is the neighborhood's designated elementary school and is a strong option for families who value creative, child-directed learning. The open school model is not for everyone, but families who choose it tend to be passionate advocates. Lynnhurst is also well-positioned for private school access: Holy Name and several other parochial options are within easy driving distance. The neighborhood's school strength is really about the cluster of options within reach rather than any single standout.",
  },
  {
    rank: 5,
    name: "Tangletown",
    slug: "tangletown",
    topElementary: "Barton Open School",
    elementaryRating: "7/10",
    secondaryOptions: "Southwest High School, Justice Page Middle",
    privateNearby: "Minnehaha Academy, St. Helena",
    charterDensity: "Low",
    honest:
      "Tangletown — technically part of the larger CARAG/Fuller neighborhood area — is home to Barton Open School, which is one of MPS's most distinctive elementary schools. Barton uses an \"open\" model emphasizing multi-age classrooms, student-directed learning, and project-based education. It attracts families from across the city who want an alternative to traditional schooling. If the Barton philosophy aligns with your parenting values, this is a dream school. If you want traditional structure with clear grade-level benchmarks, it may feel disorienting. Tangletown itself is a quiet, winding-streets neighborhood with a strong community feel. The residential character — curving roads, mature trees, modest bungalows — makes it one of the most pleasant neighborhoods to walk a child to school.",
  },
  {
    rank: 6,
    name: "Nokomis",
    slug: "nokomis",
    topElementary: "Keewaydin Community School",
    elementaryRating: "6/10",
    secondaryOptions: "Roosevelt High School, Nokomis Montessori (magnet)",
    privateNearby: "Minnehaha Academy, St. Helena, Nativity of Mary",
    charterDensity: "Medium",
    honest:
      "Nokomis offers a different school equation: more affordable housing ($300K-$450K) with decent but not top-tier public schools. Keewaydin Community School is a solid neighborhood school that has improved in recent years. The real draw is Nokomis Montessori, a public magnet that provides Montessori education through 8th grade — a rare offering in a public district. Roosevelt High School is improving but is still a step below Southwest in terms of test scores and course offerings. Families who love Nokomis often combine public school with supplemental activities (arts programs, tutoring) or switch to private/charter for middle or high school. The neighborhood's affordability means you have budget headroom for educational supplements.",
  },
  {
    rank: 7,
    name: "Kingfield",
    slug: "kingfield",
    topElementary: "Kingfield Elementary (K-5)",
    elementaryRating: "6/10",
    secondaryOptions: "Southwest High School, Justice Page Middle",
    privateNearby: "Holy Name, Annunciation",
    charterDensity: "Medium",
    honest:
      "Kingfield benefits from its southwest location and Southwest High School feeder pattern without the premium pricing of Fulton or Linden Hills. Kingfield Elementary is a neighborhood school that performs near district averages — not a standout, but stable and improving. The parent community is engaged, and the Kingfield neighborhood association is one of the most active in the city. Many Kingfield families use open enrollment to access Burroughs or Lake Harriet for elementary and then return to the Southwest pipeline for high school. This is a strategic approach that works when you get a favorable lottery result and creates stress when you do not. Kingfield is the school neighborhood for families who want the southwest corridor at $350K-$475K instead of $500K-$800K.",
  },
  {
    rank: 8,
    name: "Armatage",
    slug: "armatage",
    topElementary: "Armatage Montessori (magnet)",
    elementaryRating: "7/10",
    secondaryOptions: "Southwest High School, Justice Page Middle",
    privateNearby: "Blessed Trinity, Christ the King",
    charterDensity: "Low",
    honest:
      "Armatage has a genuinely good school in Armatage Montessori — a public magnet school that draws families from across the city. The Montessori model appeals to parents who value independence, self-directed learning, and mixed-age classrooms. The school has a strong reputation and a waitlist. As a magnet, it faces the same access issue as Burroughs: proximity does not guarantee enrollment. But Armatage families have a geographic advantage in the lottery, and the school is a neighborhood anchor in a way that most magnets are not. The neighborhood is quiet, affordable by southwest standards ($325K-$425K), and has a family density that creates built-in playdate networks.",
  },
  {
    rank: 9,
    name: "Hale",
    slug: "hale",
    topElementary: "Hale Elementary",
    elementaryRating: "6/10",
    secondaryOptions: "Roosevelt High School, South High School",
    privateNearby: "Minnehaha Academy, Nativity of Mary",
    charterDensity: "Medium",
    honest:
      "Hale is an honest neighborhood with honest schools — not flashy, not failing, but solidly serving the families who attend. Hale Elementary is a small neighborhood school with the benefits that come from smallness: teachers know every kid, the principal knows every family, and the community is tight. The test scores are near district average, which in MPS means there is room for improvement. The secondary options are the challenge — Roosevelt High School is a good school that struggles with perception, and some families open-enroll to Southwest or go private for high school. Hale works best for families who value community integration and are willing to supplement as needed rather than optimize for school rankings.",
  },
  {
    rank: 10,
    name: "Diamond Lake",
    slug: "diamond-lake",
    topElementary: "Diamond Lake Elementary (K-5)",
    elementaryRating: "6/10",
    secondaryOptions: "Roosevelt High School, Justice Page Middle",
    privateNearby: "St. Helena, Nativity of Mary, Minnehaha Academy",
    charterDensity: "Medium",
    honest:
      "Diamond Lake is the most affordable neighborhood on this list ($275K-$375K) that still delivers access to a functional school pipeline. Diamond Lake Elementary is a small school with a diverse student body and a community-school model that provides wraparound services. The academic metrics are mixed, but the school's integration of social-emotional learning and community partnerships creates a different kind of value. For secondary, families split between Roosevelt (neighborhood) and open-enrolling to Southwest or going private. Diamond Lake is the school neighborhood for families who prioritize affordability and diversity over test score optimization — and who are willing to be active participants in their children's education regardless of school ranking.",
  },
];

export default function BestSchoolsPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Best Minneapolis Neighborhoods for Schools (2026)",
      description:
        "The best Minneapolis neighborhoods for schools — rated by elementary and secondary options, with honest assessments of MPS challenges.",
      url: `${BASE_URL}/guides/best-neighborhoods-for-schools`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best Neighborhoods for Schools",
        url: `${BASE_URL}/guides/best-neighborhoods-for-schools`,
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
          Best Neighborhoods for Schools
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Choosing a Minneapolis neighborhood based on schools is complicated
            &mdash; more complicated than in most cities. MPS uses an open
            enrollment system, which means your neighborhood school is not
            guaranteed. Magnet schools draw citywide. Charter and private
            options add layers. And the district itself is navigating real
            challenges: enrollment decline, achievement gaps, and budget
            pressure. Here are the 10 neighborhoods where school access is
            strongest &mdash; with honest context about what that actually
            means in practice.
          </p>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717a] pt-5 border-t border-[#e4e4e7]">
            Last updated: March 2026
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-16">
        {/* MPS context box */}
        <div className="bg-[#f5f5f5] p-6 mb-12">
          <h2 className="text-sm font-bold text-[#0a0a0a] mb-2">
            A Note on MPS School Choice
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed mb-3">
            Minneapolis Public Schools uses an open enrollment system. Every
            family can apply to any school in the district, but proximity to
            a school does not guarantee admission. Magnet and citywide schools
            use a lottery. This means &ldquo;best neighborhood for
            schools&rdquo; really means &ldquo;best neighborhood for school
            access and options&rdquo; &mdash; you are playing a probability
            game, not choosing a guaranteed outcome.
          </p>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            The ratings below reflect the designated neighborhood school and
            the broader cluster of accessible options. We include private and
            charter alternatives because many Minneapolis families use them,
            and pretending otherwise would be dishonest.
          </p>
        </div>

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

                  {/* School data grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Top Elementary
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.topElementary}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Rating
                      </p>
                      <p className="text-2xl font-black text-[#0a0a0a]">
                        {n.elementaryRating}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Secondary Options
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.secondaryOptions}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Charter Density
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.charterDensity}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#71717a] mb-3">
                    <strong className="text-[#0a0a0a]">
                      Private schools nearby:
                    </strong>{" "}
                    {n.privateNearby}
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
            The Honest Truth About Minneapolis Schools
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed mb-3">
            No guide about Minneapolis schools would be complete without
            acknowledging the district&apos;s challenges. MPS has lost
            significant enrollment over the past decade — to charter schools,
            to suburban districts, and to private schools. The achievement gap
            between white students and students of color remains one of the
            widest in the nation. The 2022 teachers&apos; strike highlighted
            systemic issues that are still being addressed.
          </p>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            That said, there are genuinely excellent schools within MPS. The
            families who thrive in the system tend to be active participants
            &mdash; they research options, attend open houses, engage with
            school communities, and supplement where needed. If you choose
            Minneapolis for schools, go in with eyes open, do your homework
            (literally), and know that the quality varies dramatically from
            school to school.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            More Family-Focused Guides
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Schools are one piece of the family puzzle. Our other guides cover
            parks, walkability, safety, and overall neighborhood fit for
            families with kids.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/best-neighborhoods"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Best Neighborhoods
            </Link>
            <Link
              href="/guides/best-neighborhoods-for-families"
              className="border border-white/30 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Best for Families
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
