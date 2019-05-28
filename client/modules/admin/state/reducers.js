import { combineReducers } from 'redux';

import { createReducer, getPayload } from '@client/utils/state';

import { GET_PRODUCTS_SUCCESS } from './types';

const productsInitialState = [];

const productsReducer = createReducer(productsInitialState, {
  [GET_PRODUCTS_SUCCESS]: getPayload,
});

export default combineReducers({
  products: productsReducer,
});
