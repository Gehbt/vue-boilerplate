import { createRouter, createWebHistory } from "vue-router";
import { routes, handleHotUpdate } from "vue-router/auto-routes";
import type { Router } from "vue-router";

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

// This will update routes at runtime without reloading the page
if (import.meta.hot && import.meta.env.MODE !== "production") {
  handleHotUpdate(router);
}
