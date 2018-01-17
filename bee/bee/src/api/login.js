import request from '@/utils/request'
import { accessedRouterMap } from '@/mock/mockData'
export function login(username, password) {
  console.log('login', username)
  return request({
    url: '/uaa/api/oauth/token?grant_type=password&username=' + username + '&password=' + password,
    method: 'post',
    headers: {
      'Authorization': 'Basic YW5kcm9pZDphbmRyb2lk'
    },
    data: {
      username,
      password
    }
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo() {
  return request({
    url: 'admin/api/user',
    method: 'get'
  })
}

export function getAsyncRouter() {
  return request({
    url: 'admin/api/user/resources/menu',
    method: 'get'
  })
}

export function getSelectOption() {
  return request({
    url: 'data/api/codes',
    method: 'get'
  })
}

export function getTestAsyncRouter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(accessedRouterMap)
    }, 200)
  })
}
