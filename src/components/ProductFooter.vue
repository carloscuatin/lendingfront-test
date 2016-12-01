<template>
  <div :class="$style.footer">
    Remaining amount ${{ producRemaining }} of ${{ productActivate.amount }}
    <div :class="$style.container">
      <div :class="$style.line" v-bind:style="{ width: `${productActivate.percentage}%` }"></div>
      <div :class="$style.lineOff"></div>
    </div>
    <div :class="$style.percentage">
      <span>{{ productActivate.percentage }}%</span>
      100%
    </div>
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
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  color: #ffffff;
  padding: 10px 40px;
  background-color: #00a3ad;
}

.container {
  margin-top: 3px;
  width: 100%;
  position: relative;
}

.line,
.lineOff {
  height: 5px;
  border-radius: 5px;
}

.line {
  position: absolute;
  background-color: #ffffff;
}

.lineOff {
  background-color: #80d1d6;
}

.percentage {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
</style>
