const state = {
  bgUrl: '/static/civil/德国大教堂.jpeg',
  name: '科隆大教堂，德国'
}

const mutations = {
  setCivilInfo(state, {
    bgUrl,
    name
  }) {
    console.log("bgurl, name", bgUrl, name);
    state.bgUrl = bgUrl;
    state.name = name;
  }
}

export default {
  namespaced: true,
  mutations,
  state,
}
