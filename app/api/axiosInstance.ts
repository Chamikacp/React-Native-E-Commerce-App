import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../constants/generic.constants";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.defaults.headers.common.Accept =
  "application/json; charset=utf-8";
axiosInstance.defaults.headers.common["Content-Type"] =
  "application/json; charset=utf-8";

export default axiosInstance;
