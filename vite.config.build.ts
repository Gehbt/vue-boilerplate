import { defineConfig, mergeConfig } from "vite";
import viteConfig from "./vite.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `js/main-[name]-[hash].js`,
          chunkFileNames(preRenderedAsset) {
            const pageReg = /\b\w+\.page/;
            if ((pageReg).test(preRenderedAsset.name)) {
              return `js/pages/[name]-[hash].js`;
            }

            return `js/chunk/[name]-[hash].js`;
          },
          manualChunks: {
            vendor: ["vue", "vue-router", "pinia"],
          },
          assetFileNames(preRenderedAsset) {
            if (preRenderedAsset.name?.endsWith(".css")) {
              return `css/[name]-[hash].[ext]`;
            }
            return "assets/[name]-[hash].[ext]";
          },
        },
      },
    },
  }),
);
