import React from 'react';
import { withRouter } from 'react-router-dom';

import { AboutPageContainer } from './aboutpage.styles';

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <h2>About Page</h2>
    </AboutPageContainer>
  );
};

export default withRouter(AboutPage);
