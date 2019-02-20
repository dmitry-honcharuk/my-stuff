import {
  INITIAL_AUTH_FAIL,
  INITIAL_AUTH_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from '../actions';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INITIAL_AUTH_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return payload;
    case INITIAL_AUTH_FAIL:
    case REGISTER_USER_FAIL:
      return {};
    default:
      return state;
  }
}
