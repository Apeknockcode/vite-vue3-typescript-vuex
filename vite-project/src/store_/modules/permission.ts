// 获取后台的权限数据
import {fetchPermission} from '../../apis/login'
import {createRouter} from 'vue-router'
// 获取前端配置的路由配置  DynameicRoutes 这是根路由
import router, {DynameicRoutes} from '@/router/index'

// 定义好全部的路由
import dynameicRoutes from '@/router/dynamic-router'

// 引入比对方案
import {recursionRouter, setDefaultRouter} from '@/utils/recursion-route'

export default {
  namespaced: true,
  state: {
    permissionList: null,
    dynamicRoutes: [],
    sidebarMenu: [], // 导航菜单
    currentMenu: '', // 当前菜单
  },
  getters: {},
  mutations: {
    //设置权限的功能
    SET_PERMISSION(state, routes) {
      routes.forEach((item) => {
        router.addRoute(item)
      })
      state.permissionList = routes
    },
    //清理权限的功能
    CLEAR_PERMISSION(state) {
      state.permissionList = null
    },
    // 设置菜单
    SET_MENU(state, menu) {
      state.sidebarMenu = menu
    },
    //清楚菜单
    CLEAR_MENU(state) {
      state.sidebarMenu = []
    },
    // 设置动态的理由列表
    SET_DYNAICROUTES(state, routes) {
      state.dynamicRoutes = routes
    },
  },
  actions: {
    async FETCH_PERMISSION({commit, state}) {
      let permissionList = await fetchPermission()
      // 根据路由权限进行筛选
      let routes = recursionRouter(permissionList.data.menu, dynameicRoutes)
      console.log('根据路由权限进行筛选 ', routes)
      let MainContainer = DynameicRoutes.find((v) => v.path === '')
      console.log('容器路由 ', MainContainer)
      let children = MainContainer.children
      console.log('获取容器路由下面的children', children)
      children.push(...routes)
      // 生成 菜单
      commit('SET_MENU', children)
      // 设置默认路由
      setDefaultRouter([MainContainer])
      // 初始化路由
      let initialRoutes = router.options.routes
      console.log('initialRoutes', initialRoutes)

      // router.addRoutes(DynameicRoutes);
      commit('SET_PERMISSION', [...initialRoutes, ...DynameicRoutes])
    },
  },
}
