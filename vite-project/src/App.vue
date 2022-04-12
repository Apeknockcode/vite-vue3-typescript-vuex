<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {useRoute} from 'vue-router'
export default defineComponent({
  setup() {
    const route = useRoute()
    const layout = computed(() => {
      let router = route.meta
      // return 'layout-' + (router?.layout || 'default').toLowerCase()
      return 'layout-default'.toLowerCase()
    })
    return {
      layout,
    }
  },
})
</script>

<style lang="scss" scoped>
@import url('//at.alicdn.com/t/font_3315025_9c2rjuicj7.css');
</style>
