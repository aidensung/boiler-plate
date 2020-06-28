import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/user/user.actions';
import { withRouter } from 'react-router-dom';

import { HomePageContainer } from './homepage.styles';

const HomePage = (props) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser()).then((response) => {
      if (!response.payload) return;

      if (response.payload.user) {
        props.history.push('/signin');
      }
    });
  };

  return (
    <HomePageContainer>
      <h2>Home Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </HomePageContainer>
  );
};

export default withRouter(HomePage);
