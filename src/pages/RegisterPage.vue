<template>
<main class="flex justify-center items-center h-screen">
  <div class="bg-zinc-800 p-8 rounded-lg shadow-lg w-96 text-white/70">
    <h1 class="text-2xl font-bold text-center mb-6">Inscription</h1>
    <form @submit.prevent="register">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-white/60">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          v-model="form.name"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-white/60">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          v-model="form.email"
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-sm font-medium text-white/60">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          v-model="form.password"
        />
      </div>
      <button
        type="submit"
        class="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        S'inscrire
      </button>
    </form>
  </div>
</main>
</template>
<script setup>
import { reactive } from 'vue';
import { useAuth } from '../store/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useAuth();

const form = reactive({
  name: '',
  email: '',
  password: ''
});

const register = async () => {
  try {
    const username = form.email.split('@')[0];
    await store.register({ username, ...form });
    store.user = { username, email: form.email };
    console.log('Utilisateur enregistré :', store.user);
    router.push('/');
  } catch (error) {
    console.error('Erreur lors de l\'inscription', error);
  }
};
</script>