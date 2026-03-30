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
  title: "Safest Neighborhoods in Minneapolis (2026)",
  description:
    "The safest neighborhoods in Minneapolis, ranked by violent and property crime rates per 1,000 residents. Honest data, real context, and no sugarcoating.",
  openGraph: {
    title: "Safest Neighborhoods in Minneapolis (2026)",
    description:
      "The safest Minneapolis neighborhoods ranked by crime data — honest assessments with real numbers and context.",
    url: `${BASE_URL}/guides/safest-neighborhoods`,
    type: "article",
  },
  alternates: { canonical: "/guides/safest-neighborhoods" },
};

const neighborhoods = [
  {
    rank: 1,
    name: "Fulton",
    slug: "fulton",
    violentCrime: 1.2,
    propertyCrime: 12.8,
    overallRating: "Very Low",
    medianHome: "$525K-$700K",
    honest:
      "Fulton consistently posts the lowest crime rates in Minneapolis, and it's not close. The violent crime rate of roughly 1.2 per 1,000 residents is comparable to outer-ring suburbs like Edina or Eden Prairie. Property crime is also well below the citywide average. The reason is straightforward: Fulton is a stable, affluent, primarily owner-occupied neighborhood of single-family homes with strong social cohesion and active block clubs. The tradeoff is equally straightforward — you're paying $525K+ to live in a neighborhood with limited commercial activity, limited diversity, and limited nightlife. Fulton is safe because it is quiet, expensive, and somewhat insular. That's the deal.",
  },
  {
    rank: 2,
    name: "Linden Hills",
    slug: "linden-hills",
    violentCrime: 1.4,
    propertyCrime: 14.2,
    overallRating: "Very Low",
    medianHome: "$625K-$850K",
    honest:
      "Linden Hills matches Fulton's safety profile with an even higher price tag. The village center at 43rd & Upton generates slightly more foot traffic — and therefore slightly more property crime — than Fulton's purely residential streets, but both rates remain far below citywide averages. The lake proximity (Harriet and Bde Maka Ska) adds some seasonal car break-ins in parking areas, but violent crime is exceptionally rare. Linden Hills is the kind of neighborhood where people leave their bikes unlocked on the porch. Whether that's charming or boring depends on what you're looking for.",
  },
  {
    rank: 3,
    name: "Kenny",
    slug: "kenny",
    violentCrime: 1.5,
    propertyCrime: 13.5,
    overallRating: "Very Low",
    medianHome: "$425K-$575K",
    honest:
      "Kenny is Fulton's less expensive neighbor with nearly identical crime numbers. The neighborhood is almost entirely single-family homes, occupied by long-tenured homeowners who know each other and maintain strong block-level social networks. There is essentially no commercial corridor, which means less foot traffic, fewer strangers, and fewer opportunities for crime. Kenny is one of the safest neighborhoods in Minneapolis, and also one of the least interesting — those two facts are related. If safety is your primary criterion and you want a Southwest Minneapolis address without paying Linden Hills prices, Kenny is the answer.",
  },
  {
    rank: 4,
    name: "Lynnhurst",
    slug: "lynnhurst",
    violentCrime: 1.6,
    propertyCrime: 15.1,
    overallRating: "Very Low",
    medianHome: "$500K-$725K",
    honest:
      "Lynnhurst sits between Fulton and the lakes, sharing their safety profile while adding slightly better commercial access along 50th Street. The small commercial node at 50th and Penn provides neighborhood-scale retail — a couple of restaurants, a coffee shop, basic services — without generating the crime that larger commercial corridors attract. Property crime ticks up slightly compared to Fulton and Kenny due to this commercial activity and the proximity to busier 50th Street traffic. But violent crime remains exceptionally low. Lynnhurst is a prototypical safe Minneapolis neighborhood: expensive homes, established families, strong school connections through Lake Harriet and Kenny schools.",
  },
  {
    rank: 5,
    name: "Nokomis",
    slug: "nokomis",
    violentCrime: 2.1,
    propertyCrime: 18.4,
    overallRating: "Low",
    medianHome: "$300K-$450K",
    honest:
      "Nokomis represents a step down in price from the Southwest neighborhoods and a step up in crime — though still well below citywide averages. The lake attracts visitors, and with visitors come car break-ins: the property crime rate reflects this seasonal pattern. Violent crime is low but not as low as the Fulton-Linden Hills tier. The 50th Street corridor and lake parking areas are the primary hot spots; the residential streets are quiet. Nokomis is the safest neighborhood in Minneapolis that still feels like a real city neighborhood rather than a suburb. You get lake access, some commercial life, genuine diversity, and crime rates that most American cities would envy — all for $150K-$300K less than the Southwest lake neighborhoods.",
  },
  {
    rank: 6,
    name: "Bryn Mawr",
    slug: "bryn-mawr",
    violentCrime: 1.8,
    propertyCrime: 16.3,
    overallRating: "Low",
    medianHome: "$375K-$525K",
    honest:
      "Bryn Mawr is a small, geographically isolated neighborhood bordered by Theodore Wirth Park, I-394, and Bassett Creek. That isolation is its safety advantage — there's no through traffic, no commercial corridor drawing outsiders, and only a few entry points. The neighborhood association is active and well-organized, and the park provides a natural buffer. The tradeoff: the same isolation that keeps crime low makes Bryn Mawr feel disconnected from the city. You're technically in Minneapolis, but your daily experience is closer to a first-ring suburb. The crime numbers are excellent. The urban energy is minimal. For families who want a safe, quiet, park-adjacent pocket within city limits, Bryn Mawr is a strong choice.",
  },
  {
    rank: 7,
    name: "Hale",
    slug: "hale",
    violentCrime: 2.3,
    propertyCrime: 19.2,
    overallRating: "Low",
    medianHome: "$310K-$420K",
    honest:
      "Hale is a modest, stable neighborhood in South Minneapolis that flies under the radar on every metric, including crime. The residential streets are quiet, the housing stock is solid 1920s-1940s bungalows and Cape Cods, and the population skews toward long-tenured homeowners. The Diamond Lake Road corridor brings some commercial activity but nothing that generates significant crime. Hale's numbers are slightly higher than the Southwest tier because it sits in a transition zone — closer to higher-crime areas along Lake Street and Minnehaha Avenue — but the neighborhood itself is calm. It's the kind of place where the most common police call is a noise complaint about a barking dog.",
  },
  {
    rank: 8,
    name: "Diamond Lake",
    slug: "diamond-lake",
    violentCrime: 2.2,
    propertyCrime: 18.7,
    overallRating: "Low",
    medianHome: "$300K-$400K",
    honest:
      "Diamond Lake mirrors Hale's profile — a quiet residential neighborhood with modest homes, long-tenured residents, and crime rates well below the city average. Diamond Lake (the actual lake) is small and not a major draw, which means less foot traffic and fewer opportunistic property crimes than the larger lake neighborhoods. The commercial options are limited to the edges (Nicollet Avenue, Diamond Lake Road), and the neighborhood lacks a defining identity beyond being a solid, safe, affordable place to live. That anonymity is the point for most residents. Diamond Lake is where you move when you want good schools, low crime, and a mortgage under $400K — and don't need your neighborhood to be a personality statement.",
  },
  {
    rank: 9,
    name: "Tangletown",
    slug: "tangletown",
    violentCrime: 1.9,
    propertyCrime: 17.5,
    overallRating: "Low",
    medianHome: "$400K-$575K",
    honest:
      "Tangletown earns its name from its winding, non-grid streets — a deliberate design choice from the 1920s that creates a maze-like residential enclave. That street pattern is also a crime deterrent: without a grid, there are no quick escape routes and no through traffic. It's harder to case a neighborhood when you can't figure out how to get out of it. The Washburn-McReavy Funeral Home and the commercial strip along Nicollet mark the edges, but the interior is pure residential. Crime is low across all categories. The neighborhood is more diverse than the Fulton-Linden Hills tier and slightly more affordable, making it a strong choice for safety-conscious families who want a Southwest-adjacent experience at a lower price.",
  },
  {
    rank: 10,
    name: "Windom",
    slug: "windom",
    violentCrime: 2.5,
    propertyCrime: 20.1,
    overallRating: "Low",
    medianHome: "$285K-$375K",
    honest:
      "Windom is the most affordable neighborhood on this list, and its crime numbers reflect the broader pattern: more affordable Minneapolis neighborhoods generally have higher crime than the expensive ones. But Windom's rates are still meaningfully below the citywide average, and the violent crime rate of 2.5 per 1,000 is in the 'low' category by any reasonable measure. The neighborhood sits on the southern edge of Minneapolis, bordered by Crosstown Highway 62, which creates a natural boundary. Windom Park and the residential streets are quiet. The demographic makeup is more diverse than the Southwest neighborhoods, with growing Latino and East African communities. If your budget is under $375K and safety is a priority, Windom is the neighborhood to watch.",
  },
];

export default function SafestNeighborhoodsPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Safest Neighborhoods in Minneapolis (2026)",
      description:
        "The safest neighborhoods in Minneapolis, ranked by violent and property crime rates per 1,000 residents.",
      url: `${BASE_URL}/guides/safest-neighborhoods`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Safest Neighborhoods",
        url: `${BASE_URL}/guides/safest-neighborhoods`,
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
            src="/images/neighborhoods/blue-victorian-house-garden-summer.webp"
            alt="Blue Victorian house with garden in a Minneapolis neighborhood"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Safest Neighborhoods in Minneapolis
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Let&apos;s be direct: Minneapolis has a crime problem. The citywide
            violent crime rate is higher than the national average, and property
            crime &mdash; especially auto theft and catalytic converter theft
            &mdash; spiked after 2020 and hasn&apos;t fully recovered. But
            crime in Minneapolis is not evenly distributed. Some neighborhoods
            post numbers that rival safe suburbs. Others are genuinely
            dangerous. Here are the 10 safest, ranked by combined violent and
            property crime rates per 1,000 residents, with honest context about
            what &ldquo;safe&rdquo; actually means in a city of 430,000.
          </p>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717a] pt-5 border-t border-[#e4e4e7]">
            Last updated: March 2026
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-16">
        {/* Context box */}
        <div className="bg-[#f5f5f5] p-6 mb-12">
          <h2 className="text-sm font-bold text-[#0a0a0a] mb-2">
            A Note on Crime Data
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Crime rates cited here are based on Minneapolis Police Department
            data and FBI UCR reporting. &ldquo;Violent crime&rdquo; includes
            homicide, rape, robbery, and aggravated assault. &ldquo;Property
            crime&rdquo; includes burglary, larceny-theft, and motor vehicle
            theft. Rates are per 1,000 residents and reflect annual averages.
            For context, the citywide average is approximately 11.5 violent
            crimes and 55 property crimes per 1,000 residents. Every
            neighborhood on this list is significantly below those numbers.
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

                  {/* Data grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Violent Crime / 1K
                      </p>
                      <p className="text-2xl font-black text-[#0a0a0a]">
                        {n.violentCrime}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Property Crime / 1K
                      </p>
                      <p className="text-2xl font-black text-[#0a0a0a]">
                        {n.propertyCrime}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Overall Rating
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.overallRating}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Median Home
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.medianHome}
                      </p>
                    </div>
                  </div>

                  <p className="text-[15px] text-[#52525b] leading-[1.85]">
                    {n.honest}
                  </p>

                  <Link
                    href={`/neighborhoods/${n.slug}`}
                    className="inline-block mt-4 text-sm font-semibold text-[#2a9d8f] hover:underline"
                  >
                    Read the full {n.name} guide &rarr;
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 bg-[#f5f5f5] p-6 mb-12">
          <h2 className="text-sm font-bold text-[#0a0a0a] mb-2">
            Safety Is Not the Only Factor
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Every neighborhood on this list is safe by Minneapolis standards,
            but the safest neighborhoods are also the most expensive and the
            least diverse. That&apos;s not a coincidence &mdash; it&apos;s a
            reflection of structural inequality in housing, policing, and
            investment. A neighborhood&apos;s crime rate tells you something
            real, but it doesn&apos;t tell you everything. Walkability, culture,
            community, affordability, and proximity to jobs all matter too. Use
            safety data as one input, not the only input.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Find the Right Neighborhood
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Safety is one piece of the puzzle. Our other guides cover
            walkability, family-friendliness, affordability, and more &mdash;
            so you can find the neighborhood that fits your whole life.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/best-neighborhoods-for-families"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Best for Families
            </Link>
            <Link
              href="/guides/best-neighborhoods"
              className="border border-white/30 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Best Neighborhoods Overall
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
