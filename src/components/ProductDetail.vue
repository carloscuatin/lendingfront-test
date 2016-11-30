<template>
  <div :class="$style.container">
    <ProductHeader
      :id="productActivate.product_id"
      :togglePurchase="togglePurchase"
      :newPurchase="newPurchase"/>
    <div :class="$style.detail">
      <div :class="$style.empty" v-if="purchases.length === 0 && !newPurchase">
        Add a new purchase clicking the
        <i :class="$style.icon" class="material-icons">add</i>
        button
      </div>
      <NewPurchase
        v-else-if="newPurchase"
        :cancelNewPurchase="cancelNewPurchase" />
      <Purchase
        v-else
        v-for="purchase in purchases"
        :producActivate="producActivate"
        :purchase="purchase"
        :editPurchase="editPurchase"
        :clearPurchase="clearPurchase"/>
    </div>
    <ProductFooter/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductHeader from './ProductHeader';
import ProductFooter from './ProductFooter';
import Purchase from './Purchase';
import NewPurchase from './NewPurchase';

export default {
  name: 'ProducDetail',
  components: {
    ProductHeader,
    ProductFooter,
    Purchase,
    NewPurchase
  },
  created() {
    this.fetchData();
  },
  computed: mapState({
    purchases: state => state.purchases,
    productActivate: state => state.productActivate,
    newPurchase: state => state.newPurchase
  }),
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      this.$store.dispatch('GET_INVESTORS');
      this.$store.dispatch('GET_PURCHASES', this.$route.params.id);
    },
    togglePurchase() {
      this.$store.dispatch('SET_NEW_PURCHASE', true);
    },
    editPurchase(id) {
      console.log(id);
      // this.$store.dispatch('EDIT_PURCHASE', id);
    },
    clearPurchase(id) {
      this.$store.dispatch('DELETE_PURCHASE', id);
    },
    cancelNewPurchase() {
      this.$store.dispatch('SET_NEW_PURCHASE', false);
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
  padding: 0px 20px;
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
