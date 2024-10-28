<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, computed } from 'vue';
import userStore from '@/models/userStore'; // Adjust path as needed
import userData from '../data/users.json'; // Adjust path as needed

// Reactive data and state for search
const searchQuery = ref('');
const users = userData.users;

// Computed property to filter users based on search query
const filteredUsers = computed(() => {
  return searchQuery.value
    ? users.filter(user =>
        user.username.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    : [];
});

// Computed property to check if a user is signed in
const isSignedIn = computed(() => !!userStore.state.user);

// Profile picture URL generator
const getProfileUrl = (filename: string) =>
  new URL(`../assets/photos/Pfps/${filename}`, import.meta.url).href;
</script>

<template>
  <div v-if="isSignedIn">
    <h1>Search Users by Username</h1>

    <div class="field">
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="searchQuery"
          placeholder="Search for a username..."
        />
      </div>
    </div>

    <table class="table is-striped is-fullwidth" v-if="filteredUsers.length">
      <thead>
        <tr>
          <th>User ID</th>
          <th>Profile Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.id">
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
          <td>{{ user.username }}</td>
        </tr>
      </tbody>
    </table>

    <p v-else-if="searchQuery">No users found matching "{{ searchQuery }}"</p>
  </div>

  <!-- Fallback message if user is not signed in -->
  <div v-else>
    <p>You must be signed in to search for users.</p>
  </div>
</template>

<style scoped>
.table {
  margin-top: 20px;
}
</style>
