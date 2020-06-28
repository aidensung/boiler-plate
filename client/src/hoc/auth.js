import React from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../redux/user/user.actions';

export default function (SpecificComponent, option, adminRoute = null) {
  // null => anyone can access
  // true => logged in user only
  // false => logged in user cannot access

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    dispatch(auth()).then((response) => {
      if (!response.payload) {
        if (adminRoute) {
          props.history.push('/');
        }
        if (option) {
          props.history.push('/signin');
        }
      } else {
        if (adminRoute && response.payload.user.role === 0) {
          props.history.push('/');
        } else {
          if (option === false) {
            props.history.push('/');
          }
        }
      }
    });

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
