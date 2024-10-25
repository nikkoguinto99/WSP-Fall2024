<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';
import postsData from '../data/posts.json';
import WorkoutForm from '@/components/workoutForm.vue';

const posts = ref(postsData.posts);

</script>

<template>
  <div class="column is-two-thirds">
    <WorkoutForm />
    <div v-for="post in posts" :key="post.timestamp" class="box">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="post.user.profilePicture" alt="Profile picture" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ post.user.firstName }} {{ post.user.lastName }}</p>
              <p class="subtitle is-6">@{{ post.user.username }}</p>
            </div>
          </div>

          <div class="content">
            <p>{{ post.caption }}</p>
            <figure class="image is-48by48">
              <img :src="post.image" alt="Post image" />
            </figure>
            <br />
            <p>Likes: {{ post.likes }} | Comments: {{ post.comments }}</p>
            <time :datetime="post.timestamp">Posted on: {{ new Date(post.timestamp).toLocaleString() }}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 20px;
}
.card img {
  width: 100%;
  height: auto;
}
</style>
