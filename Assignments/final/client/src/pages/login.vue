<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import usersData from '@/data/users.json';

const router = useRouter();
const username = ref('');
const password = ref('');
const loading = ref(false);
const errorMessage = ref('');
const isOpen = ref(false); // Control for the modal

const handleLogin = () => {
  loading.value = true;
  errorMessage.value = '';

  try {
    // Ensure usersData and users array are loaded correctly
    if (!usersData || !usersData.users) {
      console.error("usersData or usersData.users is undefined.");
      errorMessage.value = 'User data not loaded. Please contact support.';
      loading.value = false;
      return;
    }

    // Log data structure for debugging
    console.log("Loaded usersData:", usersData);

    // Find user in JSON data
    const user = usersData.users.find(
      (u) => u.username === username.value && u.password === password.value
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/activity');
    } else {
      errorMessage.value = 'Invalid username or password';
    }
  } catch (error) {
    console.error("Error during login:", error);
    errorMessage.value = 'An error occurred. Please try again.';
  } finally {
    loading.value = false;
  }
};


</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">Login</h1>
      <div class="columns is-centered">
        <div class="column is-half">
          <form @submit.prevent="handleLogin">
            <div class="field">
              <label class="label">Username</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Username"
                  v-model="username"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="password"
                  placeholder="Password"
                  v-model="password"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-primary is-fullwidth" :disabled="loading">
                  <span v-if="!loading">Login</span>
                  <span v-else>Loading...</span>
                </button>
              </p>
            </div>
            <p v-if="errorMessage" class="has-text-danger">{{ errorMessage }}</p>
          </form>
          <button @click="isOpen = !isOpen">Forgot Password</button>
        </div>
      </div>
    </div>

    <!-- Modal for Forgot Password -->
    <div class="modal" :class="{ 'is-active': isOpen }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <p>Please contact your gym's IT administrator to reset your password.</p>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="isOpen = false"></button>
    </div>
  </section>
</template>

<style scoped>
/* Optional styling for the modal */
</style>
