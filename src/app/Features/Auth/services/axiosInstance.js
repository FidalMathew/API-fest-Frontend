import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "something.app/",
});

export const authorizedAxios = axios.create({
  baseURL: "something.app/",
});

authorizedAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") ?? null;

  if (token) {
    config.headers["authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
