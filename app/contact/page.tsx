import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | From MPLS With Love",
  description: "Get in touch with From MPLS With Love.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Get in touch
        </p>
        <h1 className="text-5xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-6 leading-[0.95]">
          Contact
        </h1>
        <p className="text-lg text-[#71717a] font-light leading-relaxed">
          Coming soon.
        </p>
      </div>
    </main>
  );
}
