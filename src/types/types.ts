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
