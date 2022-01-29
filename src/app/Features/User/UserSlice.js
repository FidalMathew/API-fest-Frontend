import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserDataService,
  submitGoalsService,
} from "./services/userServices";

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async ({ userId }) => {
    const response = await getUserDataService(userId);
    console.log("In getUserData async thunk:", { response });
    return response.data;
  }
);

export const submitGoals = createAsyncThunk(
  "user/submitGoals",
  async ({ income, savings, userId }) => {
    const response = await submitGoalsService(income, savings, userId);
    console.log("In submitGaols async thunk: ", { response });
    return response.data;
  }
);

const userInitialState = {
  name: "",
  email: "",
  balance: 0,
  credit: 0,
  debit: 0,
  cashflow: [],
  targetIncome: 0,
  targetSavings:0,
  userDataFetchStatus: "idle",
  userDataFetchError: null,
  updateTargetsStatus: "idle",
  updateTargetsError: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    resetState: (state) => {
      state.name = "";
      state.userDataFetchError = null;
      state.userDataFetchStatus = "idle";
    },
    updateTarget: ( state, action ) => {
      const { income, savings } = action.payload
      state.targetIncome = income
      state.targetSavings = savings
    }
  },
  extraReducers: {
    [getUserData.pending]: (state) => {
      state.userDataFetchStatus = "loading";
      state.userDataFetchError = null;
    },
    [getUserData.fulfilled]: (state, action) => {
      const { user, cashflow } = action.payload;
      const { balance, credit, debit, email, name, targetIncome, targetSavings } = user;

      console.log("Inside extra reducer of getUserData: ", action.payload);
      state.name = name;
      state.email = email;
      state.balance = balance;
      state.debit = debit;
      state.credit = credit;
      state.cashflow = cashflow;
      state.targetIncome = targetIncome
      state.targetSavings = targetSavings
      state.userDataFetchStatus = "fulfilled";
      state.userDataFetchError = null;
    },
    [getUserData.rejected]: (state) => {
      state.userDataFetchError = state.userDataFetchStatus = "error";
    },
    [submitGoals.pending]: (state) => {
      state.updateTargetsStatus = "loading";
      state.updateTargetsError = null;
    },
    [submitGoals.fulfilled]: (state, action) => {
      console.log("Inside extra reducers of submitGoals: ", action.payload);
      state.updateTargetsStatus = "fulfilled";
    },
    [submitGoals.rejected]: (state) => {
      state.updateTargetsError = state.updateTargetsStatus = "error";
    },
  },
});

export const { resetState, updateTarget } = userSlice.actions;
export default userSlice.reducer;
