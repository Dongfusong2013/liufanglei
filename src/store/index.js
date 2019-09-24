import Vue from 'vue'
import Vuex from 'vuex'

import menueActive from './modules/menueActive'
import civilInfoData from './modules/civilInfoData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menueActive,
    civilInfoData,
  }
})
