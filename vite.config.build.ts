import { defineConfig, mergeConfig } from "vite"
import viteConfig from "./vite.config"

export default mergeConfig(
  viteConfig,
  defineConfig({
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `js/main-[name]-[hash].js`,
          chunkFileNames(info_) {
            const pageReg = /\b\w+\.page/
            if ((pageReg).test(info_.name)) {
              return `js/pages/[name]-[hash].js`
            }

            return `js/chunk/[name]-[hash].js`
          },
          manualChunks: {
            vendor: ["vue", "vue-router", "pinia"]
          },
          assetFileNames(info_) {
            if (info_.name?.endsWith(".css")) {
              return `css/[name]-[hash].[ext]`
            }
            return "assets/[name]-[hash].[ext]"
          }
        }
      }
    }
  })
)