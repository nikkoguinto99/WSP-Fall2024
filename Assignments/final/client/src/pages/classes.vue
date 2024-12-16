<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useUserStore } from "@/models/userStore"; // Adjust path if necessary
import { useRouter } from "vue-router";
import classesData from "@/data/classes.json"; // Adjust path if necessary

const { state } = useUserStore();
const user = state.user;
const router = useRouter();

// Redirect to login if user is not logged in
if (!user) {
  router.push('/login'); // Assuming the login page route is named "login"
}

// Function to get post image URL
const getClassImageUrl = (filename: string) => new URL(`../assets/photos/Classes/${filename}`, import.meta.url).href;
</script>

<template>
  <div class="exercise-classes-page" v-if="user">
    <!-- Page Header -->
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">Exercise Classes</p>
        <p class="subtitle">Explore and join a variety of exercise classes</p>
      </div>
    </section>

    <!-- Classes List -->
    <div class="container mt-5">
      <div class="columns is-multiline">
        <div
          class="column is-one-third"
          v-for="classItem in classesData.items"
          :key="classItem.id"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="getClassImageUrl(classItem.image)" alt="Class Image" />
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-4">{{ classItem.name }}</p>
              <p class="subtitle is-6">{{ classItem.date }} at {{ classItem.time }}</p>
              <div class="content">
                {{ classItem.description }}
              </div>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                Capacity: {{ classItem.capacity }}
              </p>
              <p class="card-footer-item">
                <button class="button is-primary">Join</button>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Optionally, add a notification for when the user is not signed in -->
  <div v-else>
    <p>You must be logged in to view the exercise classes.</p>
  </div>
</template>

<style scoped>
.exercise-classes-page {
  padding: 20px 0;
}

.card-content {
  height: 200px;
  overflow: hidden;
}

.card-content:hover {
  overflow: auto;
}
</style>
