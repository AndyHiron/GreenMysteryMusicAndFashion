import React from 'react';

import { Page } from 'modules/pageLayout';
import { useSelector } from 'services/hooks';
import { useHistory } from 'react-router-dom';

const Deployment: React.FC = () => {
  const history = useHistory();
  const project = useSelector(state => state.project.data);


  console.log(project)
  return (
    <Page title="Deployment">
      {project ? (
        <p>
          {project.summary}
        </p>
      ) : (
        <>
          <p>You haven't selected a project</p>
          <button onClick={() => history.push('/')}>Go to Projects</button>
        </>
      )}
    </Page>
  );
};

export default Deployment;