<template>
  <div :class="$style.container">
    <div :class="$style.detail">
      <div :class="$style.containerInput">
        <select :class="$style.select" v-model="newInvestor">
          <option value="0">Select investor</option>
          <option v-for="investor in investors" :value="investor.id" :disabled="investor.disabled">
            {{ investor.name }}
          </option>
        </select>
      </div>
      <div :class="$style.containerInput">
        <input :class="$style.input" v-model="amountSell" type="number" placeholder="Amount to sell">
      </div>
    </div>
    <div :class="$style.functions">
      <div :class="$style.save" @click="addNewPurchase">
        <i class="material-icons">save</i>
      </div>
      <div :class="$style.clear" @click="cancelNewPurchase">
        <i class="material-icons">clear</i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NewPurchase',
  props: ['investors', 'cancelNewPurchase'],
  data() {
    return {
      newInvestor: 0,
      amountSell: null
    };
  },
  computed: mapState({
    investors: state => state.investors,
    productActivate: state => state.productActivate
  }),
  methods: {
    addNewPurchase() {
      const data = {
        amount_to_sell: this.amountSell,
        investor: this.newInvestor,
        product: this.productActivate.id
      };
      this.$store.dispatch('ADD_PURCHASE', data);
    }
  }
};
</script>

<style module>
.container {
  height: 70px;
  margin: 0px -20px;
  display: flex;
  background-color: #fafafc;
  border-bottom: 1px solid #ededed;
}

.detail {
  width: 80%;
  height: 100%;
  padding: 0px 0px 0px 20px;
  display: flex;
  align-items: center;
}

.containerInput {
  width: 35%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.containerInput:first-child {
  margin-right: 50px;
}

.select,
.input {
  background-color: transparent;
  width: 100%;
  margin: 5px 0px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.26);
  border: none;
}

.functions {
  width: calc(20% - 20px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.save,
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

.save:hover,
.clear:hover {
  cursor: pointer;
}

.save {
  color: #ffffff;
  background-color: #00a3ad;
}

.clear {
  color: #00a3ad;
}

.save i,
.clear i {
  font-size: 20px;
}
</style>
