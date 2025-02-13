import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import User from "../entities/User";

export const userApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation<User, string>({
      query: (name) => ({
        url: `/users?username=${name}`,
        method: "POST",
        body: {
          userName: name,
        },
      }),
    }),
  }),
});

export const { useCreateUserMutation } = userApi;
