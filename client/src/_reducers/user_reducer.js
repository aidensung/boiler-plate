import ActionTypes from '../_actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case ActionTypes.REGISTER_USER:
      return { ...state, register: action.payload };
    case ActionTypes.AUTH_USER:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
