<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import { getAll, type Product } from '@/models/products'

const products = ref([] as Product[]);

getAll().then((data) => {
  products.value = data.data;
});
</script>

<template>
  <div>
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>
              <img :src="product.thumbnail" alt="Product Thumbnail" width="50" height="50" />
            </td>
            <td>{{ product.id }}</td>
            <td>{{ product.title }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.description }}</td>
            <td>
             <button class="btn btn-danger">Edit</button>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<style scoped>

</style>
