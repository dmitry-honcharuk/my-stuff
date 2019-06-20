import { reset } from 'redux-form';

import { PRODUCT_EDIT_MODE_DISABLED } from '../state/types';
import { PRODUCT_DETAILS_FORM } from '../constants';

export default ({ dispatch }) => next => action => {
  // @TODO new branch
  if (action.type === PRODUCT_EDIT_MODE_DISABLED) {
    dispatch(reset(PRODUCT_DETAILS_FORM));
  }

  return next(action);
};
