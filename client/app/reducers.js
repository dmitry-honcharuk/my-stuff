import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducers from '@client/modules/auth/reducers';
import adminReducers from '@client/modules/admin/reducers';

export default combineReducers({
  form: formReducer,
  auth: authReducers,
  admin: adminReducers,
});
