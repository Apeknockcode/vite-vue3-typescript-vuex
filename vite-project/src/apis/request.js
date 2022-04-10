import axios from 'axios'


axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: 'http://localhost:3000/',
    timeout: 10000
})
// request拦截器
service.interceptors.request.use(
    (config) => {
        // 是否需要设置 token
        // const isToken = (config.headers || {}).isToken === false
        // if (getToken() && !isToken) {
        //     config.headers = window.CONFIG.headers // 让每个请求携带自定义token 请根据实际情况自行修改
        // }
        return config
    },
    (error) => {
        // console.log(error)
        Promise.reject(error)
    }
)
var outStatus = true

// 响应拦截器
service.interceptors.response.use(
    (res) => {
        // 未设置状态码则默认成功状态
        const code = res.data.code || 200
        // 获取错误信息
        // const msg = errorCode[code] || res.data.msg || errorCode['default']
        return res.data
        // if (code === 200) {
        //     return res.data
        // } else if (code === 401) {

        // } else if (code === 500) {
        //     // Message({
        //     //     message: msg,
        //     //     type: 'error'
        //     // })
        //     // return Promise.reject(new Error(msg))
        //     return Promise.reject()
        // } else {
        //     // Notification.error({
        //     //     title: msg
        //     // })
        //     return Promise.reject()
        // }
    },
    (error) => {
        // console.log(error)
        // let { message, response, config } = error
        // if (message.includes("Network Error")) {
        //     message = '后端接口连接异常'

        // } else if (message.includes('timeout')) {
        //     message = '系统接口请求超时'

        // } else if (response) {
        //     let status = response.status
        //     message = '系统接口:' + status + '异常'

        // } else {
        //     // router.push({
        //     //     path: "/login"
        //     // })
        // }
        return Promise.reject()
    }
)

export default service
