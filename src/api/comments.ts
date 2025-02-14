import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Comment from "../entities/Comment";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/comments",
  }),
  endpoints: (builder) => ({
    getCommentsById: builder.query<Comment[], string>({
      query: (postId) => `?postId=${postId}`,
    }),
  }),
});

export const { useGetCommentsByIdQuery } = commentsApi;
