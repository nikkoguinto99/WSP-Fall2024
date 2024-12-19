<!-- Dashboard.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import AddPost from '@/components/addPost.vue'; // Import the AddPost component
const showModal = ref(false);
</script>

<template>
  <div>
    <!-- Left-hand side menu -->
    <aside class="menu">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
        <li><RouterLink to="/dashboard/useredit">Edit Profile</RouterLink></li>
        <li><RouterLink to="/dashboard/settings">Settings</RouterLink></li>
      </ul>
      <p class="menu-label">
        Posts & Classes
      </p>
      <ul class="menu-list">
        <li><a @click="showModal = true">Add Post</a></li>
        <li><a>Friend's Posts</a></li>
        <li><a>Liked Posts</a></li>
        <li><a>Enrolled Classes</a></li>
      </ul>
    </aside>

    <AddPost v-if="showModal" @close="showModal = false" /> <!-- Use the AddPost component here -->
    <AddPost /> <!-- Use the AddPost component here -->
  </div>
</template>
