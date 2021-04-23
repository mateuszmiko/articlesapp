import { History, createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';
import thunk from 'redux-thunk';

export const history: History = createBrowserHistory();

export const store = createStore(createRootReducer(history), compose(applyMiddleware(thunk, routerMiddleware(history))));
