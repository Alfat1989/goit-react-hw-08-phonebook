import { useDispatch } from 'react-redux';
import { deleteTodo } from 'redux/todos/todos-operations';

const DeleteBtn = ({ todoId }) => {
  const dispatch = useDispatch();

  //   const onBtnDelete = () => {};

  return (
    <>
      <button type="button" onClick={() => dispatch(deleteTodo(todoId))}>
        Delete
      </button>
    </>
  );
};

export default DeleteBtn;
