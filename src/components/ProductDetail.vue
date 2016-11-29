<template>
  <div :class="$style.container">
    <ProductHeader
      :id="id"
      :togglePurchase="togglePurchase"
      :newPurchase="newPurchase"/>
    <div :class="$style.detail">
      <div :class="$style.empty" v-if="purchases.length === 0">
        Add a new purchase clicking the
        <i :class="$style.icon" class="material-icons">add</i>
        button
      </div>
      <div v-else>
        <div v-for="item in purchases">
          {{ item.investor_name }}
        </div>
      </div>
      <div v-if="newPurchase">
        New Purchase
      </div>
    </div>
    <ProductFooter/>
  </div>
</template>

<script>
import ProductHeader from './ProductHeader';
import ProductFooter from './ProductFooter';
import { httpGet } from '../utils/fetch';

export default {
  name: 'ProducDetail',
  components: {
    ProductHeader,
    ProductFooter
  },
  data() {
    return {
      id: null,
      newPurchase: false,
      purchases: [],
      error: null
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      httpGet(`/purchases/?product__id=${this.$route.params.id}`)
        .then((response) => {
          this.purchases = response.results;
        })
        .catch((error) => {
          this.error = error;
        });
    },
    togglePurchase() {
      this.newPurchase = true;
      this.$root.$emit('new-purchase', true);
    }
  }
};
</script>

<style module>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.detail {
  padding: 0 20px;
  height: 50%;
}

.empty {
  padding-top: 20px;
  text-align: center;
  color: #929292;
  font-size: 16px;
  font-weight: 500;
}

.icon {
  font-size: 10px;
  color: #ffffff;
  background-color: #757575;
  border-radius: 50%;
  padding: 2px;
}
</style>
