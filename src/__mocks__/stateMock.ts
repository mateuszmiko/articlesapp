import { IPropsType } from '../types/types';
import { initialState as listOfArticlesReducer } from '../reducers/articles/listOfArticles';

const mockState: IPropsType = {
  articles: {
    listOfArticles: listOfArticlesReducer,
  },
};

export default mockState;
