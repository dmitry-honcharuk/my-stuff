import { createReducer } from '@client/utils/state';

import {
  PRODUCT_EDIT_MODE_DISABLED,
  PRODUCT_EDIT_MODE_ENABLED,
  PRODUCT_UPDATE_SUCCESS,
} from '../types';

const initialState = false;

export default createReducer(initialState, {
  [PRODUCT_EDIT_MODE_ENABLED]: () => true,
  [PRODUCT_EDIT_MODE_DISABLED]: () => false,
  [PRODUCT_UPDATE_SUCCESS]: () => false,
});
