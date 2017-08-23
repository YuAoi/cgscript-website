import Vue from 'vue'
import Vuex from 'vuex'

import nav from './modules/nav'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    nav,
    users
  }
})
