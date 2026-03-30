import type { Metadata } from "next";
import Link from "next/link";
import { COMMUNITIES } from "@/lib/communities";
import { slugify } from "@/lib/neighborhoods";

export const metadata: Metadata = {
  title: "Communities | From MPLS With Love",
  description:
    "Explore the 11 community areas that organize Minneapolis's 87 neighborhoods — from the Chain of Lakes to the Mississippi riverfront.",
  alternates: {
    canonical: "/communities",
  },
};

const COMMUNITY_BRIEFS: Record<string, string> = {
  "Bde Maka Ska-Isles":
    "The Chain of Lakes district — Minneapolis's most coveted lakeside residential geography.",
  Camden:
    "Far north Minneapolis along the Mississippi — working-class, diverse, and affordable.",
  Central:
    "Downtown and its immediate surroundings — the commercial and cultural core of the city.",
  Longfellow:
    "Southeast Minneapolis along the river — Minnehaha Falls, the Greenway, and deep community roots.",
  "Near North":
    "North Minneapolis — historically Black community with deep cultural roots and ongoing reinvestment.",
  Nokomis:
    "South Minneapolis lake neighborhoods — family-oriented, diverse, and more affordable than the southwest.",
  Northeast:
    "The arts and brewery district across the river — creative, independent, and culturally rich.",
  Phillips:
    "The most diverse square mile in the Midwest — immigrant communities, activism, and resilience.",
  Powderhorn:
    "South Minneapolis's cultural heart — politically engaged, diverse, and fiercely community-oriented.",
  Southwest:
    "Tree-lined streets, strong schools, and lake access — Minneapolis's family neighborhood core.",
  University:
    "The university district and surrounding neighborhoods — student energy, river bluffs, and Cedar-Riverside.",
};

export default function CommunitiesPage() {
  return (
    <main className="flex-1 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis
        </p>
        <h1 className="text-5xl sm:text-6xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-2 leading-[0.95]">
          Communities
        </h1>
        <p className="text-[#71717a] text-base font-light mb-16">
          11 community areas organizing 87 neighborhoods
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMUNITIES.map((community) => (
            <Link
              key={community.name}
              href={`/communities/${slugify(community.name)}`}
              className="group border border-[#e4e4e7] p-6 hover:border-[#2a9d8f] transition-colors"
            >
              <h2 className="text-lg font-black tracking-[-0.02em] text-[#0a0a0a] group-hover:text-[#2a9d8f] transition-colors mb-1">
                {community.name}
              </h2>
              <p className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-[#71717a] mb-3">
                {community.neighborhoods.length} neighborhoods
              </p>
              <p className="text-sm text-[#71717a] leading-relaxed font-light">
                {COMMUNITY_BRIEFS[community.name]}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
