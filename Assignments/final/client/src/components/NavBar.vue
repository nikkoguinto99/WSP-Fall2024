<!-- eslint-disable vue/no-parsing-error -->
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
      <img class="homeimg" src="../assets/logo.png"> Home
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
      <a class="navbar-item has-text-black">
        <i class="fas fa-user"></i>
        <RouterLink to="/activity">My Activity</RouterLink>
      </a>

      <a class="navbar-item">
        <i class="fas fa-chart-line"></i>
        <RouterLink to="/statistics">Statistics</RouterLink>
      </a>

      <a class="navbar-item">
        <i class="fas fa-users"></i>
        <RouterLink to="/friends">Friends' Activity</RouterLink>
      </a>

      <a class="navbar-item">
        <i class="fas fa-search"></i>
        <RouterLink to="/search">Search</RouterLink>
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            <RouterLink to="/More/about">About Us</RouterLink>
          </a>
          <a class="navbar-item">
            <RouterLink to="/More/careers">Careers</RouterLink>
          </a>
          <a class="navbar-item">
            <RouterLink to ="/More/contact">Contact us!</RouterLink>
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
        <RouterLink to="/More/member">Memberships</RouterLink>
      </a>

      <a class="navbar-item">
        <RouterLink to="/More/testimonial">Testimonials</RouterLink>
      </a>

      <a class="navbar-item">
        <RouterLink to="/products">Samurai Shop</RouterLink>
      </a>
        </div>
      </div>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">

          <a class="button is-primary">
            <RouterLink to="/signup"><strong>Sign up</strong></RouterLink>
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
        <a class="button is-white">
          <!-- eslint-disable-next-line vue/no-parsing-error -->
          Login&nbsp
          <i class="fas fa-chevron-down"></i>
        </a>


        <div class="navbar-dropdown">
          <a class="navbar-item">
            <RouterLink to="/activity">Nicholas Guinto</RouterLink>
          </a>
          <a class="navbar-item">
            <RouterLink to="/activity">Hailey Terwilliger</RouterLink>
          </a>
          <a class="navbar-item">
            <RouterLink to ="/activity">Monty Oum</RouterLink>
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            <RouterLink to ="/Login">Other User</RouterLink>
          </a>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
            <a class="button is-white">
          <!-- eslint-disable-next-line vue/no-parsing-error -->
          Admin&nbsp
          <i class="fas fa-chevron-down"></i>
        </a>


        <div class="navbar-dropdown">
          <a class="navbar-item">
            <RouterLink to="/Admin/">Users</RouterLink>
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="https://wsp-fall2024.onrender.com/index.html" target="_blank">
            Projects List
          </a>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</nav>
  </div>

  <!--
  <a class="button is-primary" href="https://wsp-fall2024.onrender.com/index.html" target="_blank">
            <strong>Admin</strong>
          </a>
  -->
</template>

<style scoped>
  .router-link-active {
    font-weight: bold;
    border-bottom: 2px solid blue;
    color: black
  }

  .homeimg {
    margin-top: 5px;
  }

  .navbar-item {
    color: black;
    text-decoration: none;
  }

</style>
