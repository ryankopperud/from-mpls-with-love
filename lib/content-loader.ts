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

// ── Batch 2: 25 neighborhoods ──

registerGuide("tangletown", () =>
  import("@/content/neighborhoods/tangletown").then((m) => m.default)
);

registerGuide("cooper", () =>
  import("@/content/neighborhoods/cooper").then((m) => m.default)
);

registerGuide("standish", () =>
  import("@/content/neighborhoods/standish").then((m) => m.default)
);

registerGuide("hale", () =>
  import("@/content/neighborhoods/hale").then((m) => m.default)
);

registerGuide("diamond-lake", () =>
  import("@/content/neighborhoods/diamond-lake").then((m) => m.default)
);

registerGuide("king-field", () =>
  import("@/content/neighborhoods/king-field").then((m) => m.default)
);

registerGuide("bryant", () =>
  import("@/content/neighborhoods/bryant").then((m) => m.default)
);

registerGuide("bancroft", () =>
  import("@/content/neighborhoods/bancroft").then((m) => m.default)
);

registerGuide("corcoran", () =>
  import("@/content/neighborhoods/corcoran").then((m) => m.default)
);

registerGuide("lyndale", () =>
  import("@/content/neighborhoods/lyndale").then((m) => m.default)
);

registerGuide("marcy-holmes", () =>
  import("@/content/neighborhoods/marcy-holmes").then((m) => m.default)
);

registerGuide("como", () =>
  import("@/content/neighborhoods/como").then((m) => m.default)
);

registerGuide("audubon-park", () =>
  import("@/content/neighborhoods/audubon-park").then((m) => m.default)
);

registerGuide("waite-park", () =>
  import("@/content/neighborhoods/waite-park").then((m) => m.default)
);

registerGuide("northeast-park", () =>
  import("@/content/neighborhoods/northeast-park").then((m) => m.default)
);

registerGuide("kenwood", () =>
  import("@/content/neighborhoods/kenwood").then((m) => m.default)
);

registerGuide("east-isles", () =>
  import("@/content/neighborhoods/east-isles").then((m) => m.default)
);

registerGuide("east-harriet", () =>
  import("@/content/neighborhoods/east-harriet").then((m) => m.default)
);

registerGuide("west-maka-ska", () =>
  import("@/content/neighborhoods/west-maka-ska").then((m) => m.default)
);

registerGuide("cedar-isles-dean", () =>
  import("@/content/neighborhoods/cedar-isles-dean").then((m) => m.default)
);

registerGuide("downtown-west", () =>
  import("@/content/neighborhoods/downtown-west").then((m) => m.default)
);

registerGuide("elliot-park", () =>
  import("@/content/neighborhoods/elliot-park").then((m) => m.default)
);

registerGuide("stevens-square-loring-heights", () =>
  import("@/content/neighborhoods/stevens-square-loring-heights").then((m) => m.default)
);

registerGuide("ventura-village", () =>
  import("@/content/neighborhoods/ventura-village").then((m) => m.default)
);

registerGuide("phillips-west", () =>
  import("@/content/neighborhoods/phillips-west").then((m) => m.default)
);

// ── Batch 3: Remaining 45 neighborhoods ──

registerGuide("armatage", () =>
  import("@/content/neighborhoods/armatage").then((m) => m.default)
);

registerGuide("bryn-mawr", () =>
  import("@/content/neighborhoods/bryn-mawr").then((m) => m.default)
);

registerGuide("lowry-hill", () =>
  import("@/content/neighborhoods/lowry-hill").then((m) => m.default)
);

registerGuide("east-bde-maka-ska", () =>
  import("@/content/neighborhoods/east-bde-maka-ska").then((m) => m.default)
);

registerGuide("field", () =>
  import("@/content/neighborhoods/field").then((m) => m.default)
);

registerGuide("minnehaha", () =>
  import("@/content/neighborhoods/minnehaha").then((m) => m.default)
);

registerGuide("howe", () =>
  import("@/content/neighborhoods/howe").then((m) => m.default)
);

registerGuide("hiawatha", () =>
  import("@/content/neighborhoods/hiawatha").then((m) => m.default)
);

registerGuide("ericsson", () =>
  import("@/content/neighborhoods/ericsson").then((m) => m.default)
);

registerGuide("near-north", () =>
  import("@/content/neighborhoods/near-north").then((m) => m.default)
);

registerGuide("harrison", () =>
  import("@/content/neighborhoods/harrison").then((m) => m.default)
);

registerGuide("hawthorne", () =>
  import("@/content/neighborhoods/hawthorne").then((m) => m.default)
);

registerGuide("jordan", () =>
  import("@/content/neighborhoods/jordan").then((m) => m.default)
);

registerGuide("folwell", () =>
  import("@/content/neighborhoods/folwell").then((m) => m.default)
);

registerGuide("mckinley", () =>
  import("@/content/neighborhoods/mckinley").then((m) => m.default)
);

registerGuide("sumner-glenwood", () =>
  import("@/content/neighborhoods/sumner-glenwood").then((m) => m.default)
);

registerGuide("willard-hay", () =>
  import("@/content/neighborhoods/willard-hay").then((m) => m.default)
);

registerGuide("sheridan", () =>
  import("@/content/neighborhoods/sheridan").then((m) => m.default)
);

registerGuide("victory", () =>
  import("@/content/neighborhoods/victory").then((m) => m.default)
);

registerGuide("webber-camden", () =>
  import("@/content/neighborhoods/webber-camden").then((m) => m.default)
);

registerGuide("lind-bohanon", () =>
  import("@/content/neighborhoods/lind-bohanon").then((m) => m.default)
);

registerGuide("shingle-creek", () =>
  import("@/content/neighborhoods/shingle-creek").then((m) => m.default)
);

registerGuide("cleveland", () =>
  import("@/content/neighborhoods/cleveland").then((m) => m.default)
);

registerGuide("columbia-park", () =>
  import("@/content/neighborhoods/columbia-park").then((m) => m.default)
);

registerGuide("bottineau", () =>
  import("@/content/neighborhoods/bottineau").then((m) => m.default)
);

registerGuide("holland", () =>
  import("@/content/neighborhoods/holland").then((m) => m.default)
);

registerGuide("beltrami", () =>
  import("@/content/neighborhoods/beltrami").then((m) => m.default)
);

registerGuide("midtown-phillips", () =>
  import("@/content/neighborhoods/midtown-phillips").then((m) => m.default)
);

registerGuide("east-phillips", () =>
  import("@/content/neighborhoods/east-phillips").then((m) => m.default)
);

registerGuide("central", () =>
  import("@/content/neighborhoods/central").then((m) => m.default)
);

registerGuide("keewaydin", () =>
  import("@/content/neighborhoods/keewaydin").then((m) => m.default)
);

registerGuide("wenonah", () =>
  import("@/content/neighborhoods/wenonah").then((m) => m.default)
);

registerGuide("regina", () =>
  import("@/content/neighborhoods/regina").then((m) => m.default)
);

registerGuide("morris-park", () =>
  import("@/content/neighborhoods/morris-park").then((m) => m.default)
);

registerGuide("northrop", () =>
  import("@/content/neighborhoods/northrop").then((m) => m.default)
);

registerGuide("page", () =>
  import("@/content/neighborhoods/page").then((m) => m.default)
);

registerGuide("marshall-terrace", () =>
  import("@/content/neighborhoods/marshall-terrace").then((m) => m.default)
);

registerGuide("nicollet-island-east-bank", () =>
  import("@/content/neighborhoods/nicollet-island-east-bank").then((m) => m.default)
);

registerGuide("st-anthony-east", () =>
  import("@/content/neighborhoods/st-anthony-east").then((m) => m.default)
);

registerGuide("university-of-minnesota", () =>
  import("@/content/neighborhoods/university-of-minnesota").then((m) => m.default)
);

registerGuide("camden-industrial", () =>
  import("@/content/neighborhoods/camden-industrial").then((m) => m.default)
);

registerGuide("humboldt-industrial-area", () =>
  import("@/content/neighborhoods/humboldt-industrial-area").then((m) => m.default)
);

registerGuide("mid-city-industrial", () =>
  import("@/content/neighborhoods/mid-city-industrial").then((m) => m.default)
);

registerGuide("windom", () =>
  import("@/content/neighborhoods/windom").then((m) => m.default)
);

registerGuide("windom-park", () =>
  import("@/content/neighborhoods/windom-park").then((m) => m.default)
);
