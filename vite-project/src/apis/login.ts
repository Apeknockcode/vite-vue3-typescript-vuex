// import service from "./api";

// const store = useStore()

import {store} from '../store'
import type {Req, Res} from './types/login'
import {request} from './request'

// 用户登陆
export const userLogin = (data: Req) => {
  return request<Req, Res>({
    url: '/api/permission',
    method: 'GET',
    data,
    interceptors: {
      requestInterceptors(res) {
        console.log('接口请求拦截')
        return res
      },
      responseInterceptors(result) {
        console.log('接口响应拦截')
        return result
      },
    },
  })
}
// 引入store 获取用户的权限 admin， svip ，vip
export const fetchPermission = (data: Req) => {
  return request<Req, Res>({
    url: '/api/permission',
    method: 'GET',
    data,
    interceptors: {
      requestInterceptors(res) {
        console.log('接口请求拦截')
        return res
      },
      responseInterceptors(result) {
        console.log('接口响应拦截')
        return result
      },
    },
  })
}


// export function fetchPermission() {
//     return service({
//         url: '/api/permission?user=' + store.state.UserToken,
//         method: 'get',
//     })
// }

// export function login(data:string) {
//     return service({
//         url: '/api/login?user=' + data,
//         method: 'get',
//     })
// }
