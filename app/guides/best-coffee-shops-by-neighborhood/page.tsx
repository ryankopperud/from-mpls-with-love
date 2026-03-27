import type { Metadata } from "next";
import Link from "next/link";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  renderJsonLd,
} from "@/lib/schema";

const BASE_URL = "https://mplswithlove.com";

export const metadata: Metadata = {
  title: "Best Coffee Shops in Minneapolis by Neighborhood (2026)",
  description:
    "The best coffee shops in Minneapolis, organized by neighborhood. Local chains like Spyhouse, Dogwood, and UP Coffee plus the true independents — where to work, where to linger, and where to get the best espresso.",
  openGraph: {
    title: "Best Coffee Shops in Minneapolis by Neighborhood (2026)",
    description:
      "The best Minneapolis coffee shops by neighborhood — Spyhouse, Dogwood, independents, and everywhere worth drinking coffee in the city.",
    url: `${BASE_URL}/guides/best-coffee-shops-by-neighborhood`,
    type: "article",
  },
};

const neighborhoods = [
  {
    name: "North Loop",
    slug: "north-loop",
    shopCount: "4+",
    workRemote: "Excellent",
    bestFor: "Polished cafe culture, laptop-friendly spaces",
    shops: [
      {
        name: "Dogwood Coffee",
        description:
          "Dogwood's North Loop location is one of the best coffee shops in Minneapolis, period. The espresso program is serious — single-origin beans roasted in-house, baristas who know what they are doing, and latte art that is functional, not performative. The space is bright, airy, and large enough to work from without feeling cramped. This is where the North Loop's creative-professional population posts up with laptops and flat whites.",
      },
      {
        name: "Spyhouse Coffee",
        description:
          "The original Spyhouse — the one that started the Minneapolis third-wave coffee movement — is on Broadway in Northeast, but the North Loop location is the one most people visit. The aesthetic is Spyhouse's signature: clean, minimal, good light, with coffee that prioritizes clarity and origin character. The pour-over program is among the best in the city.",
      },
      {
        name: "Wesley Andrews",
        description:
          "A quieter option in the North Loop that does excellent pastries alongside solid coffee. Less of a laptop destination, more of a stop-in-for-a-cortado-and-a-croissant spot. The baked goods are made in-house and rival dedicated bakeries.",
      },
    ],
    summary:
      "The North Loop has the highest concentration of quality coffee per block in Minneapolis. Dogwood and Spyhouse are both here, within a 10-minute walk of each other, which means the neighborhood has two of the city's top three coffee roasters within easy reach. The tradeoff: the coffee here is expensive ($6-7 lattes) and the spaces are designed for a specific demographic — creative professionals who value aesthetics. If you want your coffee shop to feel unpretentious and cheap, look elsewhere.",
  },
  {
    name: "Northeast",
    slug: "logan-park",
    shopCount: "5+",
    workRemote: "Good",
    bestFor: "Third-wave flagships, artist-neighborhood energy",
    shops: [
      {
        name: "Spyhouse Coffee (Broadway)",
        description:
          "The original Spyhouse. This is where the brand started, and it still has a slightly grittier, more authentic energy than the newer locations. The coffee is identical across locations — excellent — but the Northeast crowd gives this one a more neighborhood feel.",
      },
      {
        name: "Five Watt Coffee",
        description:
          "Five Watt is the most creative coffee shop in Minneapolis. Their drink menu reads like a cocktail bar — espresso drinks with cardamom, rose, tahini, and other ingredients that should not work but do. The Golden Eagle (a cardamom-vanilla-honey latte) is iconic. The Kingfield location gets more press, but the Northeast shop captures the neighborhood's creative spirit.",
      },
      {
        name: "UP Coffee Roasters",
        description:
          "A Minneapolis-grown chain that focuses on ethically sourced beans and community spaces. The Northeast location is a solid all-around cafe — good drip, good espresso, good space to work. Less distinctive than Spyhouse or Five Watt but consistently reliable and often less crowded.",
      },
      {
        name: "Diamonds Coffee Shoppe",
        description:
          "A beloved Northeast neighborhood spot that prioritizes community over coffee-geek credentials. The espresso is well-made, the pastries are solid, and the regulars make it feel like a living room. Less polished than Spyhouse, which is exactly the point.",
      },
    ],
    summary:
      "Northeast has the most diverse coffee scene in Minneapolis — from Spyhouse's flagship minimalism to Five Watt's creative cocktail-style drinks to the neighborhood warmth of Diamonds. The proximity to artist studios and the Northrup King Building means afternoon coffee runs are a genuine social ritual here. Central Avenue has enough options that you could visit a different shop every day for a week.",
  },
  {
    name: "Whittier",
    slug: "whittier",
    shopCount: "4+",
    workRemote: "Good",
    bestFor: "Diversity of options, Eat Street adjacency",
    shops: [
      {
        name: "Spyhouse Coffee (Nicollet Ave)",
        description:
          "The Whittier Spyhouse sits on Nicollet Avenue, a short walk from Eat Street. Same excellent coffee, same clean aesthetic. This location tends to be slightly less packed than the North Loop, making it a better option for working.",
      },
      {
        name: "Quixotic Coffee",
        description:
          "An independent shop on Lyndale Avenue that has quietly built a loyal following. The coffee is sourced with care, the space is cozy without being cramped, and the pastry case is curated rather than comprehensive. Quixotic is the kind of coffee shop that rewards regulars — the baristas remember your drink.",
      },
      {
        name: "Misfit Coffee",
        description:
          "A newer addition on Nicollet Ave that brings a slightly different energy — a little louder, a little more colorful, with a menu that includes creative seasonal drinks alongside solid espresso basics. Good representation of Whittier's eclectic personality.",
      },
    ],
    summary:
      "Whittier's coffee scene benefits from its overall commercial density. You have a Spyhouse for the reliable flagship experience, Quixotic for the indie-shop loyalty, and newer spots filling in the gaps. The real advantage is context: you can get excellent coffee and then walk two blocks to Eat Street for lunch. No other coffee neighborhood offers that food adjacency.",
  },
  {
    name: "South Uptown",
    slug: "south-uptown",
    shopCount: "3+",
    workRemote: "Good",
    bestFor: "Lake-adjacent coffee, Lyn-Lake walkability",
    shops: [
      {
        name: "Spyhouse Coffee (Hennepin Ave)",
        description:
          "The Uptown Spyhouse location on Hennepin is the most spacious in the chain. High ceilings, lots of natural light, and enough seating that you do not feel guilty about taking a table for three hours with a laptop. The coffee is Spyhouse-standard — which is to say, excellent.",
      },
      {
        name: "Canteen Coffee",
        description:
          "A small, no-pretense coffee shop on Lyndale that does the basics well. The espresso is solid, the drip is fresh, and the vibe is low-key. Canteen does not try to be a destination — it tries to be your daily coffee shop, and for many Lyn-Lake residents, it succeeds.",
      },
      {
        name: "Mojo Coffee Gallery",
        description:
          "Part coffee shop, part art gallery, Mojo occupies a niche that few shops attempt. The coffee is good (not transcendent), and the rotating art displays from local artists give the space a personality that chains cannot replicate. A nice change of pace from the Spyhouse aesthetic.",
      },
    ],
    summary:
      "South Uptown's coffee scene mirrors the neighborhood: solid infrastructure, but thinner than it was a few years ago. Spyhouse anchors the area, Canteen provides the neighborhood-casual option, and the Lyn-Lake corridor adds walkable variety. The proximity to Bde Maka Ska means a summer coffee routine of espresso plus lakeside walk, which is a genuinely excellent way to start a morning.",
  },
  {
    name: "Loring Park",
    slug: "loring-park",
    shopCount: "2–3",
    workRemote: "Moderate",
    bestFor: "Park-adjacent atmosphere, pre-theater coffee",
    shops: [
      {
        name: "Dunn Brothers Coffee",
        description:
          "A Minnesota-born chain that predates the third-wave movement. The Loring Park Dunn Brothers is one of the better locations — a comfortable space with a view of the park, solid coffee (they roast beans in-house at many locations), and a crowd that mixes downtown workers with neighborhood regulars. Not as polished as Spyhouse, but reliable and less pretentious.",
      },
      {
        name: "Starbucks Reserve (Nicollet Mall nearby)",
        description:
          "Yes, it is a chain, but the Nicollet Mall Reserve location offers an elevated Starbucks experience — siphon brews, reserve-tier beans, and a space designed for lingering. If you are staying downtown and want better-than-basic coffee without hunting for an indie shop, this is the move.",
      },
    ],
    summary:
      "Loring Park's coffee scene is limited but has one natural advantage: the park itself. Grabbing coffee from Dunn Brothers and walking through Loring Park — especially in fall, when the trees are turning — is a simple pleasure that most Minneapolis residents underrate. The options are fewer than in the North Loop or Whittier, but the atmosphere compensates.",
  },
  {
    name: "Seward",
    slug: "seward",
    shopCount: "3",
    workRemote: "Good",
    bestFor: "Community-driven shops, co-op values",
    shops: [
      {
        name: "May Day Cafe",
        description:
          "May Day Cafe is a Seward institution — a small, no-frills breakfast and coffee spot that has been serving the neighborhood for decades. The coffee is straightforward, the breakfast is excellent, and the atmosphere is pure community. This is not a place to see and be seen; it is a place to eat scrambled eggs and drink coffee with your neighbors.",
      },
      {
        name: "Seward Cafe",
        description:
          "A cooperatively run cafe that reflects Seward's values — community ownership, locally sourced food, and an egalitarian vibe. The coffee is decent, the food is hearty and affordable, and the space operates as a de facto community center. Not a coffee destination, but a neighborhood institution.",
      },
      {
        name: "Birchwood Cafe",
        description:
          "Primarily a restaurant (and one of the best farm-to-table spots in the city), Birchwood also does excellent coffee. The espresso drinks are well-crafted, and the baked goods from their kitchen are worth the visit alone. A good option for a more elevated coffee experience in a neighborhood that otherwise skews casual.",
      },
    ],
    summary:
      "Seward's coffee shops reflect the neighborhood: cooperative, community-driven, and more interested in substance than style. May Day and Seward Cafe are institutions that predate the third-wave movement and have no interest in joining it. If you want your coffee shop to feel like it belongs to the neighborhood rather than being designed for Instagram, Seward delivers.",
  },
  {
    name: "Powderhorn",
    slug: "powderhorn-park",
    shopCount: "2–3",
    workRemote: "Moderate",
    bestFor: "Community gathering, affordability",
    shops: [
      {
        name: "Cafe Racer",
        description:
          "A motorcycle-themed coffee shop on Cedar Avenue that brings genuine personality to the Powderhorn coffee scene. The espresso is well-made, the decor is vintage-motorcycle cool, and the vibe is more neighborhood hangout than remote-work station. Cash-friendly prices.",
      },
      {
        name: "Powderhorn Porchetta (coffee program)",
        description:
          "Not a dedicated coffee shop, but the coffee program here has quietly become one of the better ones in south Minneapolis. Worth stopping in for a cup alongside their food menu.",
      },
    ],
    summary:
      "Powderhorn's coffee scene is smaller than its cultural footprint might suggest, but the shops that exist are genuine community spaces. Cafe Racer brings personality, and the Midtown Global Market (a short walk) adds global options — you can get Turkish coffee, Vietnamese iced coffee, and standard American drip all within the same building. The affordability here is real: coffee in Powderhorn costs less than in the North Loop, and nobody cares what kind of laptop you have.",
  },
  {
    name: "Longfellow",
    slug: "longfellow",
    shopCount: "3+",
    workRemote: "Good",
    bestFor: "Neighborhood loyalty, Greenway access",
    shops: [
      {
        name: "Sovereign Grounds",
        description:
          "A Black-owned coffee shop on Minnehaha Avenue that is as much a community institution as it is a cafe. The coffee is good, the space is welcoming, and the mission — creating a gathering space for the community — is genuine and visible. Sovereign Grounds hosts events, meetings, and conversations that make it feel like a neighborhood living room.",
      },
      {
        name: "Dogwood Coffee (Minnehaha)",
        description:
          "Dogwood's Longfellow location brings the same excellent espresso program to a neighborhood that previously lacked a third-wave option. The space is clean and bright, the coffee is sourced and roasted with care, and the Minnehaha Avenue location puts it near the Greenway and the falls.",
      },
      {
        name: "Peace Coffee (nearby roastery)",
        description:
          "Peace Coffee's roastery and taproom on Minnehaha Avenue is a fair-trade pioneer — they have been importing and roasting ethical coffee since 1996. The taproom is simple, the coffee is excellent, and you can watch the roasting operation through a window. A Minneapolis coffee institution.",
      },
    ],
    summary:
      "Longfellow's coffee scene has blossomed in recent years. Sovereign Grounds brings community mission, Dogwood brings third-wave quality, and Peace Coffee brings fair-trade credibility and decades of roasting expertise. The Minnehaha Avenue corridor has become a legitimate coffee strip. Bike the Greenway, stop for coffee, continue to Minnehaha Falls — it is one of the best morning routines in the city.",
  },
  {
    name: "Downtown / Mill District",
    slug: "downtown-east",
    shopCount: "3+",
    workRemote: "Good",
    bestFor: "Skyway-accessible, work-meeting spots",
    shops: [
      {
        name: "Spyhouse Coffee (Downtown)",
        description:
          "The downtown Spyhouse serves the office crowd — good espresso, efficient service, and a space designed for quick visits between meetings. Less lingering atmosphere than other locations, more grab-and-go energy.",
      },
      {
        name: "Dogwood Coffee (Downtown)",
        description:
          "Dogwood's downtown outpost provides a quality alternative to Spyhouse. Same dedication to sourcing and roasting, slightly different aesthetic. The downtown location is well-suited to the professional crowd.",
      },
      {
        name: "UP Coffee Roasters",
        description:
          "UP Coffee's downtown presence rounds out the third-wave options. Ethically sourced, well-roasted, and served in a comfortable space. The brand is less well-known than Spyhouse or Dogwood but the coffee quality is comparable.",
      },
    ],
    summary:
      "Downtown has no shortage of coffee, but the scene is functional rather than atmospheric. The skyway system connects several options for winter coffee runs without going outside — a genuine advantage in January. Spyhouse, Dogwood, and UP all have downtown locations, so the quality ceiling is high even if the neighborhood charm is low. This is where you get coffee for work, not for the experience of getting coffee.",
  },
  {
    name: "Kingfield / Tangletown",
    slug: "kingfield",
    shopCount: "2–3",
    workRemote: "Good",
    bestFor: "Neighborhood calm, residential feel",
    shops: [
      {
        name: "Five Watt Coffee (Kingfield)",
        description:
          "Five Watt's Kingfield location is the original — the shop where the Golden Eagle was invented and where the creative-drink concept proved it could work. The Nicollet Avenue location is slightly larger than the Northeast outpost and sits in a walkable commercial node. The seasonal drink menu changes quarterly and is always worth trying.",
      },
      {
        name: "Bull Run Coffee",
        description:
          "A neighborhood roaster with deep south Minneapolis roots. Bull Run has been roasting coffee in Minneapolis for years, and the shop serves it in a warm, unpretentious space. The drip coffee is excellent and affordable. A good example of what a neighborhood coffee shop should be — consistent, welcoming, and not trying too hard.",
      },
    ],
    summary:
      "Kingfield has fewer coffee shops than the North Loop, but the ones it has are excellent. Five Watt's original location is a destination for creative drinks, and Bull Run provides the reliable daily-driver option. The neighborhood's residential character means the coffee shops function as genuine community anchors — you will see the same faces every morning.",
  },
];

export default function BestCoffeeShopsPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Best Coffee Shops in Minneapolis by Neighborhood (2026)",
      description:
        "The best coffee shops in Minneapolis, organized by neighborhood — local chains, independents, and where to find the best espresso in the city.",
      url: `${BASE_URL}/guides/best-coffee-shops-by-neighborhood`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best Coffee Shops by Neighborhood",
        url: `${BASE_URL}/guides/best-coffee-shops-by-neighborhood`,
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
          Best Coffee Shops by Neighborhood
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Minneapolis has a genuinely excellent indie coffee scene. Spyhouse
            and Dogwood are the local chains that compete with the best
            roasters in any American city. Five Watt makes creative espresso
            drinks that people travel for. And dozens of true independents
            &mdash; from cooperative cafes to community gathering spaces
            &mdash; give every neighborhood its own coffee identity. Here is
            every shop worth visiting, organized by where it is.
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
                    Shops
                  </p>
                  <p className="text-2xl font-black text-[#0a0a0a]">
                    {n.shopCount}
                  </p>
                </div>
                <div>
                  <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                    Remote Work
                  </p>
                  <p className="text-sm font-bold text-[#0a0a0a]">
                    {n.workRemote}
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

              {/* Shop list */}
              <div className="space-y-5 mb-6">
                {n.shops.map((s) => (
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
            The Minneapolis Coffee Chains Worth Knowing
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            <strong>Spyhouse</strong> has 6+ locations and is the closest
            thing Minneapolis has to a Blue Bottle or Intelligentsia &mdash;
            minimal aesthetic, excellent roasting, serious baristas.{" "}
            <strong>Dogwood</strong> matches Spyhouse on quality with a
            slightly warmer, less minimalist vibe.{" "}
            <strong>Five Watt</strong> is the creative outlier &mdash;
            cocktail-inspired espresso drinks that nobody else in the city
            attempts.{" "}
            <strong>UP Coffee</strong> focuses on ethical sourcing and
            community.{" "}
            <strong>Peace Coffee</strong> is the fair-trade pioneer with
            decades of roasting history. You cannot go wrong with any of them.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Plan Your Morning
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Coffee is just the start. Explore our food guide for the best
            breakfast spots, or find the perfect patio for your afternoon
            latte.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/best-food-neighborhoods"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Best Food Neighborhoods
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
