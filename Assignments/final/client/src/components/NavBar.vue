<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import FlyoutPanel from './FlyoutPanel.vue';
import ShoppingCart from './shoppingCart.vue';

const isOpen = ref(false)
const isCartOpen = ref(false)
</script>

<template>
  <div>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="container">
      <div class="navbar-brand">
        <!-- Home Button is linked to icon similar to how Bulma Icon links to bulma.io-->
    <RouterLink to="/">
    <a class="navbar-item">
      <img class="homeimg" src="../assets/logo.png"> <label for="" class="label">Home</label>
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
        <RouterLink to="/activity"><label for="navbar-item" class="label">
          <i class="fas fa-user"></i>
          My Activity
        </label></RouterLink>
      </a>

      <a class="navbar-item">
        <RouterLink to="/statistics"><label for="navbar-item" class="label">
          <i class="fas fa-chart-line"></i>
          Statistics
        </label></RouterLink>
      </a>

      <a class="navbar-item">
        <RouterLink to="/friends"><label for="navbar-item" class="label">
          <i class="fas fa-users"></i>
          Friends' Activity
        </label></RouterLink>
      </a>

      <a class="navbar-item">
        <RouterLink to="/search"><label for="navbar-item" class="label">
          <i class="fas fa-search"></i>
          Search
        </label></RouterLink>
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          <label for="navbar-item" class="label">
            More
          </label>
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
            <RouterLink to="/signup"><label for="navbar-item" class="label">
              <strong>Sign up</strong>
            </label></RouterLink>
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
      <button class="button is-warning is-light" :class="{'is-focused': isCartOpen}"
      @click="isCartOpen = !isCartOpen">
        <span class="icon">
          <i class="fas fa-shopping-cart"></i>
          </span>

      </button>
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
