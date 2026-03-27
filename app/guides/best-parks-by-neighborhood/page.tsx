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
  title: "Best Parks in Minneapolis by Neighborhood (2026)",
  description:
    "The best parks in Minneapolis, organized by neighborhood — featuring signature parks, lake access, trails, splash pads, and what makes each neighborhood's green space unique.",
  openGraph: {
    title: "Best Parks in Minneapolis by Neighborhood (2026)",
    description:
      "Minneapolis has more parkland per capita than almost any major US city. Here are the best parks, organized by the neighborhoods they define.",
    url: `${BASE_URL}/guides/best-parks-by-neighborhood`,
    type: "article",
  },
};

const neighborhoods = [
  {
    rank: 1,
    name: "Nokomis",
    slug: "nokomis",
    signaturePark: "Lake Nokomis & Nokomis Beach",
    parkAcres: "80+",
    lakeAccess: "Yes — swimming beach",
    playgrounds: 3,
    highlights:
      "Lake Nokomis swimming beach, Nokomis Parkway trails, volleyball courts, fishing pier, picnic pavilion, winter ice skating",
    honest:
      "Lake Nokomis is the most swimmable lake in the Minneapolis park system — the beach is sandy, well-maintained, and genuinely pleasant, not just a patch of grass near water. The 2.7-mile loop around the lake is flat and paved, perfect for jogging, biking, or pushing a stroller. In winter, the city maintains an ice skating rink on the lake. Volleyball courts near the beach fill up on summer weekends. The surrounding parkland connects south to Minnehaha Creek and north toward Lake Hiawatha, creating a continuous green corridor. What keeps Nokomis at the top: the lake is big enough to feel like an escape but small enough that you recognize the other regulars. It functions as a genuine community gathering place, not just a recreational amenity.",
  },
  {
    rank: 2,
    name: "Longfellow",
    slug: "longfellow",
    signaturePark: "Minnehaha Falls & Regional Park",
    parkAcres: "193",
    lakeAccess: "No — river access",
    playgrounds: 4,
    highlights:
      "Minnehaha Falls (53-ft waterfall), limestone bluffs, wading pool, Sea Salt Eatery, off-leash dog park, bike trails to Fort Snelling",
    honest:
      "Minnehaha Falls is the single most spectacular natural feature in the Minneapolis park system — a 53-foot waterfall inside city limits that draws 850,000 visitors annually. But the park is far more than the falls. The 193-acre regional park extends south along the Mississippi River gorge with limestone bluffs, wooded trails, and a bike path that connects to Fort Snelling State Park. Sea Salt Eatery, the seasonal fish restaurant in the park, has some of the best outdoor dining in the city. The off-leash dog park near the river is spacious and well-used. The wading pool near the main pavilion is a summer staple for families. The honest note: on peak summer weekends, the falls area is genuinely crowded — parking fills early, and the viewing platforms can feel packed. Visit on a Tuesday evening and it is a completely different experience.",
  },
  {
    rank: 3,
    name: "Linden Hills",
    slug: "linden-hills",
    signaturePark: "Lake Harriet & Bandshell",
    parkAcres: "100+",
    lakeAccess: "Yes — beach and boat launch",
    playgrounds: 3,
    highlights:
      "Lake Harriet Bandshell (free summer concerts), rose garden, bird sanctuary, sailing, canoe/kayak rental, Linden Hills Beach, Como-Harriet Streetcar Line",
    honest:
      "Lake Harriet is arguably the most beautiful lake in the Minneapolis chain. The bandshell hosts free concerts nearly every summer evening — bring a blanket, grab food from Bread & Pickle, and sit on the hillside while the sun sets over the water. It is one of the best free experiences in the city. The rose garden near the north end of the lake is small but meticulously maintained. The bird sanctuary on the west side provides surprisingly wild-feeling trails just blocks from million-dollar homes. You can rent canoes, kayaks, and paddleboards at the refectory. The historic Como-Harriet Streetcar Line runs a vintage trolley on summer weekends. What makes Lake Harriet special is the combination of beauty and programming — it feels cared-for in a way that goes beyond mowing the grass.",
  },
  {
    rank: 4,
    name: "Fulton",
    slug: "fulton",
    signaturePark: "Lynnhurst Park & Lake Harriet access",
    parkAcres: "60+",
    lakeAccess: "Yes — via Lake Harriet",
    playgrounds: 2,
    highlights:
      "Lynnhurst Park (baseball fields, tennis courts, wading pool, rec center), Lake Harriet western shore access, neighborhood ball fields",
    honest:
      "Fulton's park story is two-part: Lynnhurst Park as the neighborhood anchor and Lake Harriet as the headliner a few blocks east. Lynnhurst Park is the kind of neighborhood park that actually works — the rec center runs youth programs year-round, the baseball fields are busy every summer evening, the wading pool fills with families on hot afternoons, and the tennis courts are well-maintained. It is a social hub, not just green space. Lake Harriet's western shoreline, accessible from Fulton's eastern edge, adds lake access that most neighborhoods would kill for. The honest assessment: Fulton does not have the dramatic scenery of Minnehaha or the lake-wrapping parkland of Nokomis. What it has is consistent, well-maintained, family-oriented park space that functions as an extension of your backyard.",
  },
  {
    rank: 5,
    name: "Bryn Mawr",
    slug: "bryn-mawr",
    signaturePark: "Theodore Wirth Regional Park",
    parkAcres: "759",
    lakeAccess: "Yes — Wirth Lake beach",
    playgrounds: 2,
    highlights:
      "Theodore Wirth Park (largest park in Minneapolis), Wirth Lake beach, mountain bike trails, cross-country skiing, disc golf, wildflower garden, Eloise Butler Wildflower Garden",
    honest:
      "Theodore Wirth Park is 759 acres — the largest park in Minneapolis and one of the largest urban parks in the country. Bryn Mawr sits at its eastern edge, which means residents have what amounts to a national park-scale green space as their backyard. The Eloise Butler Wildflower Garden, tucked inside Wirth, is a 15-acre native plant sanctuary that has operated continuously since 1907. The mountain bike trails are legitimate single-track, not paved paths pretending to be trails. In winter, the cross-country ski trails are some of the best in the metro. Wirth Lake has a small but genuine swimming beach. The Trailhead building, completed in 2018, added a modern adventure center with equipment rental and a cafe. The scale is the point: this is not a neighborhood park, it is a regional wilderness within city limits. The tradeoff is that the park's size means parts of it feel isolated, which is either an advantage or a concern depending on your perspective.",
  },
  {
    rank: 6,
    name: "Powderhorn Park",
    slug: "powderhorn-park",
    signaturePark: "Powderhorn Lake Park",
    parkAcres: "66",
    lakeAccess: "Yes — Powderhorn Lake",
    playgrounds: 2,
    highlights:
      "Powderhorn Lake, ice skating, MayDay Parade staging area, rec center, baseball fields, community gathering space",
    honest:
      "Powderhorn Lake Park is the civic heart of its neighborhood in a way that few Minneapolis parks achieve. The MayDay Parade — organized by In the Heart of the Beast Puppet and Mask Theatre — stages its finale on the lake shore. Summer evenings bring out a cross-section of the neighborhood that is genuinely diverse in age, race, and income. The lake itself is small and not swimmable, but the walking loop, the mature trees, and the open sight lines make it a beautiful urban green space. The rec center runs affordable programming year-round. In winter, the city maintains an ice skating rink. The honest note: Powderhorn Park has been a contested space — the 2020 encampment was traumatic for the neighborhood, and the park's identity as a commons that belongs to everyone was tested. It has rebounded, but the experience left marks on how residents relate to the space.",
  },
  {
    rank: 7,
    name: "Logan Park / Northeast",
    slug: "logan-park",
    signaturePark: "Boom Island Park",
    parkAcres: "28",
    lakeAccess: "No — river access",
    playgrounds: 2,
    highlights:
      "Boom Island Park (Mississippi riverfront, boat launch, picnic areas), B.F. Nelson Park, views of the downtown skyline, riverfront trail system",
    honest:
      "Boom Island Park gives Northeast Minneapolis something rare: direct Mississippi River access with a boat launch, picnic grounds, and unobstructed views of the downtown skyline. The park sits on a former industrial site at the river's edge, and the reclamation is well-done — the grounds feel open and connected to the water without the over-engineered quality of some riverfront redevelopments. The connected trail system runs south along the river to the Stone Arch Bridge and north toward the 18th Avenue bridge. B.F. Nelson Park, just upstream, adds a smaller green space with a playground and more skyline views. Northeast's park story is really about the river — the neighborhood's eastern edge has continuous riverfront access that most Minneapolis residents do not realize exists. The tradeoff: the parks are concentrated on the river side, and the interior of Northeast is denser and more industrial with less green space per block.",
  },
  {
    rank: 8,
    name: "South Uptown",
    slug: "south-uptown",
    signaturePark: "Bde Maka Ska (Lake Calhoun)",
    parkAcres: "90+",
    lakeAccess: "Yes — beach and boat rental",
    playgrounds: 2,
    highlights:
      "Bde Maka Ska beach, paddleboard and kayak rentals, 3.1-mile lakeside loop, Tin Fish restaurant, Midtown Greenway access, winter kite skiing",
    honest:
      "Bde Maka Ska is the most popular lake in the chain of lakes — the most swimming, the most paddleboarding, the most people on the running loop, the most energy. The lake is large enough (401 acres of water surface) to support sailing, and the shoreline is lined with mature trees and well-maintained paths. The 3.1-mile paved loop connects to Lake Harriet to the south and Lake of the Isles to the north, creating a continuous 13+ mile chain of lakes trail system. Paddleboard, kayak, and canoe rentals operate from the east shore pavilion. Tin Fish serves solid fried seafood from a lakeside stand. The honest take: Bde Maka Ska is crowded in summer. Peak weekend afternoons feel more like a festival than a park. The beach is packed, the loop is congested with a mix of runners, cyclists, rollerbladers, and families, and finding parking requires patience. This is the lake for people who want energy and social activity, not solitude.",
  },
  {
    rank: 9,
    name: "Downtown East",
    slug: "downtown-east",
    signaturePark: "The Commons & Gold Medal Park",
    parkAcres: "10",
    lakeAccess: "No",
    playgrounds: 1,
    highlights:
      "The Commons (4.2 acres, event programming), Gold Medal Park (7.5 acres, spiral mound), Stone Arch Bridge access, Mill Ruins Park, riverfront trail",
    honest:
      "Downtown East's parks are small but architecturally intentional in a way that separates them from the rest of the Minneapolis system. The Commons, a 4.2-acre park built as part of the US Bank Stadium development, functions as a designed urban room — flat, open, programmed with events, and surrounded by new construction. Gold Medal Park, across Washington Avenue, offers a different experience: the 7.5-acre park features a 32-foot spiral earthwork mound with views of the Stone Arch Bridge and the river. Mill Ruins Park preserves the stone foundations of the flour mills that built Minneapolis, creating a park that is equal parts green space and industrial archaeology. These parks will never compete with Lake Harriet or Theodore Wirth on acreage or natural beauty, but they offer something different — urban parks that function as public living rooms, designed for density rather than escape.",
  },
  {
    rank: 10,
    name: "Cedar-Isles-Dean",
    slug: "cedar-isles-dean",
    signaturePark: "Cedar Lake & Lake of the Isles",
    parkAcres: "100+",
    lakeAccess: "Yes — Cedar Lake hidden beach",
    playgrounds: 1,
    highlights:
      "Cedar Lake (hidden beach, mountain biking, wild shoreline), Lake of the Isles (canoeing, running loop, winter skating), Kenilworth Trail, Chain of Lakes connection",
    honest:
      "Cedar-Isles-Dean has access to two lakes with completely different personalities. Lake of the Isles is manicured and formal — the 2.8-mile loop passes some of the most expensive homes in Minneapolis, and the lake itself, too shallow for swimming, functions as a scenic centerpiece for walking, running, and winter ice skating. Cedar Lake is the opposite: the hidden beach on its north shore is the closest thing to a secret that Minneapolis parks have, the shoreline is wilder and less maintained than the other chain lakes, and the surrounding trails attract mountain bikers and trail runners. The Kenilworth Trail, a former rail corridor, cuts through the neighborhood and connects to the Midtown Greenway. Living here means two-lake access with minimal crowds compared to Bde Maka Ska. The tradeoff: the neighborhood is expensive and the parks, while beautiful, do not have the programming or facilities (rec centers, organized sports) of the neighborhood parks in Fulton or Powderhorn.",
  },
  {
    rank: 11,
    name: "Minnehaha (Hiawatha)",
    slug: "minnehaha",
    signaturePark: "Minnehaha Creek Corridor & Lake Hiawatha",
    parkAcres: "55+",
    lakeAccess: "Yes — Lake Hiawatha",
    playgrounds: 3,
    highlights:
      "Minnehaha Creek trail, Lake Hiawatha, Hiawatha Golf Course, creek wading, Minnehaha Parkway, connection to Minnehaha Falls",
    honest:
      "The Minnehaha neighborhood wraps around the Minnehaha Creek corridor and Lake Hiawatha, providing a green belt that connects the chain of lakes system to Minnehaha Falls. Minnehaha Parkway follows the creek for miles through mature tree canopy — the fall colors along this stretch are some of the best in the city. Lake Hiawatha is smaller and quieter than its more famous neighbors, with fishing and a public golf course on its north shore. The creek itself is wadeable in summer at several access points, making it a favorite for families with young kids. The parkway trail is excellent for biking, running, and walking, and it connects to the broader trail system in both directions. The honest note: Lake Hiawatha has dealt with water quality issues and sediment buildup for years. It is getting attention and investment, but it is not the pristine lake experience of Harriet or Nokomis.",
  },
];

export default function BestParksByNeighborhoodPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Best Parks in Minneapolis by Neighborhood (2026)",
      description:
        "The best parks in Minneapolis, organized by neighborhood — featuring signature parks, lake access, trails, and what makes each neighborhood's green space unique.",
      url: `${BASE_URL}/guides/best-parks-by-neighborhood`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best Parks by Neighborhood",
        url: `${BASE_URL}/guides/best-parks-by-neighborhood`,
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
            src="/images/parks/minnehaha-falls-summer-lush.webp"
            alt="Minnehaha Falls surrounded by lush green foliage in summer"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Best Parks by Neighborhood
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Minneapolis has more parkland per capita than almost any major US
            city. The Minneapolis Park and Recreation Board &mdash; an
            independent, elected body separate from city government &mdash;
            manages 180 parks, 49 recreation centers, and 22 lakes. Here are
            the 11 neighborhoods with the best park access, ranked by the
            quality, variety, and character of their green spaces.
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
                        Signature Park
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.signaturePark}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Park Acres
                      </p>
                      <p className="text-2xl font-black text-[#0a0a0a]">
                        {n.parkAcres}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Lake Access
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.lakeAccess}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Playgrounds
                      </p>
                      <p className="text-2xl font-black text-[#0a0a0a]">
                        {n.playgrounds}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#71717a] mb-3">
                    <strong className="text-[#0a0a0a]">
                      Highlights:
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
            About the Minneapolis Park System
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            The Minneapolis Park and Recreation Board has been independently
            governing the city&apos;s parks since 1883. The system consistently
            ranks in the top 3 nationally by the Trust for Public Land&apos;s
            ParkScore index. Every Minneapolis resident lives within a
            10-minute walk of a park &mdash; a claim very few American cities
            can make. The park system is funded by its own dedicated property
            tax levy, which is why even neighborhoods with modest home values
            have well-maintained parks.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Find Your Neighborhood
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Parks are just one piece of the puzzle. Our neighborhood guides
            cover everything &mdash; restaurants, schools, real estate, safety,
            and the honest version of what it&apos;s like to live there.
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
