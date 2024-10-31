<!-- components/Footer.vue -->
<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-links">
          <div class="links-column">
            <h3>Sobre Nós</h3>
            <ul>
              <li><NuxtLink to="/sobre">Nossa História</NuxtLink></li>
              <li><NuxtLink to="/contato">Contato</NuxtLink></li>
              <li><NuxtLink to="/politica">Política de Privacidade</NuxtLink></li>
              <li><NuxtLink to="/termos">Termos de Serviço</NuxtLink></li>
            </ul>
          </div>
          <div class="links-column">
            <h3>Ajuda</h3>
            <ul>
              <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
              <li><NuxtLink to="/envio">Envio e Entrega</NuxtLink></li>
              <li><NuxtLink to="/devolucoes">Devoluções</NuxtLink></li>
            </ul>
          </div>
          <div class="links-column">
            <h3>Siga-nos</h3>
            <ul class="social-media">
              <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div class="newsletter">
          <h3>Assine nossa Newsletter</h3>
          <form @submit.prevent="subscribe">
            <input type="email" placeholder="Seu e-mail" v-model="email" required />
            <button type="submit" class="btn btn-newsletter">Inscrever-se</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} E-commerce. Todos os direitos reservados.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const currentYear = new Date().getFullYear();
  
  const subscribe = () => {
    // Lógica para inscrição na newsletter, como enviar o email para um servidor
    alert(`Inscrito com sucesso: ${email.value}`);
    email.value = ''; // Limpar o campo após a inscrição
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: white;
    padding: 2rem 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .footer-links {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .links-column {
    flex: 1;
    min-width: 200px;
    margin-bottom: 1rem;
  }
  
  .links-column h3 {
    margin-bottom: 0.5rem;
  }
  
  .links-column ul {
    list-style: none;
    padding: 0;
  }
  
  .links-column ul li {
    margin: 0.5rem 0;
  }
  
  .links-column ul li a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .links-column ul li a:hover {
    color: #ffcc00;
  }
  
  .social-media {
    display: flex;
    flex-direction: column;
  }
  
  .newsletter {
    margin-top: 2rem;
    text-align: center;
  }
  
  .newsletter h3 {
    margin-bottom: 1rem;
  }
  
  .newsletter form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .newsletter input {
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    margin-right: 0.5rem;
  }
  
  .btn-newsletter {
    background-color: #ffcc00;
    color: black;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-newsletter:hover {
    background-color: #e6b800;
  }
  
  .footer-bottom {
    margin-top: 2rem;
    text-align: center;
    border-top: 1px solid #444;
    padding-top: 1rem;
  }
  </style>
  