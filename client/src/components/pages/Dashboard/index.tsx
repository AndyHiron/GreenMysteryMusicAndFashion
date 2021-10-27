import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'services/hooks';
import { Page } from 'modules/pageLayout';

import { projects } from '../projects';


const ProjectContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.colors.orange};
  color: white;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const Project: React.FC<ProjectProps> = ({project}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClick = () => {
    dispatch({
      type: 'project/GET',
      payload: project
    })

    history.push('project-summary')
  }

  return (
    <ProjectContainer onClick={handleOnClick}>{project.name}: {project.title}</ProjectContainer>
  )
}

type ProjectProps = {
  project: Project
}

const Dashboard: React.FC = () => {
  return (
    <Page title="Dashboard">
      {projects.map(project => {
        return (
          <Project key={project.id} project={project} />
        )
      })}
    </Page>
  );
};

type Project = {
  id: number;
  name: string;
  title: string;
  summary: string;
}

export default Dashboard;
