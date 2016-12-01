<template>
  <div :class="$style.header">
    <button
      :class="$style.button"
      v-if="!newPurchase"
      @click="togglePurchase">
      <i class="material-icons">add</i>
    </button>
    <span :class="$style.id">Product ID {{ id }}</span>
    <div v-if="!newPurchase" :class="$style.menu">
      <span v-for="item in menu">{{ item }}</span>
    </div>
    <div v-else :class="$style.menu">
      Add new purchase
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductHeader',
  props: [
    'id',
    'togglePurchase',
    'newPurchase'
  ],
  data() {
    return {
      menu: [
        'Investor name',
        'Sold',
        '% Purchased'
      ]
    };
  }
};
</script>

<style module>
.header {
  position: relative;
  height: 159px;
  color: #ffffff;
  background-color: #00cfc9;
}

.button {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 30px;
  top: -30px;
  width: 60px;
  height: 60px;
  border: 0;
  border-radius: 50%;
  color: #ffffff;
  background-color: #ffad00;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.button:hover {
  cursor: pointer;
}

.id {
  position: relative;
  top: 10px;
  padding-left: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  font-weight: bold;
}

.menu {
  position: absolute;
  bottom: 15px;
  padding: 0px 20px;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
</style>
