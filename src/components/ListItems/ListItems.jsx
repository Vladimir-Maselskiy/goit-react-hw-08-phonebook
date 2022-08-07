import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactOperation,
  fetchContactOperation,
} from 'redux/operations';
import { ListItem } from './ListItems.styled';

function getVisibleContacts(contacts, filter) {
  if (filter === '') {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
}

export default function ListItems() {
  const contacts = useSelector(state =>
    getVisibleContacts(state.contacts.items, state.contacts.filter)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactOperation());
  }, [dispatch]);

  return (
    <>
      {contacts.map(contact => {
        const { name, phone, id } = contact;
        return (
          <ListItem key={id}>
            {name} {phone}
            <button
              id={id}
              onClick={() => dispatch(deleteContactOperation(id))}
            >
              Delete
            </button>
          </ListItem>
        );
      })}
    </>
  );
}
