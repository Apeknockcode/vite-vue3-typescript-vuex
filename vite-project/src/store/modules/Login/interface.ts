import {RouteRecordRaw} from 'vue-router'

export interface IIndexState {
  userToken: string | null
  permissionList: Array<RouteRecordRaw>| null
  dynamicRoutes: Array<RouteRecordRaw>
  sidebarMenu: Array<RouteRecordRaw> // 导航菜单
  currentMenu: string | null // 当前菜单
}
