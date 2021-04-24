import { articlesSelector, filtersSettingsSelector, listOfArticlesSelector } from './articles';
import { filtersSettingsMock } from '../__mocks__/articles/filtersSettingsMock';
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
        data: { listOfArticles: articlesStateMock },
        result: articlesStateMock,
      },
      {
        title: 'returns undefined if listOfArticles is undefined from articles',
        data: { listOfArticles: undefined },
        result: undefined,
      },
      {
        title: 'returns null if listOfArticles is null from articles',
        data: { listOfArticles: null },
        result: null,
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
});
