import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  console.log('LOCTION :', location);
  const auth = useSelector(getIsLoggedIn);
  console.log('AUTH => ', auth);

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export { RequireAuth };
