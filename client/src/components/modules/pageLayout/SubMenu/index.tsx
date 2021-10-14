import React from 'react';

import { MenuItem } from 'modules/pageLayout';
import { useAuthenticationActions } from 'hooks/useAuthentication';
import LogoutIcon from 'vectors/logout.svg';

import { SubMenuContainer } from './styled';

export const SubMenu: React.FC = () => {
  const { logout } = useAuthenticationActions();

  return (
    <SubMenuContainer>
      <MenuItem
        as="button"
        onClick={() => logout()}
        title="Log out"
        icon={<LogoutIcon />}
      />
    </SubMenuContainer>
  );
};
