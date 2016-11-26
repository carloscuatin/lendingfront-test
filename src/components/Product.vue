<template>
  <router-link
    :to="{ name: 'product', params: { id: item.id }}"
    :class="$style.container">
    {{ item.id }} - {{ item.price }}
  </router-link>
</template>

<script>
export default {
  name: 'Product',
  props: ['item']
};
</script>

<style module>
.container {
  height: 100px;
  text-decoration: none;
  padding: 20px 20px 10px;
  background-color: #fafafa;
}

.container:hover {
  background-color: #00a3ad;
};
</style>
