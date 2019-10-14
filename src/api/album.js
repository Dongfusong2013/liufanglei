import axios from 'axios'
export function fetchDatePics(userId, civilInfoId) {
  return axios({
    method: 'get',
    url: "liufanglei_server/album/datePics",
    params: {
      userId,
      civilInfoId,
    }
  });
}

export function fetchDatePicsInfo(datePicId) {
  return axios({
    method: 'get',
    url: "liufanglei_server/album/singleDatePic",
    params: {
      datePicId
    }
  });
}

export function getPicCommentList(picId){
  return axios({
    method:'get',
    url:'liufanglei_server/album/commentList',
    params:{
      picId,
    }
  })
}
