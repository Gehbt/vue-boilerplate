import { ref, computed, type ComputedRef, type Ref } from "vue";
import { defineStore, type StoreDefinition } from "pinia";
import type { UnwrapAll } from "./types";

declare namespace Count {
  type StateType = { count: Ref<number> };
  type GetterType = {
    doubleCount: ComputedRef<number>;
  };
  type ActionType = {
    increment: () => void;
  };
}

export const useCounterStore: StoreDefinition<
  "counter",
  UnwrapAll<Count.StateType>,
  Count.GetterType,
  Count.ActionType
> = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
