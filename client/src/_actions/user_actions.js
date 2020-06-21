import axios from 'axios';
import ActionTypes from '../_actions/types';
import prodUrl from '../prodUrl';

export function loginUser(dataToSubmit) {
  const request = axios
    .post('/api/users/login', dataToSubmit)
    .then((response) => response.data);

  return {
    type: ActionTypes.LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post('/api/users/register', dataToSubmit)
    .then((response) => response.data);

  return {
    type: ActionTypes.REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get('/api/users/auth', {
      responseType: 'json',
    })
    .then((response) => response.data);

  return {
    type: ActionTypes.AUTH_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get('/api/users/logout', {
      responseType: 'json',
    })
    .then((response) => response.data);

  return {
    type: ActionTypes.LOGOUT_USER,
    payload: request,
  };
}
