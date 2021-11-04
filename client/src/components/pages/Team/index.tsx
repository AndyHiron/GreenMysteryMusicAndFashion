import React from 'react';

import { Page } from 'modules/pageLayout';
import { useSelector } from 'services/hooks';
import { useHistory } from 'react-router-dom';

import TeamImage from 'vectors/team_new.svg';

const Team: React.FC = () => {
  const history = useHistory();
  const project = useSelector(state => state.project.data);


  return (
    <Page title="Team">
      {project ? (
        <TeamImage />
      ) : (
        <>
          <p>You haven't selected a project</p>
          <button onClick={() => history.push('/')}>Go to Projects</button>
        </>
      )}
    </Page>
  );
};

export default Team;
