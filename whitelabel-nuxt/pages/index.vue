<!-- pages/index.vue -->
<template>
    <div>
      <section class="hero">
        <div class="hero-content">
          <h1>Bem-vindo ao nosso E-commerce!</h1>
          <p>Descubra produtos incríveis a preços imbatíveis.</p>
          <div class="btn-group">
            <NuxtLink to="/produtos" class="btn btn-primary">Ver Produtos</NuxtLink>
            <NuxtLink to="/categorias" class="btn btn-secondary">Explorar Categorias</NuxtLink>
          </div>
        </div>
      </section>
  
      <section class="featured-products">
        <h2>Produtos em Destaque</h2>
        <div class="product-grid">
          <div class="product-card" v-for="product in featuredProducts" :key="product.id">
            <img :src="product.image" :alt="product.name" />
            <h3>{{ product.name }}</h3>
            <p>R$ {{ product.price.toFixed(2) }}</p>
            <NuxtLink to="/produtos" class="btn btn-product">Adicionar ao Carrinho</NuxtLink>
          </div>
        </div>
      </section>
  
      <section class="categories">
        <h2>Categorias</h2>
        <div class="category-grid">
          <NuxtLink to="/categorias/eletrodomesticos" class="category-card">Eletrodomésticos</NuxtLink>
          <NuxtLink to="/categorias/roupas" class="category-card">Roupas</NuxtLink>
          <NuxtLink to="/categorias/eletroeletronicos" class="category-card">Eletroeletrônicos</NuxtLink>
        </div>
      </section>
  
      <section class="testimonials">
        <h2>O que nossos clientes dizem</h2>
        <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.id">
          <p>"{{ testimonial.text }}"</p>
          <h4>- {{ testimonial.author }}</h4>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // Simulação de produtos em destaque e depoimentos. Em um projeto real, você pode buscar isso de uma API.
  const featuredProducts = [
    { id: 1, name: 'Produto 1', price: 99.99, image: '/images/produto1.jpg' },
    { id: 2, name: 'Produto 2', price: 149.99, image: '/images/produto2.jpg' },
    { id: 3, name: 'Produto 3', price: 79.99, image: '/images/produto3.jpg' },
  ];
  
  const testimonials = [
    { id: 1, text: 'Excelente atendimento e produtos de qualidade!', author: 'Maria Silva' },
    { id: 2, text: 'Amei a experiência de compra, super recomendo!', author: 'João Pereira' },
    { id: 3, text: 'Entrega rápida e produtos em perfeito estado!', author: 'Ana Souza' },
  ];
  </script>
  
  <style scoped>
  .hero {
    background-image: url('/images/hero-bg.jpg'); /* Substitua pela sua imagem */
    background-size: cover;
    background-position: center;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    padding: 1rem;
    position: relative;
  }
  
  .hero-content {
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.5); /* Transparência para melhorar a legibilidade */
    border-radius: 10px;
  }
  
  .btn-group {
    margin-top: 1rem;
  }
  
  .btn {
    margin: 0 0.5rem;
    padding: 1rem 2rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  
  .btn-primary {
    background-color: #ffcc00;
    color: black;
  }
  
  .btn-secondary {
    background-color: #fff;
    color: #333;
  }
  
  .btn-primary:hover, .btn-secondary:hover {
    opacity: 0.8;
  }
  
  .featured-products, .categories, .testimonials {
    padding: 2rem;
  }
  
  .product-grid, .category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .product-card, .category-card {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .product-card:hover, .category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  .product-card img {
    max-width: 100%;
    border-radius: 10px;
  }
  
  .testimonials {
    background-color: #f9f9f9;
    padding: 2rem;
    border-radius: 10px;
    margin: 2rem 0;
  }
  
  .testimonial-card {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem 0;
  }
  </style>
  