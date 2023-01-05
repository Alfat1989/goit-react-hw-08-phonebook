const { NavLink } = require('react-router-dom');

const AuthNav = () => {
  return (
    <>
      <NavLink to="/registered" style={{ marginLeft: 'auto' }}>
        Registered
      </NavLink>
      <NavLink to="/login" style={{ marginLeft: '10px' }}>
        Login
      </NavLink>
    </>
  );
};

export default AuthNav;
