import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormContainer,
  InputGroup,
  StyledError,
} from "../UserAuthentication/Components/FormComponents";

const initialValuesIncome = {
  income: "",
  category: "",
  mode: "",
  notes: "",
};
const initialValuesExpense = {
  expense: "",
  expenseCategory: "",
  expenseMode: "",
  expenseNotes: "",
};

const validationSchemaIncome = {
  income: Yup.number().required("Required!"),
  category: Yup.string().required("Required!"),
  mode: Yup.string().required("Required!"),
  notes: Yup.string(),
};
const validationSchemaExpense = {
  expense: Yup.number().required("Required!"),
  expenseCategory: Yup.string().required("Required!"),
  expenseMode: Yup.string().required("Required!"),
  expenseNotes: Yup.string(),
};

export const Income = () => {
  const handleIncome = (values) => {
    const { income, category, mode, notes } = values;
  };

  const handleExpense = (values) => {
    const { expense, category, mode, notes } = values;
  };

  return (
    <div className="w-full h-screen bg-pink-300">
      <div className="w-1/2 h-full bg-pink-200">
        <div className="w-[80%] mx-auto ">
          <h1 className="text-2xl text-gray-700 font-semibold">
            Add Actual Income
          </h1>
          <FormContainer>
            <Formik
              initialValues={initialValuesIncome}
              validationSchema={validationSchemaIncome}
              onSubmit={handleIncome}
            >
              <InputGroup>
                <label htmlFor="income">Income</label>
                <Field
                  type="number"
                  id="income"
                  name="income"
                  autoComplete="off"
                />
                <ErrorMessage name="income" component={StyledError} />
              </InputGroup>
              {/* <InputGroup> */}
                {/* <label htmlFor="category">Category</label> */}
                {/* <Field name="category" as="select">
                  <option value="salary">Salary</option>
                  <option value="Bank interest">Bank Interest</option>
                  <option value="gift">Gift</option>
                  <option value="bonus">Bonus</option>
                </Field>
                <ErrorMessage name="category" component={StyledError} />
              </InputGroup> */}
            </Formik>
          </FormContainer>
        </div>
      </div>
    </div>
  );
};
