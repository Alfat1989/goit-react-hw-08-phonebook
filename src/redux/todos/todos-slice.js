import { createSlice } from '@reduxjs/toolkit';
import { getTodos, addTodo, deleteTodo } from './todos-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: {
    [getTodos.fulfilled](_, action) {
      return action.payload;
    },
    // [addTodo.fulfilled](state, action) {
    //   state = [...state, action.payload];
    // },
  },
});
export default contactsSlice.reducer;
