import { writable, readable, derived } from "svelte/store";

export const flowcharts = writable([]);

export const currentFlow = writable([]);

export const location = writable("");
