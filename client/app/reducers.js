import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import authReducers from '@client/modules/auth/state';
import adminReducers from '@client/modules/admin/state';

import history from './history';

export default combineReducers({
  router: connectRouter(history),
  form: formReducer,
  auth: authReducers,
  admin: adminReducers,
});
