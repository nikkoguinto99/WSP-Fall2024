<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import PostModal from '@/components/workoutForm.vue';
import postsData from '@/data/posts.json';

export default defineComponent({
  name: 'CreatePostPage',
  components: {
    PostModal,
  },
  setup() {
    const userId = 1; // Replace with the actual logged-in user ID
    const posts = ref<{ type: string; caption: string; image: string; likes: number; comments: number; date: string; user: { id: number; profilePicture: string; firstName: string; lastName: string; username: string; }; }[]>([]);
    const filteredPosts = ref<{ type: string; caption: string; image: string; likes: number; comments: number; date: string; user: { id: number; profilePicture: string; firstName: string; lastName: string; username: string; }; }[]>([]);

    // Fetch and filter posts based on the logged-in user's ID
    const fetchPosts = () => {
      posts.value = postsData;
      filteredPosts.value = posts.value.filter(post => post.user.id === userId);
    };

    // Update the posts when a new post is submitted
    const updatePosts = (newPost: { type: string; caption: string; image: string; likes: number; comments: number; date: string; user: { id: number; profilePicture: string; firstName: string; lastName: string; username: string; }; }) => {
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
