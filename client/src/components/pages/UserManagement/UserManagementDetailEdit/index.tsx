import * as i from 'types';
import React from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { CheckmarkIcon } from 'common/icon';
import { FormContainer } from 'common/form';
import { upsertUser } from 'ducks/users/detail';
import { useDispatch, useSelector } from 'hooks';
import { selectUserData, selectUserDataForForm } from 'selectors/user';

import UserManagementEditForm from '../components/UserManagementEditForm';
import UserManagementDetailPage from '../components/UserManagementDetailPage';

const UserManagementDetailEdit: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const formId = 'userManagementDetailEdit';
  const userId = useSelector(selectUserData)?.id;
  const defaultValues = useSelector(selectUserDataForForm);

  const onSubmit = (formValues: i.UpsertUserEditFormValues) => {
    if (!userId) return;

    dispatch(upsertUser(formValues, userId))
      .then(() => {
        toast.success('User successfully saved');
        history.push(`/users/${userId}`);
      });
  };

  return (
    <UserManagementDetailPage
      headerMainAction={{
        label: 'Save changes',
        icon: <CheckmarkIcon />,
        form: formId,
        type: 'submit',
      }}
    >
      <FormContainer<i.UpsertUserEditFormValues>
        {...{
          onSubmit,
          defaultValues,
          id: formId,
        }}
      >
        {() => (
          <UserManagementEditForm />
        )}
      </FormContainer>
    </UserManagementDetailPage>
  );
};

export default UserManagementDetailEdit;
