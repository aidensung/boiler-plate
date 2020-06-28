import { takeLatest, put, all, call } from 'redux-saga/effects';

import axios from 'axios';

import UserActionTypes from './user.types';
import { signInSuccess, signInFailure } from './user.actions';

const signInWithEmailAndPassword = (emailAndPassword) => {
  const signInResponse = axios
    .post('/api/users/signin', emailAndPassword)
    .then((response) => response.data);

  return signInResponse;
};

export function* signInWithEmail({ payload }) {
  try {
    const signInResponse = yield signInWithEmailAndPassword(payload);
    yield put(signInSuccess(signInResponse.user));
  } catch (err) {
    yield put(signInFailure(signInResponse.user));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserAuth() {
  yield takeLatest(UserActionTypes.CHECK_USER_AUTH, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserAuth),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

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
