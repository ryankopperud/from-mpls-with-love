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
  title: "Best Neighborhoods for Nightlife in Minneapolis (2026)",
  description:
    "The best neighborhoods for nightlife in Minneapolis — bars, live music, late-night food, and honest assessments of which scenes are thriving and which are fading.",
  openGraph: {
    title: "Best Neighborhoods for Nightlife in Minneapolis (2026)",
    description:
      "The best Minneapolis neighborhoods for going out — bars, live music venues, late-night eats, and honest takes on what's thriving and what's fading.",
    url: `${BASE_URL}/guides/best-neighborhoods-for-nightlife`,
    type: "article",
  },
  alternates: { canonical: "/guides/best-neighborhoods-for-nightlife" },
};

const neighborhoods = [
  {
    rank: 1,
    name: "North Loop",
    slug: "north-loop",
    barDensity: "Very High",
    liveMusic: "Moderate",
    lateNightFood: "Good",
    transitHome: "Excellent (2 light rail lines)",
    notableVenues: "Marvel Bar, Parlour, Smack Shack, The Loop (cocktail bars), Fulton Taproom, Modist Brewing",
    summary:
      "The North Loop is the going-out neighborhood that works for adults. Marvel Bar — hidden beneath the old Bachelor Farmer space — is still the best cocktail bar in Minneapolis, full stop. Parlour does late-night burgers that are worth planning your evening around. The brewery taprooms (Fulton, Modist) provide a more casual option that skews younger. The vibe is polished: you will not find sticky floors or dive bars here. What you will find is consistently excellent drinks, good food until late, and the ability to walk between a half-dozen quality spots without crossing a parking lot. Two light rail lines make getting home easy. The tradeoff: the North Loop nightlife is expensive and can feel corporate. If your idea of a great night involves spontaneity and edge, look to Northeast or Lyn-Lake.",
  },
  {
    rank: 2,
    name: "Northeast (Hennepin & Central)",
    slug: "logan-park",
    barDensity: "High",
    liveMusic: "Excellent",
    lateNightFood: "Fair",
    transitHome: "Moderate (bus routes, rideshare)",
    notableVenues: "331 Club, Dangerous Man Brewing, Nye's (legacy — closed), Indeed Brewing, Spring Street Tavern, Psycho Suzi's, Mayslack's",
    summary:
      "Northeast Minneapolis has the most authentic nightlife energy in the city. The 331 Club on 13th Avenue NE is the last great dive bar with live music every night — no cover, no pretension, and a crowd that ranges from neighborhood regulars to touring musicians. Dangerous Man Brewing serves some of the best beer in the state from a tiny taproom that forces strangers to sit together. Psycho Suzi's combines tiki drinks with a Mississippi River patio that feels like it should not exist in Minnesota. The loss of Nye's Polonaise Room in 2016 still stings — it was irreplaceable — but the neighborhood's nightlife has adapted. Spring Street Tavern and Mayslack's carry the old Northeast bar culture forward. The live music scene here is stronger than anywhere else in the city. Late-night food is the weak link: options thin out after 10 PM.",
  },
  {
    rank: 3,
    name: "Lowry Hill East (Lyn-Lake)",
    slug: "lowry-hill-east",
    barDensity: "Very High",
    liveMusic: "Good",
    lateNightFood: "Good",
    transitHome: "Good (Hennepin Ave bus, rideshare)",
    notableVenues: "CC Club, Bryant Lake Bowl, Mortimer's, Lyndale Tap House, Moto-i, Nighthawks, The Corner Bar",
    summary:
      "Lyn-Lake is the nightlife neighborhood for people who think the North Loop is too polished and Downtown is too chaotic. The CC Club is a Minneapolis institution — a dive bar that has been serving cheap drinks and playing good music since before \"dive bar\" was an aesthetic choice. Bryant Lake Bowl combines bowling, theater, and a bar menu in a way that should not work but absolutely does. Mortimer's is an unpretentious neighborhood bar. Moto-i brews its own sake in the basement. Nighthawks serves diner food until late. The density is excellent: within a four-block radius of the Lyn-Lake intersection, you can hit 10+ bars without trying. The crowd is younger and more creative than the North Loop, older and less fratty than Downtown. This is the sweet spot for most Minneapolis nightlife seekers.",
  },
  {
    rank: 4,
    name: "South Uptown",
    slug: "south-uptown",
    barDensity: "Moderate–High",
    liveMusic: "Declining",
    lateNightFood: "Fair",
    transitHome: "Good (Hennepin Ave bus)",
    notableVenues: "Stella's Fish Cafe rooftop, Lake & Lyndale spots, Bde Maka Ska area, Williams Uptown Pub & Peanut Bar, Leaning Tower of Pizza (late night)",
    summary:
      "South Uptown is the nightlife neighborhood in transition. Five years ago, this would have been a top-3 pick. The Hennepin and Lake Street corridors had density and energy. Today, commercial vacancies have thinned the options, and the neighborhood is still figuring out what its nightlife identity is post-2020. What survives is still good: Stella's rooftop remains one of the best summer drinking spots in the city. Williams Uptown Pub is a reliable neighborhood bar. The lakeside proximity — walking to Bde Maka Ska on a summer night is a legitimate joy — still gives South Uptown a natural advantage. But the honest assessment is that Uptown nightlife peaked around 2015-2018, and the current scene is rebuilding. If you are choosing where to live for nightlife, Lyn-Lake (two blocks away) is the safer bet.",
  },
  {
    rank: 5,
    name: "Downtown West (Hennepin Ave)",
    slug: "downtown-west",
    barDensity: "High",
    liveMusic: "Excellent",
    lateNightFood: "Good",
    transitHome: "Excellent (light rail, bus hub)",
    notableVenues: "First Avenue, 7th St Entry, The Local, Brit's Pub, Gay 90's, Cowboy Jack's, Target Center area",
    summary:
      "Downtown West is defined by First Avenue — the club that launched Prince's career and remains the most important live music venue in the Upper Midwest. On any given week, First Avenue and its smaller room (7th St Entry) host national touring acts, local legends, and DJ nights that draw from across the metro. Beyond First Ave, the Hennepin Avenue corridor has Brit's Pub (rooftop bowling green, solid pub), Gay 90's (a multi-floor LGBTQ+ institution), and a series of sports bars and clubs that cater to the pre- and post-event crowds at Target Center. The honest take: Downtown West nightlife is concentrated and event-driven. It is where you go for a specific show or a big night out, not where you wander looking for the right vibe. On non-event nights, it can feel empty.",
  },
  {
    rank: 6,
    name: "Whittier",
    slug: "whittier",
    barDensity: "Moderate",
    liveMusic: "Good",
    lateNightFood: "Excellent",
    transitHome: "Fair (bus routes on Nicollet/Lyndale)",
    notableVenues: "Icehouse, Palmer's Bar, Mortimer's (nearby), Eat Street late-night food options, The Herkimer",
    summary:
      "Whittier's nightlife advantage is not bar density — it is the combination of live music, dive bars, and late-night food that no other neighborhood matches. Icehouse is a music venue, restaurant, and bar that books jazz, experimental, and indie acts in a room with excellent sound. Palmer's Bar is a dive bar in the purest sense: cheap drinks, a pool table, and a crowd that does not care what you look like. After midnight, Eat Street's restaurants — many open until 1 or 2 AM — give you late-night food options that range from pho to tacos to pizza. The Herkimer is a solid brewpub. The nightlife here is less concentrated than Lyn-Lake or the North Loop, but the individual spots are distinctive, and the late-night food makes Whittier the best neighborhood for the full night-out arc: dinner, drinks, music, 1 AM noodles.",
  },
  {
    rank: 7,
    name: "Downtown East",
    slug: "downtown-east",
    barDensity: "Moderate",
    liveMusic: "Moderate",
    lateNightFood: "Fair",
    transitHome: "Excellent (light rail hub)",
    notableVenues: "The Dakota Jazz Club, Day Block Brewing, US Bank Stadium area bars, Mill District spots",
    summary:
      "Downtown East's nightlife is anchored by The Dakota, which is both the best jazz club in Minneapolis and one of the best in the Midwest. The booking is serious — national and international acts in an intimate room with strong acoustics and a kitchen that would be notable even without the music. Day Block Brewing provides a more casual option near the stadium. On event nights (Vikings games, concerts at US Bank Stadium), the neighborhood transforms into a sea of bar-hoppers, but this is borrowed energy, not resident nightlife. Between events, Downtown East is quiet after 9 PM. Live here for the transit access and The Dakota; do not live here expecting a walkable bar scene.",
  },
  {
    rank: 8,
    name: "Loring Park",
    slug: "loring-park",
    barDensity: "Low–Moderate",
    liveMusic: "Moderate",
    lateNightFood: "Fair",
    transitHome: "Good (Hennepin Ave bus, walkable to light rail)",
    notableVenues: "Loring Pasta Bar, Brit's Pub (borderline), The Local, the theater district spillover",
    summary:
      "Loring Park's nightlife is quieter and more intentional than the neighborhoods ranked above it. Loring Pasta Bar is an experience — candlelit, eccentric, in a converted house that feels like a dinner party at a very interesting friend's home. The neighborhood benefits from spillover from the Hennepin Avenue theater district: after a show at the Orpheum or State Theatre, Loring Park's restaurants and bars catch the post-show crowd. The LGBTQ+ community has deep roots here, and the neighborhood's nightlife reflects that inclusivity. But the options are limited: this is a neighborhood with 3-4 good spots, not 15. Loring Park is for the night owl who prefers one perfect drink in a beautiful room over hopping between a dozen bars.",
  },
];

export default function BestNightlifePage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Best Neighborhoods for Nightlife in Minneapolis (2026)",
      description:
        "The best neighborhoods for nightlife in Minneapolis — bars, live music, late-night food, and honest assessments of which scenes are thriving.",
      url: `${BASE_URL}/guides/best-neighborhoods-for-nightlife`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best Neighborhoods for Nightlife",
        url: `${BASE_URL}/guides/best-neighborhoods-for-nightlife`,
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
            src="/images/nightlife/first-avenue-nightclub-daytime.webp"
            alt="First Avenue nightclub in Minneapolis"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Best Nightlife Neighborhoods
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Minneapolis nightlife is not one scene &mdash; it is several,
            spread across neighborhoods with distinct identities. The North
            Loop is polished cocktail bars. Northeast is dive bars and
            breweries. Lyn-Lake is the creative middle ground. Downtown is
            First Avenue and event nights. Here are the 8 best neighborhoods
            for going out, ranked honestly &mdash; including which scenes are
            thriving, which are fading, and how you are getting home.
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
                        Bar Density
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.barDensity}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Live Music
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.liveMusic}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Late-Night Food
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.lateNightFood}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Transit Home
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.transitHome}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#71717a] mb-3">
                    <strong className="text-[#0a0a0a]">
                      Key venues:
                    </strong>{" "}
                    {n.notableVenues}
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
            Getting Home Safely
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Minneapolis is a rideshare city after dark. Light rail runs until
            about midnight on weekdays and 2 AM on weekends, which helps if
            you are in Downtown or the North Loop. For Northeast, Lyn-Lake,
            and Whittier, plan on a Lyft or Uber &mdash; or bike if you are
            sober enough and the weather cooperates. The Nice Ride bike-share
            system is available seasonally but is not a reliable late-night
            option in winter. Plan your ride home before your third drink.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            More to Explore
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Looking for something more specific? Our brewery and patio guides
            go deeper on the best places to drink in Minneapolis &mdash; by
            neighborhood, with names and addresses.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/best-breweries-by-neighborhood"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Best Breweries Guide
            </Link>
            <Link
              href="/guides/best-patios-outdoor-dining"
              className="border border-white/30 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Best Patios Guide
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
