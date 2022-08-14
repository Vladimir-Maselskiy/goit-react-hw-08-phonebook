import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { StyledNavLink, StyledNav } from './Nav.styled';

export default function Nav() {
  const { t } = useTranslation();
  const isLogIn = useSelector(state => state.auth.isLogIn);
  return (
    <StyledNav>
      {isLogIn ? (
        <StyledNavLink to="/contacts">{t('contacts')}</StyledNavLink>
      ) : (
        <>
          <StyledNavLink to="/register">{t('singUp')}</StyledNavLink>
          <StyledNavLink to="/login">{t('logIn')}</StyledNavLink>
        </>
      )}
    </StyledNav>
  );
}
