/**
 * Created by sunday on 04/05/2017.
 */
import loader from './../utils/loader'

const routes = [
  { path: '/', redirect: { path: '/index' } },
  { path: '/index', name: 'index', component: loader.view('index', 'index'), meta: { auth: true } },

  { path: '/login', name: 'login', component: loader.view('auth', 'login'), meta: { auth: false } },

  { path: '/posts', name: 'posts', component: loader.view('post', 'index'), meta: { auth: true } },
]

export default routes;
