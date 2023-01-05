import { getTodos } from 'redux/todos/todos-operations';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { refresh } from 'redux/auth/auth-operations';

const ContactForm = lazy(() =>
  import('../components/ContactForm/ContactForm')
);
const DeleteBtn = lazy(() =>
  import('components/DeleteBtn/DeleteBtn')
);

const ContactPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  console.log('CONTACTS', contacts);
  // const { data = [], error, isLoading } = useGetContactsQuery();
  useEffect(() => {
    dispatch(refresh());
    dispatch(getTodos());
  }, [dispatch]);

  const children = contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        <p>
          <b>{name}</b> : {number}
        </p>
        <DeleteBtn todoId={id} />
      </li>
    );
  });

  return (
    <>
      <h1>Contacts</h1>
      <ContactForm />
      <ul>{children}</ul>
    </>
  );
};

export default ContactPage;
