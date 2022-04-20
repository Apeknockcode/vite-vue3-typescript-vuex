/*
 * @name:
 * @test:
 * @message:
 * @param:
 * @return:
 */

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
import http from './apis/index.js'
const app = createApp(App)
app.config.globalProperties.$http = http
app.use(router).use(store).use(Antd).mount('#app')
