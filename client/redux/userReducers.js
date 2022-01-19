import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.error = false;
    },

    loginFailure: (state) => {
      state.error = true;
    },

    logoutSuccess: (state) => {
      state.user = null;
    },
  },
});

export const { loginSuccess, loginFailure, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;
