<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <RouterView />
</template>

<style scoped>
main {
  width: 100%;
  /* 不设置 max-width，让里面的组件决定宽度 */
}
</style>
