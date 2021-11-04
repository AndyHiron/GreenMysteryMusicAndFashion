import React from 'react';
import styled from 'styled-components';

import { Page } from 'modules/pageLayout';
import { useSelector } from 'services/hooks';
import { useHistory } from 'react-router-dom';

const SummaryText = styled.p`
  width: 900px;
`;

const Summary: React.FC = () => {
  const history = useHistory();
  const project = useSelector(state => state.project.data);

  console.log(project)
  return (
    <Page title="Project Summary">
      {project ? (
        <SummaryText>
          <h1>{project.summary}</h1>
          <p>
          <div>The Blue Sheen "Market Place Platform" goal is to improve the user experience of the Blue Sheen website.</div>
          </p>
          <p>
          <div>A visible change will be that key areas of the UI design will be modernised. In addition, redundancy in the </div>
          <div>database schema and the API will be removed and measures will be taken to improve response times. The </div>
          <div>infrastructure utilised in the AWS cloud will also be re-examined for efficiency, both in terms of cost and </div>
          <div>performance.</div>
          </p>
        </SummaryText>
      ) : (
        <>
          <p>You haven't selected a project</p>
          <button onClick={() => history.push('/')}>Go to Projects</button>
        </>
      )}
    </Page>
  );
};

export default Summary;
