<template>
  <div>
    {{ item.id }} - {{ item.price }}
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['item']
};
</script>

<style module>
</style>
