<template>
  <div class="product-list">
    <ProductCard v-for="product in products"
                 :key="product.id"
                 :product="product"
                 :cardWidth="cardsWidth"
                 :currency="currency"
                 @add-to-cart="addToCart"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductCard from './ProductCard';

export default {
  name: 'List',

  components: {
    ProductCard
  },

  props: {
    currency: String,
    default: 'VGTB'
  },

  data() {
    return {
      // Extract to vuex state
      // products: [],

      windowWidth: window.innerWidth,
      pricesMonitoringId: 0
    };
  },

  computed: {
    ...mapGetters(['products']),

    cardsWidth() {
      // I would implement this functional with css grid

      // width is a number and not reactive
      // let width = window.innerWidth;
      let count = 1;
      if (this.windowWidth > 840) {
        count = 3;
      } else if ((this.windowWidth > 420 && this.windowWidth < 840)) {
        count = 2;
      }

      return 100 / count;
    },
  },

  methods: {
    ...mapActions(['getProductsList', 'addProductToCart']),

    startPricesMonitoring() {
      const frequency = 2000;
      this.pricesMonitoringId = setInterval(this.getProductsList, frequency);
    },

    stopPricesMonitoring() {
      clearInterval(this.pricesMonitoringId);
    },

    // Extract to vuex actions
    // async getList() {
    //   let data = await this.$store.dispatch('getProductsList');

    //   this.products = data;
    // },

    addToCart({cartItem}) {
      this.addProductToCart(cartItem);
    },

    windowWidthHandler() {
      this.windowWidth = window.innerWidth;
    }
  },

  created() {
    this.startPricesMonitoring();
    window.addEventListener('resize', this.windowWidthHandler, { passive: true });
  },

  beforeDestroy() {
    this.stopPricesMonitoring();
    window.removeEventListener('resize', this.windowWidthHandler, { passive: true });
  }
};
</script>

<style>
.product-list {
  padding: 10px;
}
</style>
