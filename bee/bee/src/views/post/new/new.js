/**
 * Created by Sunday on 6/28/2017.
 */
import loader from './../../../utils/loader'
import service from './../../../services/post'

export default {
  name: 'posts',

  created() {
    service.list()
  },

  computed: {
    list() { return this.$store.state.post.list }
  },

  components: {
    Layout: loader.layout('app')
  }
}
