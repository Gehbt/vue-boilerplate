import { defineConfig } from "vite";

export default defineConfig({
  root: "server",
  server: {
    middlewareMode: true,
    warmup: {
      ssrFiles: [],
    },
  },
});
