import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, signupUser } from "./services/authServices";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const response = await loginUser(email, password);
    console.log("From login async thunk: ", { response });
    return response.data;
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ name, email, password }) => {
    const response = await signupUser(name, email, password);
    console.log("From signup async thunk: ", { response });
    return response.data;
  }
);

const authInitialState = {
  token: localStorage.getItem("token") || null,
  userId: localStorage.getItem("id") || null,
  loggedInStatus: localStorage.getItem("token") ? "fulfilled" : "idle",
  loggedInError: null,
  signUpStatus: "idle",
  signUpError: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      state.userId = null;
      state.loggedInStatus = "idle";
      state.loggedInError = null;
    },
    resetAuthStatus: (state) => {
      state.loggedInError = state.signUpError = null;
      state.loggedInStatus = state.signUpStatus = "idle";
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loggedInStatus = "loading";
      state.loggedInError = null;
    },
    [login.fulfilled]: (state, action) => {
      console.log("From extra reducer in login: ", action.payload);
      const { token, _id } = action.payload;
      state.token = token;
      state.userId = _id;
      state.loggedInStatus = "fulfilled";
      localStorage.setItem("token", token);
      localStorage.setItem("id", _id);
    },
    [login.rejected]: (state) => {
      state.loggedInStatus = state.loggedInError = "error";
    },
    [signUp.pending]: (state) => {
      state.signUpStatus = "loading";
      state.signUpError = null;
    },
    [signUp.fulfilled]: (state, action) => {
      console.log("From extra reducers in signup:", action.payload);
      state.signUpStatus = "fulfilled";
    },
    [signUp.rejected]: (state) => {
      state.signUpStatus = state.signUpError = "error";
    },
  },
});

export const { logout, resetAuthStatus } = authSlice.actions;
export default authSlice.reducer;
