import styled, { css } from 'styled-components';
import * as i from 'types';

import { Label } from '../Label';
import { InputWrapper } from '../Input/styled';
import { StyledTextarea } from '../Textarea/styled';

export const FormFieldsWrapper = styled.div<FormFieldsWrapperProps>`
  flex-basis: 100%;
  max-width: 100%;
  margin: ${({ margin }) => margin || '0 0 24px'};
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;

  ${Label} {
    flex-basis: 100%;
  }

  ${({ direction }) => direction === 'horizontal' && css`
    align-items: center;

    ${Label} {
      margin-bottom: 0;
      width: 100px;
      flex-basis: auto;
    }

    ${InputWrapper} {
      width: auto;
      flex: 2;
    }

    ${FormFieldDescription} {
      margin-left: 100px;
    }

    ${StyledTextarea} {
      width: auto;
      flex: 2;
    }
  `};
`;

type FormFieldsWrapperProps = Pick<i.FormFieldProps, 'direction'>
& Pick<i.FormFieldProps, 'margin'>;

export const FormFieldDescription = styled.span<FormFieldDescriptionProps>`
  width: 100%;
  margin-top: 8px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.notoSans};
  display: inline-block;
  color: ${({ theme }) => theme.colors.gray};

  ${({ isError }) => isError && css`
    color: ${({ theme }) => theme.colors.red};
  `}
`;

type FormFieldDescriptionProps = {
  isError?: boolean;
};
