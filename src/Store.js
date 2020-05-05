import Vuex from 'vuex'

export default function (Vue, { appOptions }) {
  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      count: $route.query.hello
    },
    // mutations: {
    //   increment (state) {
    //     state.count++
    //   }
    // }
  })
}