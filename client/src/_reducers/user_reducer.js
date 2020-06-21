import ActionTypes from '../_actions/types';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_USER:
      return { ...state, registerStatus: action.payload };
    case ActionTypes.LOGIN_USER:
      return { ...state, loginStatus: action.payload };
    case ActionTypes.AUTH_USER:
      return { ...state, userStatus: action.payload };
    case ActionTypes.LOGOUT_USER:
      return { ...state, loginStatus: action.payload };
    default:
      return state;
  }
};

export default userReducer;
