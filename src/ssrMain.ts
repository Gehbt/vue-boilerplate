import VueApp from "./App.vue";
import { createSSRApp } from "vue";
import type { App } from "vue";

// todo
export function createApp() {
  const app: App<Element> = createSSRApp(VueApp);
  return { app };
}
