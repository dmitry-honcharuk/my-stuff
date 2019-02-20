import { REGISTER_USER_FAIL, REGISTER_USER_SUCCESS } from '../actions';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER_SUCCESS:
      return payload;
    case REGISTER_USER_FAIL:
      return {};
    default:
      return state;
  }
}
