import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const getTodos = createAsyncThunk('contacts/get', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return error;
  }
});

const addTodo = createAsyncThunk('contacts/add', async contacts => {
  try {
    const { data } = await axios.post('/contacts', contacts);
    return data;
  } catch (error) {}
});

const deleteTodo = createAsyncThunk(
  'contact/delete',
  async todoId => {
    try {
      const { data } = axios.delete(`/contacts/${todoId}`);
      return data;
    } catch (error) {}
  }
);

export { getTodos, addTodo, deleteTodo };
