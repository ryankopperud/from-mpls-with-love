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
  title: "Best Patios and Outdoor Dining in Minneapolis by Neighborhood (2026)",
  description:
    "The best patios, rooftops, and outdoor dining in Minneapolis — organized by neighborhood. Where to eat and drink outside during the precious May-through-September season.",
  openGraph: {
    title: "Best Patios and Outdoor Dining in Minneapolis by Neighborhood (2026)",
    description:
      "The best patios and outdoor dining in Minneapolis by neighborhood — where to eat and drink outside during the short, sacred summer.",
    url: `${BASE_URL}/guides/best-patios-outdoor-dining`,
    type: "article",
  },
};

const neighborhoods = [
  {
    name: "North Loop",
    slug: "north-loop",
    patioCount: "8+",
    patioSeason: "May–September",
    bestFor: "Rooftops, polished outdoor dining",
    spots: [
      {
        name: "The Freehouse",
        description:
          "A massive three-story brewpub with one of the best rooftop patios in the city. The top-floor deck overlooks the North Loop and catches late-afternoon sun. The beer is brewed in-house and the food is solid pub fare elevated — burgers, flatbreads, seasonal salads. On summer Fridays, the rooftop fills by 5:30 PM. Get there early or accept the wait.",
      },
      {
        name: "Smack Shack",
        description:
          "Lobster rolls and craft cocktails on a sidewalk patio in the middle of the North Loop. The patio is not large, but it is prime people-watching territory on Washington Avenue. The lobster roll is the thing to order — Connecticut-style (warm butter) is the move.",
      },
      {
        name: "Bar La Grassa",
        description:
          "The patio here is small — a handful of tables on the sidewalk — but eating Bar La Grassa's hand-rolled pasta outside on a warm evening is one of the best dining experiences in Minneapolis. The soft-scrambled egg bruschetta, the lobster spaghetti, outdoor air — this is a peak summer night.",
      },
      {
        name: "Fulton Taproom",
        description:
          "Fulton's outdoor beer garden is the go-to pre-Twins-game spot. Large, casual, food-truck-friendly, and positioned so you can walk to Target Field in 5 minutes. The beer is approachable (Lonely Blonde, Sweet Child of Vine) and the atmosphere is pure summer energy.",
      },
    ],
    summary:
      "The North Loop has the highest concentration of quality patios in Minneapolis. From Fulton's casual beer garden to Bar La Grassa's intimate sidewalk tables, you can spend an entire summer evening moving between outdoor spots without ever getting in a car. The neighborhood's east-west street grid catches excellent late-day sun. Reservations are essential at the restaurants; the taprooms and beer gardens are first-come-first-served.",
  },
  {
    name: "Bde Maka Ska / Lake Calhoun Area",
    slug: "south-uptown",
    patioCount: "4+",
    patioSeason: "May–September",
    bestFor: "Lakeside dining, sunset drinks",
    spots: [
      {
        name: "Tin Fish",
        description:
          "A seasonal walk-up counter on the shore of Bde Maka Ska that serves fried fish, tacos, and cold beer at picnic tables overlooking the lake. Tin Fish is not fine dining — it is paper baskets and plastic forks — and it is perfect. The sunset views over the lake are among the best free entertainment in the city. Lines get long on summer weekends; go on a Wednesday.",
      },
      {
        name: "W.A. Frost (St. Paul — worth the trip)",
        description:
          "Not in Minneapolis, but mentioned because every Minneapolis patio guide ends up comparing local options to W.A. Frost's legendary courtyard in St. Paul. If you want the best patio dinner in the metro, it is a 15-minute drive east. The courtyard is draped in ivy, lit by candles, and feels European in a way that no Minneapolis patio quite matches.",
      },
      {
        name: "Bde Maka Ska Pavilion area",
        description:
          "The lakeside pavilion and surrounding area has rotating food vendors and seasonal concepts. The quality varies year to year, but the location — directly on the lake, surrounded by the walking/biking path — is unbeatable. Grab whatever is being served, find a spot on the grass, and watch the sailboats.",
      },
    ],
    summary:
      "The Bde Maka Ska area is where Minneapolis patio culture reaches its purest expression: food, water, sunset. Tin Fish is the essential experience — simple food in an unbeatable location. The entire lake is ringed by a walking and biking path, so the patio experience extends to blankets on the grass, benches along the shore, and the general understanding that from May to September, the lakefront is Minneapolis's living room. The downside: parking is a genuine nightmare on summer evenings. Bike or bus if possible.",
  },
  {
    name: "Northeast Minneapolis",
    slug: "logan-park",
    patioCount: "6+",
    patioSeason: "May–September",
    bestFor: "Quirky patios, river views, brewery gardens",
    spots: [
      {
        name: "Psycho Suzi's Motor Lounge",
        description:
          "The most iconic patio in Minneapolis. Psycho Suzi's sits on the Mississippi River with a tiki-themed patio that feels like it was transported from a 1960s Florida roadside attraction. The drinks come in ceramic skulls and flamingos. The food is pizza and bar snacks. The river view is spectacular, especially at sunset. This patio is an experience, not just a place to sit outside. Lines can exceed an hour on summer weekends — it is worth it once; after that, go on a Tuesday.",
      },
      {
        name: "Anchor Fish & Chips",
        description:
          "A tiny British-style fish and chips shop on NE 13th Avenue with a small patio out back. The fish and chips are the best in Minneapolis — beer-battered, crispy, served with mushy peas and malt vinegar. The patio is nothing special physically, but eating excellent fish and chips outside on a summer afternoon is a simple pleasure done right.",
      },
      {
        name: "Bauhaus Brew Labs",
        description:
          "Bauhaus has one of the largest outdoor brewery spaces in the city — a sprawling patio and lawn area that hosts food trucks, games, and events. The German-inspired lagers are well-suited to outdoor drinking. Thursday and Friday evenings in summer have a block-party energy that no other taproom matches.",
      },
      {
        name: "Indeed Brewing Patio",
        description:
          "Indeed's patio is large, dog-friendly, and routinely hosts food trucks. The Day Tripper Pale Ale on a sunny afternoon in Indeed's yard is a core Minneapolis summer experience. Less themed than Bauhaus, more relaxed — a good option for families with kids during afternoon hours.",
      },
    ],
    summary:
      "Northeast has the most personality per patio of any Minneapolis neighborhood. Psycho Suzi's river patio is a destination; Bauhaus and Indeed's brewery gardens are summer institutions; and the smaller restaurant patios (Anchor, Young Joni's back patio) offer intimate outdoor dining with character. The neighborhood's slightly industrial surroundings mean the patios feel discovered rather than designed — which is part of the charm.",
  },
  {
    name: "South Uptown (Lyn-Lake)",
    slug: "south-uptown",
    patioCount: "5+",
    patioSeason: "May–September",
    bestFor: "Bar patios, post-lake drinks",
    spots: [
      {
        name: "Stella's Fish Cafe Rooftop",
        description:
          "The biggest rooftop bar in the Uptown area. Stella's top-floor deck has views of the surrounding neighborhood and catches sun until late evening. The drinks are tropical-leaning (frozen cocktails, spritzes), the food is seafood-focused, and the vibe is celebratory. This is where Uptown goes to feel like Uptown used to feel.",
      },
      {
        name: "Bryant Lake Bowl Patio",
        description:
          "A small sidewalk patio attached to one of the most beloved bars in Minneapolis. The food is better than it has any right to be (this is a bowling alley), and the Lake Street people-watching is excellent. A casual, unpretentious spot in a neighborhood that can sometimes try too hard.",
      },
      {
        name: "CC Club Side Patio",
        description:
          "The CC Club's tiny side patio is not a destination patio — it is a few tables next to a dive bar. But drinking a cheap beer outside at the CC Club on a Tuesday afternoon while the Lyn-Lake corridor walks by is a Minneapolis experience that the rooftop bars cannot replicate. Unpretentious to its core.",
      },
      {
        name: "Barbette Patio",
        description:
          "A French bistro with a sidewalk patio on the Hennepin corridor. The steak frites and a glass of wine outside at Barbette is a classy, low-key alternative to the louder Uptown options. The patio is intimate — maybe 8 tables — and feels more European than Minnesotan.",
      },
    ],
    summary:
      "Lyn-Lake and South Uptown have patios for every mood: Stella's rooftop for the big-night-out energy, Barbette for a quiet dinner, CC Club for dive-bar realness. The proximity to Bde Maka Ska means the natural progression is lake in the afternoon, patio drinks in the evening. The commercial vacancies in Uptown have not yet affected the patio-bar scene, which remains one of the neighborhood's strongest draws.",
  },
  {
    name: "Linden Hills",
    slug: "linden-hills",
    patioCount: "3+",
    patioSeason: "May–September",
    bestFor: "Village-feel outdoor dining, family-friendly",
    spots: [
      {
        name: "Tilia",
        description:
          "Tilia's small patio on 43rd and Upton is one of the best restaurant patios in Minneapolis — not for size or views, but for the quality of the food and the feeling of dining in a village. Chef Steven Brown's menu is seasonal, local, and consistently excellent. The patio tables are coveted; reserve in advance or plan to wait at the bar inside.",
      },
      {
        name: "Sebastian Joe's Ice Cream",
        description:
          "Not outdoor dining in the traditional sense, but grabbing a cone of Nicollet Avenue Pothole (vanilla ice cream with caramel, fudge, and Oreos) and eating it on the bench outside Sebastian Joe's is a Linden Hills ritual. The ice cream is made in-house and is among the best in the city.",
      },
      {
        name: "Lake Harriet Bandshell area",
        description:
          "The Lake Harriet concession stand area — with its seasonal food vendors and the bandshell hosting free concerts — is not a restaurant patio, but it functions as one. Bring a blanket, buy a snack, and watch a free concert while the sun sets over the lake. This is Minneapolis outdoor dining at its most democratic.",
      },
    ],
    summary:
      "Linden Hills patios are intimate and neighborhood-scaled. There is no massive rooftop bar — the biggest outdoor experience is a bench outside an ice cream shop or a blanket at the Lake Harriet bandshell. And that is exactly the point. Tilia's patio is a destination for food quality; the lake-area eating is a destination for atmosphere. This is the family-friendly, village-feel version of Minneapolis patio culture.",
  },
  {
    name: "Whittier (Eat Street)",
    slug: "whittier",
    patioCount: "5+",
    patioSeason: "May–September",
    bestFor: "Sidewalk dining, diverse cuisine outdoors",
    spots: [
      {
        name: "Icehouse Patio",
        description:
          "Icehouse's patio is where Whittier's music scene and food scene overlap. The outdoor space hosts live music on summer evenings — jazz, experimental, indie — while the kitchen serves a menu that ranges from burgers to more ambitious seasonal plates. Drinking a cocktail on the Icehouse patio while a jazz trio plays is one of the best free entertainment options in the city.",
      },
      {
        name: "Eat Street restaurants (sidewalk tables)",
        description:
          "Many Eat Street restaurants set out sidewalk tables in summer — small, impromptu patios that line Nicollet Avenue with outdoor dining. The experience is urban and casual: eating pho or tacos on a Nicollet Avenue sidewalk while the neighborhood walks by. Not every restaurant has outdoor space, but enough do to make a summer evening stroll with outdoor eating stops genuinely enjoyable.",
      },
      {
        name: "Revival Patio",
        description:
          "Revival's patio is small but the fried chicken is outstanding. The Nashville hot chicken on a summer afternoon, eaten outside with a cold beer, is a Minneapolis food memory worth making. Lines can build on weekend afternoons.",
      },
      {
        name: "The Herkimer Patio",
        description:
          "The Herkimer's outdoor space on Lyndale is casual, beer-garden-style seating attached to one of the oldest brewpubs in the area. The beer is solid, the burgers are good, and the patio gets excellent afternoon sun.",
      },
    ],
    summary:
      "Whittier's patio scene is the most diverse in the city — not because the patios themselves are remarkable, but because the food on them spans the globe. You can eat outside at a Vietnamese restaurant, walk two blocks, eat outside at a Jamaican restaurant, walk two more blocks, and eat outside at a pizza place. Icehouse adds live music to the outdoor mix. Eat Street's sidewalk tables in summer are a celebration of exactly what makes this neighborhood special.",
  },
  {
    name: "Longfellow (Minnehaha Falls)",
    slug: "longfellow",
    patioCount: "3+",
    patioSeason: "May–September",
    bestFor: "The single best patio setting in the city",
    spots: [
      {
        name: "Sea Salt Eatery",
        description:
          "Sea Salt at Minnehaha Falls is the best outdoor dining experience in Minneapolis. Full stop. A walk-up seafood counter serving fried calamari, fish tacos, po'boys, and local craft beer at picnic tables next to a 53-foot waterfall in a city park. The line can stretch 30-45 minutes on summer weekends, and every person in it will tell you it is worth the wait. The food is genuinely excellent — not just good-for-a-park-concession, but actually excellent. Sea Salt is seasonal (roughly May through September) and is the restaurant most responsible for making Minneapolis residents irrationally protective of their summers.",
      },
      {
        name: "Minnehaha Falls Park picnic areas",
        description:
          "The park itself has extensive picnic areas, grills, and grassy spaces for spreading out a blanket. Bring food from Sea Salt or pack your own — the setting, with the falls and the limestone creek gorge, is stunning by any city-park standard.",
      },
      {
        name: "Longfellow neighborhood restaurants",
        description:
          "Along Minnehaha Avenue, several neighborhood restaurants add patio seating in summer. The options change year to year, but the corridor is developing into a small commercial strip with outdoor-friendly dining. Check what is open and grab a seat — the neighborhood patios here are low-key and local.",
      },
    ],
    summary:
      "Longfellow has the single best outdoor dining experience in Minneapolis: Sea Salt at Minnehaha Falls. It is worth the line, worth the crowds, and worth building a summer afternoon around. Bike the Greenway east, stop at Sea Salt, walk the falls, bike home. That is the ideal Minneapolis summer day, and Longfellow is the neighborhood that makes it possible. Beyond Sea Salt, the neighborhood's patio options are modest but growing.",
  },
  {
    name: "Downtown West",
    slug: "downtown-west",
    patioCount: "3+",
    patioSeason: "May–September",
    bestFor: "Rooftop drinks, pre-event patios",
    spots: [
      {
        name: "Brit's Pub Lawn Bowling",
        description:
          "Brit's Pub has a rooftop lawn bowling green. Read that again. On the roof of a pub in downtown Minneapolis, you can play lawn bowling while drinking a pint of English ale and looking out over Nicollet Mall. It is absurd and wonderful. The ground-floor patio is also excellent — a large, sheltered space with English pub atmosphere. Brit's is one of the most distinctive outdoor drinking spots in any American city.",
      },
      {
        name: "The Local Patio",
        description:
          "An Irish pub with a generous sidewalk patio on Nicollet Mall. The Guinness is well-poured, the fish and chips are solid, and the downtown people-watching is prime. A good option for pre-theater drinks if you are catching a show at the Orpheum or State.",
      },
      {
        name: "Target Field Plaza",
        description:
          "Not a restaurant patio, but the plaza area around Target Field functions as an outdoor gathering space on game days and event nights. Food vendors, beer stands, and the general energy of a ballpark crowd spilling onto the street. The best way to experience it is to arrive early, eat and drink in the plaza, and then head to the game.",
      },
    ],
    summary:
      "Downtown's patios are event-adjacent: you drink outside at Brit's before a show, on The Local's patio before a game, or in the Target Field plaza during a Twins night. The rooftop bowling green at Brit's is the standout — truly one of the most unique outdoor bar experiences in the Midwest. Outside of event nights, downtown patios can feel sparse. This is not a neighborhood where you stumble into a patio scene; you go with a plan.",
  },
  {
    name: "Loring Park",
    slug: "loring-park",
    patioCount: "2–3",
    patioSeason: "May–September",
    bestFor: "Park-adjacent cocktails, art-scene atmosphere",
    spots: [
      {
        name: "Loring Pasta Bar (garden patio)",
        description:
          "Loring Pasta Bar occupies a converted house, and its garden patio extends the eccentric indoor atmosphere outside. String lights, mismatched furniture, and pasta that is better than a place this atmospheric has any obligation to serve. The garden patio on a warm evening, with a glass of wine and the candlelit interior glowing through the windows, is genuinely romantic.",
      },
      {
        name: "Loring Park itself",
        description:
          "The park hosts events throughout summer — including Pride and various festivals — and functions as an extension of every nearby restaurant's outdoor space. Grab takeout from anywhere on Hennepin Avenue and eat in the park. The fountain, the paths, and the view of the Walker Art Center across the street make this one of the best urban picnic spots in the city.",
      },
    ],
    summary:
      "Loring Park's outdoor dining scene is small but atmospheric. Loring Pasta Bar's garden is one of the most romantic outdoor dining spots in the city, and the park itself is a summer gathering space that amplifies whatever you bring to it. This is quiet, intentional outdoor dining — a glass of wine in a garden, not a rooftop party.",
  },
  {
    name: "Seward",
    slug: "seward",
    patioCount: "2–3",
    patioSeason: "May–September",
    bestFor: "Community patios, river-adjacent calm",
    spots: [
      {
        name: "Birchwood Cafe Patio",
        description:
          "Birchwood's small patio on East 25th Street is a neighborhood treasure. The farm-to-table food is excellent, the coffee is well-made, and the patio catches morning sun in a way that makes weekend brunch here feel like a small act of self-care. Seward residents guard this spot with the protectiveness of people who know what they have.",
      },
      {
        name: "Seward Co-op outdoor seating",
        description:
          "The Seward Co-op's Friendship Store location on Franklin Avenue has outdoor seating adjacent to the deli. Grab prepared food from the deli case — which is better than most sit-down restaurants — and eat outside. Co-op-quality food in a casual outdoor setting, surrounded by the neighborhood's diverse foot traffic.",
      },
    ],
    summary:
      "Seward does not have showpiece patios. What it has is two genuinely excellent food sources (Birchwood and the Co-op) with outdoor seating, plus proximity to the Mississippi River gorge trails for post-meal walks. The outdoor experience here is understated and community-oriented — exactly like the neighborhood itself.",
  },
];

export default function BestPatiosPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title:
        "Best Patios and Outdoor Dining in Minneapolis by Neighborhood (2026)",
      description:
        "The best patios, rooftops, and outdoor dining in Minneapolis — organized by neighborhood, with honest recommendations for the short but sacred patio season.",
      url: `${BASE_URL}/guides/best-patios-outdoor-dining`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best Patios & Outdoor Dining",
        url: `${BASE_URL}/guides/best-patios-outdoor-dining`,
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
            src="/images/food/sidewalk-patio-palm-fronds-summer.webp"
            alt="Sidewalk patio dining in Minneapolis in summer"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Best Patios &amp; Outdoor Dining
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Minneapolis patios are sacred. The city endures five months of
            winter and emerges into summer with an intensity about outdoor
            dining that borders on religious. From May through September,
            every restaurant with a sidewalk, rooftop, or parking lot puts
            tables outside, and residents fill them with the urgency of
            people who know this will not last. Here are the best patios
            in the city, organized by neighborhood &mdash; from rooftop
            cocktail bars to a seafood counter next to a waterfall.
          </p>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717a] pt-5 border-t border-[#e4e4e7]">
            Last updated: March 2026
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-16">
        {/* Seasonal note */}
        <div className="bg-[#f5f5f5] p-6 mb-12">
          <h2 className="text-sm font-bold text-[#0a0a0a] mb-2">
            The Seasonal Reality
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Patio season in Minneapolis runs from roughly mid-May through
            late September. Some years it stretches into October; some years
            a late April heat wave opens things early. The peak &mdash; when
            every patio is open and every table is full &mdash; is
            mid-June through August. Seasonal restaurants like Sea Salt
            typically open in early May and close in late September. Plan
            accordingly: a &ldquo;patio night&rdquo; in Minneapolis is a
            weather-dependent proposition, and locals check the forecast
            with the intensity of farmers.
          </p>
        </div>

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
                    Patios
                  </p>
                  <p className="text-2xl font-black text-[#0a0a0a]">
                    {n.patioCount}
                  </p>
                </div>
                <div>
                  <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                    Season
                  </p>
                  <p className="text-sm font-bold text-[#0a0a0a]">
                    {n.patioSeason}
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

              {/* Patio list */}
              <div className="space-y-5 mb-6">
                {n.spots.map((s) => (
                  <div key={s.name} className="pl-4 border-l-2 border-[#2a9d8f]">
                    <h3 className="text-lg font-bold text-[#0a0a0a] mb-1">
                      {s.name}
                    </h3>
                    <p className="text-[15px] text-[#52525b] leading-[1.85]">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-[15px] text-[#52525b] leading-[1.85] bg-[#f5f5f5] p-4">
                <strong className="text-[#0a0a0a]">The scene:</strong>{" "}
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
            The Essential Minneapolis Patio Day
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            If you have one perfect summer day in Minneapolis and want to
            maximize patio time, here is the move: morning coffee on
            Dogwood&apos;s patio in the North Loop. Lunch at Sea Salt in
            Minnehaha Falls (go early to beat the line). Afternoon at Bde
            Maka Ska &mdash; swim, walk, or just sit on the grass. Sunset
            drinks at Psycho Suzi&apos;s on the river. Dinner on Bar La
            Grassa&apos;s sidewalk. Late-night beer at CC Club&apos;s side
            patio. That is six neighborhoods, six patios, and one perfect
            day.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            More Summer in Minneapolis
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Patios are just the beginning. Our food neighborhood guide
            covers the best dining corridors, and our brewery guide maps
            every taproom worth visiting.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/best-food-neighborhoods"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Best Food Neighborhoods
            </Link>
            <Link
              href="/guides/best-breweries-by-neighborhood"
              className="border border-white/30 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Best Breweries Guide
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
