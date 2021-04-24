import { ArticlesPropsType } from '../../types/types';
import { filtersSettingsMock } from './filtersSettingsMock';
import { listOfArticlesResponseMock } from './listOfArticlesMock';

const articlesStateMock: ArticlesPropsType = {
  listOfArticles: listOfArticlesResponseMock,
  filtersSettings: filtersSettingsMock,
};

export default articlesStateMock;
