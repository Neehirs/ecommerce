<template>
    <div class="contact-page">
      <div class="container">
        <h1>Contato</h1>
        <p>
          Se você tiver alguma dúvida, sugestão ou precisar de assistência, não hesite em nos contatar! Estamos aqui para ajudar.
        </p>
        
        <h2>Formulário de Contato</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" id="name" v-model="formData.name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email" required />
          </div>
          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea id="message" v-model="formData.message" required></textarea>
          </div>
          <button type="submit" class="btn-submit">Enviar</button>
        </form>
  
        <h2>Informações de Contato</h2>
        <p><strong>Email:</strong> contato@ecommerce.com</p>
        <p><strong>Telefone:</strong> (11) 1234-5678</p>
        <p><strong>Endereço:</strong> Rua Exemplo, 123 - São Paulo, SP</p>
        
        <h2>Localização</h2>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.2251659904573!2d-46.63472068503977!3d-23.555771584681854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58c95c37fb01%3A0xd17a4e54d06767e6!2sRua%20Exemplo%2C%20123%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1605164449027!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Aqui você pode adicionar a lógica para enviar os dados do formulário
        alert(`Mensagem enviada por ${this.formData.name}!`);
        // Limpar o formulário após o envio
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-page {
    padding: 2rem 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s;
  }
  
  input:focus,
  textarea:focus {
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
  }
  
  .btn-submit:hover {
    background-color: #e6b800;
  }
  
  /* Estilos do Mapa */
  .map {
    margin-top: 2rem;
  }
  
  iframe {
    width: 100%;
    max-width: 600px;
    height: 450px;
    border: none;
  }
  </style>
  