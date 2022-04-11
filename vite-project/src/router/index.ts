import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'

/**
 *  根据用户的权限不同，所能看到的页面和操作性不同
 * admin -> 所有页面
 * vip ->  所属vip的权限
 * svip -> 更多额外的vip 权限
 *
 * 通过 addRouter() 的方式来动态的添加路由
 * */
import index from '../views/home/index.vue'
import Forbidden from '../views/404.vue'
import Login from '../views/login.vue'

export const DynameicRoutes = [
  {
    path: '/',
    name: 'container',
    redirect: 'index',
    meta: {
      requireAuth: true,
      name: '首页',
      layout: 'nodefault',
    },
    children: [
      {
        path: 'index',
        component: index,
        name: 'home',
        meta: {
          // 匹配规则
          requireAuth: true,
          name: '首页',
          icon: '',
          layout: 'nodefault',
        },
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404',
      icon: '',
      layout: 'default',
    },
    component: Forbidden,
  },
  {
    path: '/:pathMatch(.*)',
    //访问主页的时候 重定向到index页面
    name: '404',
    meta: {
      title: '404',
      icon: '',
      layout: 'default',
    },
    component: Forbidden,
  },
]

// 初始化路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: '登陆',
    component: Login,
    meta: {
      title: '登陆',
      icon: '',
      layout: 'default',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由拦截

export default router
