// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import VueClipboard from 'vue-clipboard2';

require('typeface-libre-baskerville')
require('typeface-kulim-park')
// import Vuex from 'vuex'

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(VueClipboard)
  // Vue.use(Vuex)
  
  // appOptions.store = new Vuex.Store({
  //   state: {
  //     name: null
  //   },
  //   mutations: {
  //     setName (state, name) {
  //       state.name = name
  //     }
  //   }
  // })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.meta.push({
    name: 'keywords',
    content: 'UI Design, UX Design'
  })
}
