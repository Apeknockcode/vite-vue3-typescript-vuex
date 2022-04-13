<template>
  <a-layout>
    <sidebar />
    <a-layout>
      <sidebar-Header />
      <a-layout-content class="sidebarContent">
        <router-view />
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

<style>
.sidebarContent {
  width: calc(100vw - 200px);
  height: calc(100vh - 100px);
  padding: 20px;
  background: darkorange;
  box-sizing: border-box;
}
</style>
