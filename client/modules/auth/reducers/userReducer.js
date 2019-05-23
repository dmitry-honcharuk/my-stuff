import {
  createReducer,
  payloadAsState,
  createRessettableReducer as makeRessettable,
} from '../../../utils/state';

import {
  INITIAL_AUTH_FAIL,
  INITIAL_AUTH_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
} from '../actions';

const initialState = {};

const userReducer = createReducer(initialState, {
  [INITIAL_AUTH_SUCCESS]: payloadAsState,
  [REGISTER_USER_SUCCESS]: payloadAsState,
  [LOGIN_USER_SUCCESS]: payloadAsState,
});

const ressettable = makeRessettable([LOGOUT_SUCCESS, INITIAL_AUTH_FAIL]);

export default ressettable(userReducer);
