<!-- 侧边栏 -->
<template>
  <a-layout-sider class="sidebar">
    <div class="title">Systerm</div>
    <div class="menu">
      <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        theme="light"
      >
        <template
          v-for="(v, i) in sidebarMenu"
          key="'sidebar-' + i"
          @click="gotoRoute(v)"
        >
          <a-sub-menu :key="v.name" v-if="v.children && v.children.length > 0">
            <template #icon>
              <PieChartOutlined />
            </template>
            <template #title>{{ v.meta.name }}</template>
            <a-menu-item
              v-for="(item, index) in v.children"
              :key="item.name"
              @click="gotoRoute(item)"
            >
              <template #icon>
                <PieChartOutlined />
              </template>
              {{ item.meta.name }}
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item
            v-else
            :key="v.name"
            :index="v.name"
            @click="gotoRoute(v)"
          >
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
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  onMounted,
  watch,
} from 'vue'
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
  [x: string]: any
}
interface currentType {
  meta: {
    [propName: string]: any // 加这一行就好了
  }
  name: string
  path: string
}
interface stateType {
  collapsed: boolean
  selectedKeys: Array<string>
  openKeys: Array<string>
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

  setup(proxy) {
    const router = useRouter()
    const store = useStore() // 获取vuex 中 state的属性
    //获取 vuex 中 导航菜单
    let sidebarMenu = computed(() => {
      return store.state.login.sidebarMenu
    })
    const state = reactive<stateType>({
      collapsed: true,
      selectedKeys: ['home'],
      openKeys: [],
    })

    const gotoRoute = (v: routerObject) => {
      //设置 当前的导航菜单
      store.commit('login/SET_CURRENTMENU', v)
      router.push(v.name)
    }
    watch(
      () => store.state.login.currentMenu,
      (count, prevCount) => {
        /* ... */
        CacheCurrentPage()
      }
    )

    // 缓存当前的页面
    const CacheCurrentPage = () => {
      let currentMenu: currentType = store.state.login.currentMenu
      state.openKeys = [currentMenu.meta.parentPage]
      state.selectedKeys = [currentMenu.name]
    }
    onMounted(() => {
      CacheCurrentPage()
    })
    return {
      ...toRefs(state),
      sidebarMenu,
      gotoRoute,
      CacheCurrentPage,
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
