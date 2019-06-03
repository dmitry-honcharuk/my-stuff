import { combineReducers } from 'redux';

import { createReducer, combineActions, getPayload } from '@client/utils/state';

import {
  INITIAL_AUTH_FAIL,
  INITIAL_AUTH_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_USER_SUCCESS,
} from './types';

const initialState = {};

const userReducer = createReducer(initialState, {
  [INITIAL_AUTH_SUCCESS]: getPayload,
  [REGISTER_USER_SUCCESS]: getPayload,
  [LOGIN_USER_SUCCESS]: getPayload,
});

const resettable = combineActions(
  [LOGOUT_SUCCESS, INITIAL_AUTH_FAIL],
  () => ({}),
);

export default combineReducers({
  user: resettable(userReducer),
});
