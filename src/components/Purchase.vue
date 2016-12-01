<template>
  <div :class="$style.container" @mouseenter="changeDone" @mouseleave="changeFail">
    <div :class="$style.detail">
      <span>{{ purchase.investor_name }}</span>
      <span>${{ purchase.amount_to_sell }}</span>
      <span>{{ percentage }}%</span>
    </div>
    <div :class="$style.functions" v-if="activeEdit">
      <div :class="$style.edit" @click="handleEditPurchase(purchase.id)">
        <i class="material-icons">edit</i>
      </div>
      <div :class="$style.clear" @click="clearPurchase(purchase.id)">
        <i class="material-icons">clear</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Purchase',
  props: ['purchase', 'handleEditPurchase', 'clearPurchase'],
  data() {
    return {
      activeEdit: true,
      layer: `M 53 53 m -50, 53 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -${this.purchase.percentage},0`
    };
  },
  computed: {
    percentage() {
      return parseFloat(this.purchase.percentage.toFixed(1));
    }
  },
  methods: {
    changeDone() {
      this.activeEdit = true;
    },
    changeFail() {
      this.activeEdit = false;
    }
  }
};
</script>

<style module>
.container {
  height: 70px;
  margin: 0px -20px;
  display: flex;
  border-bottom: 1px solid #ededed;
}

.detail {
  width: 80%;
  height: 100%;
  padding: 0px 0px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.functions {
  width: calc(20% - 20px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.edit,
.clear {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #00a3ad;
}

.edit:hover,
.clear:hover {
  cursor: pointer;
}

.edit {
  color: #ffffff;
  background-color: #00a3ad;
}

.clear {
  color: #00a3ad;
}

.edit i,
.clear i {
  font-size: 20px;
}
</style>
