import { createReducer, getPayload } from '@client/utils/state';

import { GET_PRODUCTS_SUCCESS } from '../types';

const initialState = [];

export default createReducer(initialState, {
  [GET_PRODUCTS_SUCCESS]: getPayload,
});
