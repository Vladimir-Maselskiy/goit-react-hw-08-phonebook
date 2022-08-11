import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  margin: 10px;
  text-decoration: none;
  color: #333;
  font-weight: 700;
  &.active {
    color: orange;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledNav = styled.nav`
  padding: 10px;
  border-bottom: 2px solid #ccc;
`;
