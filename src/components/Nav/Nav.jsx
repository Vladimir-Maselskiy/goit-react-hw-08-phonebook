import { StyledNavLink, StyledNav } from './Nav.styled';

export default function Nav() {
  return (
    <StyledNav>
      <StyledNavLink to="/register">Sing in</StyledNavLink>
      <StyledNavLink to="/login">Log in</StyledNavLink>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
    </StyledNav>
  );
}
