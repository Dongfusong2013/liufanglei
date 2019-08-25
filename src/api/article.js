import axios from 'axios'
export function fetchArticleDetail(articleType, id) {
  return axios({
    method: 'get',
    url: "api/article/get",
    params: {
      id,
      articleType
    }
  });
}

export function fetchMainArticleList(url) {
  return axios({
    method: 'get',
    url: url,
  });
}

export function fetchArticleList(url, data) {
  return axios({
    method: 'post',
    url: url,
    data:data
  });
}
