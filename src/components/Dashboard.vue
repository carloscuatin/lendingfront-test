<template>
  <div :class="$style.container">
    <div :class="$style.sidebar">
      <span :class="$style.title">{{ title }}</span>
      <div :class="$style.items">
        <Product v-for="item in items" :item="item"></Product>
      </div>
    </div>
    <div>
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
      items: [
        {
          id: 1,
          price: '$2.700.800'
        },
        {
          id: 2,
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
  border: 1px solid #d5d5d8;
  border-top: 0;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1), 0 1px 6px 0 rgba(0,0,0,0.2);
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

.items {
  display: flex;
  flex-direction: column;
}
</style>
