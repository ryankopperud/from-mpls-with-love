interface FaqItem {
  question: string;
  answer: string;
}

interface ArticleSchemaData {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  publisherName: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateArticleSchema(data: ArticleSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    url: data.url,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: {
      "@type": "Organization",
      name: data.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: data.publisherName,
    },
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function renderJsonLd(schemas: Record<string, unknown>[]) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": schemas.map(({ "@context": _, ...rest }) => rest),
  };
  return JSON.stringify(graph).replace(/</g, "\\u003c");
}
