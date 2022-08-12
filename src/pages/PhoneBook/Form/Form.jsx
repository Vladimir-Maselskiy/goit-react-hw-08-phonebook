import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Box, ErrorStyled, InputForm } from './Form.styled';
import { addContactOperation } from 'redux/operations';

const nameInputId = nanoid();
const numberInputId = nanoid();
const initialValues = { name: '', number: '' };

let schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export default function Form() {
  // const contacts = useSelector(state => state.contacts.items);
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  function isContactInItems(contacts, newContact) {
    const { name } = newContact;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    return true;
  }

  function handleFormSubmit(values, actions) {
    if (!isContactInItems(contacts, values)) {
      return;
    }
    dispatch(addContactOperation(values));
    actions.resetForm();
  }

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleFormSubmit}
      >
        <InputForm>
          <label htmlFor={nameInputId}>
            Name
            <Field id={nameInputId} type="text" name="name" />
            <ErrorStyled name="name" component="div" />
          </label>
          <label htmlFor={numberInputId}>
            Number
            <Field id={numberInputId} type="tel" name="number" />
            <ErrorStyled name="number" component="div" />
          </label>
          <button type="submit">Add Contact</button>
        </InputForm>
      </Formik>
    </Box>
  );
}
