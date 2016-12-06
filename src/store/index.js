import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import { httpGet, httpPost, httpPut, httpDelete } from '../utils/fetch';

Vue.use(Vuex);

const initialState = {
  products: [],
  purchases: [],
  investors: [],
  productActivate: {},
  newPurchase: false,
  editPurchase: false,
  purchaseActivate: {},
  loading: true
};

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_PRODUCT_ACTIVATE(state, productId) {
    state.products.filter((product) => {
      if (product.id === parseInt(productId, 10)) {
        state.productActivate = product;
      }

      return false;
    });
  },
  SET_PRODUCT_ACTIVATE_FETCH(state, product) {
    state.productActivate = product;
  },
  SET_PURCHASES(state, purchases) {
    state.purchases = purchases;
  },
  SET_PURCHASE_ACTIVATE(state, purchaseId) {
    state.purchases.filter((purchase) => {
      if (purchase.id === purchaseId) {
        state.purchaseActivate = purchase;
      }
      return false;
    });
  },
  SET_INVESTORS(state, investors) {
    state.investors = investors;
  },
  ADD_PURCHASE(state, newPurchase) {
    state.purchases.push(newPurchase);
  },
  DELETE_PURCHASE(state, purchaseId) {
    state.purchases = state.purchases.filter(purchase => purchase.id !== purchaseId);
  },
  SET_NEW_PURCHASE(state, newState) {
    state.newPurchase = newState;
  },
  SET_EDIT_PURCHASE(state, newState) {
    state.editPurchase = newState;
  },
  SET_LOADING(state, newState) {
    state.loading = newState;
  }
};

const actions = {
  GET_PRODUCTS({ commit }) {
    httpGet('/products/')
      .then((response) => {
        commit('SET_PRODUCTS', response.results);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  GET_PURCHASES({ commit, dispatch }, productId) {
    dispatch('SET_LOADING', true);
    httpGet(`/purchases/?product__id=${productId}`)
      .then((response) => {
        commit('SET_PURCHASES', response.results);
        commit('SET_PRODUCT_ACTIVATE', productId);
        dispatch('SET_LOADING', false);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  GET_INVESTORS({ commit }) {
    httpGet('/investors/')
      .then((response) => {
        commit('SET_INVESTORS', response.results);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  ADD_PURCHASE({ commit, dispatch, state }, data) {
    httpPost('/purchases/', data)
      .then((response) => {
        commit('ADD_PURCHASE', response);
        dispatch('SET_NEW_PURCHASE', false);
        dispatch('SET_PRODUCT_ACTIVATE_FETCH');
      })
      .catch((error) => {
        console.error(error);
      });
  },
  EDIT_PURCHASE({ commit }, purchaseId) {
    commit('SET_PURCHASE_ACTIVATE', purchaseId);
  },
  EDIT_SAVE_PURCHASE({ dispatch, state }, data) {
    const { purchaseId, dataPurchase } = data;
    const productId = state.productActivate.id;
    httpPut(`/purchases/${purchaseId}/`, dataPurchase)
      .then(() => {
        dispatch('GET_PURCHASES', productId);
        dispatch('SET_EDIT_PURCHASE', false);
        dispatch('SET_PRODUCT_ACTIVATE_FETCH');
      })
      .catch((error) => {
        console.error(error);
      });
  },
  DELETE_PURCHASE({ commit, dispatch }, productId) {
    httpDelete(`/purchases/${productId}/`)
      .then(() => {
        commit('DELETE_PURCHASE', productId);
        dispatch('SET_PRODUCT_ACTIVATE_FETCH');
      })
      .catch((error) => {
        console.error(error);
      });
  },
  SET_NEW_PURCHASE({ commit }, state) {
    commit('SET_NEW_PURCHASE', state);
  },
  SET_EDIT_PURCHASE({ commit }, state) {
    commit('SET_EDIT_PURCHASE', state);
  },
  SET_PRODUCT_ACTIVATE_FETCH({ commit, state }) {
    const productId = state.productActivate.product_id;
    httpGet(`/products/${productId}/`)
      .then((response) => {
        commit('SET_PRODUCT_ACTIVATE_FETCH', response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  SET_LOADING({ commit }, state) {
    commit('SET_LOADING', state);
  }
};

export default new Vuex.Store({
  mutations,
  actions,
  state: initialState,
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
});
