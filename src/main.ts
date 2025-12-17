import "@picocss/pico/css/pico.css";
import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { PiniaColada } from "@pinia/colada";

import App from "./App.vue";
import { router } from "./router";
// import { VueQueryPlugin } from "@tanstack/vue-query";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(PiniaColada).use(router);

app.mount("#app");

router.isReady().then(() => {
  router.beforeEach((to, from) => {
    console.log("🧭", from.fullPath, "->", to.fullPath);
  });
});
