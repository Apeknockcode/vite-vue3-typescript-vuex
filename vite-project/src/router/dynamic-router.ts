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
        name: "statistics",
        meta: {
            name: '统计',
            icon: '',

        },
        children: [
            {
                path: '/histogram',
                component: histogram,
                name: "histogram",
                meta: {
                    name: '柱状图',
                    icon: '',

                },
            }
        ]
    },
    {
        path: '/account',
        component: account,
        name: "account",
        meta: {
            name: '账户',
            icon: '',

        },
        children: [
            {
                path: '/admin',
                component: admin,
                name: "admin",
                meta: {
                    name: '管理员',
                    icon: '',

                },
            },
            {
                path: '/distribute',
                component: distribute,
                name: "distribute",
                meta: {
                    name: '分配列表',
                    icon: '',

                },
            },
            {
                path: '/information',
                component: information,
                name: "information",
                meta: {
                    name: '账户信息',
                    icon: '',

                },
            }
        ]
    }
];
export default dynameicRoutes

