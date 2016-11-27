<template>
  <router-link
    :to="{ name: 'product', params: { id: product.id }}"
    :class="$style.container"
    :active-class="$style.active">
    <div :class="$style.line">
      <div :class="$style.titles">
        Product ID
        <span :class="$style.type">Advance</span>
      </div>
      {{ product.id }} - {{ product.price }}
    </div>
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
  height: 80px;
  padding: 20px 0px 1px;
  color: #424b55;
  text-decoration: none;
  background-color: #fafafa;
}

.active {
  color: #ffffff;
  background-color: #00a3ad;
};

.line {
  height: 100%;
  margin: 0px 20px 0px;
  border-bottom: 1px solid #eaeaea;
}

.titles {
  display: flex;
  justify-content: space-between;
  color: #a5a5a5;
  font-size: 14px;
  font-weight: bold;
}

.type {
  color: #1bacb5;
}

.active .titles,
.active .type {
  color: #ffffff;
}
</style>
