/**
 * Created by sunday on 04/05/2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import auth from './modules/auth'
import post from './modules/post'

const store = new Vuex.Store({
  modules: {
    auth,
    post,
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store

