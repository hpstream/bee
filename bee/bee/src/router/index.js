import Vue from 'vue'
import store from './../store'
import routes from './routes'
import Router from 'vue-router'

Vue.use(Router)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition !== null) {
    // savedPosition is only available for pop state navigation.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selecotr = to.hash
    } else {
      position.x = 0
      position.y = 0
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.top)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is false or an empty object,
    // will retain current scroll position.
    return position
  }
}

const router = new Router({
  mode: 'history',
  base: '/',
  routes, // Short for routes: routes
  scrollBehavior
})

// Router Before Each Configuration
router.beforeEach((to, from, next) => {
  // Require Authenticate
  if (to.meta.auth && !store.state.auth.authenticated) {
    next({
      path: '/login',
      query: {
        jump: to.fullPath
      }
    })
  } else {
    // Not require authenticate
    next()
  }
})

export default router
