import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Minneapolis Guides",
  description:
    "Curated guides to Minneapolis — best neighborhoods, most walkable areas, family-friendly picks, and more. Honest, in-depth, written by locals.",
};

const guides = [
  // Relocation
  {
    slug: "moving-to-minneapolis",
    title: "Moving to Minneapolis: The Complete Guide (2026)",
    description:
      "Everything you need to know before moving to Minneapolis — neighborhoods, cost of living, weather, schools, jobs, transit, and what no one tells you until you get here.",
    category: "Relocation",
  },
  {
    slug: "minneapolis-vs-st-paul",
    title: "Minneapolis vs. St. Paul: An Honest Comparison (2026)",
    description:
      "A genuinely balanced comparison of the Twin Cities — vibe, neighborhoods, food, nightlife, transit, cost of living, and which one is actually right for you.",
    category: "Relocation",
  },
  // Neighborhood Rankings
  {
    slug: "best-neighborhoods",
    title: "Best Neighborhoods in Minneapolis (2026)",
    description:
      "The 10 best neighborhoods in Minneapolis, ranked and explained — with honest assessments of who each one is actually best for.",
    category: "Neighborhoods",
  },
  {
    slug: "safest-neighborhoods",
    title: "Safest Neighborhoods in Minneapolis (2026)",
    description:
      "The safest neighborhoods in Minneapolis, ranked by crime data — with honest context about what 'safe' actually means in this city.",
    category: "Neighborhoods",
  },
  {
    slug: "most-affordable-neighborhoods",
    title: "Most Affordable Neighborhoods in Minneapolis (2026)",
    description:
      "The most affordable neighborhoods in Minneapolis — with honest assessments of why they're affordable and what you're trading off.",
    category: "Neighborhoods",
  },
  {
    slug: "most-underrated-neighborhoods",
    title: "Most Underrated Neighborhoods in Minneapolis (2026)",
    description:
      "10 Minneapolis neighborhoods that are better than their reputation — the overlooked corners that deserve more attention.",
    category: "Neighborhoods",
  },
  // Lifestyle
  {
    slug: "best-neighborhoods-for-families",
    title: "Best Neighborhoods for Families in Minneapolis (2026)",
    description:
      "The best family-friendly neighborhoods in Minneapolis — ranked by schools, parks, safety, and what it's actually like to raise kids there.",
    category: "Lifestyle",
  },
  {
    slug: "best-neighborhoods-for-young-professionals",
    title: "Best Neighborhoods for Young Professionals in Minneapolis (2026)",
    description:
      "Where to live in Minneapolis in your 20s and 30s — ranked by walkability, nightlife, dining, rent, and social scene.",
    category: "Lifestyle",
  },
  {
    slug: "best-neighborhoods-for-renters",
    title: "Best Neighborhoods for Renters in Minneapolis (2026)",
    description:
      "The best Minneapolis neighborhoods for renters — ranked by rent prices, inventory, walkability, and amenity access.",
    category: "Lifestyle",
  },
  {
    slug: "best-neighborhoods-for-first-time-homebuyers",
    title: "Best Neighborhoods for First-Time Homebuyers in Minneapolis (2026)",
    description:
      "Where to buy your first home in Minneapolis — ranked by price, appreciation potential, and honest tradeoffs.",
    category: "Lifestyle",
  },
  {
    slug: "best-neighborhoods-for-retirees",
    title: "Best Neighborhoods for Retirees and Empty Nesters in Minneapolis (2026)",
    description:
      "The best Minneapolis neighborhoods for 55+ residents — walkability, safety, healthcare access, and quality of life.",
    category: "Lifestyle",
  },
  {
    slug: "best-neighborhoods-for-remote-workers",
    title: "Best Neighborhoods for Remote Workers in Minneapolis (2026)",
    description:
      "Where to work from home in Minneapolis — ranked by coffee shops, co-working spaces, walkability, and work-life balance.",
    category: "Lifestyle",
  },
  {
    slug: "best-neighborhoods-for-dog-owners",
    title: "Best Neighborhoods for Dog Owners in Minneapolis (2026)",
    description:
      "The most dog-friendly Minneapolis neighborhoods — off-leash parks, trails, pet-friendly businesses, and vet access.",
    category: "Lifestyle",
  },
  {
    slug: "best-neighborhoods-for-artists",
    title: "Best Neighborhoods for Artists and Creatives in Minneapolis (2026)",
    description:
      "Where Minneapolis's creative community lives and works — studios, galleries, affordable rent, and the neighborhoods that nurture art.",
    category: "Lifestyle",
  },
  {
    slug: "best-neighborhoods-for-schools",
    title: "Best Minneapolis Neighborhoods for Schools (2026)",
    description:
      "The best Minneapolis neighborhoods for families who prioritize schools — real ratings, real school names, and honest MPS context.",
    category: "Lifestyle",
  },
  // Getting Around
  {
    slug: "most-walkable-neighborhoods",
    title: "Most Walkable Neighborhoods in Minneapolis (2026)",
    description:
      "The neighborhoods where you can ditch the car — ranked by Walk Score, transit access, and what's actually within walking distance.",
    category: "Getting Around",
  },
  {
    slug: "most-bikeable-neighborhoods",
    title: "Most Bikeable Neighborhoods in Minneapolis (2026)",
    description:
      "The most bikeable neighborhoods in Minneapolis — ranked by Bike Score, trail access, infrastructure, and bike commute culture.",
    category: "Getting Around",
  },
  {
    slug: "best-neighborhoods-for-public-transit",
    title: "Best Neighborhoods for Public Transit in Minneapolis (2026)",
    description:
      "The best Minneapolis neighborhoods for transit — light rail access, high-frequency bus routes, and honest car-free viability.",
    category: "Getting Around",
  },
  {
    slug: "best-neighborhoods-near-downtown",
    title: "Best Neighborhoods Near Downtown Minneapolis (2026)",
    description:
      "The best neighborhoods within walking, biking, or quick transit distance of downtown Minneapolis.",
    category: "Getting Around",
  },
  {
    slug: "best-neighborhoods-near-the-lakes",
    title: "Best Neighborhoods Near the Lakes in Minneapolis (2026)",
    description:
      "The best neighborhoods with lake access — from Bde Maka Ska and Harriet to Nokomis and Cedar, ranked by proximity and lifestyle.",
    category: "Getting Around",
  },
  // Food & Drink
  {
    slug: "best-food-neighborhoods",
    title: "Best Food Neighborhoods in Minneapolis (2026)",
    description:
      "The best Minneapolis neighborhoods for dining — ranked by restaurant density, cuisine diversity, and the specific places worth the trip.",
    category: "Food & Drink",
  },
  {
    slug: "best-breweries-by-neighborhood",
    title: "Best Breweries in Minneapolis by Neighborhood (2026)",
    description:
      "Every brewery worth visiting in Minneapolis, organized by neighborhood — from Northeast's brewery row to hidden gems across the city.",
    category: "Food & Drink",
  },
  {
    slug: "best-coffee-shops-by-neighborhood",
    title: "Best Coffee Shops in Minneapolis by Neighborhood (2026)",
    description:
      "The best coffee shops in Minneapolis, organized by neighborhood — local chains, true independents, and the best spots to work or linger.",
    category: "Food & Drink",
  },
  {
    slug: "best-patios-outdoor-dining",
    title: "Best Patios and Outdoor Dining in Minneapolis (2026)",
    description:
      "The best patios in Minneapolis by neighborhood — because the short summer makes every outdoor seat sacred.",
    category: "Food & Drink",
  },
  {
    slug: "best-neighborhoods-for-nightlife",
    title: "Best Neighborhoods for Nightlife in Minneapolis (2026)",
    description:
      "Where to go out in Minneapolis — the neighborhoods with the best bars, live music, and late-night scenes, honestly assessed.",
    category: "Food & Drink",
  },
  // Outdoors & Seasons
  {
    slug: "best-parks-by-neighborhood",
    title: "Best Parks in Minneapolis by Neighborhood (2026)",
    description:
      "The best parks in Minneapolis, organized by neighborhood — lakes, trails, playgrounds, and the green spaces that define each area.",
    category: "Outdoors & Seasons",
  },
  {
    slug: "best-winter-neighborhoods",
    title: "Best Neighborhoods for Surviving (and Enjoying) Winter in Minneapolis (2026)",
    description:
      "The best Minneapolis neighborhoods for winter — skyway access, plowing, indoor amenities, and the neighborhoods that actually embrace the cold.",
    category: "Outdoors & Seasons",
  },
  // Culture & History
  {
    slug: "history-of-minneapolis-neighborhood-signs",
    title: "The History of Minneapolis Neighborhood Signs",
    description:
      "How Minneapolis became one of the only American cities where every neighborhood has its own sign — the civic history behind 87 distinct markers.",
    category: "Culture & History",
  },
];

export default function GuidesPage() {
  return (
    <main className="flex-1 bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          From MPLS With Love
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-6 leading-[0.95]">
          Guides
        </h1>
        <p className="text-lg text-[#71717a] leading-relaxed font-light mb-14 max-w-2xl">
          Curated, cross-neighborhood guides to help you understand Minneapolis
          — whether you&apos;re moving here, exploring, or just curious about
          what makes this city work.
        </p>

        <div className="space-y-8">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block group border-b border-[#e4e4e7] pb-8"
            >
              <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-2">
                {guide.category}
              </p>
              <h2 className="text-xl font-bold text-[#0a0a0a] group-hover:text-[#2a9d8f] transition-colors mb-2">
                {guide.title}
              </h2>
              <p className="text-[15px] text-[#71717a] leading-relaxed">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#f5f5f5] p-8">
          <h2 className="text-lg font-bold text-[#0a0a0a] mb-2">
            Looking for a specific neighborhood?
          </h2>
          <p className="text-[15px] text-[#71717a] mb-4">
            We write in-depth guides to individual Minneapolis neighborhoods —
            history, restaurants, real estate, schools, and the honest version.
          </p>
          <Link
            href="/neighborhoods"
            className="text-[#2a9d8f] font-semibold text-sm hover:underline"
          >
            Browse all neighborhood guides →
          </Link>
        </div>
      </div>
    </main>
  );
}
