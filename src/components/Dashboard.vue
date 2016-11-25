<template>
  <div :class="$style.container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
    };
  }
};
</script>

<style module>
.container {
  border: 1px solid #d5d5d8;
  border-radius: 3px;
  background-color: #ffffff;
  margin-top: 20px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1), 0 1px 8px 0 rgba(0,0,0,0.2);
}
</style>
