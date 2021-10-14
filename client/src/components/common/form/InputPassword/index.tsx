import * as i from 'types';
import React from 'react';

import { Input } from '../Input';
import { EyeClosedIconStyled, EyeOpenIconStyled } from './styled';

export const InputPassword: React.FC<InputPasswordProps> = (props) => {
  const [inputType, setInputType] = React.useState<i.InputTypes>('password');

  return (
    <Input
      type={inputType}
      iconPosition="right"
      icon={inputType === 'password' ? <EyeClosedIconStyled /> : <EyeOpenIconStyled />}
      handleIconClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}
      {...props}
    />
  );
};

type InputPasswordProps = i.InputProps;
