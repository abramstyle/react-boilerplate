/// <reference path="@abramstyle/redux-api.d.ts" / >
/* global window */
/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
import { applyMiddleware, compose, createStore } from 'redux';
import reduxAPIGenerator from '@abramstyle/redux-api';

import reducers from '../reducers';
import { declare } from 'tcomb';

const api = reduxAPIGenerator();

const root: any = typeof window !== 'undefined' ? window : {};
const middlewares = [
  api,
];

const composeEnhancers = root.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = preloadedState => createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(...middlewares)));

export default configureStore;
