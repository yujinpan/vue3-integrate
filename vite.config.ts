import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import { resolveWithAlias } from 'path-ops';
import { defineConfig } from 'vite';

import pkg from './package.json';

const alias = {
  '@': resolve('src'),
};

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), vueJsx()],
  server: {
    proxy: {
      '/api': {
        target: 'http://test.com',
      },
    },
  },
  resolve: {
    alias,
    extensions: ['.vue', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // ignore external sass warnings for "10px / 2px"
        quietDeps: true,
        // resolve start path for "~", like: "~external/style/var.scss"
        importer: (url: string) => {
          return {
            file: resolveWithAlias(
              url.startsWith('~') ? url.slice(1) : url,
              alias,
            ),
          };
        },
      },
    },
  },
  define: {
    // define package build info, print them in console
    __BUILD__: JSON.stringify({
      name: pkg.name,
      version: pkg.version,
      dateTime: new Date().toLocaleString(),
    }),
  },
});
