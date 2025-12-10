<script setup>

import Header from '../components/header/Header.vue'
</script>


<template>
  <Header></Header>
  <div class="product">
    <h1>This is an about page</h1>
    <p>产品介绍</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
