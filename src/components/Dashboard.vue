<template>
  <div :class="$style.container">
    <div :class="$style.sidebar">
      <span :class="$style.title">{{ title }}</span>
      <div :class="$style.products">
        <Product v-for="product in products" :product="product"></Product>
      </div>
    </div>
    <div :class="$style.product">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Product from './Product';

export default {
  name: 'Dashboard',
  data() {
    return {
      products: [
        {
          id: 1,
          price: '$2.700.800'
        },
        {
          id: 2,
          price: '$2.700.800'
        },
        {
          id: 3,
          price: '$2.700.800'
        }
      ],
      title: 'Select a product to syndicate'
    };
  },
  components: {
    Product
  }
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
  background-color: #fafafa;
}

.title {
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 20px;
  font-size: 14px;
  color: #9e9e9e;
  letter-spacing: -0.5px;
  background-color: #f4f4f4;
}

.products {
  display: flex;
  flex-direction: column;
}

.product {
  width: 69%;
  box-shadow: -8px 0px 10px -3px rgba(0,0,0,0.2);
}
</style>
