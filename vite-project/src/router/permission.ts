// 权限处理的方式
import router from './index'
import store from '../store'

router.beforeEach((to, from, next) => {
    if (!store.state.UserToken) {
        // 未登陆
        if (to.matched.length > 0 && !to.matched.some(record => record.meta.requireAuth)) {
            next()
        } else {
            // 需要登陆
            next({
                path: '/login'
            })
        }
    } else {

        // 用户已经登陆了 ，则需要判断用户的路由访问权限
        if (!store.state.permission.permissionList) {
            store.dispatch("permission/FETCH_PERMISSION").then(() => {
                next({
                    path: to.path
                })
            })
        } else {
            if (to.path != '/login') {
                next()
            } else {
                next(to.fullPath)
            }
        }
        // next()
    }
})