import React, { useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../redux/user/user.selectors';
import { checkUserAuth } from '../redux/user/user.actions';

const Auth = (SpecificComponent, option, adminRoute = null) => {
  // null => anyone can access
  // true => logged in user only
  // false => logged in user cannot access

  const AuthenticationCheck = ({ checkUserAuth, currentUser }, props) => {
    // const dispatch = useDispatch();

    useEffect(() => {
      checkUserAuth();
    }, [checkUserAuth]);

    if (!currentUser) {
      if (adminRoute) {
        props.history.push('/');
      }
      if (option) {
        props.history.push('/signin');
      }
    } else {
      if (adminRoute && currentUser.role === 0) {
        props.history.push('/');
      } else {
        if (option === false) {
          props.history.push('/');
        }
      }
    }

    return <SpecificComponent />;
  };

  return AuthenticationCheck;
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserAuth: () => dispatch(checkUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
