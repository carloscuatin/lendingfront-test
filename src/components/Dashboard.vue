<template>
  <div :class="$style.container">
    <div :class="$style.sidebar">
      <span :class="$style.title">{{ title }}</span>
      <div :class="$style.items">
        <div v-for="item in items">a</div>
      </div>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
      items: [1, 2],
      title: 'Select a product to syndicate'
    };
  }
};
</script>

<style module>
.container {
  display: flex;
  min-height: 150px;
  margin-top: 15px;
  border-radius: 3px;
  border: 1px solid #d5d5d8;
  border-top: 0;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1), 0 1px 6px 0 rgba(0,0,0,0.2);
}

.sidebar {
  width: 31%;
  background-color: #fafafa;
}

.title {
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 20px;
  font-size: 14px;
  color: #9e9e9e;
  letter-spacing: -0.5px;
  background-color: #f4f4f4;
}

.items {
  padding: 0 20px;
}
</style>
