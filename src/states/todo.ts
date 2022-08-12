import { atom } from "recoil";

export const todoTodoList = atom<[]>({
  key: "todoTodoList",
  default: [],
});
export const todoActionsSheet = atom<boolean>({
  key: "todoActionsSheet",
  default: false,
});
export const todoAddSheet = atom<boolean>({
  key: "todoAddSheet",
  default: false,
});
export const todoTab = atom<0 | 1>({
  key: "todoTab",
  default: 0,
});
