import type { Metadata } from "next";
import Link from "next/link";
import { COMMUNITIES } from "@/lib/communities";
import { slugify } from "@/lib/neighborhoods";

export const metadata: Metadata = {
  title: "All Neighborhoods | From MPLS With Love",
  description:
    "Browse all 87 Minneapolis neighborhoods organized by their 11 communities.",
};

export default function NeighborhoodsPage() {
  return (
    <main className="flex-1 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis
        </p>
        <h1 className="text-5xl sm:text-6xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-2 leading-[0.95]">
          Neighborhoods
        </h1>
        <p className="text-[#71717a] text-base font-light mb-16">
          87 neighborhoods across 11 communities
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-14">
          {COMMUNITIES.map((community) => (
            <div key={community.name}>
              <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-4 border-b border-[#0a0a0a]">
                {community.name}
              </h2>
              <ul className="space-y-2">
                {community.neighborhoods.map((name) => (
                  <li key={name}>
                    <Link
                      href={`/neighborhoods/${slugify(name)}`}
                      className="text-sm text-[#71717a] hover:text-[#2a9d8f] transition-colors"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
