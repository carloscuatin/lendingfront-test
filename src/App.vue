<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <div class="center">
        <Hero/>
        <Dashboard/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Dashboard
  }
};
</script>

<style>
@import '~normalize.css/normalize.css';

* {
  outline: 0;
}

#app {
  font-family: 'Maven Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f9f9fc;
}

.container {
  padding-top: 60px;
  height: 155px;
  background-color: #00a3ad;
}

.center {
  width: 85%;
  margin: 0px auto;
}
</style>
