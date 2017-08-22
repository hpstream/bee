/**
 * Created by sunday on 04/05/2017.
 */
import Vue from 'vue'
import { fetchPosts } from '../../store/modules/post/actions'

export default (skip = 0, take = 20) => {
  Vue.http.get(`post/index?skip=${skip}&take=${take}`).then(
    ({ data }) => {
      console.log(data)
      data.skip = skip
      data.take = take
      fetchPosts(data)
    }, (response) => {
      console.log(response)
    })
}
