/**
 * Created by sunday on 04/05/2017.
 */
import Vue from 'vue'
import Resource from 'vue-resource/dist/vue-resource'
Vue.use(Resource)

// Vue Resource Configuration
Vue.http.options.root = process.env.API_LOCATION
Vue.http.headers.common['Accept'] = 'application/json'
Vue.http.headers.common['Access-Control-Allow-Origin'] = process.env.CROS_DOMAIN

// Token Authenticate Check
import authService from './../services/auth'
Vue.http.interceptors.push((request, next) => {
  next((response) => {
    // If the token is invalid
    if (response.status === 401) {
      authService.logout()
      // If view require authenticate, go to login
      if (window.router.currentRoute.meta.auth) {
        window.router.push({
          path: '/login'
        })
      }
    }
  })
})

const http = Vue.http
export default http
