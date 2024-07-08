import type { UnwrapRef } from "vue";

export type UnwrapAll<SS> = { [K in keyof SS]: UnwrapRef<SS[K]> };
