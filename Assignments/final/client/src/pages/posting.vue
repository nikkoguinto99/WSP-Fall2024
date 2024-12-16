<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useposts } from '@/models/posts';
import { useUserStore } from '@/models/userStore';
import PostList from '@/components/PostList.vue';

// Get posts and user data
const { posts, deletePost } = useposts();
const userStore = useUserStore();
const user = userStore.state.user; // Current logged-in user

// Function to get post image URL
const getPostImageUrl = (filename: string) => new URL(`../assets/photos/Posts/${filename}`, import.meta.url).href;

// Function to get profile picture URL (for post author)
const getProfilePictureUrl = (filename: string) => new URL(`../assets/photos/Pfps/${filename}`, import.meta.url).href;

// Handle post liking
const likePost = (postId: number) => {
  const post = posts.value.find((post: { id: number; }) => post.id === postId);
  if (post) {
    post.likes += 1;
    post.likedByCurrentUser = true;
  }
};

// Handle post deletion
const onDeletePost = (postId: number) => {
  deletePost(postId); // Delete from the store
};
</script>


<template>
  <div class="section">
    <h2 class="title is-4">All Posts</h2>
    <PostList
      :posts="posts"
      :getProfilePictureUrl="getProfilePictureUrl"
      :getPostImageUrl="getPostImageUrl"
      :user="user || undefined"
      @likePost="likePost"
      @deletePost="onDeletePost"
    />
  </div>
</template>



<style scoped>
.card {
  margin-bottom: 1.5rem;
}

.lowered-username {
  margin-top: 15px; /* Adjust this value as needed */
}
</style>
