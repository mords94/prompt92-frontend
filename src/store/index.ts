import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import {logger} from 'redux-logger'
import rootReducer from './reducers'

export const history = createHistory();

const middleWare = applyMiddleware(logger, thunk, routerMiddleware(history));

const store = createStore(rootReducer, middleWare);

export default store;
