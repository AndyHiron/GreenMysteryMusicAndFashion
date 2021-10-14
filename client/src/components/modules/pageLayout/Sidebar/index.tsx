import React from 'react';
import { Link } from 'react-router-dom';

import { MainMenu, SubMenu } from 'modules/pageLayout';

import { SidebarContainer, Logo, LogoSmall } from './styled';

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Link to="/">
        <Logo />
        <LogoSmall />
      </Link>
      <MainMenu />
      <SubMenu />
    </SidebarContainer>
  );
};

type SidebarProps = {
  isOpen: boolean;
};
