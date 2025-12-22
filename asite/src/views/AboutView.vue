<script setup>

import Header from '../components/header/Header.vue'
import About from '../components/about/About.vue'
import Footer from '../components/footer/Footer.vue'
</script>


<template>
  <Header></Header>
  <About></About>

  <Footer></Footer>
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
