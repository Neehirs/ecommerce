<template>
    <header class="header">
      <div class="container">
        <NuxtLink to="/" class="logo">E-commerce</NuxtLink>
        <div class="search-bar">
          <input type="text" placeholder="Buscar produtos..." />
          <button class="btn-search">🔍</button>
        </div>
        <button class="menu-toggle" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <nav :class="{'nav': true, 'active': menuOpen}">
          <ul>
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/produtos">Produtos</NuxtLink>
            </li>
            <li @click="toggleCategories" class="has-dropdown">
              <span>Categorias</span>
              <ul v-if="categoriesOpen" class="dropdown">
                <li v-for="category in categories" :key="category.id">
                  <NuxtLink :to="`/categorias/${category.slug}`">{{ category.name }}</NuxtLink>
                </li>
              </ul>
            </li>
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
  
  <script>
  export default {
    data() {
      return {
        menuOpen: false,
        categoriesOpen: false, // Controla a visibilidade do submenu de categorias
        categories: [], // Armazena as categorias
      };
    },
    mounted() {
      this.fetchCategories(); // Chama a função para buscar as categorias quando o componente é montado
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
      toggleCategories() {
        this.categoriesOpen = !this.categoriesOpen; // Alterna o submenu de categorias
      },
      async fetchCategories() {
        try {
          const response = await fetch('https://api-wl.agcodecraft.com/api/public/categories');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.categories = data; // Armazena as categorias obtidas da API
        } catch (error) {
          console.error('Error fetching categories:', error); // Tratamento de erro
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .header {
    background: linear-gradient(90deg, #ff6f61, #ffcc00);
    color: white;
    padding: 1rem 0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
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
    font-size: 2.5rem;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    text-decoration: none;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
  }
  
  .search-bar input {
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    margin-right: 0.5rem;
    transition: box-shadow 0.3s;
  }
  
  .search-bar input:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(255, 204, 0, 0.8);
  }
  
  .search-bar .btn-search {
    padding: 0.5rem;
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .search-bar .btn-search:hover {
    background-color: #ffcc00;
  }
  
  .nav {
    display: flex;
    align-items: center;
  }
  
  .nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }
  
  .nav ul li {
    position: relative;
    cursor: pointer; /* Indica que o item é clicável */
  }
  
  .nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .nav ul li a:hover {
    color: #ffcc00;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  }
  
  .dropdown {
    display: none; /* Inicialmente escondido */
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #333;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .has-dropdown:hover .dropdown,
  .dropdown {
    display: block; /* Exibe o dropdown ao clicar no item de categorias */
  }
  
  .dropdown li {
    margin: 0.5rem 0;
  }
  
  .dropdown li a {
    color: #ffcc00;
  }
  
  .dropdown li a:hover {
    color: white;
    text-decoration: underline;
  }
  
  .actions {
    display: flex;
    align-items: center;
  }
  
  .cart-icon img {
    width: 30px; /* Aumentado para melhor visibilidade */
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
  
  /* Menu Hambúrguer */
  .menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .bar {
    height: 3px;
    width: 25px;
    background-color: white;
    margin: 2px 0;
    transition: 0.4s;
  }
  
  /* Estilos Responsivos */
  @media (max-width: 768px) {
    .search-bar {
      display: none; /* Oculta a barra de busca em telas menores */
    }
  
    .nav {
      position: absolute;
      top: 70px; /* Distância do topo */
      right: 0;
      background-color: #444;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      padding: 1rem;
      display: none; /* Esconde por padrão */
      z-index: 1000;
    }
  
    .nav.active {
      display: flex; /* Mostra o menu quando ativo */
    }
  
    .nav ul {
      flex-direction: column; /* Muda a direção para coluna em telas pequenas */
      gap: 1rem;
    }
  
    .menu-toggle {
      display: flex; /* Mostra o botão do menu hambúrguer */
    }
  }
  </style>
  