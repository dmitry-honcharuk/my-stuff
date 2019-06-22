import { createReducer } from '@client/utils/state';

import {
  PRODUCT_EDIT_MODE_DISABLED,
  PRODUCT_EDIT_MODE_ENABLED,
} from '../types';

const initialState = false;

export default createReducer(initialState, {
  [PRODUCT_EDIT_MODE_ENABLED]: () => true,
  [PRODUCT_EDIT_MODE_DISABLED]: () => false,
});
