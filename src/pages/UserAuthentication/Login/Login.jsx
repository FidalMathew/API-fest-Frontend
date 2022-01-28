import loginSvg from "../assets/login.svg";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormContainer,
  InputGroup,
  StyledError,
} from "../Components/FormComponents";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../app/Features/Auth/authSlice";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string()
    .min(4, "Minimum 4 characters needed")
    .max(30, "Too long :(")
    .required("Required!"),
});

export const Login = () => {
  const dispatch = useDispatch();
  const { loggedInStatus } = useSelector((state) => state.auth);
  console.log("Logged in status: ", { loggedInStatus });

  const handleLogin = (values) => {
    const { email, password } = values;
    dispatch(login({ email, password }));
    console.log({ email, password });
  };

  return (
    <div className="w-full h-screen">
      <div className="w-[80%] h-full mx-auto flex">
        <div className="w-1/2 h-full p-8">
          <img
            src={loginSvg}
            alt="login"
            style={{ height: "100%", width: "70%", margin: "0 auto" }}
          />
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <FormContainer>
            <h2 className="text-4xl font-bold">Log in</h2>
            <Formik
              initialValues={initialValues}
              onSubmit={handleLogin}
              validationSchema={validationSchema}
            >
              <Form>
                <InputGroup>
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                  />
                  <ErrorMessage name="email" component={StyledError} />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="off"
                  />
                  <ErrorMessage name="password" component={StyledError} />
                </InputGroup>
                <InputGroup>
                  <button
                    type="submit"
                    className="rounded-sm px-6 py-2 bg-slate-900 text-gray-200 hover:bg-slate-800"
                  >
                    Login
                  </button>
                </InputGroup>
              </Form>
            </Formik>
            <InputGroup>
              <p className="my-2 text-gray-800">
                Don't have Account? <Link to="/signup">SignUp</Link>
              </p>
            </InputGroup>
          </FormContainer>
        </div>
      </div>
    </div>
  );
};
