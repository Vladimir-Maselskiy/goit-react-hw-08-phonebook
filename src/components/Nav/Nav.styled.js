import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: 700;
  font-size: 1.2rem;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &.active {
    color: orange;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledNav = styled.nav`
  padding: 13px;
  border-bottom: 2px solid #ccc;
  text-align: center;
`;
