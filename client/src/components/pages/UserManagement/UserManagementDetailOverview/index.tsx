import * as i from 'types';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import { DataField, Row } from 'common/layout';
import { Text, Heading } from 'common/typography';
import { selectUserData, selectUserLoading } from 'selectors/user';
import { formatDate, fullDateWithTime, translateAccountStatus } from 'services';
import { useSelector } from 'services/hooks';
import { PenIcon } from 'common/icon';

import UserManagementDetailPage from '../components/UserManagementDetailPage';

const UserManagementDetailOverview: React.FC = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const user = useSelector(selectUserData);
  const isLoading = useSelector(selectUserLoading);

  return (
    <UserManagementDetailPage
      headerMainAction={{
        label: 'Edit user',
        icon: <PenIcon />,
        onClick: () => history.push(`${match.url}/edit`),
      }}
    >
      <Heading as="h1" margin="0 0 24px">Personal information</Heading>
      <Row>
        <DataField label="First name">
          <Text>
            {isLoading ? <Skeleton width={150} /> : user?.first_name}
          </Text>
        </DataField>
        <DataField label="Last name">
          <Text>
            {isLoading ? <Skeleton width={100} /> : user?.last_name}
          </Text>
        </DataField>
      </Row>
      <Row>
        <DataField label="Email address">
          <Text>
            {isLoading ? <Skeleton width={200} /> : user?.email}
          </Text>
        </DataField>
      </Row>
      <Row margin="40px 0 16px">
        <DataField label="Account created">
          <Text>
            {isLoading ? <Skeleton width={150} /> : user?.created && formatDate(user?.created, fullDateWithTime)}
          </Text>
        </DataField>
        <DataField label="Account status">
          <Text>
            {isLoading ? <Skeleton width={100} /> : translateAccountStatus[user?.account_status as i.UserAccountStatus]}
          </Text>
        </DataField>
      </Row>
      <Row>
        <DataField label="Last login">
          <Text>
            {isLoading ? <Skeleton width={150} /> : user?.last_login
              ? formatDate(user?.last_login, fullDateWithTime)
              : 'None'
            }
          </Text>
        </DataField>
      </Row>
      <Heading as="h1" margin="40px 0 24px">Groups</Heading>
      <Row>
        <DataField label="Group name">
          <Text>
            {isLoading ? <Skeleton width={150} /> : user?.groups.map((group) => group.name).join(', ')}
          </Text>
        </DataField>
      </Row>
    </UserManagementDetailPage>
  );
};

export default UserManagementDetailOverview;
