import React from 'react';
import styled from 'styled-components';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

import { TabGroup } from 'common/interaction'
import { useSelector } from 'services/hooks';
import { Page } from 'modules/pageLayout';
import MilestoneSvg from 'vectors/milestones.svg';
import KanbanSvg from 'vectors/kanban.svg';


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
    label: 'Project milestones '
  },  
  {
    to: '/work-status/spend',
    exact: false,
    label: 'Project spend'
  },
  {
    to: '/work-status/risksandissues',
    exact: false,
    label: 'Risks and Issues '
  },  
  {
    to: '/work-status/dependencies',
    exact: false,
    label: 'Dependencies '
  },
  {
    to: '/work-status/sprint',
    exact: false,
    label: 'Current sprint '
  }
]

const WorkMilestonesContainer = styled.div`
  margin: 200px 0;
`;

const WorkMilestonesPlaceholder: React.FC = () => {
  return (
    <div>
      <div></div>
      <WorkMilestonesContainer>
        <MilestoneSvg />
      </WorkMilestonesContainer>
      <div></div>
    </div>
  )
}
const WorkRisksAndIssuesPlaceholder: React.FC = () => {
  return (
    <div>
      <div>Risks and Issues</div>
      <div></div>
      <div>Risks</div>
      <div></div>
      <div>ID  Title  Description  Risk Likelihood  Risk Severity  Assignee  Action</div>
      <div></div>
      <div></div>
      <div></div>
      <div>Issues</div>
      <div></div>
      <div>ID  Title  Description  Impact</div>
      <div></div>
    </div>
  )
}
const WorkDependenciesPlaceholder: React.FC = () => {
  return (
    <div>
      <div>Dependencies</div>
      <table>
        <tr><td>ID</td><td>Title</td><td>Description</td></tr>
      </table>
    </div>
  )
}


const WorkCurrentSprint: React.FC = () => {
  return (
    <div>
      <div></div>
      <div>
        <KanbanSvg />
      </div>
      <div></div>
    </div>
  )
}

const WorkStatus: React.FC = () => {
  const history = useHistory();
  const project = useSelector(state => state.project.data);
  const match = useRouteMatch();

  return (
    <Page title="WorkStatus" headerTabs={tabs}>
      {project ? (
          <Switch>
            <Route
              path={match.path}
              component={WorkMilestonesPlaceholder}
              exact
            />
            <Route
             path={`${match.path}/spend`}
             component={Chart}
              exact
            />
            <Route
              path={`${match.path}/risksandissues`}
              component={WorkRisksAndIssuesPlaceholder}
              exact
            />
            <Route
              path={`${match.path}/dependencies`}
              component={WorkDependenciesPlaceholder}
              exact
            />
            <Route
              path={`${match.path}/sprint`}
              component={WorkCurrentSprint}
              exact
            />
          </Switch>
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
