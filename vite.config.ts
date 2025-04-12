import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', {
        'naive-ui': [
          'useDialog',
          'useMessage',
          'useNotification',
          'useLoadingBar',
        ],
      }],
      dts: 'src/types/auto-imports.d.ts',
      dirs: ['./src/composables'],
      vueTemplate: true,
    }),
    Components({
      dts: 'src/types/components.d.ts',
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [NaiveUiResolver()],
    }),

  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    port: 8848,
    open: true,
  },
})
