import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducers from '@client/modules/auth/state';
import adminReducers from '@client/modules/admin/state';

export default combineReducers({
  form: formReducer,
  auth: authReducers,
  admin: adminReducers,
});
