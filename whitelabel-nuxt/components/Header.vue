<!-- components/Header.vue -->
<template>
    <header>
      <nav>
        <NuxtLink to="/" class="logo">E-commerce</NuxtLink>
        <ul class="nav-links">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/produtos">Produtos</NuxtLink></li>
          <li><NuxtLink to="/carrinho">Carrinho</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style scoped>
  header {
    background-color: #333;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
    margin-right: 2rem;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
  }
  
  .nav-links a:hover {
    color: #ffcc00;
  }
  </style>
  