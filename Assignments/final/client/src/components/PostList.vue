<script setup lang="ts">
/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import type { PropType } from 'vue';
import { type Post, type User } from '@/models/posts';

defineProps({
  posts: {
    type: Array as PropType<Post[]>,
    required: true,
  },
  getProfilePictureUrl: {
    type: Function as PropType<(filename: string) => string>,
    required: true,
  },
  getPostImageUrl: {
    type: Function as PropType<(filename: string) => string>,
    required: true,
  },
  user: {
    type: Object as PropType<User>,
    required: false,
  },
});

const emit = defineEmits(['deletePost', 'likePost', 'openCommentModal']);

const likePost = (postId: number) => {
  emit('likePost', postId);
};

const openCommentModal = (postId: number) => {
  emit('openCommentModal', postId);
};

const deletePost = (postId: number) => {
  emit('deletePost', postId);
};
</script>

<template>
  <div class="columns is-multiline">
    <div v-for="post in posts" :key="post.id" class="column is-one-third">
      <div class="card">
        <!-- Post Image -->
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="getPostImageUrl(post.image)" alt="Post Image" />
          </figure>
        </div>

        <!-- Post Author Section -->
        <div class="card-header">
          <div class="media">
            <figure class="media-left">
              <p class="image is-48x48">
                <img :src="getProfilePictureUrl(post.profilePic ?? '')" alt="User Profile Picture" />
              </p>
            </figure>
            <div class="media-content">
              <p class="title is-5 lowered-username">@{{ post.profileName }}</p>
            </div>
          </div>
        </div>

        <!-- Post Content -->
        <div class="card-content">
          <h3 class="title is-6">{{ post.caption }}</h3>
          <p>{{ post.date }}</p>
          <p><strong>Type:</strong> {{ post.type }}</p>
          <p><strong>Duration:</strong> {{ post.duration }} mins</p>
          <p><strong>Calories Burned:</strong> {{ post.calorieburn }}</p>
          <p><strong>Likes:</strong> {{ post.likes }}</p>
        </div>

        <!-- Post Actions -->
        <div class="card-footer">
          <!-- Like Icon -->
          <a href="#" class="card-footer-item" @click.prevent="likePost(post.id)">
            <span class="icon"><i class="fas fa-thumbs-up"></i></span>
            Like
          </a>

          <!-- Comment Icon -->
          <a href="#" class="card-footer-item" @click.prevent="openCommentModal(post.id)">
            <span class="icon"><i class="fas fa-comment"></i></span>
            Comment
          </a>

          <!-- Gear Icon for User's Own Posts -->
          <div v-if="user?.id === post.userID" class="card-footer-item">
            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <button class="button is-small is-light" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span class="icon">
                    <i class="fas fa-cog"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item" @click.prevent="deletePost(post.id)">Delete Post</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 1.5rem;
}

.lowered-username {
  margin-top: 15px;
}
</style>
