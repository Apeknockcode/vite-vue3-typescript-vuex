<!-- 侧边栏 -->
<template>
  <div class="sidebar">
    <a-layout-sider>
      <div class="title">Systerm</div>
      <div>{{ menuList }}</div>
    </a-layout-sider>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from "vue";
import { menu } from "../plugins/menu";

export default defineComponent({
  setup() {
    const date = reactive({
      menuList: menu,
    });
    console.log(date);
    console.log(toRefs(date));
    return toRefs(date);
  },
});
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