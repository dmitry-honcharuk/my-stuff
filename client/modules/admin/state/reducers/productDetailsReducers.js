import { createReducer, getPayload } from '@client/utils/state';

import { GET_PRODUCT_DETAILS_SUCCESS } from '../types';

const initialState = {};

export default createReducer(initialState, {
  [GET_PRODUCT_DETAILS_SUCCESS]: getPayload,
});
