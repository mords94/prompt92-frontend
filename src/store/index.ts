import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { logger } from 'redux-logger';
import rootReducer from './reducers';
import { Store } from 'redux';

export const history = createHistory();

const middleWare = applyMiddleware(logger, thunk, routerMiddleware(history));

export const store = createStore(rootReducer, middleWare) as Store<any>;
