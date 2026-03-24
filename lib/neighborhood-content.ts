export interface PlaceCard {
  name: string;
  tag: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string; // HTML string
}

export interface NeighborhoodArticle {
  kicker: string;
  headline: string;
  deck: string;
  lastUpdated: string;
  hook: string;
  toc: { id: string; label: string }[];
  stats: Stat[];
  sections: ArticleSection[];
  places: { heading: string; cards: PlaceCard[]; extra?: string }[];
  faq: FaqItem[];
  closing: { title: string; paragraphs: string[] };
  pullQuotes: { text: string; cite: string; afterSection: string }[];
}
