import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import UserManagementCreate from './UserManagementCreate';
import UserManagementDetailWrapper from './UserManagementDetailWrapper';
import UserManagementOverview from './UserManagementOverview';

const UserManagement: React.FC = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route
        path={match.path}
        component={UserManagementOverview}
        exact
      />
      <Route
        path={`${match.path}/create`}
        component={UserManagementCreate}
        exact
      />
      <Route
        path={`${match.path}/:userId`}
        component={UserManagementDetailWrapper}
      />
    </Switch>
  );
};

export default UserManagement;
