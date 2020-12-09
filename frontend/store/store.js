import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import React from 'react'

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk))
)

export default configureStore;
