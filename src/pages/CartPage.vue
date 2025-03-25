<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl text-white font-bold mb-4">Panier</h1>
    
    <div v-if="cart.length > 0">
      <ul class="flex flex-col gap-2">
        <li v-for="(item, index) in cart" :key="index" class="p-4 rounded-lg text-white/80 bg-zinc-800 flex items-center justify-between">
          <img :src="item.imgurl" alt="Product Image" class="w-24 h-24 object-cover rounded-md mr-4" />
          <span>{{ item.name }} - {{ item.price }}€ x {{ item.quantity }}</span>
          <div>
            <button @click="cartStore.updateQuantity(index, item.quantity + 1)" class="p-2 bg-green-500 text-white rounded pointer cursor-pointer">+</button>
            <button @click="cartStore.updateQuantity(index, item.quantity - 1)" class="p-2 bg-red-500 text-white rounded ml-2 cursor-pointer">-</button>
            <button @click="cartStore.removeFromCart(index)" class="p-2 bg-gray-500 text-white rounded ml-2 cursor-pointer">X</button>
          </div>
        </li>
      </ul>
    </div>
    <p v-else class="text-gray-600">Votre panier est vide.</p>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart.js';

const cartStore = useCartStore();
const cart = cartStore.cart;
</script>