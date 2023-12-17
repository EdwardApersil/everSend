export interface Post {
[x: string]: any;
     // Identifier representing the article
  id: string;

  // Source of the article
  sourceId: string;

  // Name of the source (e.g., MarketWatch)
  sourceName: string;

  // Provider of the source content (e.g., Dow Jones)
  providerName: string;

  // Title of the article
  title: string;

  // Date and time the article was published (including timezone offset)
  publishedDate: Date;
}
