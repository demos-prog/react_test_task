import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Post from "../entities/Post";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/posts/",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => "",
    }),
    getPostById: builder.query<Post, string>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postsApi;
