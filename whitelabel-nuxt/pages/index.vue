<!-- pages/index.vue -->
<template>
    <div>
      <section class="hero">
        <div class="hero-content">
          <h1>Bem-vindo ao nosso E-commerce!</h1>
          <p>Descubra os melhores produtos com os melhores preços.</p>
          <NuxtLink to="/produtos" class="btn">Ver Produtos</NuxtLink>
        </div>
      </section>
  
      <section class="featured-products">
        <h2>Produtos em Destaque</h2>
        <div class="product-grid">
          <div class="product-card" v-for="product in featuredProducts" :key="product.id">
            <img :src="product.image" :alt="product.name" />
            <h3>{{ product.name }}</h3>
            <p>R$ {{ product.price.toFixed(2) }}</p>
            <NuxtLink to="/produtos" class="btn">Adicionar ao Carrinho</NuxtLink>
          </div>
        </div>
      </section>
  
      <section class="categories">
        <h2>Categorias</h2>
        <div class="category-links">
          <NuxtLink to="/categorias/eletrodomesticos">Eletrodomésticos</NuxtLink>
          <NuxtLink to="/categorias/roupas">Roupas</NuxtLink>
          <NuxtLink to="/categorias/eletroeletronicos">Eletroeletrônicos</NuxtLink>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // Simulação de produtos em destaque. Em um projeto real, você pode buscar isso de uma API.
  const featuredProducts = [
    { id: 1, name: 'Produto 1', price: 99.99, image: '/images/produto1.jpg' },
    { id: 2, name: 'Produto 2', price: 149.99, image: '/images/produto2.jpg' },
    { id: 3, name: 'Produto 3', price: 79.99, image: '/images/produto3.jpg' },
  ];
  </script>
  
  <style scoped>
  .hero {
    background-image: url('/images/hero-bg.jpg'); /* Substitua pela sua imagem */
    background-size: cover;
    background-position: center;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
  }
  
  .hero-content {
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.5); /* Transparência para melhorar a legibilidade */
  }
  
  .btn {
    background-color: #ffcc00;
    color: black;
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .featured-products, .categories {
    padding: 2rem;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .product-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 1rem;
    text-align: center;
  }
  
  .product-card img {
    max-width: 100%;
    height: auto;
  }
  
  .category-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  </style>
  