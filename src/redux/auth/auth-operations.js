import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { userLogin } from '../../services/services';

// import { register } from '../../services/services';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async credentials => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return 'Плохой запрос';
    }
  }
);

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return error;
  }
});

const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return error;
  }
});

const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
      // return state;
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      return error;
    }
  }
);

export { register, login, logOut, refresh };
