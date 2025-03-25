<template>
  <Header />
  <div>
    <RouterView/>
  </div>
  </template>
  
  <script setup>
  import Header from './components/Header.vue';
  import { useRoute } from 'vue-router';
  const route = useRoute();
  </script>