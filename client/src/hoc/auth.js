import React from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_actions';

export default function (SpecificComponent, option, adminRoute = null) {
  // null => anyone can access
  // true => logged in user only
  // false => logged in user cannot access

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    dispatch(auth()).then((response) => {
      if (!response.payload.isAuth) {
        if (option) {
          props.history.push('/login');
        }
      } else {
        if (adminRoute && !response.payload.isAdmin) {
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
