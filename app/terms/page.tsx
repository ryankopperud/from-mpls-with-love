import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for From MPLS With Love.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="flex-1 bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Legal
        </p>
        <h1 className="text-5xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-6 leading-[0.95]">
          Terms of Service
        </h1>

        <div className="space-y-6 text-[#71717a] leading-relaxed font-light">
          <p className="text-sm">Last updated: March 2026</p>

          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-2 border-b border-[#0a0a0a] !mt-10">
            Use of This Site
          </h2>
          <p>
            From MPLS With Love provides neighborhood guides, maps, and
            related content for informational purposes. While we strive for
            accuracy, neighborhood details — including pricing, business
            hours, and local conditions — change over time. We encourage
            you to verify critical information independently.
          </p>

          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-2 border-b border-[#0a0a0a] !mt-10">
            Content Ownership
          </h2>
          <p>
            All written content, photography, illustrations, and design
            elements on this site are the property of From MPLS With Love
            unless otherwise noted. You may not reproduce, distribute, or
            use our content for commercial purposes without written
            permission.
          </p>

          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-2 border-b border-[#0a0a0a] !mt-10">
            Purchases
          </h2>
          <p>
            When you purchase products from our store, you agree to provide
            accurate shipping and payment information. All sales are subject
            to our shipping and returns policy. Prices are listed in US
            dollars and are subject to change without notice.
          </p>

          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-2 border-b border-[#0a0a0a] !mt-10">
            User Submissions
          </h2>
          <p>
            If you submit corrections, suggestions, or content (such as
            neighborhood stories or photographs), you grant us a
            non-exclusive, royalty-free license to use, modify, and publish
            that content in connection with From MPLS With Love.
          </p>

          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-2 border-b border-[#0a0a0a] !mt-10">
            Limitation of Liability
          </h2>
          <p>
            From MPLS With Love is provided &ldquo;as is.&rdquo; We are not
            liable for any decisions made based on the information on this
            site, including but not limited to real estate, relocation, or
            safety decisions.
          </p>

          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-2 border-b border-[#0a0a0a] !mt-10">
            Contact
          </h2>
          <p>
            Questions about these terms? Reach us at{" "}
            <a
              href="mailto:hello@mplswithlove.com"
              className="text-[#2a9d8f] underline underline-offset-2 hover:text-[#264653] transition-colors"
            >
              hello@mplswithlove.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
