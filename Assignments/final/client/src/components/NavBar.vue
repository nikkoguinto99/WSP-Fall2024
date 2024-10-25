<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import FlyoutPanel from './FlyoutPanel.vue';
import ShoppingCart from './shoppingCart.vue';
import { type User } from '../models/users';
import usersData from '../data/users.json';

// Reactive property to store the users
const users = ref<User[]>([]);
const getAllUsers = () => usersData.users;
// Reactive property to store the current user
const currentUser = ref<User | null>(null);

// Fetch the user data when the component is mounted
onMounted(() => {
  users.value = getAllUsers();
});

// State Variables
const isOpen = ref(false);
const isCartOpen = ref(false);

// Sign-in Method
const signIn = (user: User) => {
  currentUser.value = user;
  console.log(`Signed in as ${user.firstName}`);
  // Additional logic if needed
};

// Logout Method
const logOut = () => {
  currentUser.value = null;
  console.log('Logged out');
};
</script>

<template>
  <div>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="container">
      <div class="navbar-brand">
        <!-- Home Button is linked to icon similar to how Bulma Icon links to bulma.io-->
    <RouterLink class="navbar-item"  to="/">
      <img class="homeimg" src="../assets/logo.png"> <label for="" class="label">Home</label>
    </RouterLink>

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
        <RouterLink class="navbar-item" to="/activity"><label for="navbar-item" class="label">
          <i class="fas fa-user"></i>
          My Activity
        </label></RouterLink>

        <RouterLink class="navbar-item" to="/statistics"><label for="navbar-item" class="label">
          <i class="fas fa-chart-line"></i>
          Statistics
        </label></RouterLink>

        <RouterLink class="navbar-item" to="/posting"><label for="navbar-item" class="label">
          <i class="fas fa-users"></i>
          User Posts
        </label></RouterLink>

        <RouterLink class="navbar-item" to="/search"><label for="navbar-item" class="label">
          <i class="fas fa-search"></i>
          Search
        </label></RouterLink>

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
        <RouterLink to="/Products">Samurai Shop</RouterLink>
      </a>
        </div>
      </div>

    </div>

    <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <!-- Conditionally show based on currentUser -->
                <template v-if="currentUser">
                  <!-- Show user profile and logout button -->


                    Welcome, {{ currentUser.firstName }} {{ currentUser.lastName }}


                  <a class="button is-danger" @click="logOut">
                    <strong>Log out</strong>
                  </a>
                </template>

                <template v-else>
                  <!-- Show login and sign-up buttons -->
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
                      <a v-for="user in users" :key="user.firstName" class="navbar-item" @click="signIn(user)">
                        {{ user.firstName }} {{ user.lastName }}
                      </a>
                      <hr class="navbar-divider">
                      <a class="navbar-item">
                        <RouterLink to="/login">Other Login</RouterLink>
                      </a>
                    </div>
                  </div>
                </template>

                <div>
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
                      <a class="navbar-item" href="https://midterm-example.onrender.com/" target="_blank">
                        Midterm Example
                      </a>
                    </div>
                  </div>
                </div>

                <button class="button is-warning is-light" :class="{'is-focused': isCartOpen}" @click="isCartOpen = !isCartOpen">
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
