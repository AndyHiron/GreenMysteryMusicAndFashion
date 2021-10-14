import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Loading } from 'common/general';
import { useAuthenticationActions } from 'hooks/useAuthentication';

const ConfirmSignup: React.FC = () => {
  const history = useHistory();
  const { activateAccount } = useAuthenticationActions();

  const onActivateAccount = async () => {
    await activateAccount()
      .then(() => {
        toast.success('Your account is activated. You can reset your password now.');
        history.replace('/reset-password');
      })
      .catch(() => {
        history.replace('/login');
      });
  };

  React.useEffect(() => {
    onActivateAccount();
  }, []);

  return (
    <Loading position="absolute" />
  );
};


export default ConfirmSignup;
