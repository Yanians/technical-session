
import { createStore, applyMiddleware  } from 'redux';

import { logger } from 'redux-logger';

import thunk from 'redux-thunk';

import {  composeWithDevTools  } from 'redux-devtools-extension';

import  RootReducers from './rootReducer';

const middleware = [thunk];

const initialState = {};

const store = createStore( RootReducers, initialState, composeWithDevTools(applyMiddleware(...middleware, logger)));

export default store;
