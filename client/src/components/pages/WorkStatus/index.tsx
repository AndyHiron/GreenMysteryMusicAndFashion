import React from 'react';
import styled from 'styled-components';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

import { Page } from 'modules/pageLayout';
import { useSelector } from 'services/hooks';
import { useHistory } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

import { TabGroup } from 'common/interaction'

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

const WorkStatusContainer = styled.div`
  display: flex;
`;

const TabsContainer = styled.div`
  width: 300px;
`;

const tabs = [
  {
    to: '/work-status',
    exact: true,
    label: 'Project summary'
  },
  {
    to: '/work-status/graph',
    exact: false,
    label: 'Project graph '
  }
]

const WorkStatusSummary: React.FC = () => {
  return (
    <div>
      <div>summary bla bla bla</div>
      <div>summary bla bla bla</div>
      <div>summary bla bla bla</div>
    </div>
  )
}

const WorkStatus: React.FC = () => {
  const history = useHistory();
  const project = useSelector(state => state.project.data);
  const match = useRouteMatch();

  return (
    <Page title="WorkStatus">
      {project ? (
        <WorkStatusContainer>
          <TabsContainer>
            <TabGroup tabs={tabs} />
          </TabsContainer>
          <Switch>
            <Route
              path={match.path}
              component={Chart}
              exact
            />
            <Route
              path={`${match.path}/graph`}
              component={WorkStatusSummary}
              exact
            />
          </Switch>
         
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
