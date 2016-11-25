<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <div class="center">
        <Hero />
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
        <Dashboard />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';

export default {
  name: 'app',
  components: {
    Navbar,
    Hero,
    Dashboard
  }
};
</script>

<style>
@import '~normalize.css/normalize.css';

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
