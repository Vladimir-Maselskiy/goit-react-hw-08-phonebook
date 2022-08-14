import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Box, ErrorStyled, InputForm } from './LogInForm.styled';
import { logInUser } from 'redux/operations';
import { useTranslation } from 'react-i18next';

const emailInputId = nanoid();
const passwordInputId = nanoid();
const initialValues = { email: '', password: '' };

let schema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^(?!.*@.*@.*$)(?!.*@.*--.*\..*$)(?!.*@.*-\..*$)(?!.*@.*-$)((.*)?@.+(\..{1,11})?)$/,
      'Please use the correct format'
    )
    .required(),
  password: yup
    .string()
    .min(7, 'Password must be at least 8 characters long')
    .required(),
});

export default function LogInForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function handleFormSubmit(values, actions) {
    dispatch(logInUser(values));
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
          <label htmlFor={emailInputId}>
            {t('email')}
            <Field
              id={emailInputId}
              type="text"
              name="email"
              autoComplete="on"
            />
            <ErrorStyled name="email" component="div" />
          </label>
          <label htmlFor={passwordInputId}>
            {t('password')}
            <Field
              id={passwordInputId}
              type="password"
              name="password"
              autoComplete="on"
            />
            <ErrorStyled name="password" component="div" />
          </label>
          <button type="submit"> {t('logIn')}</button>
        </InputForm>
      </Formik>
    </Box>
  );
}
