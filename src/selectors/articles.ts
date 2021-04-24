import { ArticlePropsType, ArticlesResponseType, IPropsType } from '../types/types';
import { createSelector } from 'reselect';
import isEmpty from 'lodash.isempty';

export const articlesSelector = (state: IPropsType) => state.articles;

export const listOfArticlesSelector = createSelector(articlesSelector, (articles) => {
  if (isEmpty(articles?.listOfArticles)) return;
  const listOfArticlesData: ArticlesResponseType = articles.listOfArticles as ArticlesResponseType;
  return {
    ...listOfArticlesData,
    articles: listOfArticlesData.articles.map((article: ArticlePropsType, index: number) => ({ ...article, id: index })),
  };
});

export const articleByIdSelector = (articleId: number) =>
  createSelector(listOfArticlesSelector, (listOfArticles) => listOfArticles.articles.find((article) => article.id === articleId));

export const filtersSettingsSelector = createSelector(articlesSelector, (articles) => articles?.filtersSettings);
