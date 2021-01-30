import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursorText: '打开'
  },
  mutations: {
    UpdateCursorText (state, val) {
      state.cursorText = val
    }
  },
  actions: {
  },
  modules: {
  }
})
