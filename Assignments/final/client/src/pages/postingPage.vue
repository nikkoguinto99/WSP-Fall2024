<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, defineProps } from 'vue';
import postData from '@/data/posts.json';

import post from '@/components/postCard.vue';

defineProps({
  limit: Number
})

const posts = ref(postData);
console.log(posts.value); //Tests to see if posts are being loaded correctly
</script>

<template>
  <div class="fixed-grid has-3-cols">
    <div class="grid">
      <div class="cell"></div>
        <div class="cell">

          <post class="card" v-for="post in posts.slice(0, limit || posts.length)" :key="post.date" :post="post"/>



        </div>
      </div>
    </div>

</template>

<style scoped>

</style>
