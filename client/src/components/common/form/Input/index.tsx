import * as React from 'react';
import * as i from 'types';

import { FormField } from '../FormField';
import { StyledInput, InputWrapper, InputIcon } from './styled';

export const Input = React.forwardRef<HTMLInputElement, i.InputProps>(({
  autoFocus, disabled, name, label, icon, iconPosition = 'left', error, readOnly,
  direction, description, handleIconClick, margin, ...props
}, ref) => {
  const IconComponent = icon as React.ElementType;

  return (
    <FormField {...{ name, label, error, direction, description, margin }}>
      <InputWrapper iconPosition={iconPosition}>
        <StyledInput
          {...{
            ...{ autoFocus, disabled, name, readOnly },
            ...(ref && { ref }),
          }}
          id={name}
          error={!!error}
          hasIcon={!!icon}
          {...props}
        />
        {icon && (
          <InputIcon readOnly={!handleIconClick} onClick={handleIconClick} disabled={disabled}>
            {IconComponent}
          </InputIcon>
        )}
      </InputWrapper>
    </FormField>
  );
});
