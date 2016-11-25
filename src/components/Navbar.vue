<template>
  <header :class="$style.navbar">
    <router-link to="/">
      <img src="../assets/logo.png">
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style module>
.navbar {
  background-color: #2e2e2e;
  padding: 10px 0;
  text-align: center;
}

img {
  height: 40px;
}
</style>
