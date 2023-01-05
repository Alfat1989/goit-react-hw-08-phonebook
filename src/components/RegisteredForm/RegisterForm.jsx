import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import { getUserName } from '../../redux/auth/auth-selectors';

const RegisterForm = () => {
  const user = useSelector(getUserName);
  const dispatch = useDispatch();
  console.log(user);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
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

  const stateReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    console.log(name);
    stateReset();
    console.log(name);
  };

  return (
    <>
      <h1>Register Page</h1>
      <form
        onSubmit={onFormSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <label>
          Name
          <input type="text" name="name" value={name} onInput={onInput} />
        </label>
        <label>
          Email
          <input type="email" name="email" value={email} onInput={onInput} />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onInput={onInput}
          />
        </label>
        <button type="submit" style={{ display: 'block' }}>
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
