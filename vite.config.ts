import path from "node:path";
import { defineConfig } from "vite";
import * as compiler from "vue/compiler-sfc";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import VueDevTools from "vite-plugin-vue-devtools";
import VueRouter from "unplugin-vue-router/vite";
import Checker from "vite-plugin-checker";
import DevtoolsJson from "vite-plugin-devtools-json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    DevtoolsJson(),
    VueRouter({
      importMode: "async",
      logs: true,
      dts: "./src/typing/typed-router.d.ts",
      extensions: [".page.vue"],
      routesFolder: [
        // can add multiple routes folders
        {
          src: "src/pages",
        },
      ],
    }),
    Vue({
      compiler: {
        ...compiler,
      },
    }),
    VueJsx(),
    VueDevTools(),
    // Checker({
    //   vueTsc: true,
    //   typescript: true,
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  server: {
    port: Number(process.env.PORT || 7858),
    open: true,
  },
  build: {
    sourcemap: true,
  },
});
