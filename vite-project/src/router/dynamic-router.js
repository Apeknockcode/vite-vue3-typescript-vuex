// 所有的页面


const statistics = () => import('../views/statistics/index.vue')
const histogram = () => import('../views/statistics/histogram.vue')
const account = () => import('../views/account/index.vue')
const admin = () => import('../views/account/admin.vue')
const distribute = () => import('../views/account/distribute.vue')
const information = () => import('../views/account/information.vue')
const dynameicRoutes = [
    {
        path: '/statistics',
        component: statistics,
        name: "统计",
        meta: {
            name: '统计',
            icon: '',
            layout: 'nodefault'
        },
        children: [
            {
                path: '/histogram',
                component: histogram,
                name: "柱状图",
                meta: {
                    name: '柱状图',
                    icon: '',
                    layout: 'nodefault'
                },
            }
        ]
    },
    {
        path: '/account',
        component: account,
        name: "账户",
        meta: {
            name: '账户',
            icon: '',
            layout: 'nodefault'
        },
        children: [
            {
                path: '/admin',
                component: admin,
                name: "管理员",
                meta: {
                    name: '管理员',
                    icon: '',
                    layout: 'nodefault'
                },
            },
            {
                path: '/distribute',
                component: distribute,
                name: "分配列表",
                meta: {
                    name: '分配列表',
                    icon: '',
                    layout: 'nodefault'
                },
            },
            {
                path: '/information',
                component: information,
                name: "账户信息",
                meta: {
                    name: '账户信息',
                    icon: '',
                    layout: 'nodefault'
                },
            }
        ]
    }
];
export default dynameicRoutes

 