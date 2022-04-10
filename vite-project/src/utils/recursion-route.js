/**
 * 方法一： 比对路由的权限
 * 方法二： 制定返回的默认路由
 * */


/**
 * 比对路由的权限
 * @param {Array}  router  后台返回的路有权限
 * @param {Array}  allRouter    前端配置好的路由权限数据
 * @return  {Array}  realRouter  全部过滤之后符合条件的路由
 * */
export function recursionRouter(router = [], allRouter = []) {
    var realRouter = []
    allRouter.forEach((v, i) => {
        router.forEach((item, index) => {
            if (item.name == v.meta.name) {
                if (item.children && item.children.length > 0) {
                    v.children = recursionRouter(item.children, v.children)

                }
                realRouter.push(v)
            }
        })
    })
    return realRouter
}

// 制定返回的默认路由
export function setDefaultRouter(routers) {
    routers.forEach((v, i) => {
        if (v.children && v.children.length > 0) {
            v.redirect = { name: v.children[0].name }
            setDefaultRouter(v.children)
        }
    })
}