import { LogOut } from 'components/LogOut/LogOut';
import Nav from 'components/Nav/Nav';
import LogInForm from 'pages/LogInForm/LogInForm';
import SingUpForm from 'pages/SingUpForm/SingUpForm';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import Form from '../Form/Form';
import { Container, Title } from './App.styled';

export function App() {
  return (
    <Container>
      React homework template
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/register" element={<SingUpForm />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/contacts" element={<div>Контакти</div>} />
        </Routes>
      </Suspense>
      <LogOut />
      <Form />
      <Title>Find contacts by name</Title>
      <Filter />
      <Title>Contacts</Title>
      <Contacts />
    </Container>
  );
}
