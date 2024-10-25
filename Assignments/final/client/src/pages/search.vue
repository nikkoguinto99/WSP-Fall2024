<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, computed } from 'vue';
import usersData from '../data/users.json';

const users = ref(usersData.users);
const searchQuery = ref('');

const filteredUsers = computed(() => {
  return users.value.filter(user =>
    user.username.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const searchUsers = () => {
  // This function is called on input, but the actual filtering is done in the computed property
};
</script>

<template>
  <div>
    <div class="box">Search for Friends!</div>
    <div class="input-wrapper">
      <input
        class="input"
        type="text"
        placeholder="Search for Users"
        v-model="searchQuery"
        @input="searchUsers"
      />
      <ul v-if="searchQuery && filteredUsers.length">
        <li v-for="user in filteredUsers" :key="user.id">{{ user.username }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.input-wrapper {
  margin: 20px;
}

.input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
