<template>
    <div class="login-page">
      <div class="container">
        <h1>Login</h1>
        <p>Entre na sua conta para continuar.</p>
  
        <form @submit.prevent="submitLogin">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit" class="btn-submit">Entrar</button>
        </form>
  
        <div class="options">
          <NuxtLink to="/recuperar-senha" class="link">Esqueceu a senha?</NuxtLink>
          <p>Ainda não tem uma conta? <NuxtLink to="/registrar" class="link">Registre-se aqui</NuxtLink></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      submitLogin() {
        // Aqui você pode adicionar a lógica para autenticação do usuário
        alert(`Login realizado com sucesso para ${this.email}!`);
        // Aqui você pode redirecionar para outra página após o login
        // this.$router.push('/dashboard');
      }
    }
  }
  </script>
  
  <style scoped>
  .login-page {
    padding: 2rem 0;
  }
  
  .container {
    max-width: 400px;
    margin: 0 auto;
    padding: 0 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  p {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s;
  }
  
  input:focus {
    border-color: #ffcc00;
    outline: none;
  }
  
  .btn-submit {
    background-color: #ffcc00;
    color: black;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
  }
  
  .btn-submit:hover {
    background-color: #e6b800;
  }
  
  .options {
    text-align: center;
    margin-top: 1.5rem;
  }
  
  .link {
    color: #007bff;
    text-decoration: none;
  }
  
  .link:hover {
    text-decoration: underline;
  }
  </style>
  