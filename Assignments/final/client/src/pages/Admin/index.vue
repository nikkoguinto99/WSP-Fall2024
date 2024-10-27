<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';
import userData from '@/data/users.json';

const users = ref(userData);
console.log(users.value); //Tests to see if users are being loaded correctly

</script>

<template>
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Admin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.firstName}}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.isAdmin }}</td>
            <td>
              <button class="button is-small is-info">Edit</button>
              <button class="button is-small is-danger">Remove</button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
</template>

<style scoped>
.table {
  margin-top: 20px;
}
</style>
