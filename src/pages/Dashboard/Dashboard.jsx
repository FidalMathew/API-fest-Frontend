import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData, submitGoals } from "../../app/Features/User/UserSlice";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  InputGroup,
  StyledError,
  FormContainerSmall,
} from "../UserAuthentication/Components/FormComponents";
import { useNavigate } from "react-router";
import { ClipLoader } from "react-spinners";
import { updateTarget } from "../../app/Features/User/UserSlice"

const initialValues = {
  income: "",
  savings: "",
};

const validationSchema = Yup.object({
  income: Yup.number().required("Required!"),
  savings: Yup.number().required("Required!"),
});

export const Dashboard = () => {
  const [showTargetForm, setShowTargetForm] = useState(false);
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { name, balance, credit, debit, updateTargetsStatus } = useSelector(
    (state) => state.user
  );

  // fetch user data on mount
  useEffect(() => {
    dispatch(getUserData({ userId }));
  }, [dispatch, userId]);

  const handleTargetSubmit = (values) => {
    const { income, savings } = values;
    console.log("Target: ", { income, savings, userId });
    dispatch(updateTarget({ income, savings }))
    dispatch(submitGoals({ income, savings, userId }))
  };

  const navigate = useNavigate();

  return (
    <div className="w-full h-screen">
      <div className="w-[80%] mx-auto flex flex-col justify-center items-center py-4 gap-[30px]">
        <h1 className="text-gray-800 text-4xl font-semibold">Dashboard</h1>
        <h1 className="text-gray-600 text-3xl font-semibold">
          👋 Welcome! {name}
        </h1>
      </div>
      <div className="w-full h-[80%]">
        <div className="w-[90%] mx-auto h-full flex">
          <div className="w-1/2 h-full flex flex-col items-center gap-[30px]">
            <div className="border-2 border-gray-400 flex flex-col w-[60%]">
              <div className="border-0 border-b-2 border-gray-400 p-4">
                <h1 className="text-2xl text-gray-800">Current Stats</h1>
              </div>
              <div className="border-0 border-b-2 border-gray-400 p-4">
                Current Balance : {balance}
              </div>
              <div className="border-0 border-b-2 border-gray-400 p-4">
                Current Credits : {credit}
              </div>
              <div className="p-4">Current Debits : {debit}</div>
            </div>
            <button
              className="bg-slate-700 text-gray-50 px-4 py-2 hover:bg-slate-600"
              onClick={() => setShowTargetForm((prev) => !prev)}
            >
              {!showTargetForm ? "Set Target" : "Close Target"}
            </button>
            {showTargetForm && (
              <FormContainerSmall>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleTargetSubmit}
                >
                  <Form>
                    <InputGroup>
                      <label htmlFor="income">Target Income</label>
                      <Field
                        type="number"
                        id="income"
                        name="income"
                        autoComplete="off"
                      />
                      <ErrorMessage name="income" component={StyledError} />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="savings">Target Savings</label>
                      <Field
                        type="number"
                        id="savings"
                        name="savings"
                        autoComplete="off"
                      />
                      <ErrorMessage name="savings" component={StyledError} />
                    </InputGroup>
                    <InputGroup>
                      <button
                        type="submit"
                        className="rounded-sm px-6 py-2 bg-slate-900 text-gray-200 hover:bg-slate-800"
                      >
                        {updateTargetsStatus === "loading" ? (
                          <span className="w-full flex justify-center">
                            <ClipLoader
                              size={25}
                              color="white"
                              loading={true}
                            />{" "}
                            Please Wait
                          </span>
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </InputGroup>
                  </Form>
                </Formik>
              </FormContainerSmall>
            )}
          </div>
          <div className="w-1/2 h-full flex">
            <div className="w-[60%] flex flex-col mx-auto gap-[30px]">
              <button
                className="rounded-sm px-6 py-2 bg-slate-900 text-gray-200 hover:bg-slate-800"
                onClick={() => navigate("/income")}
              >
                Add Income/Expense
              </button>
              <button
                className="rounded-sm px-6 py-2 bg-slate-900 text-gray-200 hover:bg-slate-800"
                onClick={() => navigate("/history")}
              >
                Transaction History
              </button>
              <button
                className="rounded-sm px-6 py-2 bg-slate-900 text-gray-200 hover:bg-slate-800"
                onClick={() => navigate("/charts")}
              >
                Charts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
