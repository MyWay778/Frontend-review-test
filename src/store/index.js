import api from '../../api/products.js';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    currency: 'VGTB'
  },

  getters: {
    products: state => state.products,
    cart: state => state.cart,
    cartItem: state => id => state.cart.find(i => i.id === id),
    currency: state => state.currency
  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      state.cart.push(product); 
    }
  },

  actions: {
    async getProductsList(ctx) {
      try {
        const productsList = await api.getProductsList();
        ctx.commit('setProducts', productsList);
      } catch(err) {
        console.warn('Error in getProductsList:', err);
      }
    },
    addProductToCart(ctx, item) {
      const {cartItem} = ctx.getters;
      const foundItem = cartItem(item.id);
      
      if (foundItem) {
        foundItem.amount += item.amount;
      } else {
        ctx.commit('addToCart', item);
      }
    }
  },

  modules: {
  }
})
