
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue' //引入框架
import './styles/antd.css'
//引入样式
import '@/styles/common.css'

// 路由访问权限管理
import '@/router/permission.js'
//  DefaultLayout 默认布局文件
import Layout from './layouts/Default.vue'
import emptyLayout from './layouts/emptyDefault.vue'
import http from './apis/index.js'
// console.log('store', store.state.permission.sidebarMenu)
// // store.state.permission.dynamicRoutes.forEach(element => {
// //     router.addRoute(element)
// // });
// // console.log()

// const routers = store.state.permission.sidebarMenu
// routers.forEach((route) => {
//   router.addRoute(route)
// })
console.log('路由列表', router.options.routes)

const app = createApp(App)
app.config.globalProperties.$http = http
app.component('layout-default', Layout) // 基础布局
app.component('layout-empty', emptyLayout) // 登陆布局
app.use(router).use(store).use(Antd).mount('#app')
