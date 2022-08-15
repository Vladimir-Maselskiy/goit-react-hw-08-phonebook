import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { axiosAPI, fetchContactOperation } from 'redux/operations';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { Container } from './App.styled';
import SingUpForm from 'pages/SingUpForm/SingUpForm';
import LogInForm from 'pages/LogInForm/LogInForm';
import { PhoneBook } from 'pages/PhoneBook/PhoneBook';
import { PrivateRout } from 'components/PrivateRout/PrivateRout';
import { PublicRoute } from '../PublicRoute/PublicRoute';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lihgtTheme } from 'data/theme';
import { AppBar } from 'components/AppBar/AppBar';
import { translationsEn } from 'data/en';
import { translationsUk } from 'data/uk';
import NotFound from 'components/NotFound/NotFound';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    uk: { translation: translationsUk },
  },
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
});

export function App() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    auth: { token: persistToken },
    themeMode,
    locale,
  } = useSelector(state => state);

  useEffect(() => {
    if (!persistToken) return;
    axiosAPI.setToken(persistToken);
    dispatch(fetchContactOperation());
  }, [persistToken, dispatch]);

  useEffect(() => {
    i18n.changeLanguage(locale || 'en');
  }, [locale]);

  return (
    <ThemeProvider theme={themeMode === 'light' ? lihgtTheme : darkTheme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Container>
          {t('appTitle')}
          <AppBar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/register" element={<PublicRoute />}>
                <Route index path="" element={<SingUpForm />} />
              </Route>
              <Route path="/login" element={<PublicRoute />}>
                <Route index path="" element={<LogInForm />} />
              </Route>
              <Route path="/contacts" element={<PrivateRout />}>
                <Route index path="" element={<PhoneBook />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Container>
      </Suspense>
    </ThemeProvider>
  );
}
