import axios from 'axios'
export function fetchArticleDetail(url,articleType, id){
  return axios({
    method: 'get',
    url: url,
    params:{
      id,
      articleType
    }
  });
}


export function fetchMainArticleList(url){
    return axios({
      method: 'get',
      url: url,
    });
}
