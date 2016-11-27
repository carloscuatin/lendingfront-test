import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';

Vue.use(VueRouter, VueResource);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductDetail
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');
