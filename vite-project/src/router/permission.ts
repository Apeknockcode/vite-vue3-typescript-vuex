/*
 * @name:
 * @test:
 * @message:
 * @param:
 * @return:
 */

// 权限处理的方式
import router from './index'
import store from '../store'
router.beforeEach((to, from, next) => {
  
  if (!store.state.login.userToken && !localStorage.getItem('userToken')) {
    // 未登陆
    if (
      to.matched.length > 0 &&
      !to.matched.some((record) => record.meta.requireAuth)
    ) {
      next()
    } else {
      // 需要登陆
      next({
        path: '/login',
      })
    }
  } else {
      store.commit(
        'login/SET_USERTOKEN',
        store.state.login.userToken || localStorage.getItem('userToken')
      )
    // 用户已经登陆了 ，则需要判断用户的路由访问权限
    if (!store.state.login.permissionList) {
      store.dispatch('login/FETCH_PERMISSION').then(() => {
        next({
          path: to.path,
        })
      })
    } else {
      if (to.path != '/login') {
        // 设置菜单的返回的操作对应响应的菜单
        // console.log('to',to)
        
        store.commit('login/SET_CURRENTMENU', to)
        next()
      } else {
        next(to.fullPath)
      }
    }
  }
})
