import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://btracker-api.herokuapp.com/api/",
});

export const authorizedAxios = axios.create({
  baseURL: "https://btracker-api.herokuapp.com/api/",
});

authorizedAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") ?? null;

  if (token) {
    config.headers["authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
