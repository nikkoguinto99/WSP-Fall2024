<script setup lang="ts">
import { refCart, count, total, removeFromCart } from '@/models/shoppingCart';


const cart = refCart()

</script>

<template>
    <div class="cart">
        <h1 class="title has-text-black">Shopping Cart</h1>
        <div v-if="cart.length === 0">
            <p>Your cart is empty</p>
        </div>
        <div v-else class="has-text-black">
            <div v-for="item in cart" :key="item.product.id" class="item">
                <img :src="item.product.thumbnail" :alt="item.product.title">
                <button @click="removeFromCart(item.product)"  style="float: right">
                  <i class="fas fa-trash has-text-danger"></i>
                </button>
                <h3>{{ item.product.title }}</h3>
                <div>${{ item.product.price }} * {{ item.quantity }} = ${{ item.product.price * item.quantity }}</div>
                <select v-model="item.quantity">
                    <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                </select>
            </div>
            <div>
                <p><strong class="has-text-black">Total: {{ count }} items = ${{ total.toFixed(2) }}</strong></p>
            </div>
        </div>

    </div>
</template>

<style scoped>
.cart {
    padding: 1rem;
    overflow-y: auto;
}

.cart img {
  width: 50px;
  height: 50px;
  float: left;
}

.item {
    border-bottom: 1px ridge #ccc;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
}
</style>
