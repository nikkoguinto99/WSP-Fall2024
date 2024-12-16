<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import FooterEnd from './components/FooterEnd.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="container">
    <RouterView />
  </div>

    <FooterEnd />

</template>

<style scoped>
body {
  background-color: aliceblue;
}

.container {

  box-shadow: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
  min-height: 100vh;
}
</style>
