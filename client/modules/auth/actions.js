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

export const INITIAL_AUTH_SUCCESS = `${MODULE}/INITIAL_AUTH/SUCCESS`;
export const INITIAL_AUTH_FAIL = `${MODULE}/INITIAL_AUTH/FAIL`;
export const initialAuth = () => async dispatch => {
  try {
    const { data: user } = await axios.get('/api/auth/current');

    return dispatch({ type: INITIAL_AUTH_SUCCESS, payload: user });
  } catch ({ response: { data } }) {
    return dispatch({ type: INITIAL_AUTH_FAIL, payload: data });
  }
};
