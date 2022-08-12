import { Title } from 'components/App/App.styled';
import { Contacts } from 'pages/PhoneBook/Contacts/Contacts';
import Filter from 'pages/PhoneBook/Filter/Filter';
import Form from 'pages/PhoneBook/Form/Form';

import { useDispatch } from 'react-redux';
import { fetchContactOperation } from 'redux/operations';

export const PhoneBook = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Form />
      <Title>Find contacts by name</Title>
      <Filter />
      <Title>Contacts</Title>
      <Contacts />
    </>
  );
};
