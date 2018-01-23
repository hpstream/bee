import { login, logout, getUserInfo } from '@/api/login'
import { getToken, setToken } from '@/utils/auth'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response
          console.log('data', data) // 获取后台消息

          commit('SET_TOKEN', data.token) // 存储消息
          setToken(data.access_token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // {"code":200,"message":"用户信息查询成功","data":{"id":"128697000018313216","userName":"小王","loginName":"admin","departId":"001","departName":null,"sortId":1,"password":"admin","passwordChgTimes":0,"salt":"001","userLevel":"001","employeeNum":"001","userMobile":null,"userEmail":null,"userStatus":null,"comments":null,"userBirthdate":null,"userSex":null,"userIdcard":null,"userPhoto":null,"workDate":null,"workDuty":null,"workTelephone":null,"partyId":null,"undeletableFlag":null,"createTime":1513912556000,"createUser":"null","updateTime":1513912556000,"updateUser":"null"}}
    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error')
          }
          const data = response.data
          commit('SET_ROLES', [data.loginName])
          commit('SET_NAME', data.id)
          commit('SET_AVATAR', data.userName)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          // removeToken()
          console.log('LogOut', state.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        // removeToken()
        resolve()
      })
    }
  }
}

export default user
