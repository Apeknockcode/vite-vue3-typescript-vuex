import { createStore } from 'vuex';
import login from './modules/Login'
import {IGlobalState  } from "./interface"

const store = createStore<IGlobalState>({
  mutations: {},
  actions: {},
  modules: {
    login,
  },
})

export default store