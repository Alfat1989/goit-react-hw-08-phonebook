import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './auth/auth-slice';
import contactsSlice from './todos/todos-slice';
import { contactsApi } from './todos/todos';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    // [contactsApi.reducerPath]: contactsApi.reducer,
    contacts: contactsSlice,
    auth: persistReducer(authPersistConfig, authSlice),
    // auth: authSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export const persist = persistStore(store);
