// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import {Progress} from 'mint-ui'
import store from './store/index.js'
import './mock/mockServer'
import './validate/index.js'
Vue.config.productionTip = false
Vue.component('Progress', Progress)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
