<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

const isOpen = ref(false)
</script>

<template>
        <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="container">
    <div class="navbar-brand">
    <RouterLink to="/">
    <img alt="Samurai Logo" class="logo" src="@/assets/samurai_scale.png" width="50" height="50" />
    </RouterLink>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" 
    :class="{ 'is-active': isOpen }" @click="isOpen =!isOpen">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu" :class="{ 'is-active': isOpen }">
    <div class="navbar-start">
        <RouterLink to="/membership" class="navbar-item">Memberships</RouterLink>
    </div>
    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Why Samurai?
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About us
          </a>
          <a class="navbar-item">
            <RouterLink to="/careers" active-class="is-selected">Careers</RouterLink>
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>

      <a class="navbar-item">
            SF Shop
          </a>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href="https://wsp-fall2024.onrender.com/index.html" target="_blank">
            <strong>Admin</strong>
          </a>
          <a class="button is-primary">
            <RouterLink to="/signup">Sign up</RouterLink>
          </a>
          <a class="button is-light">
            <RouterLink to="/login">Login</RouterLink>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</nav>
</template>

<style scoped>
.router-link-active{
  font-weight: bold;
  border-bottom: 2p solid blue
}
</style>