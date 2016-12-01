<template>
  <div :class="$style.footer">
    Remaining amount ${{ productActivate.amount_discount }} of ${{ productActivate.amount }}
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
  display: flex;
  align-items: center;
  height: 80px;
  color: #ffffff;
  padding: 10px 40px;
  background-color: #00a3ad;
}
</style>
