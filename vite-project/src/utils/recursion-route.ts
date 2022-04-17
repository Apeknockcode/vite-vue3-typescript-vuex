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
interface recursionRouter {
  name: string
  meta: {
    name: string
    [propName: string]: any
  }
  children: Array<recursionRouter>
  [propName: string]: any
}
export function recursionRouter(
  router: Array<recursionRouter>,
  allRouter: Array<recursionRouter>
): Array<recursionRouter> {
  let realRouter: Array<recursionRouter> = []
  allRouter.forEach((v, i) => {
    router.forEach((item, index) => {
      if (item?.name == v?.meta.name) {
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
interface setDefaultRouter {
  name: string
  redirect: {
    name: string
  }
  children: Array<setDefaultRouter>
  [propName: string]: any
}
export function setDefaultRouter(routers: Array<setDefaultRouter>) {
  routers.forEach((v, i) => {
    if (v.children && v.children.length > 0) {
      // 指定path
      v.redirect = {name: v.children[0].name}
      setDefaultRouter(v.children)
    }
  })
}
