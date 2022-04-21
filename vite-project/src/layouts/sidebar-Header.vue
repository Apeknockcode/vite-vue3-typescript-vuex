<!--
 * @name: 
 * @test: 
 * @message: 
 * @param: 
 * @return: 
-->
<!-- 头部 -->
<!-- 侧边栏 -->
<template>
  <div class="sidebarHeader">
    <a-layout-header class="headerLayout">
      <div class="headerLeft">
        {{ routes.meta.name }}
      </div>
       <LogoutOutlined class="loginOut" @click="loginOut" />
    </a-layout-header>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {LogoutOutlined} from '@ant-design/icons-vue'
import {useStore} from 'vuex'
export default defineComponent({
  components: {
    LogoutOutlined,
  },
  setup() {
    const store = useStore()
    const routes = computed(() => {
      {
        return store.state.login.currentMenu
      }
    })
    //退出登录
    const loginOut = () => {
      console.log('退出登录')
    }
    return {
      routes,
      loginOut,
    }
  },
})
</script>

<style lang="scss" scoped>
.sidebarHeader {
  width: calc(100vw - 200px);
  height: 50px;
  padding: 0 20px;
  .ant-layout-header {
    padding: 0px;
  }
  .headerLayout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .headerLeft {
      display: flex;
      align-items: center;
      font-size: 16px;
    }
    .loginOut {
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>
