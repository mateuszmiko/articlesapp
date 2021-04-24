import { Reducer, combineReducers } from 'redux';
import filtersSettings from './filtersSettings';
import listOfArticles from './listOfArticles';

const rootReducer: Reducer = combineReducers({
  listOfArticles,
  filtersSettings,
});

export default rootReducer;
