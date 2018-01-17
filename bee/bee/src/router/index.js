import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  { path: '/login', component: _import('login/login'), hidden: true },
  // { path: '/client', component: _import('clientViews/resourcesCenter/resourcesCenter'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '/',
    component: Layout,
    name: '工作台',
    redirect: '/demo/css',
    hidden: true
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
/*
*  删除业务代码，只保留前端代码规范和示例代码。
* */
const demoUrl = [
  {
    path: '/demo',
    name: 'demo',
    component: Layout,
    meta: { title: '前端规范', icon: 'example' },
    children: [
      {
        path: 'css',
        component: _import('demo/css'),
        name: 'css',
        meta: { title: 'css使用', icon: 'example' },
        children: [
          {
            path: 'color',
            component: _import('demo/color'),
            name: 'colora',
            meta: { title: '隐藏的导航', icon: 'example', subRoutes: true }
          },
          {
            path: 'b',
            component: _import('demo/permission/test'),
            name: 'b',
            meta: { title: '子路由2', icon: 'example', subRoutes: true },
            children: [
              {
                path: 'c',
                component: _import('demo/permission/test2'),
                name: 'c',
                meta: { title: '子路由3', icon: 'example', subRoutes: true }
              }
            ]
          }
        ]
      },
      {
        path: 'color',
        component: _import('demo/color'),
        name: 'color',
        meta: { title: 'color颜色', icon: 'example' }
      },
      {
        path: 'standard',
        component: _import('demo/codeStandard'),
        name: 'standard',
        meta: { title: '项目规范', icon: 'example' }
      },
      {
        path: 'icons',
        component: _import('demo/svg-icons/icons'),
        name: 'icons',
        meta: { title: 'ICONS', icon: 'example' }
      },
      {
        path: 'variant',
        component: _import('demo/variant'),
        name: 'variant',
        meta: { title: '全局变量', icon: 'example' }
      },
      {
        path: 'method',
        component: _import('demo/method'),
        name: 'method',
        meta: { title: '公共方法', icon: 'example' }
      }
    ]
  },
  {
    path: '/demo1',
    component: Layout,
    name: 'demo1',
    meta: { title: '组件使用', icon: 'example' },
    children: [
      {
        path: 'table',
        component: _import('table/table'),
        name: 'table',
        meta: { title: '表格使用', icon: 'example' }
      },
      {
        path: 'tree',
        component: _import('tree/tree'),
        name: 'tree',
        meta: { title: 'tree使用', icon: 'example' }
      },
      {
        path: 'card',
        component: _import('card/card'),
        name: 'card',
        meta: { title: '卡片使用', icon: 'example' }
      },
      {
        path: 'permission',
        component: _import('demo/permission/permission'),
        name: 'permission',
        authority: 'admin',
        meta: { title: '权限控制', icon: 'example' }
      },
      {
        path: 'addPage',
        component: _import('demo/permission/addRoutes'),
        name: 'addPage',
        meta: { title: '增加页面', icon: 'example' }
      },
      {
        path: 'echart',
        component: _import('demo/echart/echart'),
        name: 'echart',
        meta: { title: 'echart', icon: 'example' }
      }
    ]
  }
]
export const asyncRouterMap = [
  ...demoUrl,
  { path: '*', redirect: '/404', hidden: true }
]

