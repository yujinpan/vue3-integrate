import { createStore } from 'vuex';

const appStore = createStore({
  state: {
    device: {
      version: 1,
    },
  },
  mutations: {},
});

export default appStore;
