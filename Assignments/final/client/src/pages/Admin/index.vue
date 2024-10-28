<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed } from 'vue';
import userStore from '@/models/userStore'; // Adjust the path as needed
import userData from '../../data/users.json';

const users = userData.users;

// Computed property to check if the current user is an admin
const isAdmin = computed(() => userStore.state.user?.isAdmin || false);

// Profile picture URL generator
const getProfileUrl = (filename: string) =>
  new URL(`../../assets/photos/Pfps/${filename}`, import.meta.url).href;
</script>

<template>
  <div v-if="isAdmin">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><RouterLink to="../">Home Page</RouterLink></li>
        <li><RouterLink to="./">Admin</RouterLink></li>
        <li><RouterLink to="./">Users</RouterLink></li>
      </ul>
    </nav>

    <h1>User Information</h1>

    <div>
      <button class="button is-primary">Add New User</button>

      <table class="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Profile Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Username</th>
            <th>Membership</th>
            <th>Admin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>
              <figure class="image is-48x48">
                <img
                  v-if="user.profilePicture"
                  :src="getProfileUrl(user.profilePicture)"
                  alt="Profile Picture"
                />
              </figure>
            </td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.dob }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.membership }}</td>
            <td>{{ user.isAdmin ? 'Yes' : 'No' }}</td>
            <td>
              <button class="button is-small is-info">Edit</button>
              <button class="button is-small is-danger">Remove</button>
            </td>
          </tr>
          <tr v-if="!users.length">
            <td colspan="10">No users available</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Fallback message if user is not an admin -->
  <div v-else>
    <p>You do not have access to view this page.</p>
    <p>Please sign in as Nicholas Guinto using these credentials</p>
    <p>Username: itsnikkoguinto</p>
    <p>Password: Nikko</p>
    <br>
    <p>There are 6 users total currently. Each user has a unique username with their password being the first name with the first letter capital!</p>
  </div>
</template>

<style scoped>
.table {
  margin-top: 20px;
}
</style>
