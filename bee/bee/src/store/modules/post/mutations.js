/**
 * Created by sunday on 04/05/2017.
 */
import {
  FETCH_POSTS,
  CREATE_POST,
  CLEAR_POSTS
} from './../../mutation-types'

export const mutations = {
  [FETCH_POSTS](state, data) {
    let count = data.list.length
    if (state.skip > 0) {
      for (let i = 0; i < count; i++) {
        state.list.push(data.list[i])
      }
    } else {
      state.list = data.list
    }
    state.skip += count
    state.more = count >= state.take
  },

  [CREATE_POST] (state, data) {
    state.list.push(data)
  },

  [CLEAR_POSTS](state) {
    state.list = []
    state.skip = 0
    state.take = 10
    state.more = true
  }
}
