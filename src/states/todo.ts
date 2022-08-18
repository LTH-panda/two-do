import { atom } from "recoil";

export type Todo = {
  id: string;
  title: string;
};
export const todoTodoList = atom<Todo[]>({
  key: "todoTodoList",
  default: [],
});
export const todoActionsSheet = atom<boolean>({
  key: "todoActionsSheet",
  default: false,
});
export const todoActionsSelected = atom<Todo>({
  key: "todoActionsSelected",
  default: undefined,
});
export const todoAddSheet = atom<boolean>({
  key: "todoAddSheet",
  default: false,
});
export const todoTab = atom<0 | 1>({
  key: "todoTab",
  default: 0,
});
