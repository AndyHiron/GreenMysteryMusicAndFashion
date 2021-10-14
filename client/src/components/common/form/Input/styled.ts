import styled, { css } from 'styled-components';
import * as i from 'types';

import { hexToRgba } from 'services/style';

export const InputFieldCss = css<InputProps>`
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 48px;
  padding: 0 8px;
  font-family: ${({ theme }) => theme.fonts.notoSans};
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  transition: border-color 0.2s ease;
  border: 1px solid ${({ theme }) => hexToRgba(theme.colors.black, '10%')};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.interactiveElement};
  -webkit-appearance: none;
  line-height: normal;
  overflow: hidden;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:active,
  &:focus {
    caret-color: ${({ theme }) => theme.colors.green};
    border-color: ${({ theme }) => theme.colors.green};
    outline: none;
  }

  &[readonly],
  &[disabled] {
    border-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.gray};
  }

  ${({ error }) => error && css`
    border-color: ${({ theme }) => theme.colors.red};

    &:active,
    &:focus {
      caret-color: ${({ theme }) => theme.colors.red};
      border-color: ${({ theme }) => theme.colors.red};
      outline: none;
    }
  `};

  ${({ as }) => as === 'textarea' && css`
    max-width: 100%;
    min-height: 150px;
    padding: 8px;
    resize: vertical;
    overflow-y: scroll;
  `};

  ${({ hasIcon }) => hasIcon && css`
    padding-left: 60px;
  `}
`;

export type InputProps = Pick<i.DefaultInputProps, 'autoFocus'> & {
  error?: boolean;
  hasIcon?: boolean;
  as?: 'textarea';
};

export const StyledInput = styled.input`
  ${InputFieldCss};
`;

export const InputIcon = styled.div<IconWrapperProps>`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  svg {
    max-width: 30px;
    max-height: 100%;
    fill: ${({ theme }) => theme.colors.gray};
  }

  ${({ readOnly }) => readOnly && css`
    opacity: .4;
  `};
`;

type IconWrapperProps = Pick<i.DefaultInputProps, 'readOnly' | 'disabled'>;

export const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  display: flex;
  width: 100%;

  ${({ iconPosition }) => iconPosition === 'right' && css`
    ${StyledInput} {
      padding: 0 60px 0 8px;
    }

    ${InputIcon} {
      left: auto;
      right: 16px;
    }
  `}
`;

type InputWrapperProps = Pick<i.DefaultInputProps, 'iconPosition'>;
