/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import createStore from '../node_modules/@0xcda7a/redux-es6/es/createStore.js';
import applyMiddleware from '../node_modules/@0xcda7a/redux-es6/es/applyMiddleware.js';
import origCompose from '../node_modules/@0xcda7a/redux-es6/es/compose.js';
import combineReducers from '../node_modules/@0xcda7a/redux-es6/es/combineReducers.js';
// import createStore from 'redux/es/createStore';
// import applyMiddleware from 'redux/es/applyMiddleware';
// import origCompose from 'redux/es/compose';
// import combineReducers from 'redux/es/combineReducers';

// import { createStore, combineReducers, applyMiddleware, compose as origCompose } from 'redux';

// import { createStore, combineReducers, applyMiddleware, compose as origCompose } from '../node_modules/redux/es/index.js';


import thunk from '../node_modules/redux-thunk/es/index.js';
// import thunk from 'redux-thunk';



// import { lazyReducerEnhancer } from '../node_modules/pwa-helpers/lazy-reducer-enhancer.js';
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer';




import app from './reducers/app.js';
// import app from './reducers/app';




import categories from './reducers/categories.js';

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || origCompose;

export const store = createStore(
  (state, action) => state,
  compose(lazyReducerEnhancer(combineReducers), applyMiddleware(thunk))
);

store.addReducers({
  app,
  categories
});
