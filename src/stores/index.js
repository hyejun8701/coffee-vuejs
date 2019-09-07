import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 2
  },
  getters: {
    multiply (state) {
      return state.count * state.count
    }
  },
  mutations: {
    INCREMENT (state, payload) {
      state.count = state.count + payload
    }
  }
})
