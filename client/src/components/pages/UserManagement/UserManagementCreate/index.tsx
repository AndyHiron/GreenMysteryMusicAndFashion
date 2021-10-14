import * as i from 'types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CheckmarkIcon } from 'common/icon';
import { FormContainer } from 'common/form';
import { Page } from 'modules/pageLayout';
import { upsertUser } from 'ducks/users/detail';
import { useDispatch } from 'hooks';
import { api } from 'services/api';

import UserManagementEditForm from '../components/UserManagementEditForm';

const UserManagementCreate: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const formId = 'userManagementCreate';

  const onSubmit = (formValues: i.UpsertUserEditFormValues) => {
    dispatch(upsertUser(formValues))
      .then((user) => {
        api.post({ path: `/dashboard/users/users/${user.id}/send_activation_email` })
          .then(() => {
            toast.success('User successfully created');
            history.push('/users');
          });
      });
  };

  return (
    <Page
      title="Add user"
      headerMainAction={{
        label: 'Save changes',
        icon: <CheckmarkIcon />,
        form: formId,
        type: 'submit',
      }}
    >
      <FormContainer<i.UpsertUserEditFormValues>
        {...{ onSubmit }}
        id={formId}
      >
        {() => (
          <UserManagementEditForm />
        )}
      </FormContainer>
    </Page>
  );
};

export default UserManagementCreate;
