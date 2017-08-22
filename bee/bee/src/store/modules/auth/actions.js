/**
 * Created by sunday on 04/05/2017.
 */
import store from './../../../store'
import * as types from './../../mutation-types'

export const auth = () => {
  store.commit(types.AUTH)
}

export const login = (token) => {
  store.commit(types.LOGIN, token)
}

export const logout = () => {
  store.commit(types.LOGOUT)
}
