import Vue from 'vue'
import Vuex from 'vuex'

import menueActive from './modules/menueActive'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menueActive,    
  }
})
