/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import robots from './robots/reducer';

const rootReducer = combineReducers({
  robots,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
