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
import {
  recursionRouter,
  setDefaultRouter,
  recursionRouterType,
} from '@/utils/recursion-route'
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
      state.userToken = data
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
  },

  actions: {
    async FETCH_PERMISSION({commit, state}) {
      let permissionList: IAxiosResponseData
      permissionList = await fetchPermission({
        user: state.userToken,
      })
      // 根据路由权限进行筛选
      let routes = recursionRouter(permissionList.data.menu, dynameicRoutes)
      console.log('根据路由权限进行筛选 ', routes)
      let MainContainer = DynameicRoutes.find((v) => v.path === '')

      let children = MainContainer?.children || []
      // console.log('获取容器路由下面的children', children)
      children.push(...routes)
      // // 生成 菜单
      commit('SET_MENU', children)
      // // 设置默认路由
      // let setDefaultRouterList: Array<recursionRouterType>
      // setDefaultRouterList = 
    
      setDefaultRouter([MainContainer])
      // // 初始化路由
      let initialRoutes = router.options.routes
      // console.log('initialRoutes', initialRoutes)

      // // router.addRoutes(DynameicRoutes);
      commit('SET_PERMISSION', [...initialRoutes, ...DynameicRoutes])
    },
  },
}
export default login