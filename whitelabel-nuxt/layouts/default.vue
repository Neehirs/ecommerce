<!-- layouts/default.vue -->
<template>
    <div>
      <Header />
      <main>
        <slot /> <!-- Aqui as páginas serão renderizadas -->
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  </script>
  
  <style scoped>
  main {
    min-height: 80vh;
    padding: 2rem;
  }
  </style>
  