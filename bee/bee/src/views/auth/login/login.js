/**
 * Created by sunday on 04/05/2017.
 */
import loader from './../../../utils/loader'
import service from './../../../services/auth'

export default {
  name: 'login',

  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    login () {
      let self = this
      self.$http.post('login/index', self.user).then(
        ({ data }) => {
          service.login(data)
          window.router.replace('/posts')
        }, (response) => {
          swal('Oops! Please try again...')
        }
      )
    }
  },

  components: {
    Layout: loader.layout('base')
  }
}
