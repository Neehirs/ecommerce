<!-- pages/produtos/index.vue -->
<template>
    <div>
      <h1>Produtos</h1>
      <div v-for="produto in produtos" :key="produto.id">
        <NuxtLink :to="`/produtos/${produto.id}`">
          <h2>{{ produto.nome }}</h2>
          <p>Preço: {{ produto.preco | currency }}</p>
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const produtos = ref([
    { id: 1, nome: 'Produto A', preco: 29.99 },
    { id: 2, nome: 'Produto B', preco: 49.99 },
    { id: 3, nome: 'Produto C', preco: 19.99 },
  ]);
  
  // Filtro de moeda para exibir o preço corretamente
  defineNuxtPlugin(() => {
    return {
      provide: {
        currency(value) {
          return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(value);
        }
      }
    }
  });
  </script>
  