import ActionTypes from '../_actions/types';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return { ...state, loginSuccess: action.payload.loginSuccess };
    case ActionTypes.REGISTER_USER:
      return { ...state, registerSuccess: action.payload.registerSuccess };
    case ActionTypes.AUTH_USER:
      return { ...state, user: action.payload };
    case ActionTypes.LOGOUT_USER:
      return { ...state, logoutSuccess: action.payload.logoutSuccess };
    default:
      return state;
  }
};

export default userReducer;
