import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

import {
  TableCell, TableExpandableCell, TableHeadCell, TableRow, TableWrapper,
} from 'common/table';

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PaginationTableContainer = styled.div`
  height: 100%;
  flex: 1;
  margin-bottom: 24px;

  ${TableWrapper} {
    margin-bottom: 0;
  }
`;

export const PaginationTableBody = styled.div`
  position: relative;
  width: 100%;
  min-height: 48px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  box-shadow: ${({ theme }) => theme.shadows.overlay};
  border-radius: 4px;
`;

export const PaginationTableRow = styled(TableRow)<PaginationTableRowProps>`
  ${TableCell} {
    ${media.tablet`
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
    `}
  }

  ${TableHeadCell},
  &:last-child ${TableCell} {
    border-bottom: 0;
  }

  ${({ isSelectable }) => isSelectable && css`
    ${TableCell} {
      padding: 8px 24px;
    }
  `}

  ${({ isClickable }) => isClickable && css`
    cursor: pointer;
  `}

  ${({ expanded }) => expanded && css`
    background-color: ${({ theme }) => theme.colors.black};
  `}

  ${({ depth }) => depth && depth > 0 && css`
    ${TableExpandableCell}:first-child {
      padding-left: ${depth * 32}px;
    }
  `}
`;

type PaginationTableRowProps = {
  isClickable?: boolean;
  isSelectable?: boolean;
  expanded?: boolean;
  depth?: number;
};

export const PaginationEmptyRow = styled(PaginationTableRow)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  font-size: 14px;

  ${media.desktop`
    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
    }
  `}
`;
