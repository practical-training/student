import request from "../utils/request";

//登录
export const login = params => {
  let url = "/api/emstu/teacher/login";
  return request.post(url, params);
};

