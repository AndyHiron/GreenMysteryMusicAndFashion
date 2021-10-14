import styled from 'styled-components';

import { StyledButton } from 'common/interaction/Button/styled';
import { FormFieldsWrapper } from 'common/form/FormField/styled';
import { media } from 'styles/utils';

export const SearchForm = styled.form`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;

  ${StyledButton} {
    margin-top: 16px;
    width: 100%;
  }

  ${FormFieldsWrapper} {
    width: 100%;
    margin: 0;
  }

  ${media.tablet`
    flex-direction: row;
    width: auto;

    ${FormFieldsWrapper} {
      width: auto;
      margin: 0 24px 0 0;
    }

    ${StyledButton} {
      margin-top: 0;
      width: auto;
    }
  `}
`;
