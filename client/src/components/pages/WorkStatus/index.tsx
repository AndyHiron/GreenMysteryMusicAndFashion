import React from 'react';
import styled from 'styled-components';

import { Page } from 'modules/pageLayout';
import { useSelector } from 'services/hooks';
import { useHistory } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

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
  const { num } = props
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

const WorkStatusContainer = styled.div`
  display: flex;
`;

const SummaryContainer = styled.div`
  width: 300px;
`;

const WorkStatus: React.FC = () => {
  const history = useHistory();
  const project = useSelector(state => state.project.data);


  return (
    <Page title="WorkStatus">
      {project ? (
        <WorkStatusContainer>
          <SummaryContainer>
            <p>
              {project.summary}
              {project.summary}
              {project.summary}
              {project.summary}
            </p>
          </SummaryContainer>
          <Chart num={2} />
        </WorkStatusContainer>
      ) : (
        <>
          <p>You haven't selected a project</p>
          <button onClick={() => history.push('/')}>Go to Projects</button>
        </>
      )}
    </Page>
  );
};

export default WorkStatus;
