<!-- 侧边栏 -->
<template>
  <a-layout-sider class="sidebar">
    <div class="title">Systerm</div>
  </a-layout-sider>
</template>

<script lang="ts">
import {defineComponent, reactive, computed, toRefs} from 'vue'

export default defineComponent({
  setup() {
    return {}
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
