import * as types from '../mutation-types'

const isDesktop = () => window.innerWidth > 993

const state = {
  open: isDesktop()
}

const actions = {
  toggleNav ({ commit, state }) {
    commit(types.TOGGLE_NAV, {
      open: !state.open
    })
  }
}

const mutations = {
  [types.TOGGLE_NAV] (state, payload) {
    state.open = payload.open
  }
}

export default {
  state,
  actions,
  mutations
}
