<template>
  <div :class="$style.container">
    <div :class="$style.sidebar">
      <div v-if="newPurchase || editPurchase" :class="$style.active"></div>
      <span :class="$style.title">Select a product to syndicate</span>
      <div :class="$style.products">
        <Product v-for="product in products" :product="product"/>
      </div>
    </div>
    <div :class="$style.product">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Product from './Product';

export default {
  name: 'Dashboard',
  components: {
    Product
  },
  created() {
    this.$store.dispatch('GET_PRODUCTS');
  },
  computed: mapState({
    products: state => state.products,
    newPurchase: state => state.newPurchase,
    editPurchase: state => state.editPurchase
  })
};
</script>

<style module>
.container {
  display: flex;
  min-height: 150px;
  margin-top: 15px;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1), 0px 1px 6px 0px rgba(0,0,0,0.2);
}

.sidebar {
  width: 31%;
  position: relative;
  background-color: #fafafa;
}

.title {
  display: flex;
  align-items: center;
  height: 35px;
  padding: 0px 20px;
  font-size: 14px;
  color: #9e9e9e;
  letter-spacing: -0.5px;
  background-color: #f4f4f4;
}

.products {
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
}

.active {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
}

.product {
  width: 69%;
  min-height: 250px;
  z-index: 1;
  box-shadow: -8px 0px 10px -3px rgba(0,0,0,0.2);
}
</style>
