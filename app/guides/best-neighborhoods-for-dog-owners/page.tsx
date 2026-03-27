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
  title: "Best Neighborhoods for Dog Owners in Minneapolis (2026)",
  description:
    "The best Minneapolis neighborhoods for dogs — ranked by off-leash parks, trail access, walkability, pet-friendly businesses, and vet proximity. Real dog parks, honest assessments.",
  openGraph: {
    title: "Best Neighborhoods for Dog Owners in Minneapolis (2026)",
    description:
      "The best Minneapolis neighborhoods for dog owners — off-leash parks, trails, pet-friendly spots, and honest assessments of canine livability.",
    url: `${BASE_URL}/guides/best-neighborhoods-for-dog-owners`,
    type: "article",
  },
};

const neighborhoods = [
  {
    rank: 1,
    name: "Nokomis",
    slug: "nokomis",
    dogParks: "Minnehaha Off-Leash Dog Park",
    trailAccess: "Minnehaha Parkway, Lake Nokomis loop",
    walkScore: 70,
    petFriendly: "High",
    vetProximity: "Multiple within 10 min",
    honest:
      "Nokomis takes the top spot because of the Minnehaha Off-Leash Dog Park — 7 acres of fenced, off-leash space along Minnehaha Creek that is widely considered the best dog park in Minneapolis. The park has separate areas for large and small dogs, creek access for water-loving dogs, wooded trails, and open fields. Beyond the dog park, the Lake Nokomis loop trail and Minnehaha Parkway provide miles of on-leash walking along water. The neighborhood itself is residential and dog-dense — you'll see more dogs per block than almost anywhere in the city. Multiple veterinary clinics are nearby, and the 50th Street corridor has pet-friendly patios. The tradeoff: the off-leash park gets crowded on summer evenings and weekends, and the parking lot fills up. If you live in the neighborhood and can walk there, you avoid both problems. That's the real advantage of living in Nokomis with a dog — the best dog park in the city is your neighborhood park.",
  },
  {
    rank: 2,
    name: "Longfellow",
    slug: "longfellow",
    dogParks: "Minnehaha Off-Leash Dog Park (adjacent), Minnehaha Falls Park",
    trailAccess: "Minnehaha Falls, Midtown Greenway, river trails",
    walkScore: 73,
    petFriendly: "High",
    vetProximity: "Multiple within 10 min",
    honest:
      "Longfellow shares access to the Minnehaha Off-Leash Dog Park with Nokomis and adds the extraordinary Minnehaha Falls Park — 193 acres of trails, river bluffs, and wooded paths that are on-leash but provide the most scenic dog-walking in the city. The Minnehaha Falls trail down to the Mississippi confluence is a legitimate natural wonder, and doing it with your dog on a fall morning is one of the best experiences in Minneapolis. The Midtown Greenway provides flat, paved walking and biking with your dog. The tradeoff: Longfellow is a big neighborhood, and the dog infrastructure is concentrated on its eastern edge. If you live in western Longfellow near Minnehaha Avenue, the off-leash park is a 15-20 minute walk. Target the blocks east of 28th Avenue for the best dog-owner experience. The Lake Street corridor has several pet-friendly patios and a couple of pet supply stores.",
  },
  {
    rank: 3,
    name: "Linden Hills",
    slug: "linden-hills",
    dogParks: "Linden Hills Park (off-leash area)",
    trailAccess: "Lake Harriet loop, William Berry Park trails",
    walkScore: 78,
    petFriendly: "Very High",
    vetProximity: "Linden Hills Animal Clinic in neighborhood",
    honest:
      "Linden Hills is the most dog-integrated neighborhood in Minneapolis. Dogs are everywhere — on the village commercial strip, on the Lake Harriet trails, in the yards of the Craftsman bungalows. The Linden Hills off-leash area in the park provides neighborhood-scale off-leash space. Lake Harriet's 2.7-mile loop trail is one of the best on-leash walks in the city, and the William Berry Park trails connecting to Bde Maka Ska add variety. The commercial strip is actively dog-friendly — water bowls outside shops, dogs tied up while owners grab coffee at Sebastian Joe's, a veterinary clinic right in the neighborhood. The tradeoff: the off-leash area is small compared to Minnehaha and can feel crowded. Linden Hills is a better neighborhood for dogs who are well-socialized and leash-trained, not for dogs who need space to run. The home prices ($625K-$850K) mean you're paying a significant premium for the dog-friendly lifestyle. But if your dog is your daily walking companion and you want a neighborhood where that's the norm, not the exception, Linden Hills is hard to beat.",
  },
  {
    rank: 4,
    name: "Fulton",
    slug: "fulton",
    dogParks: "Closest: Linden Hills off-leash area",
    trailAccess: "Lake Harriet loop, Minnehaha Creek trail",
    walkScore: 70,
    petFriendly: "High",
    vetProximity: "Within 10 min drive",
    honest:
      "Fulton is a dog neighborhood by default — wide sidewalks, deep yards, low traffic, and a culture of evening walks. The neighborhood doesn't have its own off-leash park, but the Linden Hills off-leash area is adjacent, and Lake Harriet's trails are walkable from the eastern blocks. Minnehaha Creek runs through the southern edge of the neighborhood, providing a pleasant creek-side walking corridor. The yards in Fulton are large by Minneapolis standards — many have full fences, which matters if your dog needs a private outdoor space. The tradeoff: Fulton lacks the commercial pet infrastructure of Linden Hills or Nokomis — no pet stores, no vet clinics within the neighborhood itself. The walking is pleasant but repetitive; the residential streets are beautiful but uniform. For dogs (and owners) who value yard space, quiet walks, and a low-stimulation environment, Fulton is excellent. For high-energy dogs who need miles of trail and off-leash acreage, look at Nokomis or Longfellow.",
  },
  {
    rank: 5,
    name: "South Uptown",
    slug: "south-uptown",
    dogParks: "Bde Maka Ska off-leash area (seasonal)",
    trailAccess: "Bde Maka Ska loop, Midtown Greenway, Chain of Lakes",
    walkScore: 82,
    petFriendly: "High",
    vetProximity: "Multiple within 10 min",
    honest:
      "South Uptown offers dog owners the combination of lake trails and urban walkability. The Bde Maka Ska loop trail is a 3.1-mile on-leash walk that's one of the most popular dog-walking routes in the city — you'll see dozens of dogs on any temperate evening. The seasonal off-leash area near the lake provides morning and evening off-leash access. The Midtown Greenway is another excellent on-leash corridor. The Lyn-Lake commercial area has several pet-friendly patios, and the density of the neighborhood means your dog gets socialization just by walking down the street. The tradeoff: apartment and condo living is the norm in South Uptown, which means breed and size restrictions are common. Many buildings cap at 50 lbs or restrict certain breeds. If you're renting with a large dog, your options narrow significantly. The off-leash area is popular enough to feel crowded, and the lake trails are shared with runners, cyclists, and rollerbladers. South Uptown is the best choice for urban dog owners who want their dog integrated into a walkable, social lifestyle.",
  },
  {
    rank: 6,
    name: "Bryn Mawr",
    slug: "bryn-mawr",
    dogParks: "Theodore Wirth Off-Leash Dog Park",
    trailAccess: "Theodore Wirth Park trails, Cedar Lake trails",
    walkScore: 58,
    petFriendly: "Moderate",
    vetProximity: "Within 10-15 min drive",
    honest:
      "Bryn Mawr is the choice for dog owners who want their dog to have a genuine outdoor life — not just a walk around the block but real trail time in real nature. Theodore Wirth Park's off-leash dog area is large, wooded, and connected to a trail system that spans 759 acres. Your dog can run through woods, splash in Wirth Lake, and experience terrain variety that no fenced city dog park can match. Cedar Lake trails are also accessible from the neighborhood. In winter, the cross-country ski trails become snowshoeing paths, and dogs in the off-leash area get to run through actual snow-covered forest. The tradeoff: Bryn Mawr's walkability is low. You're not walking to coffee shops and pet stores; you're driving for most errands. The pet-friendly commercial infrastructure is minimal. And the off-leash area in Theodore Wirth is unfenced in many sections, which requires a dog with reliable recall. Bryn Mawr is the best neighborhood for adventurous dogs and owners who prioritize nature over urban convenience.",
  },
  {
    rank: 7,
    name: "Powderhorn Park",
    slug: "powderhorn-park",
    dogParks: "Powderhorn Park off-leash area",
    trailAccess: "Powderhorn Lake loop, Midtown Greenway",
    walkScore: 76,
    petFriendly: "Moderate-High",
    vetProximity: "Multiple within 10 min",
    honest:
      "Powderhorn Park has a dedicated off-leash dog area adjacent to the lake, and the Powderhorn Lake loop provides a pleasant 1-mile on-leash walk. The neighborhood's strong community culture extends to dog owners — you'll quickly get to know the regulars at the off-leash area, and the park functions as a genuine social hub. The Midtown Greenway is accessible for longer walks, and Lake Street's commercial corridor has pet supply stores and vet clinics. Rental housing is affordable and relatively dog-friendly compared to the newer buildings in Uptown. The tradeoff: the off-leash area is small and can get muddy. The park experienced significant challenges in 2020-2021, and while it's recovered, some dog owners still feel uneasy using it at off-peak hours. Crime in the surrounding blocks is higher than in the southwest neighborhoods. For dog owners who value community, diversity, and affordability over pristine park conditions, Powderhorn is a solid, honest choice.",
  },
  {
    rank: 8,
    name: "Logan Park",
    slug: "logan-park",
    dogParks: "Northeast Park off-leash area",
    trailAccess: "Mississippi riverfront trails, Central Ave corridor",
    walkScore: 72,
    petFriendly: "High",
    vetProximity: "Northeast Animal Hospital nearby",
    honest:
      "Northeast Minneapolis is one of the most dog-friendly cultures in the city, and Logan Park sits at its center. The Northeast Park off-leash area provides a neighborhood gathering spot for dog owners, and the Mississippi riverfront trails offer scenic on-leash walking along the bluffs. The brewery district — Indeed, Bauhaus, Fair State — is famously dog-friendly, with outdoor patios that welcome well-behaved dogs and even dog-specific events. Central Avenue has pet supply stores and the beloved Northeast Animal Hospital. The tradeoff: the off-leash area is modest in size, and the riverfront trails can be icy and treacherous in winter. The neighborhood is more urban-industrial than the parkland neighborhoods like Nokomis or Bryn Mawr, so your daily walks are through city streets rather than nature trails. For dog owners who want their social life and their dog life to overlap — brewery patios, Art-A-Whirl, neighborhood block parties — Logan Park is the pick.",
  },
  {
    rank: 9,
    name: "Seward",
    slug: "seward",
    dogParks: "Matthews Park off-leash area",
    trailAccess: "West River Parkway, Mississippi River gorge trails",
    walkScore: 80,
    petFriendly: "Moderate-High",
    vetProximity: "Within 10 min",
    honest:
      "Seward's dog-owner appeal is built on the Mississippi River gorge trail system — dramatic bluff-top paths through old-growth forest that provide the most visually stunning on-leash walks in Minneapolis. The West River Parkway trail is a flat, paved option for easier walks. Matthews Park has a small off-leash area for neighborhood use. The Seward Co-op's friendly culture extends to dog owners, and the neighborhood's residential streets are pleasant for daily walks. The tradeoff: the off-leash area is small and basic. The river gorge trails involve significant elevation changes that aren't suitable for all dogs or all owners. The neighborhood's commercial options for pet services are limited — you're going to Longfellow or South Minneapolis for pet stores and groomers. Seward is best for dog owners who prioritize quality of walking terrain over off-leash acreage.",
  },
  {
    rank: 10,
    name: "Whittier",
    slug: "whittier",
    dogParks: "Closest: Stevens Square Park, Peavey Park",
    trailAccess: "Midtown Greenway, Lyndale Ave corridor",
    walkScore: 93,
    petFriendly: "Moderate",
    vetProximity: "Multiple within 5-10 min",
    honest:
      "Whittier makes this list not for off-leash parks or nature trails — it has neither in abundance — but for the density of pet-friendly businesses and the walkability that makes dog ownership easy in daily logistics. Multiple vet clinics, pet supply stores, and pet-friendly restaurant patios are within walking distance. The Midtown Greenway provides a car-free walking corridor. The neighborhood's high density means your dog gets constant socialization just from daily walks. Several apartment buildings in Whittier are actively dog-friendly with no breed or size restrictions. The tradeoff: Whittier lacks the green space and trail access of the park-adjacent neighborhoods. Your daily walk is on city sidewalks, not nature paths. The closest off-leash options are small and basic. For owners of small or medium dogs who live in apartments and want urban convenience — vet down the street, pet store around the corner, multiple walking routes — Whittier works. For large, high-energy dogs who need to run, look at Nokomis, Longfellow, or Bryn Mawr.",
  },
];

export default function DogOwnersPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Best Neighborhoods for Dog Owners in Minneapolis (2026)",
      description:
        "The best Minneapolis neighborhoods for dog owners — ranked by off-leash parks, trail access, walkability, pet-friendly businesses, and vet proximity.",
      url: `${BASE_URL}/guides/best-neighborhoods-for-dog-owners`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Guides", url: `${BASE_URL}/guides` },
      {
        name: "Best Neighborhoods for Dog Owners",
        url: `${BASE_URL}/guides/best-neighborhoods-for-dog-owners`,
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
            src="/images/lifestyle/french-bulldog-stone-arch-bridge.webp"
            alt="French Bulldog on the Stone Arch Bridge in Minneapolis"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Best Neighborhoods for Dog Owners
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Minneapolis is one of the best dog cities in America &mdash; 180+
            parks, an extensive trail system, a culture that treats dogs as
            family members, and winters that prove your commitment. But the
            dog-ownership experience varies enormously by neighborhood. Here
            are the 10 best neighborhoods for living with a dog, ranked by
            what actually matters: off-leash space, trail quality, daily
            walkability, and the infrastructure that makes dog life easier.
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
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                    <div className="sm:col-span-2">
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Off-Leash Parks
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.dogParks}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Walk Score
                      </p>
                      <p className="text-2xl font-black text-[#0a0a0a]">
                        {n.walkScore}
                      </p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Trail Access
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.trailAccess}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#71717a]">
                        Pet-Friendly Biz
                      </p>
                      <p className="text-sm font-bold text-[#0a0a0a]">
                        {n.petFriendly}
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
            Winter Dog Ownership in Minneapolis
          </h2>
          <p className="text-[15px] text-[#71717a] leading-relaxed">
            Minneapolis dogs are winter dogs. From December through March,
            daily walks happen in sub-zero wind chills, on icy sidewalks, in
            the dark. The off-leash parks get less use but don&apos;t close.
            The lake trails get plowed. Many dogs love it &mdash; labs, huskies,
            and shepherds thrive in Minneapolis winters. Short-coated and small
            breeds need coats and booties, and their walks get shorter. Factor
            winter into your neighborhood choice: a neighborhood with a large
            off-leash park nearby matters more when the sun sets at 4:30 PM
            and your dog still needs to run.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#264653] text-white p-10">
          <h2 className="text-2xl font-black mb-4">
            Find Your Neighborhood
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Looking for a neighborhood that fits more than just your dog?
            Our guides cover walkability, bikeability, lake access, and
            overall livability for every part of Minneapolis.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/best-neighborhoods"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Best Neighborhoods Overall
            </Link>
            <Link
              href="/guides/best-neighborhoods-near-the-lakes"
              className="border border-white/30 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Best Neighborhoods Near the Lakes
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
