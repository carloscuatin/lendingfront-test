<template>
  <div :class="$style.footer">
    Reamaining amount ${{ productActivate.amount_discount }} of ${{ productActivate.amount }}
  </div>
</template>

<script>
export default {
  name: 'ProductFooter',
  props: ['productActivate']
};
</script>

<style module>
.footer {
  height: 80px;
  color: #ffffff;
  padding: 10px 40px;
  background-color: #00a3ad;
}
</style>
