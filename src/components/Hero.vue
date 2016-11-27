<template>
  <h1 :class="$style.title">
    {{ text }}
  </h1>
</template>

<script>
export default {
  name: 'Hero',
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
  padding-top: 25px;
  font-weight: lighter;
}
</style>
