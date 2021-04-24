import { ArticlesResponseType } from '../../types/types';
import { GetArticlesListActionsType } from '../../actions/getArticlesListActions';

export const initialState: ArticlesResponseType | Record<string, never> = {};

const listOfArticles = (state = initialState, action: GetArticlesListActionsType) => {
  switch (action.type) {
    case 'RECEIVE_GET_ARTICLES_LIST_SUCCESS':
      return action.payload || initialState;
    default:
      return state;
  }
};

export default listOfArticles;
