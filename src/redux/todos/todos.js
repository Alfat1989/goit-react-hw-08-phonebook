import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Todo'],
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
