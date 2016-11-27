<template>
  <div :class="$style.header">
    <button :class="$style.button">
      <i class="material-icons">add</i>
    </button>
    <span :class="$style.id">Product ID {{ id }}</span>
  </div>
</template>

<script>
export default {
  name: 'ProductHeader',
  props: ['id'],
  data() {
    return {
    };
  }
};
</script>

<style module>
.header {
  position: relative;
  height: 74px;
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
}

.id {
  top: 10px;
  position: relative;
  padding-left: 20px;
  padding-bottom: 2px;
  border-bottom: 1px solid #fff;
  font-weight: bold;
}
</style>
