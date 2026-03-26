import type { ReactNode } from "react";

export interface GuideData {
  meta: {
    title: string;
    description: string;
  };
  kicker: string;
  headline: string;
  deck: string;
  lastUpdated: string;
  datePublished: string;
  dateModified: string;
  toc: { id: string; label: string }[];
  stats: { label: string; items: { value: string; label: string }[] };
  faq: { question: string; answer: string }[];
  nearby: { name: string; slug: string; description: string }[];
  closing: { title: string; paragraphs: string[] };
}

export interface NeighborhoodGuide {
  data: GuideData;
  Content: () => ReactNode;
}

// Registry of published guides — import and register each here
// This is the single source of truth for "which neighborhoods have guides"
const guideRegistry: Record<string, () => Promise<NeighborhoodGuide>> = {};

export function registerGuide(
  slug: string,
  loader: () => Promise<NeighborhoodGuide>
) {
  guideRegistry[slug] = loader;
}

export async function getGuide(
  slug: string
): Promise<NeighborhoodGuide | null> {
  const loader = guideRegistry[slug];
  if (!loader) return null;
  return loader();
}

export function getPublishedSlugs(): string[] {
  return Object.keys(guideRegistry);
}

// ── Register guides below ──
// Add a line here for each new neighborhood guide

registerGuide("fulton", () =>
  import("@/content/neighborhoods/fulton").then((m) => m.default)
);

registerGuide("linden-hills", () =>
  import("@/content/neighborhoods/linden-hills").then((m) => m.default)
);

registerGuide("longfellow", () =>
  import("@/content/neighborhoods/longfellow").then((m) => m.default)
);

registerGuide("whittier", () =>
  import("@/content/neighborhoods/whittier").then((m) => m.default)
);

registerGuide("north-loop", () =>
  import("@/content/neighborhoods/north-loop").then((m) => m.default)
);

registerGuide("powderhorn-park", () =>
  import("@/content/neighborhoods/powderhorn-park").then((m) => m.default)
);

registerGuide("south-uptown", () =>
  import("@/content/neighborhoods/south-uptown").then((m) => m.default)
);

registerGuide("seward", () =>
  import("@/content/neighborhoods/seward").then((m) => m.default)
);

registerGuide("logan-park", () =>
  import("@/content/neighborhoods/logan-park").then((m) => m.default)
);

registerGuide("downtown-east", () =>
  import("@/content/neighborhoods/downtown-east").then((m) => m.default)
);

registerGuide("lowry-hill-east", () =>
  import("@/content/neighborhoods/lowry-hill-east").then((m) => m.default)
);

registerGuide("nokomis", () =>
  import("@/content/neighborhoods/nokomis").then((m) => m.default)
);

registerGuide("kenny", () =>
  import("@/content/neighborhoods/kenny").then((m) => m.default)
);

registerGuide("lynnhurst", () =>
  import("@/content/neighborhoods/lynnhurst").then((m) => m.default)
);

registerGuide("cedar-riverside", () =>
  import("@/content/neighborhoods/cedar-riverside").then((m) => m.default)
);

registerGuide("st-anthony-west", () =>
  import("@/content/neighborhoods/st-anthony-west").then((m) => m.default)
);

registerGuide("prospect-park-east-river-road", () =>
  import("@/content/neighborhoods/prospect-park").then((m) => m.default)
);

registerGuide("loring-park", () =>
  import("@/content/neighborhoods/loring-park").then((m) => m.default)
);
