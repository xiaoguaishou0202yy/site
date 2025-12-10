<script setup>

import Header from '../components/header/Header.vue'
import Footer from '../components/footer/Footer.vue'
import Unobox from '../components/product/Unobox.vue'
</script>


<template>
  <Header></Header>
  <Unobox></Unobox>
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
