import { createReducer } from '@client/utils/state';

import { TOGGLE_PRODUCT_EDIT_MODE } from '../types';

const initialState = false;

export default createReducer(initialState, {
  [TOGGLE_PRODUCT_EDIT_MODE]: state => !state,
});
