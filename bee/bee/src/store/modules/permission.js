import { constantRouterMap, asyncRouterMap } from '@/router'
import { getAsyncRouter } from '@/api/login'
/**
 * 通过authority判断是否与当前用户权限匹配
 * @param menus
 * @param route
 */
function hasPermission(menus, route) {
  if (route.authority) {
    if (menus[route.authority]) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, menuDatas) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(menuDatas, route)) {
      if (menuDatas[route.authority]) {
        route.meta.title = menuDatas[route.authority].resourceName
        route.meta.icon = menuDatas[route.authority].iconClass
      }
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, menuDatas)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit, state }) {
      return new Promise((resolve, reject) => {
        getAsyncRouter().then(res => {
          const menuDatas = {}
          const data = res.data
          for (let i = 0; i < data.length; i++) {
            menuDatas[data[i].resourceCode] = data[i]
          }
          const accessedRouters = filterAsyncRouter(asyncRouterMap, menuDatas)
          commit('SET_ROUTERS', accessedRouters)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default permission
