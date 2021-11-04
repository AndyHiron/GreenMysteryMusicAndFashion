import React from 'react';
import styled from 'styled-components';

import { Page } from 'modules/pageLayout';
import { useSelector } from 'services/hooks';
import { useHistory } from 'react-router-dom';

const SummaryText = styled.p`
  width: 300px;
`;

const Summary: React.FC = () => {
  const history = useHistory();
  const project = useSelector(state => state.project.data);

  console.log(project)
  return (
    <Page title="Project Summary">
      {project ? (
        <SummaryText>
          {project.summary}
           placeholder summary text to showcase multiline
           placeholder summary text to showcase multiline
           placeholder summary text to showcase multiline
           placeholder summary text to showcase multiline
           placeholder summary text to showcase multiline
           placeholder summary text to showcase multiline
           placeholder summary text to showcase multiline
           placeholder summary text to showcase multiline
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
