import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import { httpGet, httpDelete } from '../utils/fetch';

Vue.use(Vuex);

const initialState = {
  products: [],
  purchases: [],
  investors: [],
  productActivate: {}
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
  SET_PURCHASES(state, purchases) {
    state.purchases = purchases;
  },
  SET_INVESTORS(state, investors) {
    state.investors = investors;
  },
  ADD_PURCHASE(state) {
    const newNote = {
      text: 'New note',
      favorite: false
    };
    state.notes.push(newNote);
  },
  EDIT_PURCHASE(state, text) {
    state.activeNote.text = text;
  },
  DELETE_PURCHASE(state, purchaseId) {
    state.purchases = state.purchases.filter(purchase => purchase.id !== purchaseId);
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
  GET_PURCHASES({ commit }, productId) {
    httpGet(`/purchases/?product__id=${productId}`)
      .then((response) => {
        commit('SET_PURCHASES', response.results);
        commit('SET_PRODUCT_ACTIVATE', productId);
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
  DELETE_PURCHASE({ commit }, productId) {
    httpDelete('/purchases/', { productId })
      .then((response) => {
        commit('DELETE_PURCHASE', response.id);
      })
      .catch((error) => {
        console.error(error);
      });
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
