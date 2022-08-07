// import PropTypes from 'prop-types';
import ListItems from 'components/ListItems/ListItems';
import { Box } from 'components/Form/Form.styled';
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
