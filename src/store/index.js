import Vue from 'vue'
import Vuex from 'vuex'


import store from './store'


export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      store
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
}
