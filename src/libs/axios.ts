import Axios, { type AxiosError } from "axios";

export const axios = Axios.create({
  withCredentials: true,
  baseURL: "https://jsonplaceholder.typicode.com",
});

axios.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    console.error(error.toJSON());
    return Promise.reject(error);
  },
);
