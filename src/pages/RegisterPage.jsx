import { lazy } from 'react';

const RegisterForm = lazy(() =>
  import('../components/RegisteredForm/RegisterForm')
);

const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
