import { Action, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

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

export type ArticlesPropsType = {
  listOfArticles: ArticlesResponseType;
};

export interface IPropsType {
  articles: ArticlesPropsType;
}

type StatusOptions = 'ok' | 'error';

export type ArticlesResponseType = {
  status: StatusOptions;
  totalResults: number;
  articles: ArticlePropsType[];
};

export type FiltersType = {
  fromDate: string;
  toDate: string;
  topic: string;
  sortBy: string;
  pageSize: number;
  page: number;
};

export type ArticlesThunkAction<R, A extends Action = AnyAction, E = undefined, S = IPropsType> = ThunkAction<R, S, E, A>;
