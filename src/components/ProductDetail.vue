<template>
  <div :class="$style.container">
    <ProductHeader :id="id"/>
    test :3
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
      id: null
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
</style>
