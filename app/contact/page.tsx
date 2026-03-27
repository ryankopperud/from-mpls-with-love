import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with From MPLS With Love — questions, corrections, partnerships, or just to say hi.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Get in Touch
        </p>
        <h1 className="text-5xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-6 leading-[0.95]">
          Contact
        </h1>
        <p className="text-lg text-[#71717a] font-light leading-relaxed mb-12 max-w-xl">
          Have a question, a correction, a partnership idea, or just want to tell
          us about your neighborhood? We read everything.
        </p>

        <form
          action="https://formspree.io/f/xpwdqkjl"
          method="POST"
          className="space-y-6 max-w-xl"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#0a0a0a] mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-[#e4e4e7] px-4 py-3 text-sm text-[#0a0a0a] focus:outline-none focus:border-[#2a9d8f] transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#0a0a0a] mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-[#e4e4e7] px-4 py-3 text-sm text-[#0a0a0a] focus:outline-none focus:border-[#2a9d8f] transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#0a0a0a] mb-2"
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full border border-[#e4e4e7] px-4 py-3 text-sm text-[#0a0a0a] focus:outline-none focus:border-[#2a9d8f] transition-colors bg-white"
            >
              <option value="">Select a topic</option>
              <option value="correction">Correction or update</option>
              <option value="question">General question</option>
              <option value="partnership">Partnership or advertising</option>
              <option value="press">Press inquiry</option>
              <option value="other">Something else</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#0a0a0a] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full border border-[#e4e4e7] px-4 py-3 text-sm text-[#0a0a0a] focus:outline-none focus:border-[#2a9d8f] transition-colors resize-vertical"
              placeholder="What's on your mind?"
            />
          </div>

          <button
            type="submit"
            className="bg-[#2a9d8f] text-white px-8 py-4 text-[0.75rem] font-semibold tracking-[0.15em] uppercase hover:bg-[#264653] transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-16 pt-12 border-t border-[#e4e4e7]">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] mb-4">
            Other Ways to Reach Us
          </h2>
          <p className="text-sm text-[#71717a] leading-relaxed">
            Email directly:{" "}
            <a
              href="mailto:hello@mplswithlove.com"
              className="text-[#2a9d8f] hover:underline"
            >
              hello@mplswithlove.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
