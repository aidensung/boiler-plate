import React, { useEffect } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

function LandingPage(props) {
  useEffect(() => {
    Axios.get('/api/hello').then((res) => console.log(res.data));
  }, []);

  const handleLogout = () => {
    Axios.get('/api/users/logout').then((response) => {
      if (response.data.logoutSuccess) {
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
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <h2>Landing Page</h2>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default withRouter(LandingPage);
