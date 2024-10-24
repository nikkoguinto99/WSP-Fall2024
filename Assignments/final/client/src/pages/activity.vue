<script lang="ts">
import PostModal from '@/components/workoutForm.vue';

export default {
  name: 'CreatePostPage',
  components: {
    PostModal,
  },
};
</script>

<template>
  <div>
    <h1>Create a New Post</h1>
    <PostModal />
  </div>
</template>

<style scoped>

</style>
