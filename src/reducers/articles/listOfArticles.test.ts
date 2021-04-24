import { listOfArticlesResponseMock } from '../../__mocks__/articles/listOfArticlesMock';
import { receiveGetArticlesListSuccess } from '../../actions/getArticlesListActions';
import listOfArticlesReducer, { initialState } from './listOfArticles';

const testCases = [
  {
    title: `handles RECEIVE_GET_ARTICLES_LIST_SUCCESS, returns initialState if mockState is undefined`,
    mockAction: receiveGetArticlesListSuccess(listOfArticlesResponseMock),
    mockState: undefined,
    result: listOfArticlesResponseMock,
  },
  {
    title: `handles RECEIVE_GET_ARTICLES_LIST_SUCCESS, returns listOfArticles from response object`,
    mockAction: receiveGetArticlesListSuccess(listOfArticlesResponseMock),
    mockState: initialState,
    result: listOfArticlesResponseMock,
  },
  {
    title: 'handles RECEIVE_GET_ARTICLES_LIST_SUCCESS, returns initialState if response object is null',
    mockAction: receiveGetArticlesListSuccess(null),
    mockState: initialState,
    result: initialState,
  },
];

describe('listOfArticlesReducer', () => {
  testCases.forEach(({ title, mockAction, mockState, result }) => {
    it(title, () => expect(listOfArticlesReducer(mockState, mockAction)).toEqual(result));
  });
});
