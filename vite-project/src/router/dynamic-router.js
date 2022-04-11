// 所有的页面

import Home from '../views/home/index.vue'
import histogram from "../views/statistics/histogram.vue"
import admin from "../views/account/admin.vue"
import distribute from "../views/account/distribute.vue"
import information from "../views/account/information.vue"

export const dynamicRouter = [
    {
        name: "首页",
        path: "/index",
        icon: "",
        component: Home,
        meta: {
            name: "首页",
            icon: "",
        },
    },
    {
        name: "统计",
        path: "/statistics",
        icon: "",
        meta: {
            name: "统计",
            icon: "",
        },
        children: [
            {
                name: "柱状图",
                icon: "",
                path: "/statistics/histogram",
                component: histogram,
                meta: {
                    name: "柱状图",
                    icon: "",
                },
            },
        ],
    },
    {
        name: "账号管理",
        path: "/account",
        icon: "",
        meta: {
            name: "账号管理",
            icon: "",
        },
        children: [
            {
                name: "管理员列表",
                icon: "",
                path: "/account/admin",
                component: admin,
                meta: {
                    name: "管理员列表",
                    icon: "",
                },
            },
            {
                name: "分配管理",
                icon: "",
                path: "/account/distribute",
                component: distribute,
                meta: {
                    name: "分配管理",
                    icon: "",
                },
            },
            {
                name: "账号信息",
                icon: "",
                path: "/account/information",
                component: information,
                meta: {
                    name: "账号信息",
                    icon: "",
                },
            },
        ],
    },
];
