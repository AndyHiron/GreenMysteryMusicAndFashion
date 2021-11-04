import * as i from 'types';
import React from 'react';

import { Button } from 'common/interaction';

import {
  HeaderActionsContainer,
  HeaderActionsButton,
  HeaderActionsDropdown,
  HeaderActionsDropdownButton,
  DotsIcon,
} from './styled';

export const HeaderActions: React.FC<HeaderActionsProps> = ({ actions }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <HeaderActionsContainer>
      {actions.map(action => {
        return (
          <Button
            onClick={action.onClick}
            type={action.type || 'button'}
            isLoading={action.isLoading}
            disabled={action.isDisabled}
            form={action.form}
            icon={action.icon}
            iconPosition="right"
            iconOnlyOnMobile
        >
          {action.label}
        </Button>
        )

      })}
    </HeaderActionsContainer>
  );
};

type HeaderActionsProps = {
  actions: i.HeaderAction[];
};
