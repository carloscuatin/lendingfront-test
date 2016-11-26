<template>
  <router-link
    :to="{ name: 'product', params: { id: product.id }}"
    :class="$style.container"
    :active-class="$style.active">
    {{ product.id }} - {{ product.price }}
  </router-link>
</template>

<script>
export default {
  name: 'Product',
  props: ['product']
};
</script>

<style module>
.container {
  height: 75px;
  color: #424b55;
  text-decoration: none;
  padding: 20px 20px 10px;
  background-color: #fafafa;
}

.active {
  color: #ffffff;
  background-color: #00a3ad;
};
</style>
