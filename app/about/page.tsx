import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind From MPLS With Love — why we are building the most in-depth guide to every neighborhood in Minneapolis.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          About
        </p>
        <h1 className="text-5xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-6 leading-[0.95]">
          The Story
        </h1>

        <div className="space-y-6 text-[#71717a] leading-relaxed font-light text-lg">
          <p>
            Minneapolis is one of the few American cities where every
            neighborhood has its own sign — a physical, designed marker planted
            in the ground that says{" "}
            <em>this place has a name, and it matters.</em> There are 87 of
            them.
          </p>

          <p>
            From MPLS With Love started as a project to document those signs and
            the neighborhoods they represent. It became something more: the most
            in-depth guide to every corner of the city, written with the honesty
            and specificity that residents deserve and newcomers desperately
            need.
          </p>

          <p>
            Most neighborhood content online reads like a real estate brochure —
            all charm, no substance. We take a different approach. Our guides
            address the beauty <em>and</em> the tensions. The walkability scores{" "}
            <em>and</em> the crime statistics. The beloved local restaurants{" "}
            <em>and</em> the gentrification pressures. Because the people who
            actually live in these neighborhoods — or are considering moving to
            them — deserve the full picture.
          </p>

          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-2 border-b border-[#0a0a0a] !mt-14">
            What We Believe
          </h2>

          <p>
            <strong className="text-[#0a0a0a] font-semibold">
              Your neighborhood is your identity within the city.
            </strong>{" "}
            It shapes how you experience Minneapolis — the parks you walk, the
            restaurants you frequent, the people you know, the tensions you
            navigate. That identity deserves to be understood, celebrated, and —
            if you want — hung on your wall.
          </p>

          <p>
            <strong className="text-[#0a0a0a] font-semibold">
              Honesty builds trust.
            </strong>{" "}
            Every neighborhood has problems. We name them. Not to be cynical,
            but because a guide that only tells you the good parts is not a
            guide — it is an ad.
          </p>

          <p>
            <strong className="text-[#0a0a0a] font-semibold">
              Every neighborhood matters.
            </strong>{" "}
            Not just the ones that local media covers. Not just the ones with
            trendy restaurants. All 87 — including the industrial districts, the
            less photogenic corners, and the neighborhoods where the story is
            harder to tell.
          </p>

          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-2 border-b border-[#0a0a0a] !mt-14">
            What We&apos;re Building
          </h2>

          <p>
            An in-depth, honest guide to every one of Minneapolis&apos;s 87
            neighborhoods — plus an{" "}
            <Link
              href="/map"
              className="text-[#2a9d8f] underline underline-offset-2 hover:text-[#264653] transition-colors"
            >
              interactive map
            </Link>
            , original neighborhood sign photography, and sign-inspired art you
            can take home. We publish new neighborhood guides regularly and will
            not stop until all 87 are complete.
          </p>

          <div className="bg-[#f5f5f5] px-8 py-8 !mt-12">
            <p className="text-[#0a0a0a] text-base font-normal leading-relaxed">
              Have a correction, a suggestion, or a story about your
              neighborhood? We want to hear it.{" "}
              <Link
                href="/contact"
                className="text-[#2a9d8f] underline underline-offset-2 hover:text-[#264653] transition-colors"
              >
                Get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
