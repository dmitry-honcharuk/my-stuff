import { createReducer, getPayload } from '@client/utils/state';

import { COUNT_PRODUCTS_SUCCESS } from '../types';

const initialState = null;

export default createReducer(initialState, {
  [COUNT_PRODUCTS_SUCCESS]: getPayload,
});
