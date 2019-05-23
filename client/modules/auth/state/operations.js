import axios from 'axios';
import { SubmissionError } from 'redux-form';

import getErrors from '@client/utils/helpers/getErrors';

import {
  initialAuthFail,
  initialAuthSuccess,
  loginFail,
  loginSuccess,
  logoutFail,
  logoutSuccess,
  registerFail,
  registerSuccess,
} from './actions';

export const registerUser = formValues => async dispatch => {
  try {
    const { data: user } = await axios.post('/api/auth/register', formValues);

    return dispatch(registerSuccess(user));
  } catch ({ response: { data } }) {
    const errors = getErrors(data);

    dispatch(registerFail(errors));
    throw new SubmissionError(errors);
  }
};

export const loginUser = ({ email, password }) => async dispatch => {
  try {
    const { data: user } = await axios.post('/api/auth/login', {
      email,
      password,
    });

    return dispatch(loginSuccess(user));
  } catch ({ response: { data } }) {
    const errors = getErrors(data);

    dispatch(loginFail(errors));
    throw new SubmissionError(errors);
  }
};

export const initialAuth = () => async dispatch => {
  try {
    const { data: user } = await axios.get('/api/auth/current');

    return dispatch(initialAuthSuccess(user));
  } catch ({ response: { data } }) {
    return dispatch(initialAuthFail(data));
  }
};

export const logout = () => async dispatch => {
  try {
    await axios.get('/api/auth/logout');

    return dispatch(logoutSuccess());
  } catch ({ response: { data } }) {
    return dispatch(logoutFail(data));
  }
};
