<!-- pages/carrinho.vue -->
<template>
    <div>
      <h1>Carrinho</h1>
      <div v-if="carrinho.length > 0">
        <div v-for="item in carrinho" :key="item.id">
          <h2>{{ item.nome }}</h2>
          <p>Preço: {{ item.preco | currency }}</p>
        </div>
        <h3>Total: {{ total | currency }}</h3>
      </div>
      <div v-else>
        <p>O carrinho está vazio.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useCarrinhoStore } from '~/stores/carrinho';
  
  const carrinhoStore = useCarrinhoStore();
  
  const carrinho = computed(() => carrinhoStore.carrinho);
  const total = computed(() =>
    carrinho.value.reduce((sum, item) => sum + item.preco, 0)
  );
  </script>
  