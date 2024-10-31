// stores/carrinho.js
import { defineStore } from 'pinia';

export const useCarrinhoStore = defineStore('carrinho', {
  state: () => ({
    carrinho: []
  }),
  actions: {
    adicionarProduto(produto) {
      this.carrinho.push(produto);
    },
    removerProduto(id) {
      this.carrinho = this.carrinho.filter(produto => produto.id !== id);
    }
  }
});
