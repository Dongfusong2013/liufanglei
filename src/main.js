// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource'
Vue.use(VueResource);

import BaiduMap from 'vue-baidu-map'

Vue.use(ElementUI);
Vue.config.productionTip = false
/* eslint-disable no-new */

Vue.use(BaiduMap, {
  ak: 'CQvssVgAgoxQjkTxuwuRXMiE8lL4GlbC'
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
