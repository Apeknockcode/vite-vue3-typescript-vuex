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
export const DynameicRouter = [
  {
    path: '/index',
    name: '首页',
    meta: {
      title: '首页',
      layout: 'nodefault',
      requireAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "login" */ 'views/home/index.vue'),
  },
  {
    path: '/login',
    name: '登录',
    meta: {
      title: '登录',
      layout: 'default',
    },
    component: () => import(/* webpackChunkName: "login" */ 'views/login.vue'),
  },
  {
    path: '/forgetpassword',
    name: '忘记密码',
    meta: {
      title: '忘记密码',
      layout: 'default',
    },
    component: () =>
      import(/* webpackChunkName: "login" */ 'views/forgetpws.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    //访问主页的时候 重定向到index页面
    redirect: '/404',
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404',
      layout: 'default',
    },
    component: () => import(/* webpackChunkName: "login" */ 'views/404.vue'),
  },
]
// 基本配置路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: '登录',
    component: () => import(/* webpackChunkName: "login" */ 'views/login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由拦截

export default router
