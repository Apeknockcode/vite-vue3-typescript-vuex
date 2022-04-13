
<template>
  <!-- <component :is="layout">
    
  </component> -->
  <router-view />
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {useRoute} from 'vue-router'
export default defineComponent({
  setup() {
    const route = useRoute()
    const layout = computed(() => {
      let router = route.meta
      console.log('router',route)
    
      // return 'layout-' + (router?.Layout || 'empty').toLowerCase()
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
