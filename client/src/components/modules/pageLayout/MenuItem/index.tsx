import React from 'react';

import { MenuItemContainer, MenuItemIcon } from './styled';

export const MenuItem: React.FC<MenuItemProps> = ({ as, exact, onClick, icon, to, title }) => {
  const IconComponent = icon as React.ElementType;

  return (
    <MenuItemContainer to={to} exact={exact} as={as} onClick={onClick}>
      <MenuItemIcon>{IconComponent || 'X'}</MenuItemIcon>
      <span>{title}</span>
    </MenuItemContainer>
  );
};

type MenuItemProps = {
  as?: any;
  exact?: boolean;
  icon?: React.ReactNode;
  to?: string;
  title: string;
  onClick?: () => void;
};
