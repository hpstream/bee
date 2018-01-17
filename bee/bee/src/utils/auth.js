import Cookies from 'js-cookie'
const TokenKey = 'admin'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function removeCookieRoutes() {
  return Cookies.remove('routes')
}

// 模拟增加路由
export function mergeMockRoutes(cookieRoutes, accessedMap) {
  const cookies = Cookies.get()
  const user = cookies.admin ? 'admin' : 'client'
  if (!cookieRoutes) return {}
  if (cookieRoutes.permissionType === user) return cookieRoutes
  return {}
}
