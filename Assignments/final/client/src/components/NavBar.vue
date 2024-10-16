<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)
</script>

<template>
  <div>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="container">
      <div class="navbar-brand">
        <!-- Home Button is linked to icon similar to how Bulma Icon links to bulma.io-->
    <RouterLink to="/">
    <a class="navbar-item">
      <img src="../assets/samurai_scale.png">
    </a></RouterLink>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
    :class="{ 'is-active': isOpen}" @click="isOpen =!isOpen">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu" :class="{ 'is-active': isOpen }">
    <div class="navbar-start">
      <a class="navbar-item">
        <RouterLink to="/member">Memberships</RouterLink>
      </a>

      <a class="navbar-item">
        <RouterLink to="/about">About</RouterLink>
      </a>

      <a class="navbar-item">
        <RouterLink to="/testimonial">Testimonials</RouterLink>
      </a>

      <a class="navbar-item">
        <RouterLink to="/products">Samurai Shop</RouterLink>
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            <RouterLink to="/about">About Us</RouterLink>
          </a>
          <a class="navbar-item">
            <RouterLink to="/careers">Careers</RouterLink>
          </a>
          <a class="navbar-item">
            <RouterLink to ="/contact">Contact us!</RouterLink>
          </a>
        </div>
      </div>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href="https://wsp-fall2024.onrender.com/index.html" target="_blank">
            <strong>Admin</strong>
          </a>
          <a class="button is-primary">
            <RouterLink to="/signup"><strong>Sign up</strong></RouterLink>
          </a>
          <a class="button is-light">
            <RouterLink to="/login">Log in</RouterLink>
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
</nav>
  </div>
</template>

<style scoped>
  .router-link-active {

    font-weight: bold;
    border-bottom: 2px solid blue;
  }
</style>
