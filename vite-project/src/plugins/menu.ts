export const menu = [
  {
    name: '首页',
    path: '/index',
    icon: '',
  },
  {
    name: '统计',
    path: '/statistics',
    icon: '',
    children: [
      {
        name: '柱状图',
        icon: '',
        path: '/statistics/histogram',
      },
    ],
  },
  {
    name: '账号管理',
    path: '/account',
    icon: '',
    children: [
      {
        name: '管理员列表',
        icon: '',
        path: '/account/admin',
      },
      {
        name: '分配管理',
        icon: '',
        path: '/account/distribute',
      },
      {
        name: '账号信息',
        icon: '',
        path: '/account/information',
      },
    ],
  },
]
