<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <div class="center">
        <Hero />
      </div>
    </div>
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

.container {
  height: 150px;
  background-color: #13939d;
}

.center {
  width: 80%;
  margin: 0 auto;
}
</style>
