import axios from 'axios';
import {SubmissionError} from 'redux-form';

const MODULE = 'AUTH';

export const REGISTER_USER_SUCCESS = `${MODULE}/REGISTER_USER/SUCCESS`;
export const REGISTER_USER_FAIL = `${MODULE}/REGISTER_USER/FAIL`;
export const registerUser = ({email, password}) => async dispatch => {
  try {
    const {data: user} = await axios.post('/api/auth/register', {
      email,
      password,
    });

    return dispatch({type: REGISTER_USER_SUCCESS, payload: user});
  } catch ({response: {data}}) {
    dispatch({type: REGISTER_USER_FAIL, payload: data});

    throw new SubmissionError(data);
  }
};

export const LOGIN_USER_SUCCESS = `${MODULE}/LOGIN_USER/SUCCESS`;
export const LOGIN_USER_FAIL = `${MODULE}/LOGIN_USER/FAIL`;
export const loginUser = ({email, password}) => async dispatch => {
  try {
    const {data: user} = await axios.post('/api/auth/login', {
      email,
      password,
    });

    return dispatch({type: LOGIN_USER_SUCCESS, payload: user});
  } catch ({response: {data}}) {
    dispatch({type: LOGIN_USER_FAIL, payload: data});

    throw new SubmissionError(data);
  }
};

export const INITIAL_AUTH_SUCCESS = `${MODULE}/INITIAL_AUTH/SUCCESS`;
export const INITIAL_AUTH_FAIL = `${MODULE}/INITIAL_AUTH/FAIL`;
export const initialAuth = () => async dispatch => {
  try {
    const {data: user} = await axios.get('/api/auth/current');

    return dispatch({type: INITIAL_AUTH_SUCCESS, payload: user});
  } catch ({response: {data}}) {
    return dispatch({type: INITIAL_AUTH_FAIL, payload: data});
  }
};

export const LOGOUT_SUCCESS = `${MODULE}/LOGOUT/SUCCESS`;
export const LOGOUT_FAIL = `${MODULE}/LOGOUT/FAIL`;
export const logout = () => async dispatch => {
  try {
    await axios.get('/api/auth/logout');

    return dispatch({type: LOGOUT_SUCCESS});
  } catch ({response: {data}}) {
    return dispatch({type: LOGOUT_FAIL, payload: data});
  }
};
