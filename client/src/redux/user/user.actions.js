import axios from 'axios';
import UserActionTypes from './user.types';

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (err) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: err,
});

export const checkUserAuth = () => ({
  type: UserActionTypes.CHECK_USER_AUTH,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (err) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: err,
});

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = (user) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpFailure = (err) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: err,
});

// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////

export function loginUser(dataToSubmit) {
  const request = axios
    .post('/api/users/signin', dataToSubmit)
    .then((response) => response.data);

  return {
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post('/api/users/signup', dataToSubmit)
    .then((response) => response.data);

  return {
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get('/api/users/auth')
    .then((response) => response.data);

  return {
    type: UserActionTypes.SIGN_OUT_SUCCESS,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get('/api/users/signout')
    .then((response) => response.data);

  return {
    type: UserActionTypes.SIGN_OUT_SUCCESS,
    payload: request,
  };
}
