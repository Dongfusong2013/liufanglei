import axios from 'axios'
export function fetchProjectDetail(id) {
  return axios({
    method: 'get',
    url: "api/project/get",
    params: {
      id
    }
  });
}


export function fetchProjectList(data) {
  return axios({
    method: 'post',
    url: "/api/project/list",
    data:data
  });
}
