import React from 'react';

import { MenuContainer, MenuItem } from 'modules/pageLayout';
import UserIcon from 'vectors/user.svg';

export const MainMenu: React.FC = () => {
  return (
    <MenuContainer>
      <MenuItem to="/" title="Dashboard" icon={null} exact />
      <MenuItem to="/users" title="Users" icon={<UserIcon />} />
    </MenuContainer>
  );
};
