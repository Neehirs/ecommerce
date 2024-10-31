<!-- pages/produtos/[id].vue -->
<template>
    <div v-if="produto">
      <h1>{{ produto.nome }}</h1>
      <p>Preço: {{ produto.preco | currency }}</p>
      <button @click="adicionarAoCarrinho(produto)">Adicionar ao Carrinho</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useCarrinhoStore } from '~/stores/carrinho';
  
  const produto = ref(null);
  const route = useRoute();
  const carrinhoStore = useCarrinhoStore();
  
  const produtos = [
    { id: 1, nome: 'Produto A', preco: 29.99 },
    { id: 2, nome: 'Produto B', preco: 49.99 },
    { id: 3, nome: 'Produto C', preco: 19.99 },
  ];
  
  onMounted(() => {
    produto.value = produtos.find(p => p.id === parseInt(route.params.id));
  });
  
  function adicionarAoCarrinho(produto) {
    carrinhoStore.adicionarProduto(produto);
  }
  </script>
  