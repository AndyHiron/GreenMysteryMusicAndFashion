import * as i from 'types';
import React from 'react';
import { toast } from 'react-toastify';

import { ConfirmModal } from 'common/general';
import { Page } from 'modules/pageLayout';
import { activateUser } from 'ducks/users/detail';
import { selectUserData, selectUserLoading } from 'selectors/user';
import { translateUserIsActive } from 'services';
import { useDispatch, useModal, useSelector } from 'services/hooks';

const UserManagementDetailPage: React.FC<UserManagementDetailPageProps> = ({
  children, headerMainAction,
}) => {
  const dispatch = useDispatch();
  const [isActivateModalOpen, openActivateModal, closeActivateModal] = useModal();
  const user = useSelector(selectUserData);
  const isLoading = useSelector(selectUserLoading);

  const onSetUserActive = () => {
    if (!user) return;

    dispatch(activateUser(user.id, user.is_active ? 'deactivate' : 'activate'))
      .then(() => {
        const successMessage = user.is_active
          ? 'User has been deactivated'
          : 'User has been activated';

        toast.success(successMessage);
        closeActivateModal();
      });
  };

  return (
    <Page
      title={`${user?.first_name} ${user?.last_name}`}
      headerActions={[
        {
          label: user?.is_active ? 'Deactivate user' : 'Activate user',
          onClick: () => openActivateModal(),
        },
      ]}
      headerMainAction={headerMainAction}
      isLoading={isLoading}
      statusLabel={translateUserIsActive(user?.is_active)}
    >
      {isActivateModalOpen && (
        <ConfirmModal
          title={user?.is_active ? 'Deactivate user' : 'Activate user'}
          text={`Are you sure you want to ${user?.is_active ? 'deactivate' : 'activate'} this user?`}
          closeModal={closeActivateModal}
          onConfirm={() => onSetUserActive()}
          confirmButtonVariant={user?.is_active ? 'warning' : undefined}
        />
      )}
      {children}
    </Page>
  );
};

type UserManagementDetailPageProps = {
  children: React.ReactNode;
  headerMainAction?: i.HeaderAction;
};

export default UserManagementDetailPage;
