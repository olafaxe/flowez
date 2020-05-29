import { writable, readable, derived } from "svelte/store";

export const flowcharts = writable([]);

export const currentFlow = writable([]);

export const sortedFlow = writable([]);

export const location = writable("");

export const types = writable([
  "terminatorstart",
  "process",
  "decision",
  "terminatorend",
]);
