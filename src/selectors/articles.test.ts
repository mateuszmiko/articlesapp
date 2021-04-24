import { articleByIdSelector, articlesSelector, filtersSettingsSelector, listOfArticlesSelector } from './articles';
import { filtersSettingsMock } from '../__mocks__/articles/filtersSettingsMock';
import { getArticleListWithIds, listOfArticlesResponseMock } from '../__mocks__/articles/listOfArticlesMock';
import articlesStateMock from '../__mocks__/articles/articlesStateMock';
import mockState from '../__mocks__/stateMock';

describe('Articles selectors', () => {
  describe('articlesSelector', () => {
    it('returns articles from state', () => {
      expect(articlesSelector({ ...mockState, articles: articlesStateMock })).toEqual(articlesStateMock);
    });
  });

  describe('listOfArticlesSelector', () => {
    const testCases = [
      {
        title: 'returns listOfArticles from articles',
        data: { listOfArticles: listOfArticlesResponseMock },
        result: getArticleListWithIds(),
      },
      {
        title: 'returns undefined if listOfArticles is undefined from articles',
        data: { listOfArticles: undefined },
        result: undefined,
      },
      {
        title: 'returns undefined if listOfArticles is empty object from articles',
        data: { listOfArticles: {} },
        result: undefined,
      },
    ];

    testCases.forEach(({ title, data, result }) => {
      it(title, () => {
        expect(listOfArticlesSelector.resultFunc(data)).toEqual(result);
      });
    });
  });

  describe('filtersSettingsSelector', () => {
    const testCases = [
      {
        title: 'returns filtersSettings from articles',
        data: { filtersSettings: filtersSettingsMock },
        result: filtersSettingsMock,
      },
      {
        title: 'returns undefined if filtersSettings is undefined from articles',
        data: { filtersSettings: undefined },
        result: undefined,
      },
      {
        title: 'returns null if filtersSettings is null from articles',
        data: { filtersSettings: null },
        result: null,
      },
    ];

    testCases.forEach(({ title, data, result }) => {
      it(title, () => {
        expect(filtersSettingsSelector.resultFunc(data)).toEqual(result);
      });
    });
  });

  describe('articleByIdSelector', () => {
    const testCases = [
      {
        title: 'returns undefined if id is undefined from articles',
        id: undefined,
        data: getArticleListWithIds(),
        result: undefined,
      },
      {
        title: 'returns undefined if id is null from articles',
        id: null,
        data: getArticleListWithIds(),
        result: undefined,
      },
      {
        title: 'returns article with id is equal 2 from articles',
        id: 2,
        data: getArticleListWithIds(),
        result: getArticleListWithIds().articles[2],
      },
    ];

    testCases.forEach(({ title, id, data, result }) => {
      it(title, () => {
        expect(articleByIdSelector(id).resultFunc(data)).toEqual(result);
      });
    });
  });
});
