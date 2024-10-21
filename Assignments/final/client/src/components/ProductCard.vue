<!-- eslint-disable vue/no-dupe-keys -->
<script setup lang="ts">
import type { Product } from '@/models/products'; //Imports typescript not javascript

defineProps<{                                     //Defines the props as macro
    product: Product
}>()

</script>
<template>
    <div class="box">
        <div class="box-image">
            <img :src="product.thumbnail" alt="product.name" />
        </div>
        <div class="box-content">
            <h3>{{ product.title }}</h3>
            <p> {{ product.brand }}</p>
            <p>{{ product.description }}</p>
            <p class="price">${{ product.price }}</p>
            <button class="button is-success">Add to Cart</button>
        </div>
    </div>
</template>
<style scoped>
h3 {
    font-weight: bold;
}

i {
  color: #888;
}

.price {
  color: chocolate;
  font-size: 2em;
  font-weight: bold;
  float: right;
}
</style>
