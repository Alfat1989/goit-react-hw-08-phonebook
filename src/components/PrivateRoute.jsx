import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const PrivateRoute = ({ children, ...routeProps }) => {
  const Redirect = <Navigate to="login" replace={true} />;
  const isLoggedIn = useSelector(getIsLoggedIn());
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect />}
    </Route>
  );
};

export default PrivateRoute;
