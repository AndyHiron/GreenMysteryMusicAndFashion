import * as i from 'types';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Page } from 'modules/pageLayout';
import { PaginationTable } from 'modules/table';
import { getUsers } from 'ducks/users/list';
import { selectUsersData, selectUsersLoading, selectUsersPagination } from 'selectors/users';
import { useDispatch, useSelector } from 'services/hooks';
import { PlusIcon } from 'common/icon';

import { UserManagementOverviewFilters } from '../components/UserManagementOverviewFilters';
import tableHeader from './tableHeader';

const user1 = {
  account_status: 'CONFIRMED',
  created: '20/03/2021',
  date_joined: '01/05/2021',
  email: 'theo@gmail.com',
  first_name: 'Theo',
  groups: {
    id: '123',
    name: 'avanade',
  },
  id: '456',
  is_active: 'true',
  last_login: '20/09/2021',
  last_name: 'Macris',
  last_updated: '20/05/2021',
  url: 'theomacris.com',
};

const UserManagementOverview: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const memoTableHeader = React.useMemo(() => tableHeader(), []);
  const pagination = useSelector(selectUsersPagination);
  const isLoading = useSelector(selectUsersLoading);
  const users = [user1];

  return (
    <Page
      headerMainAction={{
        label: 'Add user',
        icon: <PlusIcon />,
        onClick: () => history.push('/users/create'),
      }}
      title="Users"
    >
      <UserManagementOverviewFilters />
      <PaginationTable<i.User>
        columns={memoTableHeader}
        pagination={pagination}
        data={users}
        isLoading={isLoading.get}
        onFetchData={(query) => dispatch(getUsers(query))}
        onRowClick={(row) => history.push(`/users/${row.id}`)}
      />
    </Page>
  );
};

export default UserManagementOverview;
