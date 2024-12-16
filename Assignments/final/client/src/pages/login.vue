<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useUsers } from '../models/users.ts';  // Import the useUsers function

const router = useRouter();
const username = ref('');
const password = ref('');
const loading = ref(false);
const errorMessage = ref('');
const isOpen = ref(false); // Control for the modal

// Import userStore to manage logged-in user state
import { useUserStore } from '@/models/userStore';

const userStore = useUserStore();

const handleLogin = () => {
  loading.value = true;
  errorMessage.value = '';

  try {
    if (users.value.length === 0) {
      errorMessage.value = 'User data not loaded yet. Please try again later.';
      loading.value = false;
      return;
    }

    const user = users.value.find(
      (u) => u.profileName === username.value && u.password === password.value
    );

    if (user) {
      // Set the logged-in user in the store
      userStore.setUser(user);

      // Store user data in localStorage for persistence
      localStorage.setItem('user', JSON.stringify(user));

      console.log('Login successful:', user.profileName);

      // Redirect to the dashboard
      router.push('/dashboard');
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


// Use the `useUsers` function to load users data
const { users } = useUsers();

// Watch users and handle login when users data is loaded
watch(users, (newUsers) => {
  if (newUsers.length === 0) {
    console.error("No users loaded. Please check the data.");
  }
}, { immediate: true });

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
