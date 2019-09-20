import axios from "axios";
import {message} from "antd"



const instance = axios.create({
  timeout: 1000,
});
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      message.error(response.statusText);
    }
    return response.data;
  },
  error => {
    if (error.response.status && error.response.status !== 200) {
      message.error(error.response.statusText);
    }
    return Promise.resolve(error);
  }
);
export default instance;