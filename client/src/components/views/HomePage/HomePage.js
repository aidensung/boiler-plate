import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../_actions/user_actions';
import { withRouter } from 'react-router-dom';

const HomePage = (props) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser()).then((response) => {
      if (response.payload.logoutSuccess) {
        props.history.push('/login');
      } else {
        alert('Log out failed');
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <h2>Home Page</h2>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default withRouter(HomePage);
