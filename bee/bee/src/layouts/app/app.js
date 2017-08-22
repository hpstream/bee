/**
 * Created by sunday on 04/05/2017.
 */
export default {
  name: 'app',

  methods: {
    goBack: () => {
      window.router.go(-1)
    }
  }
}
