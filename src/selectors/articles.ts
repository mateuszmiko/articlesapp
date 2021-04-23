import { IPropsType } from '../types/types';
import { createSelector } from 'reselect';

export const articlesSelector = (state: IPropsType) => state.articles;

export const listOfArticlesSelector = createSelector(articlesSelector, (articles) => articles?.listOfArticles);
