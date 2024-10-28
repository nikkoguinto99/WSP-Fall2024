<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import PostModal from '@/components/workoutForm.vue';
import userData from '@/data/users.json'; // Adjust the path as necessary
import postsData from '@/data/posts.json'; // Adjust the path as necessary

export default defineComponent({
  name: 'CreatePostPage',
  components: {
    PostModal,
  },
  setup() {
    const userId = 1; // Replace with the actual logged-in user ID
    const posts = ref([]);
    const filteredPosts = ref([]);

    // Fetch and filter posts based on the logged-in user's ID
    const fetchPosts = () => {
      posts.value = postsData;
      filteredPosts.value = posts.value.filter(post => post.user.id === userId);
    };

    // Update the posts when a new post is submitted
    const updatePosts = (newPost) => {
      filteredPosts.value.push(newPost);
    };

    onMounted(fetchPosts);

    return {
      filteredPosts,
      updatePosts,
    };
  },
});
</script>

<template>
  <div>
    <h1>Create a New Post</h1>
    <PostModal />
    <div>
    <h1>Your Activity</h1>
    <ul>
      <li v-for="post in filteredPosts" :key="post.caption">
        <img :src="post.image" alt="Workout Image" />
        <p>{{ post.caption }} - {{ post.date }}</p>
      </li>
    </ul>
    <PostModal @submitPost="updatePosts" />
  </div>
  </div>
</template>

<style scoped>

</style>
