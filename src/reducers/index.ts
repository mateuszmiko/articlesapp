import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import articles from './articles';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    articles,
  });

export default createRootReducer;
