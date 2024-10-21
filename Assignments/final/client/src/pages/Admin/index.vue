<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { getAllUsers, type User } from '../../models/users';

// Reactive property to store the users
const users = ref<User[]>([]);

// Reactive property to store the current user
const currentUser = ref({
  isAdmin: false // Change this based on actual user data
});

// Fetch the user data when the component is mounted
onMounted(() => {
  users.value = getAllUsers();
});

// Computed property to check if the current user is an admin
const isAdmin = computed(() => currentUser.value.isAdmin);
</script>

<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li><RouterLink to="../">Home Page</RouterLink></li>
      <li><RouterLink to="./">Admin</RouterLink></li>
      <li><RouterLink to="./">Users</RouterLink></li>
    </ul>
  </nav>
  <div>
    <h1>User Information</h1>
    <div v-if="isAdmin">
      <button class="button is-primary">Add New User</button>
      <table class="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Admin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.username">
            <td><img :src="user.profilePicture" alt="Profile Picture" width="50" height="50" /></td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.isAdmin ? 'Yes' : 'No' }}</td>
            <td>
              <button class="button is-small is-info">Edit</button>
              <button class="button is-small is-danger">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>You do not have permission to view this page.</p>
    </div>
  </div>
</template>

<style scoped>
.table {
  margin-top: 20px;
}
</style>
