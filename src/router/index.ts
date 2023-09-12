import { createRouter, createWebHistory } from 'vue-router';

import Layout from '../layout/index.vue';
import dashboard from '@/router/modules/dashboard';

const subRoutes = [dashboard];

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: subRoutes[0].path,
      children: subRoutes,
    },
    {
      path: '/**',
      redirect: '/',
    },
  ],
});

export default router;
