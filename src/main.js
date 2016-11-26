import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

Vue.use(VueRouter);

const Home = { template: '<div>home</div>' };
const Foo = { template: '<div>{{ $route.params.id }}</div>' };

// 3. Create the router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    {
      path: '/product/:id',
      name: 'product',
      component: Foo
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');
