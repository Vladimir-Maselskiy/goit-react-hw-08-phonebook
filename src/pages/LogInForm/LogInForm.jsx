import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
// import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Box, ErrorStyled, InputForm } from './LogInForm.styled';
import { logInUser } from 'redux/operations';

const emailInputId = nanoid();
const passwordInputId = nanoid();
const initialValues = { email: '', password: '' };

// let schema = yup.object().shape({
//   name: yup
//     .string()
//     .matches(
//       /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
//       "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//     )
//     .required(),
//   password: yup
//     .string()
//     .matches(
//       /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
//       'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//     )
//     .required(),
// });

export default function LogInForm() {
  const dispatch = useDispatch();

  function handleFormSubmit(values, actions) {
    dispatch(logInUser(values));
    // onSubmit(values);
    actions.resetForm();
  }
  return (
    <Box>
      <Formik
        initialValues={initialValues}
        // validationSchema={schema}
        onSubmit={handleFormSubmit}
      >
        <InputForm>
          <label htmlFor={emailInputId}>
            E-mail
            <Field
              id={emailInputId}
              type="text"
              name="email"
              autoComplete="on"
            />
            <ErrorStyled name="email" component="div" />
          </label>
          <label htmlFor={passwordInputId}>
            Password
            <Field
              id={passwordInputId}
              type="text"
              name="password"
              autoComplete="on"
            />
            <ErrorStyled name="password" component="div" />
          </label>
          <button type="submit">Log In</button>
        </InputForm>
      </Formik>
    </Box>
  );
}
