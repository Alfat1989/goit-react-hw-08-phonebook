import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/auth/auth-operations';
import { getUserName } from '../redux/auth/auth-selectors';

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  // const logOutBtn = () => {
  //   dispatch(logOut());
  //   console.log('LOGOUT');
  // };

  return (
    <>
      <p style={{ margin: '0', marginLeft: 'auto' }}>{userName}</p>
      <button
        type="button"
        style={{ display: 'block', marginLeft: '10px' }}
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </button>
    </>
  );
};

export default UserMenu;
