<template>
  <ul class="cart-list">
    <li v-for="item, index in reversedCart" :key="item.id">
     {{ getItemNumber(index) }}. <b>{{ item.title }}</b> - {{ item.price }} {{ currency }} * {{ item.amount }} кг.
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    cart: Array,
    currency: {
      type: String,
      require: true
    }
  },
  computed: {
      reversedCart() {
          return this.cart.reverse();
      },
      itemNumber(index) {
        reversedCart.length - index 
      }
  },

  methods: {
    getItemNumber(index) {
      return this.cart.length - index;
    }
  }
};
</script>

<style>
.cart-list {
  padding-left: 10px;
  list-style-type: none;
}
</style>
