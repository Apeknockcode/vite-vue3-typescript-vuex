import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'


// 基本配置路由
import Login from '../views/login.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

import Home from '../views/home/index.vue'
import Forbidden from '../views/404.vue'
import forgetpws from '../views/forgetpws.vue'
/**
 *  根据用户的权限不同，所能看到的页面和操作性不同
 * admin -> 所有页面
 * vip ->  所属vip的权限
 * svip -> 更多额外的vip 权限
 *
 * 通过 addRouter() 的方式来动态的添加路由
 * */
export const DynameicRoutes = [
  {
    path: '/',
    name: 'container',
    component: Home,
    redirect: '/index',
    meta: {
      requireAuth: true,
      name: '首页',
    },
    children: [
      {
        path: '/index',
        name: '首页',
        meta: {
          name: '首页',
          icon: '',
          layout: 'nodefault',
        },
      },
    ],
  },
  {
    path: '/forgetpws',
    name: '忘记密码',
    component: forgetpws,
  },
  {
    path: '/403',
    name: '找不到页面',
    component: Forbidden,
  },
  {
    path: '/:pathMatch(.*)',
    name: '找不到页面',
    component: Forbidden,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由拦截

export default router
