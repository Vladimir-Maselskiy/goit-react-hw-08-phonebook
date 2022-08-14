import ListItems from 'pages/PhoneBook/ListItems/ListItems';
import { Box } from 'pages/PhoneBook/Form/Form.styled';
import { ContactsList } from './Contacts.styled';

export function Contacts() {
  return (
    <Box>
      <ContactsList>
        <ListItems />
      </ContactsList>
    </Box>
  );
}
