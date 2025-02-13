import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../entities/User";
import { userApi } from "../api/users";

interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.createUser.matchFulfilled,
      (state, action: PayloadAction<User>) => {
        state.currentUser = action.payload;
      }
    );
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
