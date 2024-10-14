import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const expiresIn = 1 * 24 * 60 * 60 * 1000; // 1 day in milliseconds
      const expirationTime = Date.now() + expiresIn;
      state.userInfo = {
        ...action.payload,
        expiresIn: expirationTime,
      };
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.clear();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;