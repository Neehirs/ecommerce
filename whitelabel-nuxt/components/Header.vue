<!-- components/Header.vue -->
<template>
    <header class="header">
      <div class="container">
        <NuxtLink to="/" class="logo">E-commerce</NuxtLink>
        <nav class="nav">
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/produtos">Produtos</NuxtLink></li>
            <li><NuxtLink to="/categorias">Categorias</NuxtLink></li>
            <li><NuxtLink to="/sobre">Sobre</NuxtLink></li>
            <li><NuxtLink to="/contato">Contato</NuxtLink></li>
          </ul>
        </nav>
        <div class="actions">
          <NuxtLink to="/carrinho" class="cart-icon">
            <img src="/images/cart-icon.webp" alt="Carrinho" />
          </NuxtLink>
          <NuxtLink to="/login" class="btn btn-login">Login</NuxtLink>
        </div>
      </div>
    </header>
  </template>
  
  <style scoped>
  .header {
    background-color: #333;
    color: white;
    padding: 1rem 0;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }
  
  .nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }
  
  .nav ul li {
    display: inline;
  }
  
  .nav ul li a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .nav ul li a:hover {
    color: #39a88c;
  }
  
  .actions {
    display: flex;
    align-items: center;
  }
  
  .cart-icon img {
    width: 24px; /* Ajuste conforme necessário */
    margin-right: 1rem;
  }
  
  .btn-login {
    background-color: #ffcc00;
    color: black;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .btn-login:hover {
    background-color: #e6b800;
  }
  </style>
  