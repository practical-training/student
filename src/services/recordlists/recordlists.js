import request from '../../utils/request';

export function recordlists() {
  return request('http://{{hp}}/emstu/student/recordlists');
}
