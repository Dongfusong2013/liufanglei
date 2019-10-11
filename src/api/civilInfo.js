import axios from 'axios'
export function fetchCivilInfo(name) {
  return axios({
    method: 'get',
    url: "liufanglei_server/civil/pictures",
    params: {
      id
    }
  });
}



export function getLocationCivilInfoList() {
  return axios({
    method: 'get',
    url: "liufanglei_server/civilInfo/list",
    // params: {
    //   name
    // }
  });
}
