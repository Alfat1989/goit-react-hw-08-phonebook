import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/todos/todos-operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        break;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(addTodo({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <>
      <div>
        <form onSubmit={onFormSubmit}>
          <input
            name="name"
            value={name}
            placeholder="name"
            onInput={onInput}
          />
          <input
            name="number"
            value={number}
            placeholder="number"
            onInput={onInput}
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
