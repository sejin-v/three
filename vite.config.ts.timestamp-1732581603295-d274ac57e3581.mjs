// vite.config.ts
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'file:///Users/sejinpark/workspace/vue_jj/node_modules/.pnpm/vite@5.3.3_@types+node@20.14.10_terser@5.36.0/node_modules/vite/dist/node/index.js';
import vue from 'file:///Users/sejinpark/workspace/vue_jj/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.3_@types+node@20.14.10_terser@5.36.0__vue@3.4.31_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs';
import Layouts from 'file:///Users/sejinpark/workspace/vue_jj/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.3.3_@types+node@20.14.10_terser@5.36.0__vue-router@4.5._mse2gyraesehqt3kstmonjvjyq/node_modules/vite-plugin-vue-layouts/dist/index.mjs';
import AutoImport from 'file:///Users/sejinpark/workspace/vue_jj/node_modules/.pnpm/unplugin-auto-import@0.18.5_rollup@4.18.1/node_modules/unplugin-auto-import/dist/vite.js';
import { VueRouterAutoImports } from 'file:///Users/sejinpark/workspace/vue_jj/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.18.1_vue-router@4.5.0_vue@3.4.31_typescript@5.4.5___vue@3.4.31_typescript@5.4.5_/node_modules/unplugin-vue-router/dist/index.js';
import VueRouter from 'file:///Users/sejinpark/workspace/vue_jj/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.18.1_vue-router@4.5.0_vue@3.4.31_typescript@5.4.5___vue@3.4.31_typescript@5.4.5_/node_modules/unplugin-vue-router/dist/vite.js';
import Inspect from 'file:///Users/sejinpark/workspace/vue_jj/node_modules/.pnpm/vite-plugin-inspect@0.8.8_rollup@4.18.1_vite@5.3.3_@types+node@20.14.10_terser@5.36.0_/node_modules/vite-plugin-inspect/dist/index.mjs';
var __vite_injected_original_import_meta_url =
  'file:///Users/sejinpark/workspace/vue_jj/vite.config.ts';
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    Layouts({
      layoutsDirs: 'src/layouts',
    }),
    Inspect(),
    VueRouter({
      routesFolder: [
        { src: 'src/pages', path: '' },
        // example page
        { src: 'src/examples', path: 'examples/' },
      ],
      // extensions: ['.vue', '.md'],
      // importMode: (filepath: string) => 'async',
      importMode: 'async',
    }),
    AutoImport({
      imports: ['vue', VueRouterAutoImports, 'vue/macros'],
      //  '@vueuse/head', '@vueuse/core'
      dts: 'src/auto-imports.d.ts',
      // dirs: ['src/composables/**', 'src/store', 'src/utils'],
      dirs: ['src/composables/**'],
      vueTemplate: true,
      // resolvers: [NaiveUiResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(
        new URL('./src', __vite_injected_original_import_meta_url)
      ),
    },
  },
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2VqaW5wYXJrL3dvcmtzcGFjZS92dWVfampcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9zZWppbnBhcmsvd29ya3NwYWNlL3Z1ZV9qai92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvc2VqaW5wYXJrL3dvcmtzcGFjZS92dWVfamovdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IHsgVnVlUm91dGVyQXV0b0ltcG9ydHMgfSBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyJ1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyL3ZpdGUnXG5pbXBvcnQgSW5zcGVjdCBmcm9tICd2aXRlLXBsdWdpbi1pbnNwZWN0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICBMYXlvdXRzKHtcbiAgICAgICAgbGF5b3V0c0RpcnM6ICdzcmMvbGF5b3V0cycsXG4gIH0pLFxuICBJbnNwZWN0KCksXG4gICBWdWVSb3V0ZXIoe1xuICAgICAgICByb3V0ZXNGb2xkZXI6IFtcbiAgICAgICAgICB7IHNyYzogJ3NyYy9wYWdlcycsIHBhdGg6ICcnIH0sXG4gICAgICAgICAgLy8gZXhhbXBsZSBwYWdlXG4gICAgICAgICAgeyBzcmM6ICdzcmMvZXhhbXBsZXMnLCBwYXRoOiAnZXhhbXBsZXMvJyB9LFxuICAgICAgICBdLFxuICAgICAgICAvLyBleHRlbnNpb25zOiBbJy52dWUnLCAnLm1kJ10sXG4gICAgICAgIC8vIGltcG9ydE1vZGU6IChmaWxlcGF0aDogc3RyaW5nKSA9PiAnYXN5bmMnLFxuICAgICAgICBpbXBvcnRNb2RlOiAnYXN5bmMnLFxuICAgICAgfSksXG4gICAgIEF1dG9JbXBvcnQoe1xuICAgICAgICBpbXBvcnRzOiBbJ3Z1ZScsIFZ1ZVJvdXRlckF1dG9JbXBvcnRzLCAndnVlL21hY3JvcycsXSxcbiAgICAgICAgLy8gICdAdnVldXNlL2hlYWQnLCAnQHZ1ZXVzZS9jb3JlJ1xuICAgICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnRzLmQudHMnLFxuICAgICAgICAvLyBkaXJzOiBbJ3NyYy9jb21wb3NhYmxlcy8qKicsICdzcmMvc3RvcmUnLCAnc3JjL3V0aWxzJ10sXG4gICAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgICAgICAvLyByZXNvbHZlcnM6IFtOYWl2ZVVpUmVzb2x2ZXIoKV0sXG4gICAgIH0pLFxuICAgICBcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVIsU0FBUyxlQUFlLFdBQVc7QUFFeFQsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLGVBQWU7QUFDdEIsT0FBTyxhQUFhO0FBUnNKLElBQU0sMkNBQTJDO0FBVzNOLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNGLGFBQWE7QUFBQSxJQUNuQixDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsSUFDUCxVQUFVO0FBQUEsTUFDTCxjQUFjO0FBQUEsUUFDWixFQUFFLEtBQUssYUFBYSxNQUFNLEdBQUc7QUFBQTtBQUFBLFFBRTdCLEVBQUUsS0FBSyxnQkFBZ0IsTUFBTSxZQUFZO0FBQUEsTUFDM0M7QUFBQTtBQUFBO0FBQUEsTUFHQSxZQUFZO0FBQUEsSUFDZCxDQUFDO0FBQUEsSUFDRixXQUFXO0FBQUEsTUFDUixTQUFTLENBQUMsT0FBTyxzQkFBc0IsWUFBYTtBQUFBO0FBQUEsTUFFcEQsS0FBSztBQUFBO0FBQUEsTUFFTCxhQUFhO0FBQUE7QUFBQSxJQUVoQixDQUFDO0FBQUEsRUFFSjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
