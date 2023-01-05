import { lazy } from 'react';
import { useLocation } from 'react-router-dom';

const LoginForm = lazy(() =>
  import('../components/LoginForm/LoginForm')
);

const LoginPage = () => {
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/';
  console.log(fromPage);

  return (
    <>
      <h1>Login Page</h1>
      {fromPage}

      <LoginForm toPage={fromPage} />
    </>
  );
};

export default LoginPage;
