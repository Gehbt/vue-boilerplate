import { resolve } from "node:path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import VueDevTools from "vite-plugin-vue-devtools";
import VueRouter from "unplugin-vue-router/vite";
import Checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      importMode: 'async',
      dts: "./src/typing/typed-router.d.ts",
      extensions: [".page.vue"],
    }),
    Vue(),
    VueJsx(),
    VueDevTools(),
    // Checker({
    //   vueTsc: true,
    //   typescript: true,
    // }),
  ],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "src"),
    },
  },
});
