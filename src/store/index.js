import {actions} from './actions'
import {mutations} from './mutations'
import state from './state'
import {getters} from './getters'

import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)

/*eslint-disable*/
export default new VueX.Store({
  actions,
  mutations,
  state,
  getters
})
