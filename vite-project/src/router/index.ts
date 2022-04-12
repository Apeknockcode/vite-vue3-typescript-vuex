import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

// 基本配置路由
const Login = () => import('../views/login.vue')
const Layout = () => import ('../layouts/Default.vue')
const Home = () => import('../views/home/index.vue')
const Forbidden = () => import('../views/404.vue')
const forgetpws = () => import('../views/forgetpws.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/forgetpws',
    component: forgetpws,
  },
]


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
    path: '',
    name: 'container',
    component: Layout,
    redirect: '/home',
    meta: {
      requireAuth: true,
      name: '首页',
    },
    children: [
      {
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
          name: '首页',
          icon: '',
        },
      },
    ],
  },
  
  {
    path: '/403',
    component: Forbidden,
  },
  {
    path: '/:pathMatch(.*)',
    component: Forbidden,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由拦截

export default router
