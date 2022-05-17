import axios, { AxiosInstance } from "axios";

const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });
};
