import { createReducer, getPayload } from '@client/utils/state';

import {
  GET_PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_UPDATE_SUCCESS,
} from '../types';

const initialState = {};

export default createReducer(initialState, {
  [GET_PRODUCT_DETAILS_SUCCESS]: getPayload,
  [PRODUCT_UPDATE_SUCCESS]: (state, fields) => ({
    ...state,
    ...fields,
  }),
  [PRODUCT_DELETE_SUCCESS]: (state, productId) => {
    if (productId === state.id) {
      return { ...initialState };
    }

    return state;
  },
});
