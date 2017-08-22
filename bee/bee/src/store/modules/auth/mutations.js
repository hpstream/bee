/**
 * Created by sunday on 04/05/2017.
 */
import Vue from 'vue'
import { AUTH, LOGIN, LOGOUT } from './../../mutation-types'

export const mutations = {
  [AUTH](state) {
    state.token = localStorage.getItem('id_token')
    state.authenticated = !!localStorage.getItem('id_token')
    if (state.authenticated) {
      Vue.http.headers.common['APIToken'] = `${localStorage.getItem('id_token')}`
    }
  },

  [LOGIN](state, token) {
    state.authenticated = true
    localStorage.setItem('id_token', token)
    Vue.http.headers.common['APIToken'] = `${token}`
  },

  [LOGOUT](state) {
    state.authenticated = false
    localStorage.removeItem('id_token')
    Vue.http.headers.common.APIToken = ''
  }
}
