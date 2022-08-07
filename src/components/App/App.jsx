import { Contacts } from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import Form from '../Form/Form';
import { Container, Title } from './App.styled';

export function App() {
  return (
    <Container>
      React homework template
      <Form />
      <Title>Find contacts by name</Title>
      <Filter />
      <Title>Contacts</Title>
      <Contacts />
    </Container>
  );
}
