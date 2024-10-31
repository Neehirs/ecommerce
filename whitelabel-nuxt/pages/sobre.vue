<template>
    <div class="about-page">
      <div class="container">
        <h1>Sobre Nós</h1>
        <p>
          Bem-vindo à nossa loja de e-commerce! Desde o início, nossa missão é fornecer produtos de alta qualidade a preços acessíveis. Acreditamos que todos merecem a oportunidade de acessar as últimas tendências e inovações do mercado.
        </p>
        <h2>Missão</h2>
        <p>
          Nossa missão é oferecer uma experiência de compra online excepcional, com um portfólio diversificado de produtos que atendam às necessidades de nossos clientes.
        </p>
        <h2>Visão</h2>
        <p>
          Queremos ser a principal escolha de e-commerce para os consumidores que buscam qualidade, diversidade e preços justos. Estamos comprometidos em melhorar continuamente nossos serviços e expandir nosso alcance global.
        </p>
        <h2>Valores</h2>
        <ul>
          <li>Qualidade: Oferecer produtos de alta qualidade.</li>
          <li>Transparência: Ser transparentes em todas as nossas operações.</li>
          <li>Inovação: Buscar constantemente novas formas de melhorar nossa oferta.</li>
          <li>Sustentabilidade: Comprometemo-nos com práticas sustentáveis.</li>
        </ul>
        
        <h2>Nossa Equipe</h2>
        <div class="team">
          <div class="team-member">
            <!-- <img src="/images/team-member-1.jpg" alt="Membro da Equipe" /> -->
            <h3>Maria Silva</h3>
            <p>Fundadora & CEO</p>
            <p>Maria é a visionária por trás da nossa empresa, trazendo anos de experiência no setor de e-commerce.</p>
          </div>
          <div class="team-member">
            <!-- <img src="/images/team-member-2.jpg" alt="Membro da Equipe" /> -->
            <h3>João Souza</h3>
            <p>Diretor de Operações</p>
            <p>João é responsável por garantir que nossos processos operacionais sejam os mais eficientes possíveis.</p>
          </div>
          <div class="team-member">
           <!--  <img src="/images/team-member-3.jpg" alt="Membro da Equipe" /> -->
            <h3>Ana Pereira</h3>
            <p>Gerente de Marketing</p>
            <p>Ana traz criatividade e estratégia para nossa equipe de marketing, ajudando a conectar nossos produtos aos clientes.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .about-page {
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
  
  ul {
    margin: 1rem 0;
    padding-left: 20px;
  }
  
  .team {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  .team-member {
    flex: 1 1 30%; /* Flexível para responsividade */
    background-color: #f9f9f9;
    border-radius: 5px;
    padding: 1rem;
    text-align: center;
  }
  
  .team-member img {
    width: 100%;
    height: auto;
    border-radius: 50%; /* Forma redonda para as fotos da equipe */
    margin-bottom: 1rem;
  }
  
  .team-member h3 {
    margin: 0.5rem 0;
    font-size: 1.5rem;
  }
  
  .team-member p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: #666;
  }
  </style>
  