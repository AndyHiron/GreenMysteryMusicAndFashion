import * as i from 'types';
import React from 'react';

import { Button } from 'common/interaction';

export const HeaderMainAction: React.FC<HeaderMainActionProps> = ({ action }) => {
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
  );
};

type HeaderMainActionProps = {
  action: i.HeaderAction;
};
