import { useSelector } from 'react-redux';
import { StyledNavLink, StyledNav } from './Nav.styled';

export default function Nav() {
  const isLogIn = useSelector(state => state.auth.isLogIn);
  return (
    <StyledNav>
      {isLogIn ? (
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      ) : (
        <>
          <StyledNavLink to="/register">Sing in</StyledNavLink>
          <StyledNavLink to="/login">Log in</StyledNavLink>
        </>
      )}
    </StyledNav>
  );
}
