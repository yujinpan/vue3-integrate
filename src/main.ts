import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import './config';

// 样式
import './styles/index.scss';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
