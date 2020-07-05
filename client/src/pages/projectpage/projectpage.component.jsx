import React from 'react';
import { withRouter } from 'react-router-dom';

import { ProjectPageContainer } from './projectpage.styles';

const ProjectPage = () => {
  return (
    <ProjectPageContainer>
      <h2>Project Page</h2>
    </ProjectPageContainer>
  );
};

export default withRouter(ProjectPage);
