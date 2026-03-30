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
  title: "Best Breweries in Minneapolis by Neighborhood (2026)",
  description:
    "Every brewery in Minneapolis worth visiting, organized by neighborhood. Taproom hours, what to drink, and how to plan a brewery crawl in Northeast, North Loop, Longfellow, and beyond.",
  openGraph: {
    title: "Best Breweries in Minneapolis by Neighborhood (2026)",
    description:
      "The complete guide to Minneapolis breweries by neighborhood — taprooms, flagship beers, and how to plan your crawl.",
    url: `${BASE_URL}/guides/best-breweries-by-neighborhood`,
    type: "article",
  },
  alternates: { canonical: "/guides/best-breweries-by-neighborhood" },
};

const neighborhoods = [
  {
    name: "Northeast Minneapolis",
    slug: "logan-park",
    breweryCount: "8+",
    crawlable: "Yes — walkable circuit",
    bestFor: "The definitive Minneapolis brewery experience",
    breweries: [
      {
        name: "Dangerous Man Brewing",
        location: "1300 2nd St NE",
        description:
          "The tiny taproom that helped launch the Minneapolis brewery boom. No cans, no distribution — you drink it here or you do not drink it. The Chocolate Milk Stout is a legitimate dessert. The communal tables force conversation. Cash only, which they are unapologetic about. This is the brewery that feels most like a neighborhood living room.",
      },
      {
        name: "Indeed Brewing Company",
        location: "711 NE 15th Ave",
        description:
          "Indeed's taproom is one of the largest and most family-friendly in the city, with a patio, food trucks, and a rotation that balances accessible (Day Tripper Pale Ale) with experimental (their Wooden Soul barrel-aged series). A reliable anchor for any Northeast brewery crawl.",
      },
      {
        name: "Bauhaus Brew Labs",
        location: "1315 Tyler St NE",
        description:
          "The most fun taproom in Minneapolis. Bauhaus combines German-inspired lagers (Wonderstuff is the flagship) with a retro-futuristic aesthetic, a massive outdoor space, and regular events — bingo, dance parties, movie nights. The beer is solid; the atmosphere is the real draw.",
      },
      {
        name: "Fair State Brewing Cooperative",
        location: "2506 Central Ave NE",
        description:
          "The only cooperatively owned brewery in Minneapolis — you can buy a membership share and actually own a piece of it. The beer program leans heavily into lagers and mixed-culture sours, both executed at an elite level. The Central Avenue taproom is small but the outdoor patio is a summer destination.",
      },
      {
        name: "Sociable Cider Werks",
        location: "1500 Fillmore St NE",
        description:
          "Not technically a brewery, but the best cider house in Minneapolis and an essential part of the Northeast taproom circuit. The Spoke Wrench dry cider is a benchmark. The space is industrial-chic with a large patio. Good for cider lovers and beer lovers who want a palate change.",
      },
      {
        name: "612Brew",
        location: "945 Broadway St NE",
        description:
          "A smaller operation that does solid IPAs and sessionable ales. The taproom is no-frills and the crowd is neighborhood regulars. 612Brew does not try to be the most exciting brewery — it tries to make good beer in a comfortable room, and it succeeds.",
      },
    ],
    summary:
      "Northeast Minneapolis is the brewery capital of Minnesota. You can walk between six taprooms in under 30 minutes, each with a distinct personality — from Dangerous Man's intimate communal tables to Bauhaus's party atmosphere. The Northeast brewery crawl is arguably the best urban brewery walk in the Midwest. Start at Dangerous Man (opens at 4 PM most days), work north to Indeed and Bauhaus, and finish at Fair State on Central Ave. Bring cash for Dangerous Man. Eat at Anchor Fish & Chips or Holy Land between stops.",
  },
  {
    name: "North Loop",
    slug: "north-loop",
    breweryCount: "3",
    crawlable: "Yes — short walk",
    bestFor: "Polished taprooms, food-friendly beer",
    breweries: [
      {
        name: "Fulton Brewing",
        location: "414 6th Ave N",
        description:
          "Fulton was one of the first Minneapolis craft breweries and remains one of the most successful. The taproom is large, well-designed, and walkable from Target Field — making it a pre-game institution. Sweet Child of Vine (IPA) and Lonely Blonde are grocery-store staples. The beer is approachable and consistent rather than boundary-pushing.",
      },
      {
        name: "Modist Brewing",
        location: "505 N 3rd St",
        description:
          "Modist is where the North Loop gets interesting. Their Dreamyard IPA is one of the best hazy IPAs brewed in Minnesota. The taproom is modern and industrial, the beer menu rotates frequently, and the brewing philosophy leans experimental. If Fulton is the safe choice, Modist is the exciting one.",
      },
      {
        name: "Inbound BrewCo",
        location: "701 N 5th St",
        description:
          "The smallest of the North Loop breweries, Inbound does hop-forward ales and lagers in a straightforward taproom. The Korker kolsch-style ale is a solid session beer. Less of a destination than Fulton or Modist, but a good stop on a North Loop crawl.",
      },
    ],
    summary:
      "The North Loop brewery scene is smaller than Northeast's but more polished. Fulton and Modist are a 5-minute walk apart, making a two-stop crawl easy. The proximity to North Loop restaurants means you can pair a taproom visit with dinner at Bar La Grassa or tacos at Centro — something the more industrial Northeast corridor does not offer as easily. Pre-game at Fulton before a Twins game is a Minneapolis ritual.",
  },
  {
    name: "Longfellow",
    slug: "longfellow",
    breweryCount: "3",
    crawlable: "Bikeable, not easily walkable",
    bestFor: "Neighborhood taprooms, Greenway access",
    breweries: [
      {
        name: "Venn Brewing",
        location: "3550 E 46th St",
        description:
          "Venn occupies a converted commercial space in the heart of Longfellow and has become a genuine neighborhood gathering place. The beer program is solid across styles — their cream ale is a crowd-pleaser, and they rotate IPAs and stouts through the taps. Food trucks park outside regularly. The vibe is casual and family-friendly.",
      },
      {
        name: "Du Nord Craft Spirits",
        location: "2610 E 32nd St",
        description:
          "Not a brewery — Du Nord is a craft distillery and cocktail room, and one of the only Black-owned distilleries in the country. The Mixed Blood vodka and L'etoile du Nord gin are excellent. The cocktail room serves creative mixed drinks in a welcoming space. Including it here because any Longfellow drinking guide that omits Du Nord is incomplete.",
      },
      {
        name: "Arbeiter Brewing",
        location: "3038 Minnehaha Ave",
        description:
          "A newer addition to the Longfellow beer scene, Arbeiter focuses on German and Czech-inspired lagers brewed with precision. The taproom is small and intentional. If you appreciate a well-made pilsner more than a triple-hopped IPA, Arbeiter is your brewery.",
      },
    ],
    summary:
      "Longfellow's brewery scene is quieter and more spread out than Northeast's, but the individual spots are worth seeking out. Venn has become a legitimate community hub. Du Nord is nationally significant as a Black-owned distillery doing excellent work. The Midtown Greenway runs through the neighborhood, making a bike-powered crawl between these spots and the nearby Seward options very doable on a summer afternoon.",
  },
  {
    name: "South Uptown / Lyn-Lake",
    slug: "south-uptown",
    breweryCount: "2",
    crawlable: "Yes — walkable",
    bestFor: "Brewpubs, post-lake beers",
    breweries: [
      {
        name: "LynLake Brewery",
        location: "2934 Lyndale Ave S",
        description:
          "A small brewpub at the heart of the Lyn-Lake corridor. The beer is solid and the location is ideal — steps from a dozen bars and restaurants. The rotating IPAs and the house lager are reliable. The space is small, which means it fills up on weekend nights.",
      },
      {
        name: "The Herkimer Pub & Brewery",
        location: "2922 Lyndale Ave S",
        description:
          "The Herkimer has been brewing on Lyndale Avenue since before the craft beer boom. The beer is workmanlike — not flashy, but well-made and inexpensive. The real draw is the atmosphere: dark wood, big booths, and a crowd that has been coming here for years. More pub than taproom, which is exactly the point.",
      },
    ],
    summary:
      "The Lyn-Lake area has only two breweries, but they sit at the center of one of the best bar corridors in the city. LynLake Brewery and The Herkimer are a block apart on Lyndale, surrounded by CC Club, Bryant Lake Bowl, and a dozen other options. This is not a brewery-destination neighborhood — it is a drinking neighborhood that happens to have breweries. After a day at Bde Maka Ska, a pint at LynLake or The Herkimer is the natural next step.",
  },
  {
    name: "Seward",
    slug: "seward",
    breweryCount: "1–2",
    crawlable: "Bikeable",
    bestFor: "Community-minded brewing, co-op culture",
    breweries: [
      {
        name: "Urban Growler Brewing",
        location: "2325 Endicott St (St. Paul border)",
        description:
          "Technically just across the border in St. Paul, but claimed by Seward residents as their own. Urban Growler was the first woman-owned brewery in Minnesota. The Cowgirl Cranberry wheat and the De-Lovely session ale are signatures. The taproom has a large patio and a food menu that goes beyond typical brewery fare. The vibe matches Seward's co-op-progressive-community energy.",
      },
    ],
    summary:
      "Seward's brewery scene is minimal within the strict neighborhood boundaries, but Urban Growler — a short bike ride from the Seward Co-op — fits the neighborhood's character perfectly. The Midtown Greenway provides an easy bike connection west to Lyn-Lake's breweries and east toward St. Paul. For Seward residents, the brewery experience is more about biking to a taproom than walking to one.",
  },
  {
    name: "Downtown",
    slug: "downtown-west",
    breweryCount: "2",
    crawlable: "Yes — walkable",
    bestFor: "Pre-event beers, accessible locations",
    breweries: [
      {
        name: "Day Block Brewing",
        location: "1105 Washington Ave S",
        description:
          "Day Block sits near US Bank Stadium and serves as a pre-game and post-game spot for Vikings and concert crowds. The beer is competent — the IPAs and the amber are solid. The pizza is better than it needs to be. The taproom is large enough to handle event-night crowds. Not a destination brewery, but a good neighborhood option.",
      },
      {
        name: "Clockwerks Brewing",
        location: "25 N 4th St",
        description:
          "A newer downtown brewery with a focus on traditional German styles and a sleek taproom. The pilsner and hefeweizen are well-executed. The downtown location makes it accessible for visitors staying in hotels, but it lacks the neighborhood character of the Northeast or Longfellow options.",
      },
    ],
    summary:
      "Downtown is not a brewery destination — the taprooms here serve the event and hotel crowds more than the beer-geek community. Day Block is a solid pre-game option and Clockwerks brings some German brewing tradition downtown. For a real brewery experience, take the light rail or a rideshare to Northeast.",
  },
  {
    name: "Minnehaha / Hiawatha",
    slug: "longfellow",
    breweryCount: "2",
    crawlable: "Bikeable along Minnehaha Ave",
    bestFor: "Chill neighborhood vibes, summer sessions",
    breweries: [
      {
        name: "East Lake Brewing & Bonfire",
        location: "920 E Lake St",
        description:
          "A brewery built around an actual outdoor fire pit, which is genius for a city with long winters. The beer is approachable — cream ales, IPAs, stouts — and the fire pit draws a loyal crowd in every season. The Lake Street location puts it near the Midtown Greenway.",
      },
      {
        name: "Minnehaha Brewing",
        location: "4005 E Lake St (St. Paul border area)",
        description:
          "A smaller operation near the Minnehaha Falls corridor. The taproom is modest and the crowd is neighborhood-centric. Good for a low-key pint before or after a walk to the falls.",
      },
    ],
    summary:
      "The Minnehaha/Hiawatha corridor is an emerging brewery area, anchored by East Lake's fire-pit concept and supplemented by smaller operations. The proximity to Minnehaha Falls makes this a natural summer circuit: walk the falls, bike to a taproom, drink something cold on a patio. Not a destination for brewery tourists, but a genuine asset for residents.",
  },
  {
    name: "Harrison / Bryn Mawr",
    slug: "harrison",
    breweryCount: "1",
    crawlable: "No",
    bestFor: "Off-the-beaten-path discovery",
    breweries: [
      {
        name: "Headflyer Brewing",
        location: "861 N 5th Ave",
        description:
          "Headflyer occupies a warehouse space between Harrison and the North Loop, and it is one of the most underrated taprooms in the city. The beer is creative — rotating sours, experimental IPAs, and collaboration brews — and the taproom has a DIY energy that the polished North Loop breweries lack. Food trucks cycle through regularly. The crowd is a mix of neighborhood residents and beer geeks who know where to find it.",
      },
    ],
    summary:
      "Headflyer alone makes Harrison worth a detour for serious beer drinkers. It is not walkable from much of anything, but the brewing is ambitious and the space has character. Pair it with a visit to the nearby North Loop breweries for a crawl that spans polished (Modist) to scrappy (Headflyer).",
  },
];

export default function BestBreweriesPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Best Breweries in Minneapolis by Neighborhood (2026)",
      description:
        "Every brewery in Minneapolis worth visiting, organized by neighborhood — taproom details, flagship beers, and how to plan a brewery crawl.",
      url: `${BASE_URL}/guides/best-breweries-by-neighborhood`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best Breweries by Neighborhood",
        url: `${BASE_URL}/guides/best-breweries-by-neighborhood`,
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
            src="/images/breweries/craft-beer-pints-taproom.webp"
            alt="Craft beer pints at a Minneapolis taproom"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Best Breweries by Neighborhood
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Minneapolis has one of the best brewery scenes in America &mdash;
            over 30 taprooms within city limits, concentrated in walkable
            clusters that make brewery crawls a way of life. Northeast
            Minneapolis alone has more quality taprooms within walking distance
            than most cities have total. This guide organizes every brewery
            worth visiting by neighborhood, so you can plan your crawl or
            find the closest taproom to wherever you are.
          </p>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717a] pt-5 border-t border-[#e4e4e7]">
            Last updated: March 2026
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-16">
        {/* Neighborhoods */}
        <div className="space-y-14">
          {neighborhoods.map((n) => (
            <section
              key={n.slug + n.name}
              className="border-b border-[#e4e4e7] pb-14"
            >
              <Link
                href={`/neighborhoods/${n.slug}`}
                className="group"
              >
                <h2 className="text-3xl font-black text-[#0a0a0a] group-hover:text-[#2a9d8f] transition-colors mb-3">
                  {n.name}
                </h2>
              </Link>

              {/* Data grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                    Breweries
                  </p>
                  <p className="text-2xl font-black text-[#0a0a0a]">
                    {n.breweryCount}
                  </p>
                </div>
                <div>
                  <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                    Crawlable?
                  </p>
                  <p className="text-sm font-bold text-[#0a0a0a]">
                    {n.crawlable}
                  </p>
                </div>
                <div>
                  <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                    Best For
                  </p>
                  <p className="text-sm font-bold text-[#0a0a0a]">
                    {n.bestFor}
                  </p>
                </div>
              </div>

              {/* Brewery list */}
              <div className="space-y-6 mb-6">
                {n.breweries.map((b) => (
                  <div key={b.name} className="pl-4 border-l-2 border-[#2a9d8f]">
                    <h3 className="text-lg font-bold text-[#0a0a0a] mb-1">
                      {b.name}
                    </h3>
                    <p className="text-xs text-[#71717a] tracking-wide uppercase mb-2">
                      {b.location}
                    </p>
                    <p className="text-[15px] text-[#52525b] leading-[1.85]">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-[15px] text-[#52525b] leading-[1.85] bg-[#f5f5f5] p-4">
                <strong className="text-[#0a0a0a]">The crawl:</strong>{" "}
                {n.summary}
              </p>

              <Link
                href={`/neighborhoods/${n.slug}`}
                className="inline-block mt-4 text-sm font-semibold text-[#2a9d8f] hover:underline"
              >
                Explore {n.name} →
              </Link>
            </section>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 bg-[#f5f5f5] p-6 mb-12">
          <h2 className="text-sm font-bold text-[#0a0a0a] mb-2">
            Brewery Crawl Tips
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Most Minneapolis taprooms are open Thursday through Sunday at
            minimum, with many adding Wednesday hours. Taprooms typically
            close between 10 PM and midnight. Food trucks are common at
            larger taprooms (Indeed, Bauhaus, Fulton) but not guaranteed
            &mdash; check social media before assuming food is available.
            Many taprooms are family-friendly during afternoon hours but
            shift to 21+ in the evening. The Northeast crawl is the
            essential Minneapolis brewery experience; if you only do one,
            do that one.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Beyond Breweries
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Minneapolis has more than beer. Check out our coffee shop guide
            for the indie cafe scene, or plan your summer drinking with our
            patio guide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/best-coffee-shops-by-neighborhood"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Best Coffee Shops Guide
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
