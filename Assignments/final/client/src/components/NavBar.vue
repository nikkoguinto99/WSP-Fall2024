<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import FlyoutPanel from './FlyoutPanel.vue';
import ShoppingCart from './shoppingCart.vue';
import UserStore from '@/models/userStore.ts';

// State Variables
const isOpen = ref(false);
const isCartOpen = ref(false);
const router = useRouter();

// Computed property to access user from UserStore
const user = computed(() => UserStore.state.user);

const logout = () => {
  localStorage.removeItem('user'); // Clear user data
  UserStore.clearUser(); // Clear user state in store
  router.push('/'); // Redirect to Home page
};
</script>



<template>
  <div>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <RouterLink class="navbar-item" to="/">
            <img class="homeimg" src="../assets/logo.png"> <label for="" class="label">Home</label>
          </RouterLink>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
             :class="{ 'is-active': isOpen}" @click="isOpen = !isOpen">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': isOpen }">
          <div class="navbar-start">
            <RouterLink class="navbar-item" to="/activity"><label for="navbar-item" class="label">
              <i class="fas fa-user"></i>
              My Activity
            </label></RouterLink>

            <RouterLink class="navbar-item" to="/statistics"><label for="navbar-item" class="label">
              <i class="fas fa-chart-line"></i>
              Statistics
            </label></RouterLink>

            <RouterLink class="navbar-item" to="/postingPage"><label for="navbar-item" class="label">
              <i class="fas fa-users"></i>
              User Posts
            </label></RouterLink>

            <RouterLink class="navbar-item" to="/search"><label for="navbar-item" class="label">
              <i class="fas fa-search"></i>
              Search
            </label></RouterLink>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <!-- Show login/signup buttons if user is not logged in -->
                <template v-if="!user">
                  <RouterLink to="/signup" class="button is-primary">
                    <strong>Sign up</strong>
                  </RouterLink>
                  <RouterLink to="/login" class="button is-white">
                    Login
                  </RouterLink>
                </template>

                <!-- Show welcome message and logout button if user is logged in -->
                <template v-else>
                  <span class="navbar-item">
                    Welcome, {{ user.firstName }}!
                  </span>
                  <button class="button is-danger" @click="logout">
                    Logout
                  </button>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FlyoutPanel :is-open="isCartOpen">
        <ShoppingCart />
      </FlyoutPanel>
    </nav>
  </div>
</template>


<style scoped>
  .router-link-active {
    font-weight: bold;
    border-bottom: 2px solid blue;
  }

  .homeimg {
    margin-top: 5px;
  }

  .label {
    color: black !important;
    cursor: pointer;
  }

</style>
