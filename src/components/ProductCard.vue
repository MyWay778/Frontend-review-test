<template>
    <div class="card" :style="{ width: cardWidth + '%' }">

      <p class="card-title">{{ product.title }}</p>

      <img class="card-image"
           :src="product.image"
           :alt="product.title"
           loading="lazy">
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

      <div>
        <input type="number"
               v-model.number="amount">
        <span>кг</span>
      </div>

      <button @click="addToCart()"> В корзину </button>

    </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      require: true
    },
    cardWidth: {
      type: Number,
      default: 100
    },
    currency: {
      type: String,
      default: 'VGTB'
    }
  },

  data() {
    return {
      amount: 0
    };
  },

  methods: {
    addToCart() {
      const cartItem = {
        id: this.product.id,
        amount: this.amount,
        price: this.product.price,
        title: this.product.title
      }

      this.$emit('add-to-cart', {cartItem});
      this.amount = 0;
    },
  }
}
</script>

<style>
.card {
  display: inline-block;
  width: 100%;
  border: 1px solid #908888;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}

.card-image {
  width: 100%;
}

button {
  padding: 5px;
  margin: 5px;
}
</style>
