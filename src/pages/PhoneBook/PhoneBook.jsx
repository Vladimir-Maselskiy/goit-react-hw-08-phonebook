import { Title } from 'components/App/App.styled';
import { Contacts } from 'pages/PhoneBook/Contacts/Contacts';
import Filter from 'pages/PhoneBook/Filter/Filter';
import Form from 'pages/PhoneBook/Form/Form';
import { useTranslation } from 'react-i18next';

export const PhoneBook = () => {
  const { t } = useTranslation();
  return (
    <>
      <Form />
      <Title>{t('findContactsByName')}</Title>
      <Filter />
      <Title>{t('contacts')}</Title>
      <Contacts />
    </>
  );
};
