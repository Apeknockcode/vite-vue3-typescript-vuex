// 所有的页面

export const dynamicRouter = [
    {
        name: "首页",
        path: "/index",
        icon: "",
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
                path: "/account/histogram",
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
                meta: {
                    name: "管理员列表",
                    icon: "",
                },
            },
            {
                name: "分配管理",
                icon: "",
                path: "/account/distribute",
                meta: {
                    name: "分配管理",
                    icon: "",
                },
            },
            {
                name: "账号信息",
                icon: "",
                path: "/account/information",
                meta: {
                    name: "账号信息",
                    icon: "",
                },
            },
        ],
    },
];
