"use client";

interface PlaceCard {
  name: string;
  tag: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface TocItem {
  id: string;
  label: string;
}

interface PullQuote {
  text: string;
  cite: string;
}

// ── Sub-components ──

function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav
      aria-label="Table of contents"
      className="border-l-2 border-[#2a9d8f] pl-6 my-14"
    >
      <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
        In this guide
      </p>
      <ol className="list-decimal list-inside space-y-1.5">
        {items.map((item) => (
          <li
            key={item.id}
            className="text-sm text-[#71717a] marker:text-[#2a9d8f] marker:font-bold"
          >
            <a
              href={`#${item.id}`}
              className="hover:text-[#0a0a0a] transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function StatsBox({ label, stats }: { label: string; stats: Stat[] }) {
  return (
    <div className="bg-[#0a0a0a] text-white px-8 py-8 my-10">
      <p className="text-[0.6rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-6">
        {label}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="border-l-2 border-[#2a9d8f] pl-4">
            <span className="text-2xl font-black leading-none block">
              {s.value}
            </span>
            <span className="text-[0.75rem] text-[#71717a] mt-1.5 block">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlaceCardComponent({ place }: { place: PlaceCard }) {
  return (
    <div className="border-t border-[#e4e4e7] pt-4 pb-5">
      <div className="flex items-center gap-3 flex-wrap">
        <strong className="text-base font-bold text-[#0a0a0a]">
          {place.name}
        </strong>
        <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-[#2a9d8f]">
          {place.tag}
        </span>
      </div>
      <p className="text-sm text-[#71717a] mt-2 leading-relaxed font-light">
        {place.description}
      </p>
    </div>
  );
}

function Quote({ text, cite }: PullQuote) {
  return (
    <blockquote className="border-l-2 border-[#2a9d8f] pl-6 my-10">
      <p className="text-lg italic text-[#0a0a0a] leading-relaxed font-light">
        &ldquo;{text}&rdquo;
      </p>
      <cite className="not-italic text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#71717a] mt-3 block">
        {cite}
      </cite>
    </blockquote>
  );
}

function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <div
          key={i}
          className={`py-6 ${i < items.length - 1 ? "border-b border-[#e4e4e7]" : ""}`}
        >
          <h3 className="text-base font-bold text-[#0a0a0a] mb-2">
            {item.question}
          </h3>
          <p className="text-sm text-[#71717a] leading-relaxed font-light">
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
}

// ── Exports ──

export { TableOfContents, StatsBox, PlaceCardComponent, Quote, FaqSection };

export function ArticleHeader({
  kicker,
  headline,
  deck,
  lastUpdated,
}: {
  kicker: string;
  headline: string;
  deck: string;
  lastUpdated: string;
}) {
  return (
    <header className="mb-14">
      <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-5">
        {kicker}
      </p>
      <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-[-0.03em] text-[#0a0a0a] leading-[0.95] mb-6">
        {headline}
      </h1>
      <p className="text-lg text-[#71717a] max-w-2xl leading-relaxed font-light mb-6">
        {deck}
      </p>
      <p className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-[#71717a] pt-5 border-t border-[#e4e4e7]">
        {lastUpdated}
      </p>
    </header>
  );
}

export function ArticleSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-16 scroll-mt-20">
      <h2 className="text-2xl sm:text-3xl font-black tracking-[-0.02em] text-[#0a0a0a] pb-3 mb-6 border-b-2 border-[#2a9d8f]">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function ArticleSubsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <h3 className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function ClosingSection({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="bg-[#264653] text-white px-8 py-10 mt-16">
      <h2 className="text-2xl font-black tracking-[-0.02em] mb-5 pb-4 border-b border-white/20">
        {title}
      </h2>
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-white/85 leading-relaxed font-light mb-5 last:mb-0"
        >
          {p}
        </p>
      ))}
    </div>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[#71717a] leading-[1.8] space-y-5 font-light">
      {children}
    </div>
  );
}
