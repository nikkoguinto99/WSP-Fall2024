<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useposts } from '@/models/posts';
import { useUserStore } from '@/models/userStore';
import PostList from '@/components/PostList.vue';
import { OAutocomplete } from '@oruga-ui/oruga-next';

// Get posts and user data
const { posts, deletePost } = useposts();
const userStore = useUserStore();

const searchQuery = ref('');
const options = ref([]);

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

// Filter posts by profileName
const filteredPosts = computed(() => {
  if (!searchQuery.value) {
    return posts.value;
  }
  return posts.value.filter(post => {
    const user = userStore.state.user && userStore.state.user.id === post.userID ? userStore.state.user : null;
    return user && user.profileName.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

// Perform search
const performSearch = async () => {
  if (searchQuery.value.trim() === '') {
    options.value = []; // Clear autocomplete options if query is empty
    return;
  }
  const response = await searchApi(searchQuery.value);
  if (response.isSuccess) {
    options.value = response.data.map((user: { id: unknown; profileName: unknown; }) => ({
      value: user.id,
      label: user.profileName
    }));
  } else {
    options.value = [];
  }
};

async function searchApi(value: string) {
  try {
    const response = await fetch('../../../server/data/users.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const filteredUsers = data.users.filter((user: { profileName: string; }) =>
      user.profileName.toLowerCase().includes(value.toLowerCase())
    );
    return {
      isSuccess: true,
      data: filteredUsers
    };
  } catch (error) {
    console.error('Error fetching search results:', error);
    return {
      isSuccess: false,
      data: []
    };
  }
}
</script>

<template>
  <div class="container">
    <div class="field">
      <label class="label">Search Posts by profileName</label>
      <div class="control has-icons-left">
        <o-autocomplete
          v-model="searchQuery"
          :options="options"
          rounded
          expanded
          placeholder="Search by profileName"
          icon="search"
          clearable
          open-on-focus
          @input="performSearch">
          <template #empty>No results found</template>
        </o-autocomplete>
      </div>
    </div>

    <PostList
      :posts="filteredPosts"
      :getProfilePictureUrl="getProfilePictureUrl"
      :getPostImageUrl="getPostImageUrl"
      @likePost="likePost"
      @deletePost="onDeletePost"
    />
    /></div>
</template>

<style scoped>
.card {
  margin-bottom: 1.5rem;
}

.lowered-profileName {
  margin-top: 15px; /* Adjust this value as needed */
}
</style>
