"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  label: string;
}

export default function StickyToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-80px 0px -70% 0px",
      }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Table of contents"
      className="hidden lg:block sticky top-20 self-start"
    >
      <p className="text-[0.6rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
        In this guide
      </p>
      <ul className="space-y-0 border-l border-[#e4e4e7]">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block pl-4 py-1.5 text-[0.75rem] leading-snug transition-colors border-l-2 -ml-[1px] ${
                activeId === item.id
                  ? "border-[#2a9d8f] text-[#0a0a0a] font-medium"
                  : "border-transparent text-[#71717a] hover:text-[#0a0a0a]"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
