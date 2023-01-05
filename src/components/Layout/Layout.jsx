import AuthNav from '../../components/AuthNav';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { lazy } from 'react';

const UserMenu = lazy(() => import('../UserMenu'));

const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <header>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '5px 15px',
            alignItems: 'center',
          }}
        >
          <nav
            style={{
              display: 'flex',
            }}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacts" style={{ marginLeft: '10px' }}>
              Contacts
            </NavLink>
          </nav>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
