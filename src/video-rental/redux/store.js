
import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { logger } from 'redux-logger';

import thunk from 'redux-thunk';

// import composedWithDevTools from 'redux-devtools-extension';

import RootReducer  from './rootreducer';

const initialState = {};

const middleware=[thunk];

const store = createStore(RootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware,logger)));

export default store;