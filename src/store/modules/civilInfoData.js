const state = {
  bgUrl: '/static/civil/德国大教堂.jpeg',
  name: '科隆大教堂，德国'
}

const mutations = {
  setCivilInfo(state, {
    bgUrl,
    name,
    id
  }) {
    console.log("bgurl, name, id", bgUrl, name, id);
    state.bgUrl = bgUrl;
    state.id = id;
    state.name = name;
  }
}

export default {
  namespaced: true,
  mutations,
  state,
}
