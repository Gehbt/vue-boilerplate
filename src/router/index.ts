import { experimental_createRouter } from "vue-router/experimental";
import { resolver, handleHotUpdate } from "vue-router/auto-resolver";

import {
  createWebHistory,
} from "vue-router";

export const router = experimental_createRouter({
  history: createWebHistory(),
  resolver,
});

if (import.meta.hot) {
  handleHotUpdate(router);
}
