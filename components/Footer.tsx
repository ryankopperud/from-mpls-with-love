import Link from "next/link";
import Image from "next/image";

const EXPLORE_LINKS = [
  { href: "/map", label: "Interactive Map" },
  { href: "/neighborhoods", label: "All Neighborhoods" },
  { href: "/guides", label: "Guides" },
];

const ABOUT_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="bg-[#264653] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-white.png"
                alt="From MPLS With Love"
                width={200}
                height={200}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed font-light max-w-xs">
              The most in-depth guide to every neighborhood in Minneapolis
              — written with the honesty this city deserves.
            </p>
          </div>

          {/* Explore column */}
          <div>
            <h3 className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-white/40 mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About column */}
          <div>
            <h3 className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-white/40 mb-5">
              About
            </h3>
            <ul className="space-y-3">
              {ABOUT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter column */}
          <div>
            <h3 className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-white/40 mb-5">
              Stay Updated
            </h3>
            <p className="text-sm text-white/60 font-light mb-4">
              Get new neighborhood guides in your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="you@email.com"
                required
                className="flex-1 min-w-0 bg-white/10 border border-white/20 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#2a9d8f] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#2a9d8f] text-white px-4 py-2 text-[0.7rem] font-semibold tracking-[0.1em] uppercase hover:bg-[#238b7e] transition-colors shrink-0"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[0.7rem] text-white/40 font-light">
            &copy; {new Date().getFullYear()} From MPLS With Love. Made in
            Minneapolis.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[0.7rem] text-white/40 hover:text-white/70 transition-colors font-light"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[0.7rem] text-white/40 hover:text-white/70 transition-colors font-light"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
