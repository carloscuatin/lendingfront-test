<template>
  <h1 :class="$style.title">
    {{ text }}
  </h1>
</template>

<script>
export default {
  name: 'hero',
  data() {
    return {
      text: 'Advances for syndication'
    };
  }
};
</script>

<style module>
.title {
  color: #ffffff;
  margin: 0;
  padding-top: 20px;
  font-weight: lighter;
}
</style>
