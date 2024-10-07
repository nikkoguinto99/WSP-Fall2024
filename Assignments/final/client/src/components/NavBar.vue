<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, watch } from 'vue';

</script>

<template>
        <nav class="navbar is-info" role="navigation" aria-label="main navigation">

    <div class="navbar-brand">
    <RouterLink to="/">
    <img alt="Samurai Logo" class="logo" src="@/assets/samurai_scale.png" width="50" height="50" />
    </RouterLink>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
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
          <a class="navbar-item is-selected">
            Careers
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
</nav>
</template>

<style scoped>
</style>