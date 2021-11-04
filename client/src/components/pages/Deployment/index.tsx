import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

import { Page } from 'modules/pageLayout';
import { useSelector } from 'services/hooks';
import { useHistory } from 'react-router-dom';
import { CheckmarkIcon } from 'common/icon';
import { SearchIcon } from 'common/icon';

interface ChartProps {
  num: number
}

const volumes = [
  {
    date: '201911',
    pv: 200,
    uv: 500,
    amt: 100,
  },
  {
    date: '201912',
    pv: 400,
    uv: 100,
    amt: 499,
  },
  {
    date: '202001',
    pv: 100,
    uv: 200,
    amt: 300,
  },
]

const Chart: React.FC<ChartProps> = props => {
  const num = 2;
  const keys = ['pv', 'uv', 'amt']
  const colors = ['#f00', '#0a0', '#00f']

  return (
    <LineChart width={900} height={500} data={volumes}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" type="category" />
      <YAxis type="number" />
      <Tooltip />
      <Legend />
      {[...new Array(num)].fill(null).map((_, index) => {
        if (index >= 3) return null
        return (
          <Line type="monotone" dataKey={keys[index]} stroke={colors[index]} activeDot={{ r: 2 }} />
        )
      })}
    </LineChart>
  )
}


const Deployment: React.FC = () => {
  const history = useHistory();
  const project = useSelector(state => state.project.data);

  const actions = [
    {
      label: 'Azure arc',
      icon: <CheckmarkIcon />,
      onClick: () => {
        window.open(project.arcUrl, "_blank", 'noopener,noreferrer')?.focus();
      },
    },
    {
      label: 'Azure portal',
      icon: <SearchIcon />,
      onClick: () => {
        window.open(project.portalUrl, "_blank", 'noopener,noreferrer')?.focus();
      },
    }
  ]

  const DeploymentContainer = styled.div`
  `;

  return (
    <Page 
      title="Deployment"
      headerActions={project && actions}
    >
      {project ? (
        <DeploymentContainer>
          <Chart num={3} />
        </DeploymentContainer>
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
