import {
  INITIAL_AUTH_FAIL,
  INITIAL_AUTH_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from './types';

export const registerSuccess = payload => ({
  type: REGISTER_USER_SUCCESS,
  payload,
});

export const registerFail = payload => ({
  type: REGISTER_USER_FAIL,
  payload,
});

export const loginSuccess = payload => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

export const loginFail = payload => ({
  type: LOGIN_USER_FAIL,
  payload,
});

export const initialAuthSuccess = payload => ({
  type: INITIAL_AUTH_SUCCESS,
  payload,
});

export const initialAuthFail = payload => ({
  type: INITIAL_AUTH_FAIL,
  payload,
});

export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });

export const logoutFail = payload => ({ type: LOGOUT_FAIL, payload });
