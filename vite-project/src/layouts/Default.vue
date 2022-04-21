<!--
 * @name: 
 * @test: 
 * @message: 
 * @param: 
 * @return: 
-->
<template>
  <a-layout>
    <sidebar />
    <a-layout>
      <sidebar-Header />
      <a-layout-content class="sidebarContent">
        <div class="container">
          <router-view />
        </div>
      </a-layout-content>
      <sidebar-Footer />
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import sidebarHeader from './sidebar-Header.vue'
import sidebarFooter from './sidebar-Footer.vue'
import sidebar from './sidebar.vue'
import {defineComponent} from 'vue'
export default defineComponent({
  components: {
    sidebarHeader,
    sidebarFooter,
    sidebar,
  },
})
</script>

<style lang="scss" scoped>
.sidebarContent {
  width: calc(100vw - 200px);
  height: calc(100vh - 100px);
  padding: 20px 10px;
  box-sizing: border-box;
  background: #fafafa;
  .container {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
}
</style>
