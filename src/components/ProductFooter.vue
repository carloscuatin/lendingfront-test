<template>
  <div :class="$style.footer">
    Remaining amount ${{ producRemaining }} of ${{ productActivate.amount }}
  </div>
</template>

<script>
export default {
  name: 'ProductFooter',
  props: ['productActivate'],
  computed: {
    producRemaining() {
      return this.productActivate.amount - this.productActivate.amount_discount;
    }
  }
};
</script>

<style module>
.footer {
  display: flex;
  align-items: center;
  height: 80px;
  color: #ffffff;
  padding: 10px 40px;
  background-color: #00a3ad;
}
</style>
