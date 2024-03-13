import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://s3-eu-west-1.amazonaws.com",
});

axiosInstance.defaults.headers.common.Accept =
  "application/json; charset=utf-8";
axiosInstance.defaults.headers.common["Content-Type"] =
  "application/json; charset=utf-8";

export default axiosInstance;
