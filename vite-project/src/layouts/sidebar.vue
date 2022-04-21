<!--
 * @name: 
 * @test: 
 * @message: 
 * @param: 
 * @return: 
-->
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
        <template v-for="(v, i) in sidebarMenu" key="'sidebar-' + i">
          <a-sub-menu :key="v.name" v-if="v.children && v.children.length > 0">
            <template #icon>
              {{ v.meta.icon }}
            </template>
            <template #title>{{ v.meta.name }}</template>
            <a-menu-item v-for="(item, index) in v.children" :key="item.name">
              {{ item.meta.name }}
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item v-else :key="v.name" :index="v.name">
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
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed
      state.openKeys = state.collapsed ? [] : state.preOpenKeys
    }
    const gotoRoute = (name: string) => {
      router.push({name}) // push(path)  push({name:''})
    }

    return {
      ...toRefs(state),
      sidebarMenu,
      toggleCollapsed,
      gotoRoute,
    }
  },
})
</script>

<style lang="scss" scoped>
.sidebar {
  width: 200px;
  height: 100vh;
  .title {
    font-size: 20px;
    padding: 10px 20px;
    box-sizing: border-box;
  }
}
</style>
