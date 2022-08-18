import { atom } from "recoil";

export type Due = 10 | 30 | 60 | 1440;
export const addDue = atom<Due>({
  key: "addDue",
  default: undefined,
});

export const addTodoInput = atom<string>({
  key: "addTodoInput",
  default: "",
});
