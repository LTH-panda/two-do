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

export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};
export const addTodos = atom<Todo[]>({
  key: "addTodos",
  default: [],
});
