<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import { type Product, create, getById, update } from '@/models/products'
import { useRoute } from 'vue-router'

const product = ref({} as Product);

const route = useRoute(); //Vue 3 returns reactive data. Research Vue 3 composables

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
route.params.id && getById(+route.params.id).then((data) => {
  product.value = data.data;
});


function onsubmit() {
  if (route.params.id) {
    update(product.value).then((data) => {
      console.log(data);
    });
  } else {
    create(product.value).then((data) => {
      console.log(data);
    });
  }
}
</script>

<template>
  <div>
    <h1>{{ route.params.id ? 'Edit' : 'Add' }} Product</h1>
    <form @submit.prevent="onsubmit">
      <div class="field">
      <label class="label" for="title">Title</label>
      <div class="control">
        <input type="text" class="input" id="title" v-model="product.title">
      </div>
      </div>
      <div class="field">
      <label class="label" for="price">Price</label>
      <div class="control">
        <input type="number" class="input" id="price" v-model="product.price">
      </div>
      </div>
      <div class="field">
      <label class="label" for="category">Category</label>
      <div class="control">
        <input type="text" class="input" id="category" v-model="product.category">
      </div>
      </div>
      <div class="field">
      <label class="label" for="description">Description</label>
      <div class="control">
        <textarea class="textarea" id="description" v-model="product.description"></textarea>
      </div>
      </div>
      <div class="field">
      <div class="control">
        <button type="submit" class="button is-primary">Submit</button>
      </div>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>

<!--
  Things to research:
    VueUse
    Vue 3 Composables
-->
