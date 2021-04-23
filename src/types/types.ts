export type SourceType = {
  id: string;
  name: string;
};

export type ArticlePropsType = {
  source: SourceType;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type TopicsTypes = 'tech' | 'travel' | 'politics' | 'sports';

export type Dates = 'this month' | 'this week' | 'today';

export type SortByTypes = 'popularity' | 'publishedAt';
