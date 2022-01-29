import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateIncome, updateExpense } from "../../app/Features/User/UserSlice";
import { logout } from "../../app/Features/Auth/authSlice";
import {
  FormContainer,
  InputGroup,
} from "../UserAuthentication/Components/FormComponents";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router";

export const Income = () => {
  const [income, setIncome] = useState("");
  const [category, setCategory] = useState("");
  const [mode, setMode] = useState("");
  const [notes, setNotes] = useState("");

  const [expense, setExpense] = useState("");
  const [expenseCategory, setEXpenseCategory] = useState("");
  const [expenseMode, setExpeseMode] = useState("");
  const [expenseNotes, setExpenseNotes] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { updateIncomeStatus, updateExpenseStatus } = useSelector(
    (state) => state.user
  );

  const handleIncome = (e) => {
    e.preventDefault();
    dispatch(
      updateIncome({
        income,
        typeOfOp: "credit",
        userId,
        category,
        mode,
        notes,
      })
    );
  };

  const handleExpense = (e) => {
    e.preventDefault();
    dispatch(
      updateExpense({
        amount: expense,
        typeOfOp: "debit",
        userId,
        category: expenseCategory,
        mode: expenseMode,
        notes: expenseNotes,
      })
    );
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full py-2">
        <button
          onClick={() => {
            navigate("/");
            dispatch(logout());
          }}
          className="rounded-sm px-6 py-2 bg-slate-900 text-gray-200 hover:bg-slate-800 ml-[50%]"
        >
          Logout
        </button>
      </div>
      <div className="w-full h-[90%] flex">
        <div className="w-1/2 h-full">
          <div className="w-[80%] mx-auto ">
            <h1 className="text-2xl text-gray-700 font-semibold">
              Add Actual Income
            </h1>
            <FormContainer>
              <form>
                <InputGroup>
                  <label htmlFor="income">Income</label>
                  <input
                    type="number"
                    id="income"
                    name="income"
                    autoComplete="off"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="category">Category</label>
                  <select
                    name="category"
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  >
                    <option value="">Select option</option>
                    <option value="salary">Salary</option>
                    <option value="bank interest">Bank Interest</option>
                    <option value="gift">Gift</option>
                    <option value="bonus">Bonus</option>
                  </select>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="mode">Mode</label>
                  <select
                    name="mode"
                    id="mode"
                    onChange={(e) => setMode(e.target.value)}
                    value={mode}
                  >
                    <option value="">Select Option</option>
                    <option value="cash">Cash</option>
                    <option value="upi">UPI</option>
                    <option value="cheque">Cheque</option>
                  </select>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="notes">Notes</label>
                  <input
                    type="text"
                    id="notes"
                    name="notes"
                    autoComplete="off"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <button
                    onClick={(e) => handleIncome(e)}
                    className="rounded-sm px-6 py-2 bg-slate-900 text-gray-200 hover:bg-slate-800"
                  >
                    {updateIncomeStatus === "loading" ? (
                      <span className="w-full flex justify-center">
                        <ClipLoader size={25} color="white" loading={true} />{" "}
                        Please Wait
                      </span>
                    ) : (
                      "Update Income"
                    )}
                  </button>
                </InputGroup>
              </form>
            </FormContainer>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <div className="w-[80%] mx-auto ">
            <h1 className="text-2xl text-gray-700 font-semibold">
              Add Actual Expense
            </h1>
            <FormContainer>
              <form>
                <InputGroup>
                  <label htmlFor="expense">Expense</label>
                  <input
                    type="number"
                    id="expense"
                    name="expense"
                    autoComplete="off"
                    value={expense}
                    onChange={(e) => setExpense(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="expenseCategory">Expense Category</label>
                  <select
                    name="expenseCategory"
                    id="expenseCategory"
                    onChange={(e) => setEXpenseCategory(e.target.value)}
                    value={expenseCategory}
                  >
                    <option value="">Select option</option>
                    <option value="grocery">Grocery</option>
                    <option value="education">Education</option>
                    <option value="transport">Transport</option>
                    <option value="gift">Gift</option>
                    <option value="others">Others</option>
                  </select>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="expenseMode">Expense Mode</label>
                  <select
                    name="expenseMode"
                    id="expenseMode"
                    onChange={(e) => setExpeseMode(e.target.value)}
                    value={expenseMode}
                  >
                    <option value="">Select Option</option>
                    <option value="cash">Cash</option>
                    <option value="upi">UPI</option>
                    <option value="cheque">Cheque</option>
                  </select>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="expenseNotes">Expense Notes</label>
                  <input
                    type="text"
                    id="expenseNotes"
                    name="expenseNotes"
                    autoComplete="off"
                    value={expenseNotes}
                    onChange={(e) => setExpenseNotes(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <button
                    onClick={(e) => handleExpense(e)}
                    className="rounded-sm px-6 py-2 bg-slate-900 text-gray-200 hover:bg-slate-800"
                  >
                    {updateExpenseStatus === "loading" ? (
                      <span className="w-full flex justify-center">
                        <ClipLoader size={25} color="white" loading={true} />{" "}
                        Please Wait
                      </span>
                    ) : (
                      "Update Expense"
                    )}
                  </button>
                </InputGroup>
              </form>
            </FormContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
