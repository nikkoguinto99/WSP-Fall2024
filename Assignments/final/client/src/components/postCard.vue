<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Post } from '../models/posting'; // Import Post type from posts model

const getImageUrl = (filename: string) => new URL(`../assets/photos/Posts/${filename}`, import.meta.url).href;
const getProfileUrl = (filename: string) => new URL(`../assets/photos/Pfps/${filename}`, import.meta.url).href;

const props = defineProps<{
    post: Post
}>()
const { post } = props
</script>

<template>
  <br>
  <div>
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img v-if="post && post.image" :src="getImageUrl(post.image)" alt="Placeholder image"
      />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img v-if="post && post.user && post.user.profilePicture" :src="getProfileUrl(post.user.profilePicture)" alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{ post?.user?.firstName }} {{ post?.user?.lastName }}</p>
        <p class="subtitle is-6">@{{ post?.user?.username }}</p>
      </div>
    </div>

    <div class="content">
      <h3>{{ post?.type }}</h3>
      {{ post?.caption }}
      <br />
      <time>{{ post?.date }}</time>
    </div>
    <p><i class="fas fa-heart"></i> Likes  {{ post?.likes }} <i class="fas fa-comment"></i> Comments  {{ post?.comments }}</p>
  </div>
</div>
  </div>
</template>

<style scoped>

</style>
