import { createReducer } from '@client/utils/state';

import { PRODUCTS_PAGE_CHANGE, COUNT_PRODUCTS_SUCCESS } from '../types';

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
  [COUNT_PRODUCTS_SUCCESS]: (state, total) => ({
    ...state,
    total,
  }),
});
