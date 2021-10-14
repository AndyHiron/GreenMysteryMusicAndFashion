import styled from 'styled-components';

import { media } from 'styles/utils';

export const Label = styled.label<LabelProps>`
  font-size: 12px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.notoSans};
  color: ${({ theme }) => theme.colors.gray};
  text-transform: uppercase;
  letter-spacing: 1.6px;
  margin-bottom: 8px;
  display: inline-block;
  cursor: default;

  ${media.desktop<LabelProps>`
    font-size: 14px;
  `}
`;

export type LabelProps = {
  htmlFor?: string;
};
