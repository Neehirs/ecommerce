<!-- pages/produtos/index.vue -->
<template>
  <div class="Cent">
    <div class="Mod">
      <h1>Produtos</h1>
      <div class="Gride">
      <div class= "Produto" v-for="produto in produtos" :key="produto.id">
        <NuxtLink :to="`/produtos/${produto.id}`">
          <h2 class="Title">{{ produto.title }}</h2>
          <h2 class="Date">{{ produto.date }}</h2>
          <h2 class="Time">{{ produto.time }}</h2>
          <h2 class="Location">{{ produto.location }}</h2>
          <div class="Preco"><p> Preço: {{ produto.preco | currency }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';

  const produtos = [
    {
        id: 1,
        title: 'Festival de Gastronomia Urbana',
    },
    {
        id: 2,
        title: 'Feira de Artes e Artesanato',
    },
    {
        id: 3,
        title: 'Domingo no Cinema - Clássicos ao Ar Livre',
    },
    {
        id: 4,
        title: 'Aulão de Yoga e Meditação ao Ar Livre',
    },
    {
        id: 5,
        title: 'Show de Rock Independente',
    },
    {
        id: 6,
        title: 'Oficina de Fotografia ao Ar Livre',   
    },
    {
        id: 7,
        title: 'Corrida e Caminhada Solidária',  
    },
    {
        id: 8,
        title: 'Workshop de Culinária Vegana',
    },
    {
        id: 9,
        title: 'Sarau de Poesia e Música',
    },
    {
        id: 10,
        title: 'Festival de Cinema Independente',
    }
];
  
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
  <style scoped>
  .Mod {
    text-align:center ;
    max-width: 1200px;

  }
  .Produto{
    border: 2px solid black;
    margin: 30px
  }  
  .Gride{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }
  .Cent{
    display: flex; 
    justify-content: center;
  }
  .Title{
    font-size: large;
    color:black;
    text-decoration:none;
    font-family:Arial, Helvetica, sans-serif;
  }
  .Preco{
    font-size: medium;
    color:black;
    text-decoration:none;
    font-family:Arial, Helvetica, sans-serif;
  }
</style>