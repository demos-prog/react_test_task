import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./api/posts";
import { userApi } from "./api/users";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, userApi.middleware),
});
