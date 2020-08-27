import Vue from 'vue'
import Vuex from 'vuex'
import {
  Item,
  ItemState,
  ItemResponse
} from '@/models/item';
import axios from '@/services/items';

Vue.use(Vuex)

export default new Vuex.Store({
  state: new ItemState(),
  actions: {
    getItems({ commit }) {
      axios.getItems().then((response: ItemResponse) => {
        commit('setItems', response.data)
      })
    }
  },
  mutations: {
    setItems(state, data) {
      state.items = data.map((i: Item) => Object.assign({ checked: false }, i))
    }
  },
  getters: {
    items: (state: ItemState) => state.items,
  }
})
