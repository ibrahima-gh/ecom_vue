<template>
  <main class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h1 class="text-2xl font-bold text-center mb-6">Login</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            name="email"
            class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            v-model="form.password"
            type="password"
            id="password"
            name="password"
            class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
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
  email: '',
  password: ''
});

const login = async () => {
    try {
      const user = await store.authenticate(form.email, form.password);
      store.user = {
        username: form.email.split('@')[0],
        email: form.email
      };
      console.log('Utilisateur connecté :', store.user);
      router.push('/');
    } catch (error) {
      console.error('Erreur lors de la connexion', error);
    }
  };
</script>