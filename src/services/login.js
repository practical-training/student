import request from "../utils/request";

//登录
export const login = params => {
  let url = "/api/emstu/teacher/login";
  return request.post(url, params);
};
//注册
export const register = params => {
  let url = "/api/emstu/teacher/register";
  return request.post(url, params);
};
