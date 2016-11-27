<template>
  <div :class="$style.container">
    <ProductHeader :id="id"/>
    <div :class="$style.detail">
      <div :class="$style.empty" v-if="empty">
        Add a new purchase clicking the
        <i :class="$style.icon" class="material-icons">add</i>
        button
      </div>
    </div>
    <ProductFooter/>
  </div>
</template>

<script>
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
      empty: true
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
      // const resource = this.$resource('someItem{/id}');
      this.id = this.$route.params.id;
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
