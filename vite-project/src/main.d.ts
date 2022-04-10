import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue' //引入框架
// import '@/styles/antd.css' ///引入样式
import '@/styles/common.scss'

// 路由访问权限管理
import './router/permission.js'
//  DefaultLayout 默认布局文件
import Layout from './layouts/Default.vue'
import DefaultLayout from './layouts/noDefault.vue'
import http from './apis/index.js'
const app = createApp(App)
app.config.globalProperties.$http = http
app.component('layout-nodefault', Layout) // 基础布局
app.component('layout-default', DefaultLayout) // 登陆布局
app.use(router).use(store).use(Antd).mount('#app')
