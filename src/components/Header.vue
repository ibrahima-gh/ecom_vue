<template>
  <header class="m-4 justify-between items-center flex flex-col gap-4">
    <RouterLink to="/" class="bg-[#262629] text-white/80 px-4 py-2 rounded-lg">Accueil</RouterLink>
    <nav class="flex gap-3">
      <span v-if="store.isAuthenticated" class="text-white py-2 text-xl"> Bienvenu, {{ store.user.username }}</span>
      <RouterLink v-if="!store.isAuthenticated" to="/login" class="bg-[#262629] text-white/80 px-4 py-2 rounded-lg">Connexion</RouterLink>
      <RouterLink v-if="!store.isAuthenticated" to="/register" class="bg-[#262629] text-white/80 px-4 py-2 rounded-lg">S'inscrire</RouterLink>
      <RouterLink to="/cart" class="bg-[#262629] text-white/80 px-4 py-2 rounded-lg">Panier</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useAuth } from '../store/auth';
const store = useAuth();
</script>