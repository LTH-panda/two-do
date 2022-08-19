import { atom } from "recoil";
import { Todo } from "./add";

export type Plan = {
  due: number;
  todos: Todo[];
};

export const planPlan = atom<Plan>({
  key: "planPlan",
  default: undefined,
});

export const planPlayModal = atom<boolean>({
  key: "planPlayModal",
  default: false,
});

export const planPlay = atom<boolean>({
  key: "planPlay",
  default: false,
});

export const planPauseModal = atom<boolean>({
  key: "planPauseModal",
  default: false,
});

export const planCompleteAction = atom<boolean>({
  key: "planCompleteAction",
  default: false,
});

export const planTodoRandomSort = atom<Todo[]>({
  key: "planTodoRandomeSort",
  default: undefined,
});

export const planSelectedTodo = atom<string | undefined>({
  key: "planSelectedTodo",
  default: undefined,
});
