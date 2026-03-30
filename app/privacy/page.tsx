import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for From MPLS With Love.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Legal
        </p>
        <h1 className="text-5xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-6 leading-[0.95]">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-[#71717a] leading-relaxed font-light">
          <p className="text-sm">Last updated: March 2026</p>

          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-2 border-b border-[#0a0a0a] !mt-10">
            What We Collect
          </h2>
          <p>
            When you subscribe to our newsletter, we collect your email
            address. When you make a purchase, we collect the information
            necessary to fulfill your order (name, shipping address, payment
            details). Payment processing is handled by our payment provider
            — we do not store credit card numbers.
          </p>

          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-2 border-b border-[#0a0a0a] !mt-10">
            How We Use It
          </h2>
          <p>
            Your email address is used solely to send you the content you
            signed up for — neighborhood guides, updates, and occasional
            product announcements. We do not sell, rent, or share your
            personal information with third parties for marketing purposes.
          </p>

          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-2 border-b border-[#0a0a0a] !mt-10">
            Analytics
          </h2>
          <p>
            We use privacy-respecting analytics to understand how visitors
            use our site. We do not use cookies for tracking, and we do not
            collect personally identifiable information through analytics.
          </p>

          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-2 border-b border-[#0a0a0a] !mt-10">
            Third-Party Services
          </h2>
          <p>
            Our site uses Mapbox for interactive maps. Mapbox may collect
            usage data subject to their own privacy policy. Our site is
            hosted on Vercel, which may collect standard server logs.
          </p>

          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-2 border-b border-[#0a0a0a] !mt-10">
            Your Rights
          </h2>
          <p>
            You can unsubscribe from our newsletter at any time using the
            link in any email. If you would like your data deleted, contact
            us and we will remove it promptly.
          </p>

          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-2 border-b border-[#0a0a0a] !mt-10">
            Contact
          </h2>
          <p>
            Questions about this policy? Reach us at{" "}
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
