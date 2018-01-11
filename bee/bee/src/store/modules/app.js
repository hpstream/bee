import Cookies from 'js-cookie'
import data from '@/utils/data'
import { getSelectOption } from '@/api/login'
const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    language: Cookies.get('language') || 'zh',
    selects: {}
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    },
    SET_SELECTS: (state, selects) => {
      state.selects = selects
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    GetOptions({ commit }) {
      return new Promise((resolve, reject) => {
        getSelectOption().then(res => {
          const datas = res.data
          const menuDatas = data.classify(datas, 'parentName')
          commit('SET_SELECTS', menuDatas)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default app
