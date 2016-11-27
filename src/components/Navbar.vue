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
  position: fixed;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  background-color: #2e2e2e;
  box-shadow: inset 0 1px #fff, 0 1px 3px rgba(34,25,25,0.4);
}

img {
  height: 40px;
}
</style>
