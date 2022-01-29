import { authorizedAxios } from "../../Auth/services/axiosInstance";

export const getUserDataService = async (userId) => {
  return authorizedAxios.get(`details/${userId}`);
};

export const submitGoalsService = async (income, savings, userId) => {
  return authorizedAxios.patch(`user/${userId}`, {
    targetIncome: income,
    targetSavings: savings,
  });
};

export const updateIncomeService = async (
  income,
  typeOfOp,
  userId,
  category,
  mode,
  notes
) => {
  return authorizedAxios.post("income", {
    income,
    typeOfOp,
    userId,
    category,
    mode,
    notes,
  });
};

export const updateExpenseService = async (
  amount,
  typeOfOp,
  userId,
  category,
  mode,
  notes
) => {
  return authorizedAxios.post("expense", {
    amount,
    typeOfOp,
    userId,
    category,
    mode,
    notes,
  });
};
