import { createLogger, createStore } from 'vuex';

import app from './modules/app';

const debug = import.meta.env.DEV;

const store = createStore({
  getters: {
    device: () => app.state.device,
  },
  modules: {
    app,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

export default store;
