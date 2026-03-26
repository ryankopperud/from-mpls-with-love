import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | From MPLS With Love",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="flex-1 bg-white flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 py-24 text-center">
        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          404
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-6 leading-[0.95]">
          Page Not Found
        </h1>
        <p className="text-lg text-[#71717a] font-light leading-relaxed mb-10 max-w-md mx-auto">
          This page doesn&apos;t exist — but there are 87 neighborhoods
          in Minneapolis waiting to be explored.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/map"
            className="inline-flex items-center justify-center gap-3 bg-[#2a9d8f] text-white px-8 py-4 text-[0.75rem] font-semibold tracking-[0.15em] uppercase hover:bg-[#264653] transition-colors"
          >
            Explore the Map
          </Link>
          <Link
            href="/neighborhoods"
            className="inline-flex items-center justify-center px-8 py-4 text-[0.75rem] font-semibold tracking-[0.15em] uppercase border border-[#e4e4e7] text-[#0a0a0a] hover:border-[#0a0a0a] transition-colors"
          >
            All Neighborhoods
          </Link>
        </div>
      </div>
    </main>
  );
}
