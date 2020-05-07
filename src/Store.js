import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    name: null
  },
  mutations: {
    setName (state, name) {
      state.name += name
    }
  }
})