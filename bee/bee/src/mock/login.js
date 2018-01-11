import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    roles: ['admin'],
    introduction: '我是超级管理员',
    token: 'admin',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}
const routerMap = {
  admin: [{ code: 'userManage', title: '用户管理', icon: 'user' },
    { code: 'icons', title: 'svg', icon: 'icons' },
    { code: 'workspace', title: '工作台', icon: 'component' },
    { code: 'wait_done', title: '待办事项', icon: 'component' },
    { code: 'signIn', title: '注册事务', icon: 'component' },
    { code: 'report', title: '发布通知', icon: 'component' },
    { code: 'serverManage', title: '服务管理', icon: 'component' },
    { code: 'center', title: '服务中心', icon: 'component' },
    { code: 'center-detail', title: '服务详情', icon: 'component' },]
}
export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    console.log('config', config)
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  getAsyncRouter: config => {
    console.log('mock-getAsyncRouter', config)
    return routerMap.admin
  },
  logout: () => 'success'
}
