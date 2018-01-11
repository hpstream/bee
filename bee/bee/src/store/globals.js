const globals = {
  state: {
    globalsVariable: '全局变量'
  },
  mutations: {
    SET_GLOBALSVARIABLE: (state, num) => {
      state.globalsVariable = num
    }
  },
  actions: {
  }
}

export default globals
