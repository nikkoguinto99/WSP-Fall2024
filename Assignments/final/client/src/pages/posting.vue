<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';
import postData from '@/data/posts.json';

import post from '@/components/post.vue';

const posts = ref(postData);
console.log(posts.value); //Tests to see if posts are being loaded correctly
</script>

<template>
  <div class="fixed-grid has-3-cols">
    <div class="grid">
      <div class="cell"></div>
        <div class="cell">

          <post class="card" v-for="post in posts" :key="post.date" :post="post"/>



        </div>
      </div>
    </div>

</template>

<style scoped>

</style>
