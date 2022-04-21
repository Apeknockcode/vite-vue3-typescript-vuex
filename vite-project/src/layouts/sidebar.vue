<!-- 侧边栏 -->
<template>
  <a-layout-sider class="sidebar">
    <div class="title">Systerm</div>
    <div class="menu">
      <!-- 这是收缩菜单栏的按钮 -->
      <!-- <a-button
        type="primary"
        style="margin-bottom: 16px"
        @click="toggleCollapsed"
      >
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </a-button> -->

      <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        theme="light"
        :inline-collapsed="collapsed"
      >
        <template v-for="(v, i) in sidebarMenu" key="'sidebar-' + i" @click="gotoRoute(v)">
          <a-sub-menu :key="v.name" v-if="v.children && v.children.length > 0">
             <template #icon>
              <PieChartOutlined />
            </template>
            <template #title>{{ v.meta.name }}</template>
            <a-menu-item v-for="(item, index) in v.children" :key="item.name" @click="gotoRoute(item)">
             <template #icon>
              <PieChartOutlined />
            </template>
              {{ item.meta.name }}
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item v-else :key="v.name" :index="v.name" @click="gotoRoute(v)">
            <template #icon>
              <PieChartOutlined />
            </template>
            <span>{{ v.meta.name }}</span>
          </a-menu-item>
        </template>
      </a-menu>
    </div>
  </a-layout-sider>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, watch, computed} from 'vue'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue'

import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

interface routerObject {
  name: string
  [x:string]:any
}

export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
  setup() {
    const router = useRouter()
    const store = useStore() // 获取vuex 中 state的属性
    let sidebarMenu = computed(() => {
      return store.state.login.sidebarMenu
    }) //获取 vuex 中 导航菜单
    console.log('sidebarMenu', sidebarMenu)
    const state = reactive({
      collapsed: false,
      selectedKeys: ['home'],
      openKeys: [],
      preOpenKeys: [],
    })

    watch(
      () => state.openKeys,
      (_val, oldVal) => {
        state.preOpenKeys = oldVal
      }
    )
  
    const gotoRoute = (v:routerObject) => {
      //设置 当前的导航菜单
      store.commit('login/SET_CURRENTMENU',v)
      router.push(v.name) 
    }

    return {
      ...toRefs(state),
      sidebarMenu,
      gotoRoute,
    }
  },
})
</script>

<style lang="scss" scoped>
.sidebar {
  width: 200px;
  height: 100vh;
   box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  .title {
    font-size: 20px;
    padding: 10px 20px;
    box-sizing: border-box;
  }
}
</style>
