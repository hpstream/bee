/**
 * Created by sunday on 04/05/2017.
 */
import store from './../../../store'
import * as types from './../../mutation-types'

export const fetchPosts = (data) => {
  store.commit(types.FETCH_POSTS, data)
}

export const createPost = (data) => {
  store.commit(types.CREATE_POST, data)
}

export const clearPosts = () => {
  store.commit(types.CLEAR_POSTS)
}
