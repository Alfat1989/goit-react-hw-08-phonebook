import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ toPage }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onInput = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  const toNaigate = () => navigate(`${toPage}`, { replace: true });

  const onFormSubmit = async e => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .then(clearForm)
      .then(toNaigate)
      .catch('ERROR');
  };

  return (
    <div>
      <form
        onSubmit={onFormSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onInput={onInput}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            autoComplete="off"
            name="password"
            value={password}
            onInput={onInput}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
