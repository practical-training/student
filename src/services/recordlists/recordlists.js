import request from '../../utils/request';

//成绩
export const recordlists = params => {
  console.log(params)
  return request.get("/api/emstu/student/recordlists", params);
};
