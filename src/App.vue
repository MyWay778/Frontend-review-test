<template>
  <div id="app">
    <Header :cart="cart" :currency="currency"></Header>
    <List :currency="currency"/>
    <Cart :cart="cart" :currency="currency"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Header from './components/Header.vue';
import List from './components/List.vue';
import Cart from './components/Cart.vue';

export default {
  name: 'App',
  data() {
    return {
       // Extract to vuex state
      // cart: [],
      // currency: 'VGTB',
    };
  },
  components: {
    Header,
    List,
    Cart,
  },
  computed: {
    ...mapGetters(['products', 'cart', 'currency'])
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
