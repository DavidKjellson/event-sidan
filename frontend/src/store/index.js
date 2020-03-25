import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: '_SV',
  },
  mutations: {
    english(state) {
      state.locale = '_EN'
    },
    swedish(state) {
      state.locale = '_SV'
    }
  },
  actions: {},
  modules: {}
})