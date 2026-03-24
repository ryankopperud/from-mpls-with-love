import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From MPLS With Love",
  description:
    "Explore every neighborhood in Minneapolis. An interactive guide to the City of Lakes.",
};

export default function Home() {
  return (
    <div className="flex-1 bg-white">
      <main className="max-w-7xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-6">
            Minneapolis Neighborhood Guide
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.9] tracking-[-0.03em] text-[#0a0a0a] mb-8">
            From MPLS<br />
            With Love
          </h1>
          <p className="text-lg text-[#71717a] max-w-lg leading-relaxed mb-12 font-light">
            An interactive guide to all 87 neighborhoods in Minneapolis.
            Discover what makes each corner of the city unique.
          </p>
          <div className="flex gap-4">
            <Link
              href="/map"
              className="inline-flex items-center gap-3 bg-[#2a9d8f] text-white px-8 py-4 text-[0.75rem] font-semibold tracking-[0.15em] uppercase hover:bg-[#264653] transition-colors"
            >
              Explore the Map
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/neighborhoods"
              className="inline-flex items-center px-8 py-4 text-[0.75rem] font-semibold tracking-[0.15em] uppercase border border-[#e4e4e7] text-[#0a0a0a] hover:border-[#0a0a0a] transition-colors"
            >
              All Neighborhoods
            </Link>
          </div>
        </div>
        <div className="relative h-[500px] w-full grayscale">
          <Image
            src="/mpls-aerial.jpg"
            alt="Aerial view of downtown Minneapolis"
            fill
            className="object-cover"
            priority
          />
        </div>
      </main>
    </div>
  );
}
