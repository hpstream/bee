// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Vue Configuration
Vue.config.devtools = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = process.env.NODE_ENV === 'production'

// Vue Router and Vuex Store Configuration
import store from './store'
import router from './router'

window.router = router
store.commit('AUTH')

// Vue Resource Http Configuration
import http from './http'

// Startup Vue
import App from './App.vue'
const app = new Vue({
  router,
  store,
  http,
  ...App
})

// Startup The App
app.$mount('#app')
