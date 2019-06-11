import { createReducer } from '@client/utils/state';

import {
  COUNT_PRODUCTS_SUCCESS,
  PRODUCTS_PAGE_CHANGE,
  PRODUCTS_PER_PAGE_CHANGE,
} from '../types';

const initialState = {
  page: 0,
  perPage: 10,
  total: null,
};

export default createReducer(initialState, {
  [PRODUCTS_PAGE_CHANGE]: (state, newPage) => ({
    ...state,
    page: newPage,
  }),
  [PRODUCTS_PER_PAGE_CHANGE]: (state, perPage) => ({
    ...state,
    perPage,
  }),
  [COUNT_PRODUCTS_SUCCESS]: (state, total) => ({
    ...state,
    total,
  }),
});
