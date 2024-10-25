<script setup lang="ts">
import { ref, provide, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import FooterSec from './components/FooterSec.vue';
import { getAllUsers, type User } from './models/users';

// Reactive property to store the users
const users = ref<User[]>([]);

// Reactive property to store the current user
const currentUser = ref<User | null>(null);

// Fetch user data
onMounted(() => {
  users.value = getAllUsers();
  // Example: Set the first user as current user (for testing)
  currentUser.value = users.value[0];
});

// Provide the currentUser globally
provide('currentUser', currentUser);
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="container">
    <RouterView />
  </div>
  <div class="container">
    <FooterSec />
  </div>
</template>

<style scoped>
body {
  background-color: aliceblue;
}
.container-home{
  background-color: whitesmoke;
  box-shadow: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
  min-height: 100vh;
}
</style>
