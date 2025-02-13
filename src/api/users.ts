import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation<{ id: number }, string>({
      query: (name) => ({
        url: `/users?username=${name}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useCreateUserMutation } = userApi;
