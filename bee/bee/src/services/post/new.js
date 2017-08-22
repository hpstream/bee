/**
 * Created by Sunday on 6/28/2017.
 */
import Vue from 'vue'
import { createPost } from '../../store/modules/post/actions'

export default (works) => {
  Vue.http.post(`post/add`, { works: works }).then(
    ({ data }) => {
      createPost(data)
    }, (response) => {
      console.log(response)
    })
}

