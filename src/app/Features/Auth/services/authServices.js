import axios from "./axiosInstance";

export const loginUser = async (email, password) => {
  return axios.post("login", {
    email,
    password,
  });
};

export const signupUser = async ( firstName, lastName, email, password ) => {
    return axios.post("signup", {
        firstName, lastName, email, password 
    })
}