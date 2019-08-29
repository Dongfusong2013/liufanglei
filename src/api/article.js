import axios from 'axios'
export function fetchArticleDetail(articleType, id) {
  return axios({
    method: 'get',
    url: "liufanglei_server/article/get",
    params: {
      id,
      articleType
    }
  });
}

export function fetchMainArticleList(url) {
  return axios({
    method: 'get',
    url: 'liufanglei_server/mainPage/articleList',
  });
}

export function fetchArticleList(data) {
  return axios({
    method: 'post',
    url: "liufanglei_server/article/list",
    data:data
  });
}
