import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import ProductDetail from './components/ProductDetail';

Vue.use(VueRouter, VueResource);

const Home = { template: '<div>home</div>' };

// 3. Create the router
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
