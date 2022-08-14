import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
// import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Box, ErrorStyled, InputForm } from './SingUpForm.styled';
import { singUpUser } from 'redux/operations';
import { useTranslation } from 'react-i18next';

const nameInputId = nanoid();
const emailInputId = nanoid();
const passwordInputId = nanoid();
const initialValues = { name: '', email: '', password: '' };

// let schema = yup.object().shape({
//   name: yup
//     .string()
//     .matches(
//       /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
//       "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//     )
//     .required(),
//   phone: yup
//     .string()
//     .matches(
//       /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
//       'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//     )
//     .required(),
// });

export default function SingUpForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function handleFormSubmit(values, actions) {
    dispatch(singUpUser(values));
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
          <label htmlFor={nameInputId}>
            {t('name')}
            <Field id={nameInputId} type="text" name="name" />
            <ErrorStyled name="name" component="div" />
          </label>
          <label htmlFor={emailInputId}>
            {t('email')}
            <Field id={emailInputId} type="text" name="email" />
            <ErrorStyled name="email" component="div" />
          </label>
          <label htmlFor={passwordInputId}>
            {t('password')}
            <Field id={passwordInputId} type="text" name="password" />
            <ErrorStyled name="password" component="div" />
          </label>
          <button type="submit">{t('singUp')}</button>
        </InputForm>
      </Formik>
    </Box>
  );
}
