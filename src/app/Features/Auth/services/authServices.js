import axios from "./axiosInstance";

export const loginUser = async (email, password) => {
  return axios.post("signinAuth", {
    email,
    password,
  });
};

export const signupUser = async ( name, email, password ) => {
    return axios.post("signupAuth", {
        name, email, password 
    })
}