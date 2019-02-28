import {
  INITIAL_AUTH_FAIL,
  INITIAL_AUTH_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from '../actions';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INITIAL_AUTH_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      return payload;

    case LOGOUT_SUCCESS:
    case INITIAL_AUTH_FAIL:
    case REGISTER_USER_FAIL:
    case LOGIN_USER_FAIL:
      return {};

    default:
      return state;
  }
};
