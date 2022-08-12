import { LogOut } from 'components/LogOut/LogOut';
import Nav from 'components/Nav/Nav';
import { PrivateRout } from 'components/PrivateRout/PrivateRout';
import LogInForm from 'pages/LogInForm/LogInForm';
import { PhoneBook } from 'pages/PhoneBook/PhoneBook';
import SingUpForm from 'pages/SingUpForm/SingUpForm';
import React, { useEffect } from 'react';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { axiosAPI, fetchContactOperation } from 'redux/operations';
import { Container } from './App.styled';

export function App() {
  const dispatch = useDispatch();
  const isLogIn = useSelector(state => state.auth.isLogIn);
  const persistToken = useSelector(state => state.auth.token);

  useEffect(() => {
    if (!persistToken) return;
    axiosAPI.setToken(persistToken);
    dispatch(fetchContactOperation());
  }, [persistToken, dispatch]);

  return (
    <Container>
      React homework template
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/register" element={<SingUpForm />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/contacts" element={<PrivateRout />}>
            <Route index path="" element={<PhoneBook />} />
          </Route>
        </Routes>
      </Suspense>
      {isLogIn && <LogOut />}
    </Container>
  );
}
