import axios from 'axios';
import { SubmissionError } from 'redux-form';

const MODULE = 'AUTH';

export const REGISTER_USER_SUCCESS = `${MODULE}/REGISTER_USER/SUCCESS`;
export const REGISTER_USER_FAIL = `${MODULE}/REGISTER_USER/FAIL`;
export const registerUser = ({ email, password }) => async dispatch => {
  try {
    const { data: user } = await axios.post('/api/auth/register', {
      email,
      password,
    });

    return dispatch({ type: REGISTER_USER_SUCCESS, payload: user });
  } catch ({ response: { data } }) {
    dispatch({ type: REGISTER_USER_FAIL, payload: data });

    throw new SubmissionError(data);
  }
};
