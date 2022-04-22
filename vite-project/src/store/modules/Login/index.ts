/*
 * @name:
 * @test:
 * @message:
 * @param:
 * @return:
 */
/*
 * @name:
 * @test:
 * @message:
 * @param:
 * @return:
 */
/*
 * @name:
 * @test:
 * @message:
 * @param:
 * @return:
 */
import {Module} from 'vuex'
import {IAxiosResponseData, IGlobalState} from '../../interface'
import {IIndexState} from './interface'
import {RouteRecordRaw} from 'vue-router'
import router, {DynameicRoutes} from '@/router/index'
import dynameicRoutes from '../../../router/dynamic-router'
import {fetchPermission} from '../../../apis/login'
import {recursionRouter, setDefaultRouter} from '@/utils/recursion-route'
const state: IIndexState = {
  userToken: null,
  permissionList: null,
  dynamicRoutes: [],
  sidebarMenu: [], // 导航菜单
  currentMenu: '', // 当前菜单
}

const login: Module<IIndexState, IGlobalState> = {
  namespaced: true,
  state,
  getters: {
    getUserToken(state) {
      return state.userToken
    },
  },
  mutations: {
    SET_USERTOKEN(state: IIndexState, data: string | null) {
      
      data ? localStorage.setItem('userToken', data) : ''
      state.userToken = data
    },
    CLEAR_USERTOKEN(state: IIndexState) {
      localStorage.removeItem('userToken')
      state.userToken = null
    },
    SET_PERMISSION(state: IIndexState, routes: Array<RouteRecordRaw>) {
      routes.forEach((item) => {
        router.addRoute(item)
      })
      state.permissionList = routes
    },
    //清理权限的功能
    CLEAR_PERMISSION(state: IIndexState) {
      state.permissionList = null
    },
    // 设置菜单
    SET_MENU(state: IIndexState, menu) {
      state.sidebarMenu = menu
    },
    //清楚菜单
    CLEAR_MENU(state: IIndexState) {
      state.sidebarMenu = []
    },
    // 设置动态的理由列表
    SET_DYNAICROUTES(state: IIndexState, routes) {
      state.dynamicRoutes = routes
    },
    // 设置 当前菜单
    SET_CURRENTMENU(state: IIndexState, data) {
      state.currentMenu = data
    },
  },

  actions: {
    async FETCH_PERMISSION({commit, state}) {
      let permissionList: IAxiosResponseData

      permissionList = await fetchPermission({
        user: state.userToken,
      })
      // 根据路由权限进行筛选

      let routes = recursionRouter(permissionList.data.menu, dynameicRoutes)
      let MainContainer = DynameicRoutes.find!((v) => v.path === '')
      let children = MainContainer?.children || []

      children.push(...routes)
      // // 生成 菜单
      commit('SET_MENU', children)
      let container = MainContainer ? [MainContainer] : []
      setDefaultRouter(container)
      // // 初始化路由
      let initialRoutes = router.options.routes
      commit('SET_PERMISSION', [...initialRoutes, ...DynameicRoutes])
      // 设置当前菜单
      // 获取当前的路由
      commit('SET_CURRENTMENU', children[0])
    },
  },
}
export default login
