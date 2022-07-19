<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Header',

  props: {
    cart: Array,
    required: true,
    default: ({}) => {}, // must be a function with non primitive types

    currency: {
      type: String,
      default: 'VGTB'
    },
  },

  computed: {
    cartPrice() {
      return this.cart.reduce((sum, item) => sum + (item.price * item.amount), 0).toFixed(2);
    }
  },
  // No need to use watch
  // watch: {
  //   cart(cart) {
  //     let val = 0;
  //     cart.forEach((item) => {
  //       val += item.price * item.amount;
  //     });
  //     this.cartPrice = val;
  //   },
  // },
}
</script>

<style scoped>
.header {
  padding: 10px;
  background: #e5e5e5;
}
</style>
