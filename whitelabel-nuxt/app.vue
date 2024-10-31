<template>
  <div>
    <Header />
    <main>
      <NuxtPage /> 
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
