<template>
  <h1>{{ text }}</h1>
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

<style scoped>
h1 {
  color: #ffffff;
  margin: 0;
  padding-top: 20px;
  font-weight: lighter;
}
</style>
