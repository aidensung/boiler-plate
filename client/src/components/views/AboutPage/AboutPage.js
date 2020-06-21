import React from 'react';
import { withRouter } from 'react-router-dom';

const AboutPage = () => {
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
      <h2>About Page</h2>
    </div>
  );
};

export default withRouter(AboutPage);
