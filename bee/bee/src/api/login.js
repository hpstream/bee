import request from '@/utils/request'

export function login(username, password) {
  console.log('login', username)
  return request({
    url: '/api/login',
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
