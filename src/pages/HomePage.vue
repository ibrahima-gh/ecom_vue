<template>
  <div class="flex flex-col h-full justify-between text-center">
    <main class="p-4">
      <p class="text-lg text-white">Bienvenue</p>
      <div v-if="store.isAuthenticated" class="text-white">
        <h1 class="text-2xl font-bold mb-10">Catalogue</h1>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="product in products" :key="product.id" class="p-4 rounded-lg bg-zinc-800 text-white flex flex-col items-start shadow-lg hover:shadow-2xl">
            <img :src="product.imgurl" alt="Product Image" class="w-20 h-full object-cover rounded-md mb-4" />
            <h2 class="text-lg font-semibold">{{ product.name }}</h2>
            <p class="text-green-600">{{ product.price }}€</p>
            <p class="text-sm text-gray-400">{{ product.description }}</p>
            <button 
              @click="addToCartAndRedirect(product)" 
              class="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
      <p v-else class="text-gray-600 mt-6">Veuillez vous connecter pour voir le catalogue.</p>
    </main>
    <footer class="bg-black text-white p-4">
      <p>&copy; 2025 site Ecom pour Monsieur Rose le meilleur prof</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '../store/cart.js';
import { useAuth } from '../store/auth';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const store = useAuth();
const router = useRouter();

const products = ref([
  { id: 1, name: 'Produit A', price: 10, description: 'Une description rapide du produit A.', imgurl: 'src/assets/image.png' },
  { id: 2, name: 'Produit B', price: 15, description: 'Une description rapide du produit B.', imgurl: 'src/assets/image.png' },
  { id: 3, name: 'Produit C', price: 20, description: 'Une description rapide du produit C.', imgurl: 'src/assets/image.png' },
  { id: 4, name: 'Produit D', price: 25, description: 'Une description rapide du produit D.', imgurl: 'src/assets/image.png' },
  { id: 5, name: 'Produit E', price: 30, description: 'Une description rapide du produit E.', imgurl: 'src/assets/image.png' },
  { id: 6, name: 'Produit F', price: 35, description: 'Une description rapide du produit F.', imgurl: 'src/assets/image.png' },
]);

const addToCartAndRedirect = (product) => {
  cartStore.addToCart(product);
  router.push('/cart');
};
</script>