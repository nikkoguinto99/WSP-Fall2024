<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useUserStore } from '@/models/userStore';

const isOpen = ref(false);

// Access the userStore
const userStore = useUserStore();

// Compute the logged-in user state
const isLoggedIn = computed(() => userStore.state.user !== null);
const user = computed(() => userStore.state.user);

// Check if the logged-in user is an admin
const isAdmin = computed(() => user.value?.isAdmin || false);

// Get the router instance
const router = useRouter();

// Handle logout
const handleLogout = () => {
  userStore.clearUser();
  isOpen.value = false;
  router.push('/'); // Redirect to home page
};

const getProfileUrl = (filename: string) => new URL(`../assets/photos/Pfps/${filename}`, import.meta.url).href;
</script>

<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <img alt="Vue logo" class="logo" src="@/assets/samurai.svg" width="50" height="30"/>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
           :class="{ 'is-active': isOpen }" @click="isOpen = !isOpen">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isOpen }">
        <div class="navbar-start">
          <!-- Show Dashboard if logged in, otherwise show default links -->
          <template v-if="isLoggedIn">
            <RouterLink to="/dashboard" class="navbar-item">
              <i class="fas fa-user"></i>
              Dashboard
            </RouterLink>
            <RouterLink to="/statistics" class="navbar-item">
              <i class="fas fa-chart-line"></i>
              Statistics
            </RouterLink>
            <RouterLink to="/posting" class="navbar-item">
              <i class="fas fa-users"></i>
              User Posts
            </RouterLink>
            <RouterLink to="/classes" class="navbar-item">
              <i class="fas fa-dumbbell"></i>
              Classes
            </RouterLink>
            <RouterLink to="/search" class="navbar-item">
              <i class="fas fa-search"></i>
              Search
              </RouterLink>
          </template>
          <template v-else>
            <RouterLink to="/" class="navbar-item">Home</RouterLink>
            <RouterLink to="/about" class="navbar-item">About</RouterLink>
            <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <RouterLink to="/more/memberships" class="navbar-item">
                Memberships
              </RouterLink>
              <RouterLink to="/more/careers" class="navbar-item">
                Careers
              </RouterLink>
              <RouterLink to="/more/contactus" class="navbar-item">
                Contact
              </RouterLink>
            </div>
          </div>
          </template>

          <!-- Admin dropdown (visible only to admin users) -->
          <template v-if="isAdmin">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                <i class="fas fa-cog"></i>
                Admin
              </a>
              <div class="navbar-dropdown">
                <RouterLink class="navbar-item" to="/admin">Tools</RouterLink>
                <hr class="navbar-divider" />
                <a class="navbar-item" href="https://wsp-fall2024.onrender.com/index.html" target="_blank">
                  Projects List
                </a>
                <a class="navbar-item" href="https://midterm-example.onrender.com/" target="_blank">
                  Midterm Example
                </a>
              </div>
            </div>
          </template>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <!-- Show Welcome message if logged in, otherwise show Sign up and Log in -->
              <template v-if="isLoggedIn">
                <span class="navbar-item">
                  <figure class="image is-32x32" style="margin-right: 10px;">
                      <img v-if="user && user.profilePic" :src="getProfileUrl(user.profilePic)" alt="Profile Picture" />
                    </figure>
                  Welcome, {{ user?.firstName }}
                </span>
                <button class="button is-light" @click="handleLogout">
                  Log out
                </button>
              </template>
              <template v-else>
                <RouterLink to="/signup" class="button is-primary">
                  <strong>Sign up</strong>
                </RouterLink>
                <RouterLink to="/login" class="button is-light">
                  Log in
                </RouterLink>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid blue;
}
</style>
