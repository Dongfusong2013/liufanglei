const state = {
  activeIndex:0
}

const mutations={
    setActiveIndex(state, value){
        state.activeIndex = value;
    }
}

export default {  
  namespaced: true,
  mutations,
  state,  
}