/*
 * @name:
 * @test:
 * @message:
 * @param:
 * @return:
 */

// 所有的页面

import {RouteRecordRaw} from 'vue-router'
const statistics = () => import('../views/statistics/index.vue')
const histogram = () => import('../views/statistics/histogram.vue')
const account = () => import('../views/account/index.vue')
const admin = () => import('../views/account/admin.vue')
const distribute = () => import('../views/account/distribute.vue')
const information = () => import('../views/account/information.vue')
const pageListen = () => import('../views/statistics/pageListen.vue')
const dataStatistics = () => import('../views/statistics/dataStatistics.vue')
const dynameicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/statistics',
    component: statistics,
    name: 'statistics',
    meta: {
      name: '统计',
      icon: '',
    },
    children: [
      {
        path: '/dataStatistics',
        component: dataStatistics,
        name: 'dataStatistics',
        meta: {
          name: '数据统计',
          icon: '',
          parentPage:'statistics'
        },
      },
      {
        path: '/pageListen',
        component: pageListen,
        name: 'pageListen',
        meta: {
          name: '页面监听',
          parentPage:'statistics',
          icon: '',

        },
      },
      {
        path: '/histogram',
        component: histogram,
        name: 'histogram',
        meta: {
          name: '柱状图',
          parentPage:'statistics',
          icon: '',
        },
      },
    ],
  },
  {
    path: '/account',
    component: account,
    name: 'account',
    meta: {
      name: '账户',
      icon: '',
    },
    children: [
      {
        path: '/admin',
        component: admin,
        name: 'admin',
        meta: {
          name: '管理员',
          parentPage:'account',
          icon: '',
        },
      },
      {
        path: '/distribute',
        component: distribute,
        name: 'distribute',
        meta: {
          name: '分配列表',
          parentPage:'account',
          icon: '',
        },
      },
      {
        path: '/information',
        component: information,
        name: 'information',
        meta: {
          name: '账户信息',
          parentPage:'account',
          icon: '',
        },
      },
    ],
  },
]
export default dynameicRoutes
