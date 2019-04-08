/// <reference path="@abramstyle/redux-api.d.ts" / >
/* global window */
/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
import reduxAPIGenerator from "@abramstyle/redux-api";
import { applyMiddleware, compose, createStore } from "redux";

import reducers from "../reducers";

const api = reduxAPIGenerator();

const root: any = typeof window !== "undefined" ? window : {};
const middlewares = [
  api,
];

const composeEnhancers = root.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState) => createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(...middlewares)));

export default configureStore;
