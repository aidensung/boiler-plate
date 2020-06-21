import axios from 'axios';
import ActionTypes from '../_actions/types';
import prodUrl from '../prodUrl';

const Url = process.env.NODE_ENV === 'production' ? prodUrl : '';

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${Url}/api/users/login`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: ActionTypes.LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${Url}/api/users/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: ActionTypes.REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get(`${Url}/api/users/auth`, {
      proxy: { host: 'https://boilerplate-aiden.herokuapp.com' },
    })
    .then((response) => response.data);

  return {
    type: ActionTypes.AUTH_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get(`${Url}/api/users/logout`)
    .then((response) => response.data);

  return {
    type: ActionTypes.LOGOUT_USER,
    payload: request,
  };
}
