"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PlaceCard {
  name: string;
  tag: string;
  description: string;
  price?: string;
  url?: string;
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
        {place.url ? (
          <a
            href={place.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-bold text-[#0a0a0a] hover:text-[#2a9d8f] transition-colors inline-flex items-center gap-1.5"
          >
            {place.name}
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
          </a>
        ) : (
          <strong className="text-base font-bold text-[#0a0a0a]">
            {place.name}
          </strong>
        )}
        <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-[#2a9d8f]">
          {place.tag}
        </span>
        {place.price && (
          <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-[#71717a]">
            {place.price}
          </span>
        )}
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

// ── Image Slot ──

interface ImageSlotProps {
  src?: string;
  alt: string;
  caption?: string;
  aspectRatio?: "wide" | "square";
  preload?: boolean;
}

export function ImageSlot({
  src,
  alt,
  caption,
  aspectRatio = "wide",
  preload = false,
}: ImageSlotProps) {
  const [hasError, setHasError] = useState(false);
  const aspectClass = aspectRatio === "wide" ? "aspect-[16/9]" : "aspect-square";
  const showImage = src && !hasError;

  const placeholder = (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center px-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 text-[#d4d4d8]"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
        <p className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-[#d4d4d8]">
          {alt}
        </p>
      </div>
    </div>
  );

  return (
    <figure className="my-10">
      <div className={`relative ${aspectClass} bg-[#f5f5f5] overflow-hidden`}>
        {showImage ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-cover"
            preload={preload}
            onError={() => setHasError(true)}
          />
        ) : (
          placeholder
        )}
      </div>
      {caption && (
        <figcaption className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-[#71717a] mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ── Protected Image ──

interface ProtectedImageProps {
  src?: string;
  alt: string;
  caption?: string;
  aspectRatio?: "wide" | "square";
}

export function ProtectedImage({
  src,
  alt,
  caption,
  aspectRatio = "wide",
}: ProtectedImageProps) {
  const [hasError, setHasError] = useState(false);
  const aspectClass =
    aspectRatio === "wide" ? "aspect-[16/9]" : "aspect-square";
  const showImage = src && !hasError;

  const placeholder = (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center px-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 text-[#d4d4d8]"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
        <p className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-[#d4d4d8]">
          {alt}
        </p>
      </div>
    </div>
  );

  return (
    <figure className="my-10">
      <div
        className={`relative ${aspectClass} bg-[#f5f5f5] overflow-hidden select-none`}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      >
        {showImage ? (
          <>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover pointer-events-none"
              draggable={false}
              onError={() => setHasError(true)}
            />
            {/* Transparent overlay blocks right-click, drag, and long-press */}
            <div className="absolute inset-0 z-10" aria-hidden="true" />
          </>
        ) : (
          placeholder
        )}
      </div>
      {caption && (
        <figcaption className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-[#71717a] mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ── Nearby Neighborhoods ──

interface NearbyNeighborhoodCardProps {
  name: string;
  slug: string;
  description?: string;
}

function NearbyNeighborhoodCard({ name, slug, description }: NearbyNeighborhoodCardProps) {
  return (
    <Link
      href={`/neighborhoods/${slug}`}
      className="block border border-[#e4e4e7] px-5 py-4 hover:border-[#2a9d8f] transition-colors group"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-[#0a0a0a] group-hover:text-[#2a9d8f] transition-colors">
          {name}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4d4d8] group-hover:text-[#2a9d8f] transition-colors"><path d="m9 18 6-6-6-6" /></svg>
      </div>
      {description && (
        <p className="text-[0.75rem] text-[#71717a] mt-1 font-light leading-relaxed">
          {description}
        </p>
      )}
    </Link>
  );
}

// ── CTA Block ──

interface CtaBlockProps {
  nearbyNeighborhoods: NearbyNeighborhoodCardProps[];
  showNewsletter?: boolean;
  showMerch?: boolean;
}

export function CtaBlock({
  nearbyNeighborhoods,
  showNewsletter = true,
  showMerch = true,
}: CtaBlockProps) {
  return (
    <div className="mt-16 pt-16 border-t-2 border-[#e4e4e7] space-y-16">
      {/* Nearby Neighborhoods */}
      <div>
        <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-6">
          Explore Nearby Neighborhoods
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {nearbyNeighborhoods.map((n) => (
            <NearbyNeighborhoodCard key={n.slug} {...n} />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      {showNewsletter && (
        <div className="bg-[#f5f5f5] px-8 py-8">
          <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-3">
            Stay in the Loop
          </p>
          <p className="text-sm text-[#71717a] font-light leading-relaxed mb-5">
            Get neighborhood guides, local recommendations, and updates delivered
            to your inbox.
          </p>
          <form
            action="#"
            method="POST"
            className="flex gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@email.com"
              required
              className="flex-1 px-4 py-2.5 text-sm border border-[#e4e4e7] bg-white text-[#0a0a0a] placeholder:text-[#d4d4d8] focus:outline-none focus:border-[#2a9d8f] transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#2a9d8f] text-white text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#238277] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      )}

      {/* Merch */}
      {showMerch && (
        <Link
          href="/store"
          className="block border border-[#e4e4e7] px-8 py-6 hover:border-[#2a9d8f] transition-colors group"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-2">
                From MPLS With Love Store
              </p>
              <p className="text-sm text-[#71717a] font-light">
                Posters, postcards, and prints celebrating Minneapolis neighborhoods.
              </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4d4d8] group-hover:text-[#2a9d8f] transition-colors shrink-0 ml-4"><path d="m9 18 6-6-6-6" /></svg>
          </div>
        </Link>
      )}
    </div>
  );
}
