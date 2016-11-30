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
import { mapState } from 'vuex';
import ProductHeader from './ProductHeader';
import ProductFooter from './ProductFooter';

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
      error: null
    };
  },
  created() {
    this.fetchData();
  },
  computed: mapState({
    purchases: state => state.purchases
  }),
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      this.$store.dispatch('GET_PURCHASES', this.$route.params.id);
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
