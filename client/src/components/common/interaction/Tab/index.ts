import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Tab = styled(NavLink)`
  height: 48px;
  display: flex;
  margin: 5px 0;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 600;
  text-decoration: none;
  position: relative;

  &.active {
    color: ${({ theme }) => theme.colors.green};

    &:after {
      content: '';
      height: 2px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${({ theme }) => theme.colors.green};
    }
  }
`;
