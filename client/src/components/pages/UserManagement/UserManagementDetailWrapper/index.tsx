import React from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

import { actions as usersDetailActions, getUser } from 'ducks/users/detail';
import { useDispatch, useSelector } from 'hooks';
import { selectUserData } from 'selectors/user';

import UserManagementDetailEdit from '../UserManagementDetailEdit';
import UserManagementDetailOverview from '../UserManagementDetailOverview';

const UserManagementDetailWrapper: React.FC = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const params = useParams<{ userId: string }>();

  const user = useSelector(selectUserData);

  React.useEffect(() => {
    if (params.userId !== user?.id) {
      dispatch(getUser(params.userId));
    }

    return () => {
      dispatch(usersDetailActions.resetUserDetail());
    };
  }, [params.userId]);

  return (
    <Switch>
      <Route
        path={match.path}
        component={UserManagementDetailOverview}
        exact
      />
      <Route
        path={`${match.path}/edit`}
        component={UserManagementDetailEdit}
        exact
      />
    </Switch>
  );
};

export default UserManagementDetailWrapper;
