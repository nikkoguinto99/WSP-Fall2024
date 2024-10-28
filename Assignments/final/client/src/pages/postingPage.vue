<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';
import type { PostsData } from '../models/posting';
import postCard from '../components/postCard.vue';
import postData from '@/data/posts.json';

const posts = ref<PostsData>(postData);

console.log(posts.value); //Tests to see if posts are being loaded correctly
</script>

<template>
  <div class="fixed-grid has-3-cols">
    <div class="grid">
      <div class="cell"></div>
        <div class="cell">


          <div class="shelf">
            <postCard v-for="post in posts" :key="post.user.id" :post="post" />

          </div>

        </div>
      </div>
    </div>


</template>

<style scoped>

</style>
