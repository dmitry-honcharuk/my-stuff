import { NEW_USER_PREVIEW_UPDATE } from '../actions';

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_USER_PREVIEW_UPDATE: {
      const { field, value } = payload;
      return {
        ...state,
        [field]: value,
      };
    }
    default:
      return state;
  }
};
