<template>
  <div id="app">
    <Navbar />
    <Hero />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default {
  name: 'app',
  components: {
    Navbar,
    Hero
  }
};
</script>

<style src="normalize.css/normalize.css"></style>
<style>
#app {
  font-family: 'Maven Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
