import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import authReducers from '@client/modules/auth/state';
import adminReducers from '@client/modules/admin/state';
import dialogsReducers from '@client/modules/dialog/state/reducers';

import history from './history';

export default combineReducers({
  router: connectRouter(history),
  form: formReducer,
  auth: authReducers,
  admin: adminReducers,
  dialogs: dialogsReducers,
});
