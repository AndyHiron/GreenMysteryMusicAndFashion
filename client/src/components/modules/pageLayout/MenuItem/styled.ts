import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { media } from 'styles/utils';

export const MenuItemContainer = styled(NavLink)`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black.light};
  font-weight: 600;
  text-decoration: none;
  margin-top: 16px;
  padding: 0 16px;
  border-radius: 8px;
  -webkit-appearance: none;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  &:first-of-type {
    margin-top: 0;
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.interactiveElement};

    & svg {
      fill: ${({ theme }) => theme.colors.white};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};

      & svg {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black.light};

    & svg {
      fill: ${({ theme }) => theme.colors.black.light};
    }
  }

  & svg {
    height: 24px;
    width: 24px;
    fill: ${({ theme }) => theme.colors.black.light};
    flex-shrink: 0;
  }

  ${media.desktop`
    > span {
      display: none;
    }
  `}

  ${media.large`
    > span {
      display: inline;
    }
  `}
`;

export const MenuItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  margin-right: 16px;
  flex-shrink: 0;

  & svg {
    fill: ${({ theme }) => theme.colors.black.light};
  }
`;
