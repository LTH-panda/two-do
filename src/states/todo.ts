import { atom } from "recoil";

export const todoTodoList = atom<[]>({
  key: "todoTodoList",
  default: [],
});

export const todoActionsSheet = atom<boolean>({
  key: "todoActionsSheet",
  default: false,
});
