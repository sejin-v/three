import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Layouts from 'vite-plugin-vue-layouts';
import AutoImport from 'unplugin-auto-import/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import VueRouter from 'unplugin-vue-router/vite';
import Inspect from 'vite-plugin-inspect';
// https://vitejs.dev/config/
export default defineConfig({
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
            imports: ['vue', VueRouterAutoImports, 'vue/macros',],
            //  '@vueuse/head', '@vueuse/core'
            dts: 'src/auto-imports.d.ts',
            // dirs: ['src/composables/**', 'src/store', 'src/utils'],
            vueTemplate: true,
            // resolvers: [NaiveUiResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
