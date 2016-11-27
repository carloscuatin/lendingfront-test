<template>
  <div :class="$style.container">
    Select a product from the list on the left
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style module>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #929292;
  font-size: 18px;
  font-weight: 500;
  height: 100%;
}
</style>
