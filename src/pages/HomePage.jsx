import { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import VariantsExample from 'components/Button/Button';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const [show, setShow] = useState(true);
  const auth = useSelector(getIsLoggedIn);
  console.log('AUTH :', auth);

  const numbFn = () => {
    const s = 'sdfhkashKJHKJHlasjf';
    const hasCapital = s => !/^[a-zа-я\d]*$/.test(s);
    console.log(hasCapital(s));
  };

  return (
    <div>
      <h1>Welcome to Home page</h1>{' '}
      <button
        type="button"
        onClick={() => {
          numbFn();
        }}
      >
        click
      </button>
      <Button as="button" variant="success">
        Hi
      </Button>
      <Stack direction="horizontal" gap={2}>
        <Button variant="primary">123</Button>
        <Button bg="#000000">222</Button>
      </Stack>
      <VariantsExample
        btnName="Home"
        bgColor={'red'}
        btnTitle={'Home'}
        type={'button'}
      />
      <Button
        onClick={() => setShow(false)}
        variant="outline-success"
      >
        Close me y'all!
      </Button>
      {!show && (
        <Button onClick={() => setShow(true)}>Show Alert</Button>
      )}
    </div>
  );
};

export default HomePage;
