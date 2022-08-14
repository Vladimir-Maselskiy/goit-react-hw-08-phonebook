import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactOperation } from 'redux/operations';
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
  const { t } = useTranslation();
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const contacts = getVisibleContacts(state.contacts, state.filter);

  return (
    <>
      {contacts &&
        contacts.map(contact => {
          const { name, number, id } = contact;
          return (
            <ListItem key={id}>
              {name} {number}
              <button
                id={id}
                onClick={() => dispatch(deleteContactOperation(id))}
              >
                {t('delete')}
              </button>
            </ListItem>
          );
        })}
    </>
  );
}
