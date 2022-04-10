import service from "./request";
// 引入store 获取用户的权限 admin， svip ，vip
import store from '../store'

export function fetchPermission(date) {
    return service({
        url: '/api/permission?user=' + store.state.UserToken,
        method: 'get',
    })
}

export function login(data) {
    return service({
        url: '/api/login?user=' + data,
        method: 'get',
    })
}