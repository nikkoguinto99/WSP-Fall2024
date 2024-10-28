<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import FooterSec from './components/FooterSec.vue';
import userStore from './models/userStore'; // Import your user store
import { provide } from 'vue';

// Provide the UserStore
provide('UserStore', userStore);
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="container">
    <RouterView />
  </div>
  <div class="container is-fluid">
    <FooterSec />
  </div>
</template>

<style scoped>
body {
  background-color: aliceblue;
}
.container-home {
  background-color: whitesmoke;
  box-shadow: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
  min-height: 100vh;
}
</style>
