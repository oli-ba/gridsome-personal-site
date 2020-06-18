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
  //       state.name += name
  //     }
  //   }
  // })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css?family=Kulim+Park:400,600|Libre+Baskerville:400&display=swap'
  // })

  Vue.filter('formatDate', function (date) {
    if (!date) return 'Not a valid date'
    date = date.toString()
    // return date.charAt(0).toUpperCase() + date.slice(1)

    // const d = new Date(date)
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)

    return `${da}-${mo}-${ye}`
  })
  
}
