import { Reducer, combineReducers } from 'redux';
import listOfArticles from './listOfArticles';

const rootReducer: Reducer = combineReducers({
  listOfArticles,
});

export default rootReducer;
