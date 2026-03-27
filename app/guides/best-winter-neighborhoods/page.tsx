import type { Metadata } from "next";
import Link from "next/link";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  renderJsonLd,
} from "@/lib/schema";

const BASE_URL = "https://mplswithlove.com";

export const metadata: Metadata = {
  title:
    "Best Neighborhoods for Surviving (and Enjoying) Winter in Minneapolis (2026)",
  description:
    "The best Minneapolis neighborhoods for winter — ranked by winter walkability, plowing, indoor amenities, winter activities, and the cozy factor that makes January bearable.",
  openGraph: {
    title:
      "Best Neighborhoods for Surviving (and Enjoying) Winter in Minneapolis (2026)",
    description:
      "The best Minneapolis neighborhoods for winter — skyway access, winter sports, cozy bars, plowing quality, and what makes cold-weather living actually great.",
    url: `${BASE_URL}/guides/best-winter-neighborhoods`,
    type: "article",
  },
};

const neighborhoods = [
  {
    rank: 1,
    name: "Downtown East",
    slug: "downtown-east",
    winterWalkability: "Excellent",
    plowingQuality: "Priority",
    indoorAmenities: "Exceptional",
    winterActivities: "Skyway system, US Bank Stadium events, indoor dining",
    cozyFactor: "Medium — more functional than cozy",
    honest:
      "Downtown East wins the winter ranking for one reason: the skyway system. Minneapolis has 9.5 miles of enclosed, climate-controlled skyways connecting 80 city blocks of downtown. You can walk from your apartment to your office, grab lunch, hit a gym, buy groceries, and return home without ever stepping outside in January. No other neighborhood in Minneapolis — or almost any American city — can offer that. The tradeoff: the skyway makes winter survivable but not charming. Downtown East in winter is a functional experience, not a cozy one. The streets are empty because everyone is 15 feet above them. If your vision of winter is hot cocoa by a fireplace, look elsewhere. If your vision is never putting on a parka for your commute, this is your neighborhood.",
  },
  {
    rank: 2,
    name: "Downtown West",
    slug: "downtown-west",
    winterWalkability: "Excellent",
    plowingQuality: "Priority",
    indoorAmenities: "Exceptional",
    winterActivities: "Skyway, Target Center events, Hennepin Theatre District",
    cozyFactor: "Medium",
    honest:
      "Downtown West shares the skyway advantage with Downtown East but adds the Hennepin Theatre District — the Orpheum, State, and Pantages theaters provide winter entertainment infrastructure that other neighborhoods lack. Target Center hosts Timberwolves and Lynx games, concerts, and events throughout the winter. The bar and restaurant scene along Hennepin Avenue gives you options for escaping your apartment without braving the cold. The same tradeoff applies: functional warmth, not cozy warmth. Downtown West in January is about infrastructure, not atmosphere.",
  },
  {
    rank: 3,
    name: "North Loop",
    slug: "north-loop",
    winterWalkability: "Very Good",
    plowingQuality: "Priority",
    indoorAmenities: "Excellent",
    winterActivities:
      "Walkable dining, Target Field winter events, indoor markets",
    cozyFactor: "High",
    honest:
      "The North Loop is the best neighborhood in Minneapolis for winter livability that actually feels like living, not just surviving. The density of restaurants, coffee shops, and bars means you can walk out your door, trudge two blocks through snow, and be sitting in a warm restaurant with a glass of wine within five minutes. The neighborhood is compact enough that winter walks to errands are short. Target Field occasionally hosts winter events (hockey, concerts). The coffee shop culture — Spyhouse, Dogwood — provides genuine third places for the dark afternoons when your apartment walls start closing in. The North Loop does not have the skyway, but it has something the skyways lack: warmth with character.",
  },
  {
    rank: 4,
    name: "Bryn Mawr",
    slug: "bryn-mawr",
    winterWalkability: "Good",
    plowingQuality: "Good",
    indoorAmenities: "Moderate",
    winterActivities:
      "Theodore Wirth XC skiing, snowshoeing, fat biking, winter trails",
    cozyFactor: "Very High",
    honest:
      "Bryn Mawr is the winter neighborhood for people who do not survive winter so much as conquer it. Theodore Wirth Park — the largest park in Minneapolis at 759 acres — is Bryn Mawr's backyard, and in winter it transforms into one of the best urban cross-country skiing destinations in America. The Trailhead building (opened 2020) has a chalet, rental equipment, and groomed trails for classic and skate skiing. Fat biking trails. Snowshoeing. Winter mountain biking. If your approach to January is \"put on more layers and go outside,\" Bryn Mawr is your neighborhood. The cozy factor comes from the neighborhood itself — small, tight-knit, residential, with the kind of neighbor-knows-neighbor energy that makes winter feel communal rather than isolating.",
  },
  {
    rank: 5,
    name: "Linden Hills",
    slug: "linden-hills",
    winterWalkability: "Good",
    plowingQuality: "Good",
    indoorAmenities: "Good",
    winterActivities:
      "Lake Harriet skating, Bde Maka Ska winter walking, village shopping",
    cozyFactor: "Very High",
    honest:
      "Linden Hills in winter is a Currier and Ives postcard brought to life in Minneapolis. Lake Harriet freezes solid by late December, and the city maintains an outdoor skating rink that is genuinely magical — lights, music, warming house, hot chocolate, kids in snowsuits wobbling on rental skates. The village center (Sebastian Joe's, Wild Rumpus, the wine shop) provides the kind of cozy errands that make winter bearable: walk four blocks in the cold, buy a book, eat ice cream (Minnesotans eat ice cream in January — it is a point of pride), walk home. The neighborhood is not an adventure-sports winter destination like Bryn Mawr. It is a hygge-winter neighborhood — warm, pretty, domestic, and deeply pleasant.",
  },
  {
    rank: 6,
    name: "Nokomis",
    slug: "nokomis",
    winterWalkability: "Moderate",
    plowingQuality: "Good",
    indoorAmenities: "Moderate",
    winterActivities:
      "Lake Nokomis skating, broomball leagues, ice fishing, winter beach walks",
    cozyFactor: "High",
    honest:
      "Nokomis has the most authentic winter-community experience in Minneapolis. Lake Nokomis skating is less manicured than Lake Harriet — it is a cleared patch of lake ice, not a curated rink — and that is what makes it great. The broomball and pond hockey leagues are genuine neighborhood traditions, not Instagram content. Ice fishing shanties appear on the lake by January. The winter beach walk — bundled up, crunching through snow along the frozen lake shore — is meditative and surreal. The indoor amenities are thinner than in denser neighborhoods, so you need to be the kind of person who finds beauty in a frozen lake at sunset. If that sounds appealing, Nokomis in winter is extraordinary. If it sounds miserable, you want the skyway.",
  },
  {
    rank: 7,
    name: "South Uptown",
    slug: "south-uptown",
    winterWalkability: "Good",
    plowingQuality: "Good",
    indoorAmenities: "Good",
    winterActivities:
      "Bde Maka Ska winter walking, Lyn-Lake bars, Greenway winter biking",
    cozyFactor: "High",
    honest:
      "South Uptown is the winter neighborhood for people who refuse to let winter change their lifestyle. The Lyn-Lake corridor bars and restaurants stay busy through January. The Midtown Greenway gets plowed and attracts hardy winter bike commuters. Bde Maka Ska freezes into a vast white plain that is beautiful for winter walks (though less activity-oriented than Harriet or Nokomis). The apartment density means your neighbors are close, which reduces the isolation that can make Minneapolis winters hard for newcomers. South Uptown winter is social — you put on your parka and walk to a bar with friends, same as you would in October, just with more layers.",
  },
  {
    rank: 8,
    name: "Longfellow",
    slug: "longfellow",
    winterWalkability: "Moderate",
    plowingQuality: "Good",
    indoorAmenities: "Moderate",
    winterActivities:
      "Minnehaha Falls ice formations, river trail snowshoeing, winter biking",
    cozyFactor: "High",
    honest:
      "Longfellow's winter crown jewel is frozen Minnehaha Falls — a 53-foot waterfall that freezes into an ice formation so dramatic it looks computer-generated. The walk down to the frozen falls is a winter pilgrimage for Minneapolis residents, and it is in Longfellow's backyard. The Mississippi River gorge trails provide excellent winter snowshoeing and hiking. The neighborhood coffee shops (Peace Coffee, Five Watt) are genuine warm refuges. The tradeoff: Longfellow is less walkable in winter than in summer because the commercial nodes are spread out, and icy sidewalks in a neighborhood with some hilly terrain can be treacherous. A good pair of Yaktrax is essential equipment for Longfellow winter walking.",
  },
  {
    rank: 9,
    name: "Whittier",
    slug: "whittier",
    winterWalkability: "Very Good",
    plowingQuality: "Moderate",
    indoorAmenities: "Excellent",
    winterActivities: "MIA (free!), Eat Street dining, Midtown Greenway",
    cozyFactor: "Medium-High",
    honest:
      "Whittier's winter advantage is density: when walking three blocks in the cold is your limit, having 40 restaurants within three blocks matters. Eat Street does not hibernate — the Vietnamese pho, Ethiopian injera, and Thai curry that define Nicollet Avenue are arguably better in January than in July. The Minneapolis Institute of Art is free, open year-round, and can absorb an entire Saturday afternoon when the windchill hits minus-20. The Midtown Greenway provides plowed bike commuting for the truly committed. Whittier winter is urban winter — you are not skating on a frozen lake, you are eating soup in a warm restaurant while watching snow fall on Nicollet Avenue. That is its own kind of wonderful.",
  },
  {
    rank: 10,
    name: "Marcy-Holmes",
    slug: "marcy-holmes",
    winterWalkability: "Good",
    plowingQuality: "Moderate",
    indoorAmenities: "Good",
    winterActivities:
      "Stone Arch Bridge winter views, St. Anthony Main, U of M campus events",
    cozyFactor: "Medium-High",
    honest:
      "Marcy-Holmes earns a winter spot for its proximity to two things: the Stone Arch Bridge and the University of Minnesota campus. The Stone Arch Bridge in winter — with steam rising from St. Anthony Falls and downtown lit up against a dark sky — is one of the most beautiful urban winter views in America. The U of M campus provides winter cultural infrastructure: Northrop concerts, Weisman Art Museum, campus lectures and events. St. Anthony Main's restaurants (Wilde Cafe, Aster Cafe) provide cozy riverfront dining. The neighborhood is hillier than most Minneapolis neighborhoods, which can make icy sidewalks challenging, but the beauty of the winter riverfront compensates.",
  },
];

export default function BestWinterPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title:
        "Best Neighborhoods for Surviving (and Enjoying) Winter in Minneapolis (2026)",
      description:
        "The best Minneapolis neighborhoods for winter — ranked by winter walkability, plowing, indoor amenities, winter activities, and cozy factor.",
      url: `${BASE_URL}/guides/best-winter-neighborhoods`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best Winter Neighborhoods",
        url: `${BASE_URL}/guides/best-winter-neighborhoods`,
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
          Best Winter Neighborhoods
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Minneapolis winter is not something to survive &mdash; it is
            something to choose. The city gets an average of 54 inches of snow
            per year, temperatures regularly hit minus-10, and January daylight
            ends before 5 PM. Some neighborhoods make this beautiful. Others
            make it bearable. A few make it genuinely fun. Here are the 10
            best neighborhoods for the five months of the year when Minneapolis
            is testing your commitment.
          </p>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717a] pt-5 border-t border-[#e4e4e7]">
            Last updated: March 2026
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-16">
        {/* Winter context */}
        <div className="bg-[#f5f5f5] p-6 mb-12">
          <h2 className="text-sm font-bold text-[#0a0a0a] mb-2">
            What We Mean by &ldquo;Winter Neighborhood&rdquo;
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            A great winter neighborhood is not the same as a great summer
            neighborhood. In winter, walkability means &ldquo;can you get
            somewhere warm within a few blocks.&rdquo; Amenities means
            &ldquo;is there a reason to leave your apartment.&rdquo; And the
            cozy factor &mdash; hard to quantify, impossible to ignore &mdash;
            is the difference between a winter that feels like a siege and a
            winter that feels like a season. We ranked these on all of it.
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

                  {/* Winter metrics grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Winter Walkability
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.winterWalkability}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Plowing
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.plowingQuality}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Indoor Amenities
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.indoorAmenities}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#71717a] mb-2">
                    <strong className="text-[#0a0a0a]">
                      Winter activities:
                    </strong>{" "}
                    {n.winterActivities}
                  </p>
                  <p className="text-sm text-[#71717a] mb-3">
                    <strong className="text-[#0a0a0a]">Cozy factor:</strong>{" "}
                    {n.cozyFactor}
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

        {/* Winter survival tips */}
        <div className="mt-12 bg-[#f5f5f5] p-6 mb-12">
          <h2 className="text-sm font-bold text-[#0a0a0a] mb-2">
            Winter Gear That Actually Matters
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed mb-3">
            Regardless of neighborhood, surviving Minneapolis winter requires
            the right gear. A real winter coat (not a fashion puffer &mdash; a
            coat rated to minus-20). Insulated, waterproof boots with good
            traction. Wool base layers. A car with snow tires or AWD if you
            drive. Yaktrax or Stabilicers for icy sidewalks. And a sun lamp
            for the dark afternoons &mdash; seasonal affective disorder is not
            a joke in a city where December has 8.5 hours of daylight.
          </p>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            The people who love Minneapolis winter are the ones who go outside
            in it &mdash; skiing, skating, fat biking, winter running. The
            people who suffer are the ones who hibernate from November to
            April. Pick a neighborhood that makes going outside easy, and
            winter becomes a feature, not a bug.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Planning Your Move?
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Winter is five months of the year in Minneapolis. Our moving guide
            covers the other seven &mdash; plus cost of living, jobs, schools,
            and everything else.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/moving-to-minneapolis"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Moving to Minneapolis Guide
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
