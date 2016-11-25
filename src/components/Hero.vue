<template>
  <div class="container">
    <h1>{{ text }}</h1>
  </div>
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
.container {
  height: 150px;
  background-color: #13939d;
}

h1 {
  color: #ffffff;
  margin: 0;
  font-weight: lighter;
}
</style>
