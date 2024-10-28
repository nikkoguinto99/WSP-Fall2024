<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
// Import necessary types
import { ref, computed } from 'vue';
import type { PostsData, Post } from '../models/posting'; // Ensure the Post type is imported
import postCard from '../components/postCard.vue';
import workoutForm from '@/components/workoutForm.vue'; // Import the workout form component
import postData from '@/data/posts.json';
import userStore from '@/models/userStore';

// Load all posts
const posts = ref<PostsData>(postData);

// Track modal visibility for posting a workout
const isWorkoutModalActive = ref(false);

// Computed property to filter posts for the signed-in user
const currentUserPosts = computed(() => {
  const currentUser = userStore.state.user;
  return currentUser ? posts.value.filter(post => post.user.id === currentUser.id) : [];
});

// Computed property to check if a user is signed in
const isSignedIn = computed(() => !!userStore.state.user);

// Access the current user's username for display in the header
const username = computed(() => userStore.state.user?.username || '');

// Toggle the workout modal visibility
const openWorkoutModal = () => {
  isWorkoutModalActive.value = true;
};

const closeWorkoutModal = () => {
  isWorkoutModalActive.value = false;
};

// Add the new workout post
const addNewWorkoutPost = (newPost: Post) => { // Use the Post type
  posts.value.push(newPost);
  closeWorkoutModal(); // Close the modal after adding the post
};
</script>

<template>
  <div v-if="isSignedIn">
    <!-- Page Header with Username and Post Workout Button -->
    <section class="hero is-small is-dark">
      <div class="hero-body">
        <h1 class="title">{{ username }}'s Activity</h1>
        <button class="button is-primary is-medium" @click="openWorkoutModal">Post New Workout</button>
      </div>
    </section>

    <!-- Display Grid for User's Posts -->
    <div class="fixed-grid has-3-cols">
      <div class="grid">
        <div class="cell"></div>
        <div class="cell">
          <div class="shelf">
            <!-- Render only the posts from the signed-in user -->
            <postCard v-for="post in currentUserPosts" :key="post.user.id" :post="post" />
          </div>
        </div>
      </div>
    </div>

    <!-- WorkoutForm Modal -->
    <workoutForm v-if="isWorkoutModalActive" @submitPost="addNewWorkoutPost" @close="closeWorkoutModal" />
  </div>

  <!-- Message if user is not signed in -->
  <div v-else>
    <p>You must be signed in to view your activity.</p>
  </div>
</template>

<style scoped>
/* Add your styling here */
.hero-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
